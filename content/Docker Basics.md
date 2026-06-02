To run Micro services for a web app best way is docker
![The Benefits and Challenges of Containerized Microservices - Hashed Out by  The SSL Store™](https://www.thesslstore.com/blog/wp-content/uploads/2022/03/containerized-microservices-example-diagram.png)

See the images available in [hub.docker.com](https://hub.docker.com)
find docker images in other place also like GCR and amazon ACR

#### Commands :

___docker inspect (ID)___ - *Gives container details*

___docker images___ - *lists all images present in the machine*

___docker ps___ - *gives the status of all running containers*

___docker ps -a___ - *to see all images*

___docker pull (image name)___ - *to pull a image from hub*

___docker pull (image name):(tag)___ - *to pull a specific image from hub*

___docker run (image name)___- *to start the container*

___docker stop (container ID)___ - *to stop the container*


Ex :
```bash
docker run --name (name of container) -p 4040:80 -d nginx 
```
to access enter : http:(IP):4000

here --name is the name of container you give

-d means it runs in background

-p (Your port):(Service port) - Usually this container is running in Private network so you can't access it directly so therefore you give your port first and then the service defined port
So at access it we need to enter localhost:4000 

### Removing image :
First you need to stop and remove container by 
docker rm (container ID) 
then only i can remove image by 
docker rmi (Image ID)

### For DVWA :
To host DVWA in docker do :
```shell
docker run --rm -it -p 80:80 vulnerables/web-dvwa
```
here --rm makes sure when you Control+C the container deletes itself
-it opens a interactive shell (showing logs)
### To check errors :
do 
docker logs

### Docker inspect :
if we run 
docker inspect 
we get container details in JSON
like :
"Entry Point" - Runs this script as soon as container is initialized
"CMD" - Runs these commands
"Volume Binding" - Specifies the default volume path
"Port Binding" - specifies default port 
"IP address"

### Docker Volumes :
A volume is a external storage for containers so when you restart a container it keeps still retrieves all data from volumes
Ex :
```bash
docker run --name (name) -d -p 3000:3306 -e MYSQL_ROOT_PASSWORD=password 
-v /your/path/to/store:/var/lib/mysql mysql
```

-v is for volumes
-e was for env variables

So after deleting the container re-run this command and you will have all data back

### Docker Shell :
To start a shell interface with the container we use

```bash
docker exec -it (container ID) /bin/bash
```

### Dockerfile :
This is used for creating custom docker images
Ex : to host a website:
```Dockerfile
FROM ubuntu:latest     
#base image

LABEL "Authur"="MEMEMEME"     
#simply a label

ENV DEBIAN_FRONTEND=nointeractive    
#This makes the docker non-#interactive and is better to use this always

RUN apt update && apt install apache2 -y    
#Command to run at startup

CMD ["/usr/sbin/apache2ctl","-D", "FOREGROUND"]  
#this is basically #systemctl start but this command dosen't work directly in docker so we use binary use full path tho

ENTRYPOINT ["echo"] 
#This runns echo and then you have to give argument in the docker build command Ex : docker build -t (name) hello 

EXPOSE 80   
#Which port to be expossed

WORKDIR /var/ww/html     
#When you run any -lt shell command it starts from this directory

ADD finance.tar.gz /var/www/html 
#adding files form your computer also unarchives the file or
COPY finance.tar.gz /var/www/html //This simply copy pastes there

```
After writing Dockerfile being in the same directory do :
```bash
docker build -t (name) . # . means Dockerfile path
```
this creates the image 
now build a container
```bash
docker run --name (name) -p 4000:80 -d (image name)
```


### Docker-Compose :
Used to manage multiple containers in YAML files :
`Note : you must have Dockerfile`

```yaml
version: "3.8"

services:
  apache:
    build: .
    ports:
      - "8080:80"         # Expose to host on port 8080
    container_name: apache-finance
    stdin_open: true      # Optional if you want interactive
    tty: true             # Optional for debugging
```

### Docker Cleanup :
here are commands to clean all space after everything
```zsh
docker system prune -a
docker volume ls --> docker rm (Volume name)
docker volume prune

```




