
### EC2 :
1. Service about VM management (basically a VM)
2. its storage and resources (GB) may be adjusted

### Steps :
1. Give name (you can add additional tags for search/sort later)
2. Select a AMI (OS) Ex : amazon linux, ubuntu etc.
3. Select instance type (Storage, capacity)
4. Network Setting (For permissions of who can ssh)
5. Storage in GB
6. Scoll at least you can see USER DATA (which executes commands when instance runs)

Now you can just ssh connect to it assuming you have the .pem key in your downloads

Security groups : Security permissions (Firewall)
allowing port access

### AWS CLI :
Command line interface for these settings above

```bash
aws ec2 create-key-pair --key-name MyKeyPair --query 'KeyMaterial' --output text > MyKeyPair.pem
chmod 400 MyKeyPair.pem
```

```bash
SECURITY_GROUP_ID=$(aws ec2 create-security-group --group-name MySecurityGroup --description "Allow SSH from my IP" --query 'GroupId' --output text)

MY_IP=$(curl -s https://checkip.amazonaws.com)

aws ec2 authorize-security-group-ingress --group-id $SECURITY_GROUP_ID --protocol tcp --port 22 --cidr $MY_IP/32
```

```bash
aws ec2 run-instances --image-id ami-0c101f26f147fa7fd --count 1 --instance-type t2.micro --key-name MyKeyPair --security-group-ids $SECURITY_GROUP_ID --region us-east-1
```

### AWS EBS :
It is a storage for example images for a websites, Learn this how to partition a disk and mount it and shit

### Security Groups :
These are the rules which define port, IP's and etc access to that VM

### AWS Load Balancer (ELB) :
It is like a proxy which directs the frontend port to backend port where the web service yes hosted

### CLoudWatch :
Monitoring section displaying stats of instances (CPU untilisation etc..)

### S3:
Simple storage bucket for storage
You can host simple static websites here

### Route S3 Dashboard :
Its like Domain name mapping for instances (Instead of IP's you can use names)

### RDS (Database) :
Database like sql,oracle etc

### Auto scaling group :
It scales the instances depending on the users online, Uses Cloudwatch metrics to monitor and AMI templates to create EC2 instances




