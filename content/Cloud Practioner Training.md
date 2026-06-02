AWS is pay-for what you need :
# IAS
you only pay for running servers (not idle) and expand or reduce servers as you need

Cloud computing : It is the on demand IT services provided through internet for anyone with pay-as-you go pricing

types of deployment :
Cloud : deployment fully on cloud (all resources used of cloud)
On-premise : YOU have to maintain infra and services hosted locally
Hybrid : Use of both

Also they are in regional chains so if natural disaster brings a server down thier are other servers in other regions

#### Pricing :
![[Pricing.png]]
#### Auto-scalling : Automatically adjusts your machines based on demand 

[![What is Amazon EC2 Auto Scaling? - Amazon EC2 Auto Scaling](https://docs.aws.amazon.com/images/autoscaling/ec2/userguide/images/asg-basic-arch.png)

#### Elastic load balancer : Distributes traffic evenly to all machines running like this :
[![AWS ELB - The Complete Guide](https://cdn.prod.website-files.com/63403546259748be2de2e194/652417b49107f2736cbde1e9_955WhhHQqiQ0xT3-zsSMu6hnu28C8C4oz0w0ELkaowkVDkxU7CSHedaEpaWAfa1G6VW_bR9j1zkjpFg1EuRJrCKkWOwj6S_58YUjerBk9K9TDOfis0PffG4UD_xnQFZek4p2yff8e1aN6YBmJih4yjk.gif)

#### Amazon SQS (queing) :
In case of a losely pack system if a server fails then instead of the whole system stopping the requests are queid in SQS and when system comes back online then the messages are send without any loss of requests (learn about this tho)

#### Amazon SNS :
send for sending particular notifications to users (Based on what type of notification they have chosen to recieve)


#### AWS lambda :
It is a serverless compute option with minimal effort (Just put your code it and AWS manages everything else)


#### AWS fargate :
Instead of making a EC2 instance and deploying a container there (YOU will have to manage the container manually), deploy it directly to fargate with more efficiency and control

#### AWS Beenstalk : Provides an automated environment to deploy web applications (Node.js, Python, Java, etc.), focus is code not infra

#### AWS ECR :
A container image storing registry

#### AWS edge server :
They are located outside availability zones and used to cache data (images, etc..) decreasing latency between servers


## Networking :
#### AWS VPC :
Can create public and private subnets to allow/restrict internet access

![[AWS VPC.png]]
![[AWS VPC 3.png]]


#### AWS client VPN : basically a VPN with subnet of VPC, helping remote access as if you are inside their network, the speed here depends on your internet connection so it is mostly for small setups/connections

#### AWS Direct connect : AWS solution which is better stable, fast and more secure connection than VPN


![[AWS VPC 2.png]]



#### Network ACL : checks every packet for set rules (both entrance and exit) (stateless), mostly for subnet rules

#### Security group : Checks only incoming traffic never the outgoing (state), mostly for instance rules
[![Difference between Security Group and Network ACL in AWS - GeeksforGeeks](https://media.geeksforgeeks.org/wp-content/uploads/20240514172628/aws-security-groups.webp)


#### AWS route 53 : Amazon's DNS server, They are responsible for routing based on location to reduce latency

![[AWS VPC 4.png]]



## Storage :
The default storage is the Amazon EC2 instance storage which has highest I/O performance but is erased when instance is restarted

#### Block storage : data stored in different blocks, used for accessing files changed multiple times (don't need to update full storage for a change) Ex : __*Amazon EBS

#### Object storage : data stored in an object, used for files not changed multiple times (need to update full object) Ex : **_Amazon S3 bucket

#### Files storage : Hierarchy stored like files iykyk Ex : __*Amazon EFS (EFS has linux file system)

#### Amazon Data Lifecycle Manager : Automates creating/modifying/managing snapshots of the storage 


#### Types of S3 buckets : 1. Standard (frequent access) ............... 6. Glacier (rarely accessed)
- If your data needs to be frequently accessed at start but then gradually needs lesser access then use __*AWS S3 lifecycle
- If you want to automate this data movement use __*S3 Intelligent-Tiering 

#### Amazon FSx : retains storage properties bases on a specific file systems (Ex : windows, Linux, etc.)

#### Amazon Storage gateways : Use this if you want to store data on-premise, but back it up just in case on cloud

**Note : EBS more suited for very rapid read&write processes Ex : in databases they do faster than S3 buckets**

#### Uses cases for each storage class :
- S3 --> For Web assets, Backups
- EBS -> Instances, Databases
- EFS -> huge access around the globe, Hosting huge photos and videos



## Database (AWS RDS):
one of the features of RDS is multi-regional deployment for easy disaster recovery 

#### AWS DMS : AWS tool which helps in database movement of on-premise to cloud

#### AWS aurora : Fully managed Database by AWS (supports Mysql & Postrgres), dosen't auto-scale

#### AWS DynamoDB : No-SQL database which auto-scales

*__Note : RDS is relational and DynamoDB is non-relational DB's*


#### AWS Elasticache : A AWS cache DB system used for displaying info frequently accessed, it reduces latency, strain etc.
![[AWS DB.png]]


#### AWS neptune : A DB which shows stats in graph form, Neptune is optimized for storing and querying highly connected data with millisecond latency.

#### AWS DocumentDB : if your DB is too complex to be shown in simple rows and columns use this (Uses MongoDB)

#### AWS Backup : AWS way of Fragmented backup approaches across different AWS services



## AI/ML :

**_Foundational Model (FM) is a scaled down version of LLM

### Tier 1 : AI
Pre built AI tools by AWS you can use 
Ex: 
- Polly :  converts text into lifelike speech
- Transcribe :  converts speech into text
- Translate : Translates languages
- Textract : detects and extracts typed and handwritten text found in documents, forms, etc.
- Lex : adds voice and text conversational interfaces to your applications uses NLP for lifelike convo

### Tier 2 : ML
YOU can train your AI model here without worrying about infra 
Ex : Amazon SageMakerAI


### Tier 3: ML frameworks and infrastructure
Your custom AI and training with architecture

#### Amazon SageMaker JumpStart : AWS tool which helps in your ML training your model

#### Amazon Bedrock : AWS tool which helps loading a FM of claude, stable diffusion, etc. to train it

#### Amazon Q Developer : provides code recommendations to accelerate development for all coding languages 

#### Amazon Q Business : AI for helping you with your business with max security (looks through your repos etc)

#### Processes of taking data : The ETL method 
1. _E_ xtract the data from various sources and store it.
    
2. _T_ ransform it into a consistent, usable format for downstream tools to consume.
    
3. _L_ oad it into a destination system, like a data warehouse or analytics platform.

#### Data Pipeline :
1. Data ingestion : moving data from source systems into your chosen storage solution Ex : _Amazon Kinesis Data Streams, Amazon Data Firehose
2. Data storage : Storing your data Ex : _S3_ (for mass data dump), _Redshift_ (For organized data storage)
3. Data cataloging : Adding metadata to ur data Ex : _AWS Glue Data Catalog_
4. Data processing : Data processing services clean and transform your data so it's ready to be analyzed. Ex : _AWS Glue, Amazon EMR
5. Data Visualization : Final output to be visualized. Ex : _Amazon Athena_ (via SQL queries), _Amazon QuickSight_ (Graphically)


## Security :

creating IAM users whose perms can be managed by root user
IAM can be grouped to _Groups_ and many IAM perms can be managed by grouping

#### IAM Roles : These are temporary perms given to the IAM users

#### IAM Policy : These are the Json based rules to allow/deny perms

#### IAM Identity Center : Is designed to help organizations implement single sign-on for AWS resources

--------------------
### For Protecting against DDOS attacks :

#### AWS shield : Protects automatically from DDOS (get shield+ for better protection)

#### AWS ELB

#### AWS security groups

#### AWS shield : Protects learns from trends of DDOS attacks

#### AWS WAF : protects your web app from DDOS attacks
-- ------------------------------------------------------------------------------------- --
#### AWS KMS : Key manager for encryption and decryption

#### AWS ACM : Certificate management for SSL and TSL

#### Amazon Inspector : Runs scans and checks for instances etc. for vulnerabilities

#### Amazon GuardDuty : scans Traffic inside your infra

#### Amazon Detective : Gives Visualizations of all security alerts till now

#### Security Hub : brings multiple security services together into a single place and format


## Monitoring, Compliance & Governance:

#### Amazon Cloudwatch : A tool to monitor all the stats with things like :
- Cloudwatch Dashboard 
- Cloudwatch Logs
- Cloudwatch alarms
- Cloudwatch metrics

#### Amazon Cloudtrail : Its a Audit log which logs every single API request to AWS (can be very simple and single changes)

#### AWS Artifact : A tool which checks your rules/regulations of your architecture based on government policies in that region

#### AWS Config : It assess, audit, and evaluate the configurations of your AWS resources to your company standards gives live updates

#### AWS Audit Manager : helps in generating proof that you are maintaining compliance policies

#### AWS Organizations : A service to manage your multiple organization accounts (Account for Ex : developers, Devops, etc..)

#### AWS License Manager : A service that helps you manage your software licenses and fine-tune your licensing costs.

####  AWS Control Tower : A service you can use to enforce and manage governance rules for security also manages OU (Organizaitonal Units)

#### AWS Health : A tool to view account-specific health information

#### Trusted Advisor : A tool which scans and helps in checking 
- Security
- Cost optimization
- Service limit
- Fault tolerance


## Pricing :
  
_Although pricing factors into multiple service categories, the primary driving factors of cost are __compute__ , __storage__, and __Outbound data transfer. 

#### AWS organizations : can help monitor multiple accounts billings

#### AWS Billing and Cost Management dashboard : Gives you a general overview of all billings

#### AWS Budgets : YOU can set up estimated budgets for your service by tags and can even set up alerts

#### Types of AWS support :
![[AWS support1.png]]


#### AWS Marketplace : you can use thisto find, test, and buy 3rd party software that runs on AWS


#### The AWS Partner Network (APN) : A global community that uses AWS technologies, programs, expertise, and tools to build solutions and services for customers


## Migration :
#### Migration Evaluator : Pre-checks and estimates costs for migration

#### AWS migration hub : A central place to see all migration tasks 

#### AWS SCT : Helps in custom type of database for your database migration

#### AWS snow family : For offline migration

#### AWS Data Sync : Syncs data

#### AWS Transfer family : Transferring FTP files

![[AWS Migration.png]]





#### The AWS CAF : A framework that brings AWS experience and best practices to companies preparing to migrate to the AWS Cloud with different job perspective (Ex : devops, developer, HR, etc.)


## Architecture :
#### AWS code build : A CI tool fro compiling source code

#### AWS CodePipeline : fully managed CI/CD tool

#### AWS X-ray : Debugging tool for visualizing errors

#### AWS AppSync : A GrapghQL, connects backend to frontend 

#### AWS Amplify : used to add features like authentication, API's, storage etc in an web app

#### AWS connect : For customer service

#### AWS SES : An email provider for high volume email sending/recieving

#### Amazon Appstream 2.0 : Application streaming SAAS

#### AWS well architected Solutions : A tool which scans your account for suggestions/report on these pillars :
![[AWS architecture.png]]


























