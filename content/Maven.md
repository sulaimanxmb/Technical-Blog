This is a build tool which takes instructions from the ___pom.xml___ file which has all dependencies to be installed

it is used to package java written applications
when we do ___mvn install___
it :
1. **Compile the source code** (mvn compile)
    
2. **Run tests** (mvn test)
    
3. **Package the project** (usually into a .jar or .war file)
	
4. **Install the final package into your local Maven repository** (usually in ~/.m2/repository)

after this the full working code can be transported into different places with a single .jar file
