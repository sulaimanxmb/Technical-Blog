## Simple web app with AWS :
### Services :
1. EC2 Instances
2. ELB
3. Route 53 (For mapping backend names with IP for Tomcat)
4. S3 bucket (we push artifact here from CLI and then retrieve it from bucket, Artifact --> Bucket --> Tomcat EC2)
5. AWS certificate manager (for https)
6. Auto scaling group on Tomcat 

### Flow :

User --> Godaddy Domain name --> ELB --> Tomcat EC2 with S3 connected --> Backend (EC2 with memechache, rabbitmq and mysql)

#### Steps :
##### Security groups :
3 security groups in total :
1 for ELB to allow all traffic on https 
1 for Tomcat to accept traffic only on 8080 from ELB and port 22 ssh for us
1 for backend servers to accept from tomcat with their port 3306 (mysql), 11211 (memcache), 5672 (rabbitmq) and port 22 ssh for us

Note : The backend interacts within itself sometimes to allow it always add :
allow all traffic within that SG 

##### Key-pair :
Create a .pem key pair for connecting to instances securely also make sure to remove permission from the `key.pem` file by chmod 600 key.pem

##### Instances :
4 instances in total :
1 for SQL (Amazon linux OS)
1 for Memecache (Amazon linux OS)
1 for Rabbitmq (Amazon linux OS)
1 for Tomcat (Ubuntu)

Set them up with correct NAME, SG, Key-pairs, OS and setup script in github

After setup ssh into them and check by `sudo systemctl status (mariadb, rabbitmq-server, memcached, tomcat10)`


##### Route 53 :
In source code of Tomcat service we can provide the IP's of backend machines (mysql, memcache, rabbitmq) but generally giving a name like DB01, DB02 or DB03 is considered better, to resolve machine IP to names we use Route 53 

Provide Domain name because at end it should be like this : __db01.domain.com__, __mq01.domain.com__, __mc01.domain.com__ 

also use __A record type__ mapping to map Names to IP addresses

Here we are using DNS routing internally in our VPC so we create a __Hosted Zone__ and redirect The name of your machine to __Private IP__ of the server
This is my Setting :
db01 --> Sql server private IP
mc01 --> Memcache private IP
rmq01 --> RabbitMQ private IP


##### S3 :
Now build the artifact with `mvn install` 
To push a artifact (vprofile-v2.war) into S3 via CLI we first configure our Terminal with a AWS IAM account

- first create a IAM user with S3 full access permission
- Then to to that user and generate security keys (Access Key and Secret Key) and Download it as a .csv file
- then do these commands :
```shell
aws configure
(Give access key)
(Give Secret key)
(Give region)
(Give ouput format as JSON)
```
After configuration copy your artifact into S3 bucket
with :
```shell
aws s3 cp artifact.war s3://(bucket-name)
```


For the tomcat EC2 instance to access S3 bucket generate a __IAM Roles with S3-full-access__ permission and give it to the EC2 instance

Now to copy your artifact into your instance ssh into that and run :
```shell
aws s3 cp s3://(bucket name)/(artifact) (Destination in machine)
#Example :
aws s3 cp s3://bucket148166/vprofile-v2.war /tmp/
```

Stop the current running tomcat service and remove the default ROOT artifact folder there by :
```bash
sudo systemctl stop tomcat10
rm -rf /var/lib/tomcat10/webapps/ROOT/
cp /tmp/vprofile-v2.war /var/lib/tomcat10/webapps/ROOT.war
sudo systemctl start tomcat10
```
After starting the service, tomcat will extract the .war file and run your app

##### Load Balancer :
First create a __Target Group of instances__ for Tomcat instance

Then create a load balancer with proper VPC, SG and port forwarding from 80 http --> Target group 8080

Then after Load balancer is created simply open browser and go to the __Load Balancer Endpoint__ 






