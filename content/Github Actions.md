
This is another CI/CD tool which is used for pipelines

#### Folder structure :
1. your repo
2. ├── .github/
      └── workflows/
3.        └── main.yml (all your .yml files)
4. └── (rest of your project files)

## Syntax and structure of .yaml files :

__Note :__ By default all the jobs here run parallely so if you need sequestial we use the word 'needs"'

```yaml
name : (name of the workflow)

on : (Triggers)
	push :
		branches : 
			- main

	workflow-dispatch (Adding this will make you run the workflow manually with a button there)
	
jobs :
	(These are the actual types of jobs this example file has only 1 job called 'job1')
	Building :
		- runs-on : ubuntu-latest (This is called a runner where job runs at)
		- steps :
			- name : Initial 
			  uses : actions/checkout@v4 (This is basically the best way to clone your current source code)
			  run : echo "Hello World"
				
			- name : Building it
			  run : mvn install
	Testing :
		- runs-on : ubuntu-latest
		- needs : Building
		- steps :
		  - name : Initial
		    uses : actions/checkout@v4 
		    
		  - name : Real Testing
		    run : mvn test
	

```

