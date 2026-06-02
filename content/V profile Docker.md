This mainly had 3 Dockerfiles cause 3 services needed some custom changes and rest 2 are fine with default images and 1 Docker-compose file to build all their containers :

app Dockerfile:
```Dockerfile
# First this builds the image and does these commands to make artifact

# Then it deletes the image but not the artifact which is used in the next stage

FROM maven:3.9.9-eclipse-temurin-21-jammy AS BUILD_IMAGE

RUN git clone https://github.com/hkhcoder/vprofile-project.git

RUN cd vprofile-project && git checkout containers && mvn install

  

#Starts a new image based on Tomcat 10 with JDK 21.

#This stage will only contain the final deployable app (not the source or build tools) to reduce the image size

FROM tomcat:10-jdk21

RUN rm -rf /usr/local/tomcat/webapps/*

COPY --from=BUILD_IMAGE vprofile-project/target/vprofile-v2.war /usr/local/tomcat/webapps/ROOT.war

EXPOSE 8080

CMD ["catalina.sh", "run"]
```

db Dockerfile:
```Dockerfile
FROM mysql:8.0.33

LABEL "Project" = "Vprofile"

LABEL "Author" = "sulaiman"

  

ENV MYSQL_ROOT_PASSWORD="vprodbpass"

ENV MYSQL_DATABASE="accounts"

  

# Anything file with extension .sh or .sql in /docker-entrypoint-initdb.d/ will be executed in alphabetical order at launch

ADD db_backup.sql /docker-entrypoint-initdb.d/db_bacup.sql
```

web Dockerfile:
```Dockerfile
FROM nginx

LABEL "Project"="Vprofile"

LABEL "Author"="sulaiman"

  

# Removes the default configuration

RUN rm -rf /etc/nginx/conf.d/default.conf

COPY nginvproapp.conf /etc/nginx/conf.d/default.conf

  
  

#For other services default images r fine
```

Dcoker-compose file :
```YAML
# This is a single file for building all containers

services:

	vprodb:
	
		build:
		
			context: ./Docker-files/db
		
		image: vprocontainers/vprofiledb
		
		container_name: vprodb
		
		ports:
		
			- "3306:3306"
		
		volumes:
		
			- vprodbdata:/var/lib/mysql
		
		environment:
		
			- MYSQL_ROOT_PASSWORD=vprodbpass
		
	  
	
	vprocache01:
	
		image: memcached
		
		container_name: vprocache01
		
		ports:
		
			- "11211:11211"
	
	  
	
	vpromq01:
	
		image: rabbitmq
		
		ports:
		
			- "5672:5672"
		
		environment:
		
			- RABBITMQ_DEFAULT_USER=guest
			
			- RABBITMQ_DEFAULT_PASS=guest
		
	  
	
	vproapp:
	
		build:
		
			context: ./Docker-files/app
		
		image: vprocontainers/vprofileapp
		
		container_name: vproapp
		
		ports:
		
			- "8080:8080"
		
		volumes:
		
			- vproappdata:/usr/local/tomcat/webapps
		
	  
	  
	
	vproweb:
	
		build:
		
			context: ./Docker-files/web
		
		image: vprocontainers/vprofileweb
		
		container_name: vproweb
		
		ports:
		
			- "80:80"

  
  
  

volumes:

	vprodbdata : {}
	
	vproappdata: {}
```