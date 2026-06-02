### Setting up your account :
```shell
git config --global user.name "Sulaiman"
git config --global user.email "sulaimaneksambi@gmail.com"
git config --global init.default branch main  #Sets main branch as main

git status # To see status of the repo
```

### Initialize a repo : (first cd there)
```shell
git init
#This makes all files inside as untracked/unstaged (Changes in file wont be reflected)
```

### Track the untracked : (first cd there) 
```shell
git add .  #to track all files
git add filename  #to track specific file
```

### Commit changes : (Updating)
```shell
git commit -m "message" 
```

### Push Changes (Final Update) :
```bash
git push
```

### Tags :
```bash
git tag -a (number) -m "removed .exe"
```
then commit 
```bash
git push origin (number)
```
