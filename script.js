document.addEventListener('DOMContentLoaded', () => {
    const startScreen = document.getElementById('start-screen');
    const quiz = document.getElementById('quiz');
    const resultsScreen = document.getElementById('results-screen');
    const questionContainer = document.getElementById('question-container');
    const optionsContainer = document.getElementById('options-container');
    const nextBtn = document.getElementById('next-btn');
    const result = document.getElementById('result');
    const scoreDisplay = document.getElementById('score');
    const questionCountInput = document.getElementById('question-count');
    const startBtn = document.getElementById('start-btn');
    const restartBtn = document.getElementById('restart-btn');
    const finalScore = document.getElementById('final-score');
    const categoryResults = document.getElementById('category-results');

    const questions = [
        {"id": 1, "category": "Analytics", "question": "You need to run SQL queries on data stored in S3 without managing servers. Which service should you use?", "options": ["Amazon S3", "Amazon Athena", "AWS Lambda", "Amazon EC2"], "answer": "Amazon Athena"},
        {"id": 2, "category": "Analytics", "question": "A company wants to access weather data from a third-party provider in AWS. Which service enables this?", "options": ["AWS Data Exchange", "Amazon EMR", "AWS Glue", "Amazon Kinesis"], "answer": "AWS Data Exchange"},
        {"id": 3, "category": "Analytics", "question": "Which service should you use to process massive datasets using Apache Spark?", "options": ["Amazon Athena", "Amazon EMR", "AWS Glue", "Amazon OpenSearch Service"], "answer": "Amazon EMR"},
        {"id": 4, "category": "Analytics", "question": "You need to extract, transform, and load data from multiple sources into a data lake. Which service is best?", "options": ["Amazon EMR", "AWS Glue", "Amazon Kinesis", "Amazon QuickSight"], "answer": "AWS Glue"},
        {"id": 5, "category": "Analytics", "question": "A company needs to process real-time clickstream data from a website. Which service is ideal?", "options": ["Amazon Kinesis", "Amazon MSK", "Amazon S3", "AWS Glue"], "answer": "Amazon Kinesis"},
        {"id": 6, "category": "Analytics", "question": "Your application uses Apache Kafka for streaming. Which AWS service provides a managed Kafka environment?", "options": ["Amazon Kinesis", "Amazon MSK", "Amazon OpenSearch Service", "Amazon Redshift"], "answer": "Amazon Managed Streaming for Apache Kafka (Amazon MSK)"},
        {"id": 7, "category": "Analytics", "question": "Which service should you use to analyze and visualize log data from applications?", "options": ["Amazon QuickSight", "Amazon OpenSearch Service", "Amazon Athena", "Amazon Redshift"], "answer": "Amazon OpenSearch Service"},
        {"id": 8, "category": "Analytics", "question": "A team needs to create interactive dashboards for business metrics. Which service should they use?", "options": ["Amazon OpenSearch Service", "Amazon QuickSight", "Amazon EMR", "AWS Glue"], "answer": "Amazon QuickSight"},
        {"id": 9, "category": "Analytics", "question": "Which service is best for running complex SQL queries on a petabyte-scale data warehouse?", "options": ["Amazon Athena", "Amazon Redshift", "Amazon S3", "AWS Data Exchange"], "answer": "Amazon Redshift"},
        {"id": 10, "category": "Application Integration", "question": "You need to trigger a Lambda function when an S3 bucket is updated. Which service facilitates this?", "options": ["Amazon EventBridge", "Amazon SNS", "Amazon SQS", "AWS Step Functions"], "answer": "Amazon EventBridge"},
        {"id": 11, "category": "Application Integration", "question": "A company wants to send email notifications to multiple subscribers when an event occurs. Which service is best?", "options": ["Amazon SQS", "Amazon SNS", "Amazon EventBridge", "AWS Step Functions"], "answer": "Amazon Simple Notification Service (Amazon SNS)"},
        {"id": 12, "category": "Application Integration", "question": "An application needs to decouple components by queuing messages for processing. Which service should you use?", "options": ["Amazon SNS", "Amazon SQS", "Amazon EventBridge", "AWS Step Functions"], "answer": "Amazon Simple Queue Service (Amazon SQS)"},
        {"id": 13, "category": "Application Integration", "question": "You need to coordinate a multi-step workflow involving Lambda and ECS. Which service is appropriate?", "options": ["Amazon EventBridge", "Amazon SNS", "AWS Step Functions", "Amazon SQS"], "answer": "AWS Step Functions"},
        {"id": 14, "category": "Business Productivity", "question": "A company wants to set up a scalable customer support call center. Which service should they use?", "options": ["Amazon Connect", "Amazon SES", "AWS Step Functions", "Amazon SNS"], "answer": "Amazon Connect"},
        {"id": 15, "category": "Business Productivity", "question": "An application needs to send transactional emails to customers. Which AWS service is best?", "options": ["Amazon Connect", "Amazon SES", "Amazon SQS", "AWS EventBridge"], "answer": "Amazon Simple Email Service (Amazon SES)"},
        {"id": 16, "category": "Compute", "question": "You need to run batch jobs for data processing across multiple compute resources. Which service should you use?", "options": ["AWS Batch", "Amazon EC2", "AWS Elastic Beanstalk", "Amazon Lightsail"], "answer": "AWS Batch"},
        {"id": 17, "category": "Compute", "question": "A company needs full control over virtual servers to host a custom application. Which service is best?", "options": ["AWS Elastic Beanstalk", "Amazon EC2", "Amazon Lightsail", "AWS Outposts"], "answer": "Amazon EC2"},
        {"id": 18, "category": "Compute", "question": "A developer wants to deploy a web application without managing infrastructure. Which service is ideal?", "options": ["Amazon EC2", "AWS Elastic Beanstalk", "Amazon Lightsail", "AWS Wavelength"], "answer": "AWS Elastic Beanstalk"},
        {"id": 19, "category": "Compute", "question": "A small business needs a low-cost, easy-to-use virtual server for a simple website. Which service should they choose?", "options": ["Amazon EC2", "Amazon Lightsail", "AWS Elastic Beanstalk", "AWS Local Zones"], "answer": "Amazon Lightsail"},
        {"id": 20, "category": "Compute", "question": "A gaming company needs low-latency compute closer to users in a specific city. Which service is appropriate?", "options": ["AWS Local Zones", "AWS Outposts", "AWS Wavelength", "Amazon EC2"], "answer": "AWS Local Zones"},
        {"id": 21, "category": "Compute", "question": "A company wants to run AWS services in their on-premises data center. Which service enables this?", "options": ["AWS Local Zones", "AWS Outposts", "AWS Wavelength", "Amazon Lightsail"], "answer": "AWS Outposts"},
        {"id": 22, "category": "Compute", "question": "An application requires ultra-low latency for 5G mobile users. Which service should be used?", "options": ["AWS Local Zones", "AWS Outposts", "AWS Wavelength", "Amazon EC2"], "answer": "AWS Wavelength"},
        {"id": 23, "category": "Containers", "question": "You need to store and manage Docker container images. Which AWS service is best?", "options": ["Amazon ECS", "Amazon ECR", "Amazon EKS", "AWS Fargate"], "answer": "Amazon Elastic Container Registry (Amazon ECR)"},
        {"id": 24, "category": "Containers", "question": "A company wants to orchestrate Docker containers using an AWS-native service. Which service should they use?", "options": ["Amazon ECR", "Amazon ECS", "Amazon EKS", "AWS Fargate"], "answer": "Amazon Elastic Container Service (Amazon ECS)"},
        {"id": 25, "category": "Containers", "question": "A team uses Kubernetes to manage containers and wants a managed solution. Which AWS service is ideal?", "options": ["Amazon ECS", "Amazon EKS", "Amazon ECR", "AWS Fargate"], "answer": "Amazon Elastic Kubernetes Service (Amazon EKS)"},
        {"id": 26, "category": "Cost Management", "question": "A company needs to customize billing reports for different departments. Which service should they use?", "options": ["AWS Budgets", "AWS Billing Conductor", "AWS Cost Explorer", "AWS Cost and Usage Report"], "answer": "AWS Billing Conductor"},
        {"id": 27, "category": "Cost Management", "question": "You want to set a spending limit and receive alerts when costs exceed it. Which service is best?", "options": ["AWS Cost Explorer", "AWS Budgets", "AWS Cost and Usage Report", "AWS Marketplace"], "answer": "AWS Budgets"},
        {"id": 28, "category": "Cost Management", "question": "A company needs detailed billing data for analysis in a third-party tool. Which service provides this?", "options": ["AWS Cost Explorer", "AWS Cost and Usage Report", "AWS Budgets", "AWS Billing Conductor"], "answer": "AWS Cost and Usage Report"},
        {"id": 29, "category": "Cost Management", "question": "You need to visualize AWS spending trends over time. Which service should you use?", "options": ["AWS Budgets", "AWS Cost Explorer", "AWS Cost and Usage Report", "AWS Marketplace"], "answer": "AWS Cost Explorer"},
        {"id": 30, "category": "Cost Management", "question": "A company wants to buy and deploy a third-party analytics tool on AWS. Which service enables this?", "options": ["AWS Budgets", "AWS Cost Explorer", "AWS Marketplace", "AWS Cost and Usage Report"], "answer": "AWS Marketplace"},
        {"id": 31, "category": "Customer Engagement", "question": "A startup needs AWS credits and guidance to grow. Which program should they join?", "options": ["AWS IQ", "AWS Activate for Startups", "AWS Managed Services", "AWS Support"], "answer": "AWS Activate for Startups"},
        {"id": 32, "category": "Customer Engagement", "question": "A company needs to hire an AWS expert for a migration project. Which service connects them to professionals?", "options": ["AWS IQ", "AWS Activate for Startups", "AWS Managed Services", "AWS Support"], "answer": "AWS IQ"},
        {"id": 33, "category": "Customer Engagement", "question": "A company wants AWS to manage their cloud infrastructure operations. Which service provides this?", "options": ["AWS IQ", "AWS Managed Services", "AWS Activate for Startups", "AWS Support"], "answer": "AWS Managed Services (AMS)"},
        {"id": 34, "category": "Customer Engagement", "question": "A company needs 24/7 technical support for AWS issues. Which service should they use?", "options": ["AWS IQ", "AWS Managed Services", "AWS Support", "AWS Activate for Startups"], "answer": "AWS Support"},
        {"id": 35, "category": "Database", "question": "You need a high-performance relational database compatible with MySQL. Which service is best?", "options": ["Amazon RDS", "Amazon Aurora", "Amazon DynamoDB", "Amazon MemoryDB for Redis"], "answer": "Amazon Aurora"},
        {"id": 36, "category": "Database", "question": "An application requires a highly scalable NoSQL database for key-value data. Which service should you use?", "options": ["Amazon Aurora", "Amazon DynamoDB", "Amazon MemoryDB for Redis", "Amazon Neptune"], "answer": "Amazon DynamoDB"},
        {"id": 37, "category": "Database", "question": "A company needs an in-memory database for sub-millisecond latency. Which service is appropriate?", "options": ["Amazon DynamoDB", "Amazon MemoryDB for Redis", "Amazon Aurora", "Amazon RDS"], "answer": "Amazon MemoryDB for Redis"},
        {"id": 38, "category": "Database", "question": "An application needs to query complex relationships in a social network. Which database is best?", "options": ["Amazon Aurora", "Amazon DynamoDB", "Amazon Neptune", "Amazon RDS"], "answer": "Amazon Neptune"},
        {"id": 39, "category": "Database", "question": "You need a managed relational database for a SQL-based application. Which service should you use?", "options": ["Amazon Aurora", "Amazon RDS", "Amazon DynamoDB", "Amazon MemoryDB for Redis"], "answer": "Amazon RDS"},
        {"id": 40, "category": "Developer Tools", "question": "You need to manage and deploy application configurations dynamically. Which service is best?", "options": ["AWS AppConfig", "AWS CLI", "AWS Cloud9", "AWS CloudShell"], "answer": "AWS AppConfig"},
        {"id": 41, "category": "Developer Tools", "question": "A developer wants to automate AWS resource management via scripts. Which tool should they use?", "options": ["AWS AppConfig", "AWS CLI", "AWS Cloud9", "AWS CloudShell"], "answer": "AWS CLI"},
        {"id": 42, "category": "Developer Tools", "question": "A team needs a cloud-based IDE for collaborative coding. Which service should they use?", "options": ["AWS CloudShell", "AWS Cloud9", "AWS CLI", "AWS CodeArtifact"], "answer": "AWS Cloud9"},
        {"id": 43, "category": "Developer Tools", "question": "You need a browser-based terminal to run AWS CLI commands. Which service is ideal?", "options": ["AWS Cloud9", "AWS CloudShell", "AWS CodeBuild", "AWS CodeCommit"], "answer": "AWS CloudShell"},
        {"id": 44, "category": "Developer Tools", "question": "A company needs to store and manage software dependencies. Which service should they use?", "options": ["AWS CodeArtifact", "AWS CodeBuild", "AWS CodeCommit", "AWS CodeDeploy"], "answer": "AWS CodeArtifact"},
        {"id": 45, "category": "Developer Tools", "question": "You need to automate code compilation and testing. Which service is best?", "options": ["AWS CodeCommit", "AWS CodeBuild", "AWS CodeDeploy", "AWS CodePipeline"], "answer": "AWS CodeBuild"},
        {"id": 46, "category": "Developer Tools", "question": "A team needs a Git-based source control system on AWS. Which service should they use?", "options": ["AWS CodeBuild", "AWS CodeCommit", "AWS CodeDeploy", "AWS CodePipeline"], "answer": "AWS CodeCommit"},
        {"id": 47, "category": "Developer Tools", "question": "You need to automate application deployments to EC2 instances. Which service is ideal?", "options": ["AWS CodeBuild", "AWS CodeDeploy", "AWS CodeCommit", "AWS CodePipeline"], "answer": "AWS CodeDeploy"},
        {"id": 48, "category": "Developer Tools", "question": "A company wants to automate the entire software release process. Which service should they use?", "options": ["AWS CodeBuild", "AWS CodeDeploy", "AWS CodePipeline", "AWS CodeStar"], "answer": "AWS CodePipeline"},
        {"id": 49, "category": "Developer Tools", "question": "A team needs a unified interface to manage software development projects. Which service is best?", "options": ["AWS CodeStar", "AWS CodePipeline", "AWS CodeDeploy", "AWS X-Ray"], "answer": "AWS CodeStar"},
        {"id": 50, "category": "Developer Tools", "question": "You need to trace and analyze performance issues in a distributed application. Which service should you use?", "options": ["AWS CodeStar", "AWS X-Ray", "AWS CodeBuild", "AWS CodeCommit"], "answer": "AWS X-Ray"},
        {"id": 51, "category": "Frontend Web and Mobile", "question": "A developer needs to build and deploy a full-stack web application quickly. Which service is best?", "options": ["AWS AppSync", "AWS Amplify", "AWS Device Farm", "Amazon API Gateway"], "answer": "AWS Amplify"},
        {"id": 52, "category": "Frontend Web and Mobile", "question": "An application needs a managed GraphQL API for real-time data syncing. Which service should you use?", "options": ["AWS Amplify", "AWS AppSync", "AWS Device Farm", "Amazon CloudFront"], "answer": "AWS AppSync"},
        {"id": 53, "category": "Frontend Web and Mobile", "question": "A company wants to test their mobile app on multiple real devices. Which service is ideal?", "options": ["AWS Amplify", "AWS AppSync", "AWS Device Farm", "AWS AppConfig"], "answer": "AWS Device Farm"},
        {"id": 54, "category": "Storage", "question": "You need to automate backups across multiple AWS services. Which service should you use?", "options": ["Amazon EBS", "AWS Backup", "Amazon EFS", "Amazon S3"], "answer": "AWS Backup"},
        {"id": 55, "category": "Storage", "question": "An EC2 instance needs persistent block storage for a database. Which service is best?", "options": ["Amazon EFS", "Amazon EBS", "Amazon S3", "AWS Storage Gateway"], "answer": "Amazon Elastic Block Store (Amazon EBS)"},
        {"id": 56, "category": "Storage", "question": "Multiple EC2 instances need shared file storage. Which service should you use?", "options": ["Amazon EBS", "Amazon EFS", "Amazon S3", "Amazon FSx"], "answer": "Amazon Elastic File System (Amazon EFS)"},
        {"id": 57, "category": "Storage", "question": "A company needs to replicate applications for disaster recovery. Which service is appropriate?", "options": ["AWS Elastic Disaster Recovery", "Amazon EBS", "Amazon S3", "AWS Storage Gateway"], "answer": "AWS Elastic Disaster Recovery"},
        {"id": 58, "category": "Storage", "question": "You need a managed Windows File Server for an application. Which service is best?", "options": ["Amazon EFS", "Amazon FSx", "Amazon S3", "Amazon EBS"], "answer": "Amazon FSx"},
        {"id": 59, "category": "Storage", "question": "A company needs to store and retrieve large amounts of unstructured data. Which service should they use?", "options": ["Amazon EBS", "Amazon S3", "Amazon EFS", "AWS Backup"], "answer": "Amazon S3"},
        {"id": 60, "category": "Storage", "question": "You need to store infrequently accessed data at a low cost. Which service is ideal?", "options": ["Amazon S3", "Amazon S3 Glacier", "Amazon EBS", "Amazon EFS"], "answer": "Amazon S3 Glacier"},
        {"id": 61, "category": "Storage", "question": "An on-premises application needs to access AWS cloud storage. Which service enables this?", "options": ["Amazon S3", "AWS Storage Gateway", "Amazon EFS", "Amazon EBS"], "answer": "AWS Storage Gateway"},
        {"id": 62, "category": "Internet of Things (IoT)", "question": "A company needs to connect and manage thousands of IoT devices. Which service is best?", "options": ["AWS IoT Greengrass", "AWS IoT Core", "Amazon Comprehend", "Amazon Rekognition"], "answer": "AWS IoT Core"},
        {"id": 63, "category": "Internet of Things (IoT)", "question": "You need to run AWS IoT capabilities on edge devices. Which service should you use?", "options": ["AWS IoT Core", "AWS IoT Greengrass", "Amazon SageMaker", "Amazon Textract"], "answer": "AWS IoT Greengrass"},
        {"id": 64, "category": "Machine Learning", "question": "An application needs to analyze customer reviews for sentiment. Which service is best?", "options": ["Amazon Kendra", "Amazon Comprehend", "Amazon Lex", "Amazon Polly"], "answer": "Amazon Comprehend"},
        {"id": 65, "category": "Machine Learning", "question": "A company needs an intelligent search for internal documents. Which service should they use?", "options": ["Amazon Comprehend", "Amazon Kendra", "Amazon Lex", "Amazon Rekognition"], "answer": "Amazon Kendra"},
        {"id": 66, "category": "Machine Learning", "question": "You need to build a chatbot for customer support. Which service is ideal?", "options": ["Amazon Polly", "Amazon Lex", "Amazon Transcribe", "Amazon Translate"], "answer": "Amazon Lex"},
        {"id": 67, "category": "Machine Learning", "question": "An application needs to convert text to lifelike speech. Which service should you use?", "options": ["Amazon Lex", "Amazon Polly", "Amazon Transcribe", "Amazon Translate"], "answer": "Amazon Polly"},
        {"id": 68, "category": "Machine Learning", "question": "You need to detect objects in images for a security application. Which service is best?", "options": ["Amazon Rekognition", "Amazon Comprehend", "Amazon Kendra", "Amazon SageMaker"], "answer": "Amazon Rekognition"},
        {"id": 69, "category": "Machine Learning", "question": "A data scientist needs to build and deploy a custom ML model. Which service is appropriate?", "options": ["Amazon Textract", "Amazon SageMaker", "Amazon Transcribe", "Amazon Translate"], "answer": "Amazon SageMaker"},
        {"id": 70, "category": "Machine Learning", "question": "You need to extract text and data from scanned PDFs. Which service should you use?", "options": ["Amazon SageMaker", "Amazon Textract", "Amazon Transcribe", "Amazon Translate"], "answer": "Amazon Textract"},
        {"id": 71, "category": "Machine Learning", "question": "An application needs to convert customer call recordings to text. Which service is best?", "options": ["Amazon Translate", "Amazon Transcribe", "Amazon Polly", "Amazon Lex"], "answer": "Amazon Transcribe"},
        {"id": 72, "category": "Machine Learning", "question": "A website needs to translate content into multiple languages. Which service should you use?", "options": ["Amazon Transcribe", "Amazon Translate", "Amazon Polly", "Amazon Comprehend"], "answer": "Amazon Translate"},
        {"id": 73, "category": "Management and Governance", "question": "You need to automatically scale EC2 instances based on traffic. Which service is best?", "options": ["AWS CloudFormation", "AWS Auto Scaling", "Amazon CloudWatch", "AWS Systems Manager"], "answer": "AWS Auto Scaling"},
        {"id": 74, "category": "Management and Governance", "question": "A company wants to automate resource provisioning using templates. Which service should they use?", "options": ["AWS Auto Scaling", "AWS CloudFormation", "AWS Config", "AWS Control Tower"], "answer": "AWS CloudFormation"},
        {"id": 75, "category": "Management and Governance", "question": "You need to track user activity and API calls for auditing. Which service is ideal?", "options": ["Amazon CloudWatch", "AWS CloudTrait", "AWS Compute Optimizer", "AWS Config"], "answer": "AWS CloudTrait"},
        {"id": 76, "category": "Management and Governance", "question": "An application needs to monitor performance metrics and logs. Which service should you use?", "options": ["AWS CloudTrait", "Amazon CloudWatch", "AWS Config", "AWS Health Dashboard"], "answer": "Amazon CloudWatch"},
        {"id": 77, "category": "Management and Governance", "question": "You need recommendations to optimize EC2 instance types. Which service is best?", "options": ["AWS Compute Optimizer", "AWS CloudTrait", "AWS Config", "AWS Control Tower"], "answer": "AWS Compute Optimizer"},
        {"id": 78, "category": "Management and Governance", "question": "A company needs to track changes to resource configurations. Which service should they use?", "options": ["AWS Compute Optimizer", "AWS Config", "AWS Health Dashboard", "AWS Launch Wizard"], "answer": "AWS Config"},
        {"id": 79, "category": "Management and Governance", "question": "You need to set up and govern multiple AWS accounts. Which service is ideal?", "options": ["AWS Control Tower", "AWS Config", "AWS Organizations", "AWS Service Catalog"], "answer": "AWS Control Tower"},
        {"id": 80, "category": "Management and Governance", "question": "A company wants to monitor AWS service outages affecting their account. Which service should they use?", "options": ["AWS Health Dashboard", "AWS Launch Wizard", "AWS License Manager", "AWS Management Console"], "answer": "AWS Health Dashboard"},
        {"id": 81, "category": "Management and Governance", "question": "You need a guided tool to deploy a SQL Server application. Which service is best?", "options": ["AWS Launch Wizard", "AWS License Manager", "AWS Management Console", "AWS Organizations"], "answer": "AWS Launch Wizard"},
        {"id": 82, "category": "Management and Governance", "question": "A company needs to track software licenses across AWS resources. Which service should they use?", "options": ["AWS Launch Wizard", "AWS License Manager", "AWS Management Console", "AWS Resource Groups and Tag Editor"], "answer": "AWS License Manager"},
        {"id": 83, "category": "Management and Governance", "question": "A user needs a web-based interface to manage AWS resources. Which service is appropriate?", "options": ["AWS License Manager", "AWS Management Console", "AWS Organizations", "AWS Service Catalog"], "answer": "AWS Management Console"},
        {"id": 84, "category": "Management and Governance", "question": "You need to centrally manage billing and policies for multiple AWS accounts. Which service is best?", "options": ["AWS Management Console", "AWS Organizations", "AWS Resource Groups and Tag Editor", "AWS Service Catalog"], "answer": "AWS Organizations"},
        {"id": 85, "category": "Management and Governance", "question": "A company wants to group and manage resources using tags. Which service should they use?", "options": ["AWS Organizations", "AWS Resource Groups and Tag Editor", "AWS Service Catalog", "AWS Systems Manager"], "answer": "AWS Resource Groups and Tag Editor"},
        {"id": 86, "category": "Management and Governance", "question": "You need to provide a catalog of approved IT services for employees. Which service is ideal?", "options": ["AWS Resource Groups and Tag Editor", "AWS Service Catalog", "AWS Systems Manager", "AWS Trusted Advisor"], "answer": "AWS Service Catalog"},
        {"id": 87, "category": "Management and Governance", "question": "You need to automate patching and configuration of EC2 instances. Which service is best?", "options": ["AWS Service Catalog", "AWS Systems Manager", "AWS Trusted Advisor", "AWS Well-Architected Tool"], "answer": "AWS Systems Manager"},
        {"id": 88, "category": "Management and Governance", "question": "A company wants recommendations to optimize AWS costs and security. Which service should they use?", "options": ["AWS Systems Manager", "AWS Trusted Advisor", "AWS Well-Architected Tool", "AWS CloudFormation"], "answer": "AWS Trusted Advisor"},
        {"id": 89, "category": "Management and Governance", "question": "You need to evaluate a workload against AWS architectural best practices. Which service is best?", "options": ["AWS Trusted Advisor", "AWS Well-Architected Tool", "AWS CloudTrait", "AWS Config"], "answer": "AWS Well-Architected Tool"},
        {"id": 90, "category": "Migration and Transfer", "question": "You need to identify on-premises applications before migrating to AWS. Which service is best?", "options": ["AWS Application Discovery Service", "AWS Application Migration Service", "AWS DMS", "AWS Migration Hub"], "answer": "AWS Application Discovery Service"},
        {"id": 91, "category": "Migration and Transfer", "question": "A company wants to migrate servers to AWS with minimal changes. Which service should they use?", "options": ["AWS Application Discovery Service", "AWS Application Migration Service", "AWS SCT", "AWS Snow Family"], "answer": "AWS Application Migration Service"},
        {"id": 92, "category": "Migration and Transfer", "question": "You need to migrate a MySQL database to AWS with continuous replication. Which service is ideal?", "options": ["AWS SCT", "AWS DMS", "AWS Migration Hub", "AWS Snow Family"], "answer": "AWS Database Migration Service (AWS DMS)"},
        {"id": 93, "category": "Migration and Transfer", "question": "A company wants to monitor the progress of multiple migration tasks. Which service should they use?", "options": ["AWS DMS", "AWS Migration Hub", "AWS SCT", "AWS Transfer Family"], "answer": "AWS Migration Hub"},
        {"id": 94, "category": "Migration and Transfer", "question": "You need to convert an Oracle database schema to PostgreSQL for migration. Which service is best?", "options": ["AWS DMS", "AWS SCT", "AWS Snow Family", "AWS Transfer Family"], "answer": "AWS Schema Conversion Tool (AWS SCT)"},
        {"id": 95, "category": "Migration and Transfer", "question": "A company needs to transfer petabytes of data to AWS using physical devices. Which service is appropriate?", "options": ["AWS SCT", "AWS Snow Family", "AWS Transfer Family", "AWS Migration Hub"], "answer": "AWS Snow Family"},
        {"id": 96, "category": "Migration and Transfer", "question": "You need a managed SFTP service to transfer files to S3. Which service is best?", "options": ["AWS Snow Family", "AWS Transfer Family", "AWS DMS", "AWS SCT"], "answer": "AWS Transfer Family"},
        {"id": 97, "category": "Networking and Content Delivery", "question": "An application needs a secure, scalable API to connect to backend services. Which service is best?", "options": ["Amazon CloudFront", "Amazon API Gateway", "AWS Global Accelerator", "Amazon Route 53"], "answer": "Amazon API Gateway"},
        {"id": 98, "category": "Networking and Content Delivery", "question": "You need to deliver website content globally with low latency. Which service should you use?", "options": ["Amazon API Gateway", "Amazon CloudFront", "AWS Global Accelerator", "Amazon VPC"], "answer": "Amazon CloudFront"},
        {"id": 99, "category": "Networking and Content Delivery", "question": "A company needs a private, high-bandwidth connection to AWS. Which service is ideal?", "options": ["AWS Direct Connect", "Amazon CloudFront", "AWS Global Accelerator", "Amazon Route 53"], "answer": "AWS Direct Connect"},
        {"id": 100, "category": "Networking and Content Delivery", "question": "You need to improve global application performance by optimizing routing. Which service is best?", "options": ["Amazon CloudFront", "AWS Global Accelerator", "Amazon Route 53", "Amazon VPC"], "answer": "AWS Global Accelerator"},
        {"id": 101, "category": "Networking and Content Delivery", "question": "A company needs a scalable DNS service to manage domain names. Which service should they use?", "options": ["Amazon CloudFront", "Amazon Route 53", "AWS Global Accelerator", "Amazon API Gateway"], "answer": "Amazon Route 53"},
        {"id": 102, "category": "Networking and Content Delivery", "question": "You need to create an isolated network for AWS resources. Which service is best?", "options": ["Amazon Route 53", "Amazon VPC", "AWS VPN", "Amazon CloudFront"], "answer": "Amazon VPC"},
        {"id": 103, "category": "Networking and Content Delivery", "question": "A company needs a secure connection between their on-premises network and AWS. Which service is appropriate?", "options": ["Amazon VPC", "AWS VPN", "Amazon Route 53", "AWS Direct Connect"], "answer": "AWS VPN"},
        {"id": 104, "category": "Security, Identity, and Compliance", "question": "You need to access AWS compliance reports for an audit. Which service should you use?", "options": ["AWS Audit Manager", "AWS Artifact", "AWS CloudHSM", "Amazon Cognito"], "answer": "AWS Artifact"},
        {"id": 105, "category": "Security, Identity, and Compliance", "question": "A company needs to automate evidence collection for compliance audits. Which service is best?", "options": ["AWS Artifact", "AWS Audit Manager", "AWS Certificate Manager", "Amazon Detective"], "answer": "AWS Audit Manager"},
        {"id": 106, "category": "Security, Identity, and Compliance", "question": "You need to manage SSL certificates for a website. Which service is ideal?", "options": ["AWS Audit Manager", "AWS Certificate Manager", "AWS CloudHSM", "Amazon Cognito"], "answer": "AWS Certificate Manager (ACM)"},
        {"id": 107, "category": "Security, Identity, and Compliance", "question": "A company needs hardware-based key storage for regulatory compliance. Which service should they use?", "options": ["AWS Certificate Manager", "AWS CloudHSM", "Amazon Cognito", "Amazon Detective"], "answer": "AWS CloudHSM"},
        {"id": 108, "category": "Security, Identity, and Compliance", "question": "An application needs user authentication for a mobile app. Which service is best?", "options": ["AWS CloudHSM", "Amazon Cognito", "Amazon Detective", "AWS Directory Service"], "answer": "Amazon Cognito"},
        {"id": 109, "category": "Security, Identity, and Compliance", "question": "You need to investigate the root cause of a security incident. Which service is appropriate?", "options": ["Amazon GuardDuty", "Amazon Detective", "Amazon Inspector", "AWS Firewall Manager"], "answer": "Amazon Detective"},
        {"id": 110, "category": "Security, Identity, and Compliance", "question": "A company needs a managed Active Directory for AWS resources. Which service should they use?", "options": ["AWS Directory Service", "Amazon Cognito", "AWS Firewall Manager", "Amazon GuardDuty"], "answer": "AWS Directory Service"},
        {"id": 111, "category": "Security, Identity, and Compliance", "question": "You need to centrally manage firewall rules across multiple accounts. Which service is best?", "options": ["AWS Network Firewall", "AWS Firewall Manager", "AWS WAF", "AWS Shield"], "answer": "AWS Firewall Manager"},
        {"id": 112, "category": "Security, Identity, and Compliance", "question": "A company wants to detect malicious activity in their AWS environment. Which service is ideal?", "options": ["Amazon Inspector", "Amazon GuardDuty", "Amazon Detective", "AWS CloudHSM"], "answer": "Amazon GuardDuty"},
        {"id": 113, "category": "Security, Identity, and Compliance", "question": "You need to manage user access to AWS resources. Which service should you use?", "options": ["AWS IAM Identity Center", "AWS Identity and Access Management", "Amazon Cognito", "AWS Directory Service"], "answer": "AWS Identity and Access Management (IAM)"},
        {"id": 114, "category": "Security, Identity, and Compliance", "question": "A company needs centralized SSO for multiple AWS accounts. Which service is best?", "options": ["AWS IAM", "AWS IAM Identity Center", "Amazon Cognito", "AWS Directory Service"], "answer": "AWS IAM Identity Center (AWS Single Sign-On)"},
        {"id": 115, "category": "Security, Identity, and Compliance", "question": "You need to scan EC2 instances for security vulnerabilities. Which service is appropriate?", "options": ["Amazon Detective", "Amazon GuardDuty", "Amazon Inspector", "AWS Network Firewall"], "answer": "Amazon Inspector"},
        {"id": 116, "category": "Security, Identity, and Compliance", "question": "You need to manage encryption keys for data security. Which service is best?", "options": ["AWS Secrets Manager", "AWS Key Management Service", "Amazon Macie", "AWS Resource Access Manager"], "answer": "AWS Key Management Service (AWS KMS)"},
        {"id": 117, "category": "Security, Identity, and Compliance", "question": "A company needs to identify and protect sensitive data in S3. Which service should they use?", "options": ["AWS KMS", "Amazon Macie", "AWS Network Firewall", "AWS RAM"], "answer": "Amazon Macie"},
        {"id": 118, "category": "Security, Identity, and Compliance", "question": "You need to protect a VPC with a managed firewall. Which service is ideal?", "options": ["AWS Firewall Manager", "AWS Network Firewall", "AWS WAF", "AWS Shield"], "answer": "AWS Network Firewall"},
        {"id": 119, "category": "Security, Identity, and Compliance", "question": "You need to share subnets across AWS accounts. Which service is appropriate?", "options": ["AWS RAM", "AWS Secrets Manager", "AWS Security Hub", "AWS Shield"], "answer": "AWS Resource Access Manager (AWS RAM)"},
        {"id": 120, "category": "Security, Identity, and Compliance", "question": "An application needs to securely store and rotate database credentials. Which service is best?", "options": ["AWS KMS", "AWS Secrets Manager", "Amazon Macie", "AWS Network Firewall"], "answer": "AWS Secrets Manager"},
        {"id": 121, "category": "Security, Identity, and Compliance", "question": "You need a centralized view of security alerts across AWS services. Which service is ideal?", "options": ["AWS Security Hub", "Amazon Macie", "AWS GuardDuty", "AWS Artifact"], "answer": "AWS Security Hub"},
        {"id": 122, "category": "Security, Identity, and Compliance", "question": "A website needs protection against DDoS attacks. Which service should you use?", "options": ["AWS WAF", "AWS Shield", "Amazon GuardDuty", "AWS Inspector"], "answer": "AWS Shield"},
        {"id": 123, "category": "Security, Identity, and Compliance", "question": "You need to filter malicious HTTP traffic to a web application. Which service is best?", "options": ["AWS Shield", "AWS WAF", "Amazon GuardDuty", "AWS Network Firewall"], "answer": "AWS WAF"},
        {"id": 124, "category": "Serverless", "question": "You need to run containers without managing servers. Which service is best?", "options": ["AWS Lambda", "AWS Fargate", "Amazon ECS", "Amazon EKS"], "answer": "AWS Fargate"},
        {"id": 125, "category": "Serverless", "question": "An application needs to run code in response to S3 events without servers. Which service is ideal?", "options": ["AWS Fargate", "AWS Lambda", "Amazon ECS", "Amazon EKS"], "answer": "AWS Lambda"},
        {"id": 126, "category": "End-User Computing", "question": "A company wants to stream a specific desktop application to users. Which service is best?", "options": ["Amazon WorkSpaces", "Amazon AppStream 2.0", "Amazon WorkSpaces Web", "AWS Lambda"], "answer": "Amazon AppStream 2.0"},
        {"id": 127, "category": "End-User Computing", "question": "You need to provide remote employees with full virtual desktops. Which service is ideal?", "options": ["Amazon AppStream 2.0", "Amazon WorkSpaces", "Amazon WorkSpaces Web", "AWS Fargate"], "answer": "Amazon WorkSpaces"},
        {"id": 128, "category": "End-User Computing", "question": "A team needs secure, browser-based access to internal applications. Which service is appropriate?", "options": ["Amazon AppStream 2.0", "Amazon WorkSpaces", "Amazon WorkSpaces Web", "AWS Lambda"], "answer": "Amazon WorkSpaces Web"}
    ];

    let currentQuestion = 0;
    let score = 0;
    let totalQuestions = 0;
    let selectedQuestions = [];
    let categoryStats = {};
    let incorrectQuestions = [];

    // Initialize category stats
    questions.forEach(q => {
        if (!categoryStats[q.category]) {
            categoryStats[q.category] = { total: 0, correct: 0 };
        }
        categoryStats[q.category].total++;
    });

    startBtn.addEventListener('click', () => {
        const count = parseInt(questionCountInput.value);
        if (isNaN(count) || count < 0 || count > questions.length) {
            alert(`Please enter a number between 0 and ${questions.length}.`);
            return;
        }
        totalQuestions = count === 0 ? questions.length : count;
        selectedQuestions = count === 0 ? [...questions] : [...questions].sort(() => 0.5 - Math.random()).slice(0, totalQuestions);
        startScreen.classList.add('hidden');
        quiz.classList.remove('hidden');
        loadQuestion();
    });

    restartBtn.addEventListener('click', () => {
        resultsScreen.classList.add('hidden');
        startScreen.classList.remove('hidden');
        currentQuestion = 0;
        score = 0;
        incorrectQuestions = [];
        Object.keys(categoryStats).forEach(cat => {
            categoryStats[cat].correct = 0;
            categoryStats[cat].total = questions.filter(q => q.category === cat).length;
        });
        scoreDisplay.textContent = `Score: 0/0`;
    });

    function loadQuestion() {
        if (currentQuestion >= totalQuestions) {
            showResults();
            return;
        }
        const q = selectedQuestions[currentQuestion];
        questionContainer.textContent = q.question;
        optionsContainer.innerHTML = '';
        q.options.forEach((option, index) => {
            const label = document.createElement('label');
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = 'option';
            input.value = option;
            label.appendChild(input);
            label.appendChild(document.createTextNode(` ${option}`));
            optionsContainer.appendChild(label);
        });
        result.innerHTML = '';
        nextBtn.disabled = true;
        nextBtn.textContent = 'Submit';
    }

    optionsContainer.addEventListener('change', () => {
        nextBtn.disabled = false;
    });

    nextBtn.addEventListener('click', () => {
        if (nextBtn.textContent === 'Next') {
            currentQuestion++;
            loadQuestion();
            return;
        }
        const selectedOption = optionsContainer.querySelector('input[name="option"]:checked');
        if (!selectedOption) return;

        const userAnswer = selectedOption.value;
        const q = selectedQuestions[currentQuestion];
        if (userAnswer === q.answer) {
            score++;
            categoryStats[q.category].correct++;
            result.innerHTML = 'Correct! 🎉';
            result.className = 'result correct';
            nextBtn.textContent = 'Next';
            nextBtn.disabled = false;
        } else {
            incorrectQuestions.push(q);
            result.innerHTML = `Wrong. <button onclick="showAnswer()">View Answer</button>`;
            result.className = 'result wrong';
            nextBtn.textContent = 'Next';
            nextBtn.disabled = false;
        }
        scoreDisplay.textContent = `Score: ${score}/${currentQuestion + 1}`;
    });

    window.showAnswer = function() {
        const q = selectedQuestions[currentQuestion];
        result.innerHTML = `Correct answer: ${q.answer}`;
        result.className = 'result';
    };

    function showResults() {
        quiz.classList.add('hidden');
        resultsScreen.classList.remove('hidden');
        finalScore.textContent = `Final Score: ${score}/${totalQuestions} (${((score/totalQuestions)*100).toFixed(1)}%)`;
        categoryResults.innerHTML = '';
        let worstCategories = [];
        Object.keys(categoryStats).forEach(cat => {
            const stats = categoryStats[cat];
            const percentage = stats.total > 0 ? (stats.correct / stats.total * 100).toFixed(1) : 0;
            const li = document.createElement('li');
            li.textContent = `${cat}: ${stats.correct}/${stats.total} (${percentage}%)`;
            categoryResults.appendChild(li);
            if (stats.total > 0) {
                worstCategories.push({ category: cat, percentage: parseFloat(percentage) });
            }
        });
        worstCategories.sort((a, b) => a.percentage - b.percentage);
        if (worstCategories.length > 0) {
            const worst = worstCategories[0];
            const li = document.createElement('li');
            li.textContent = `Focus Area: ${worst.category} (${worst.percentage}% correct)`;
            li.style.fontWeight = 'bold';
            categoryResults.appendChild(li);
        }
    }
});