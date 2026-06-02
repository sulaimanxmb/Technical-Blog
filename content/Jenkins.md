Continuous Integration means to compile and check the code for every single commit so any bugs can be fixed immediately and not stack up later like this :[![CI/CD Implementation with Jenkins - TatvaSoft Blog](https://www.tatvasoft.com/blog/wp-content/uploads/2023/06/CD-Implementation-with-Jenkins-1.jpg)

This can be automated using tools like ___Jenkins___
after SSH into the VM :
Install jenkins using chatgpt commands (make sure to have jdk installed)

`the default port of jenkins is 8080`
so go to ___IP___:8080 to access jenkins
### Pipeline Code :
The syntax is : (Filename should be `Jenkinsfile`)
This is basic code for clonning git repo and then mvn installing it :
```json
pipeline{

	agent any
	
	tools {
	
		maven 'Maven3.9' // As mentionaed in jenkins
		
		jdk 'JDK17' // As mentionaed in jenkins
		
	}
	
	stages {
	
		stage('Clone Repository') {
		
			steps {
				// Clone the repository
				git branch: 'atom', url:'https://github.com/urmom.git'
			}
		}
	
		stage('Unit Tests') {
		
			steps {
				sh 'mvn test'
			}
		}
	
		stage('Build') {
		
			steps {
				// Skips tests during the mvn build
				sh 'mvn install -DskipTests'
			
			}
		
			post {
			
				success {
					echo 'Build completed successfully.'
				}
				
				failure {
				
					echo 'Build failed.'
				}
				
			}
	
		}
	
	}

}
```

### Project 2:
we are using sonarqube and nexus for code verification and vulnerability scanner 

first add Sonar Qube and Nexus settings in your "Manage Jenkins section

#### Checkstyle :
```json
pipeline {
	agent any
	tools {
	    maven "maven3.9"
	    jdk "jdk17"
	}

	stages {
	    stage('Fetch code') {
            steps {
               git branch: 'atom', url: 'https://github.com/hkhcoder/vprofile-project.git'
            }

	    }


	    stage('Build'){
	        steps{
	           sh 'mvn install -DskipTests'
	        }

	        post {
	           success {
	              echo 'Now Archiving it...'
	              archiveArtifacts artifacts: '**/target/*.war'
	           }
	        }
	    }

	    stage('UNIT TEST') {
            steps{
                sh 'mvn test'
            }
        }

        stage('Checkstyle Analysis') {
            steps{
                sh 'mvn checkstyle:checkstyle'
            }
        }

	    
	}
}
```


#### Code analysis :
This scans the code and sends the data to ___SonarQube server___ 
```groovy
pipeline {
	agent any
	tools {
	    maven "maven3.9"
	    jdk "jdk17"
	}

	stages {


	    stage('Fetch code') {
            steps {
               git branch: 'atom', url: 'https://github.com/hkhcoder/vprofile-project.git'
            }

	    }


	    stage('Build'){
	        steps{
	           sh 'mvn install -DskipTests'
	        }

	        post {
	           success {
	              echo 'Now Archiving it...'
	              archiveArtifacts artifacts: '**/target/*.war'
	           }
	        }
	    }

	    stage('UNIT TEST') {
            steps{
                sh 'mvn test'
            }
        }

        stage('Checkstyle Analysis') {
            steps{
                sh 'mvn checkstyle:checkstyle'
            }
        }

        stage("Sonar Code Analysis") {
        	environment {
                scannerHome = tool 'sonar6.2'
            }
            steps {
              withSonarQubeEnv('sonarserver') {
                sh '''${scannerHome}/bin/sonar-scanner -Dsonar.projectKey=vprofile \
                   -Dsonar.projectName=vprofile \
                   -Dsonar.projectVersion=1.0 \
                   -Dsonar.sources=src/ \
                   -Dsonar.java.binaries=target/test-classes/com/visualpathit/account/controllerTest/ \
                   -Dsonar.junit.reportsPath=target/surefire-reports/ \
                   -Dsonar.jacoco.reportsPath=target/jacoco.exec \
                   -Dsonar.java.checkstyle.reportPaths=target/checkstyle-result.xml'''
              }
            }
        }

	}

}
```

`Note : SonarQube uses a concept called quality gates to check errors, it uses its default gate (You can create your own gate and set it to 20 bugs then if your code contains more than 20 bugs it will fail your pipeline`

#### Nexus :
It is a repo store for your artifacts where you can store your artifacts in this repository
Configure some nexus login (password and username) first
```groovy
pipeline {
	agent any
	tools {
	    maven "MAVEN3.9"
	    jdk "JDK17"
	}

	stages {


	    stage('Fetch code') {
            steps {
               git branch: 'atom', url: 'https://github.com/hkhcoder/vprofile-project.git'
            }

	    }


	    stage('Build'){
	        steps{
	           sh 'mvn install -DskipTests'
	        }

	        post {
	           success {
	              echo 'Now Archiving it...'
	              archiveArtifacts artifacts: '**/target/*.war'
	           }
	        }
	    }

	    stage('UNIT TEST') {
            steps{
                sh 'mvn test'
            }
        }

        stage('Checkstyle Analysis') {
            steps{
                sh 'mvn checkstyle:checkstyle'
            }
        }

        stage("Sonar Code Analysis") {
        	environment {
                scannerHome = tool 'sonar6.2'
            }
            steps {
              withSonarQubeEnv('sonarserver') {
                sh '''${scannerHome}/bin/sonar-scanner -Dsonar.projectKey=vprofile \
                   -Dsonar.projectName=vprofile \
                   -Dsonar.projectVersion=1.0 \
                   -Dsonar.sources=src/ \
                   -Dsonar.java.binaries=target/test-classes/com/visualpathit/account/controllerTest/ \
                   -Dsonar.junit.reportsPath=target/surefire-reports/ \
                   -Dsonar.jacoco.reportsPath=target/jacoco.exec \
                   -Dsonar.java.checkstyle.reportPaths=target/checkstyle-result.xml'''
              }
            }
        }

        stage("Quality Gate") {
            steps {
              timeout(time: 1, unit: 'HOURS') {
                waitForQualityGate abortPipeline: true
              }
            }
          }

	     stage("UploadArtifact"){
            steps{
                nexusArtifactUploader(
                  nexusVersion: 'nexus3',
                  protocol: 'http',
                  nexusUrl: '34.55.134.234:8081',
                  groupId: 'QA',
                  version: "${env.BUILD_ID}-${env.BUILD_TIMESTAMP}",
                  repository: 'vprofile-repo',
                  credentialsId: 'nexus-login',
                  artifacts: [
                    [artifactId: 'vproapp',
                     classifier: '',
                     file: 'target/vprofile-v2.war',
                     type: 'war']
                  ]
                )
            }
        }


	}

}
```

You can also add slack notification plugin and add notification code which will be DMed to you in slack channel (slack is app for communication in IT)













