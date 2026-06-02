#### Services :
Elastic Beenstalk --> Instead of EC2, autoscalling instance to run tomcat frontend
ELB in beenstalk --> instead of ELB
RDS --> for Database
Active MQ --> instead of Rabbit MQ
Elastic cache --> instead of Memcached
Route 53
Cloudfront --> Content delivery network

#### Architecture diagram :

![[Pasted image 20250825115648.png]]

#### Steps :
##### Security groups :

First we have the backend SG for all backend services ie RDS, Active MQ, elastic cache etc. set thier inbound rules to `All traffic from that own SG`

##### RDS :
To change the configuration of a RDS first create a __parameter group__ with desired configurations and then make.a RDS with that parameter group selected

After creating parameter group create __DB subnet group__ selecting your VPC

now create a RDS with everything (we used SQL 8.0.39)

##### Elasti cache :
Create a Parameter group first (We used memecached 1.6)
Also create a Subnet Group
Now create a Elasti-cache 

##### Amazon MQ :
Create a Single intance MQ with rabbitMQ selected 
Give appropriate username and password (needs to be updated in .properties)
Give correct Security Group 
Deployment time takes very long 

##### Initializing RDS DB :
Create a EC2 instance in the same VPC to ssh into the DB for that :
First download essentials :
```shell
sudo apt install mysql-client git -y
```

Also make sure the SG of this instance is allowed to access SG of SQL

Now clone the source code :
```shell
git clone https://hkhcoder/vprofile-project.git
cd vrprofile-project
git checkout awsrefactor //To change branch
ls src/main/resources/    // There must be a db_backup.sql file present
```

After that get Endpoint, Username and password of your DB 
```shell
mysql -h (Endpoint) -u (username) -p(password) accounts     //To to accounts section
```

Now initialize the DB with :
```shell
mysql -h main-db-sql.cjw00e0siue5.us-east-2.rds.amazonaws.com -u admin -p2BKJPjwjLiEA4msPWi1a accounts < src/main/resources/db_backup.sql
```

log back in DB and do
`show tables;`
you must see all tables created

Now you can delete the instance

##### Elastic Beenstalk :
First create a IAM role with these specific 4 policies :
__AWSElasticBeanstalk - AdministratorAccess, CustomPlatformEC2....., RoleSNS, Webtier__
After creating this role go and create ElasticBeanStalk with IAM role, Security pair, but for now leave SG blank with all those headache settings
The best part about beanstalk is its __rollling requirements__ for auto-scalling (learn)

After doing that you will have 2 instances and 1 auto-scalling groups created and running

Also get the new instances SG and add it to the __backend SG__ allowing all traffic

##### Building artifact :
First get all Endpoints of RDS, Amazon MQ, ElastiCache
get usernames and password of RDS and Amazon MQ
Now clone source code in your laptop and switch the Branch 
Now Change the __src/main/resources/apllication.properties__ file with your all these details 

DB01 --> Endpoint of RDS
RMQ --> Endpoint of MQ
MC --> Endpoint of elasti-cache

and thier respective usernames and passwords

after that do `mvn install` and build the artifact
after the artifact (.war) has been build simply upload it in the __Beanstalk Environment__ and deploy











