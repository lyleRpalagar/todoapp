# todoproject

## Contributing
1. Fork Main Repo


2. Pull Main Repo
```
git clone git@github.com:lyleRpalagar/todoproject.git todoproject
```

3. Add Git Remote
```
cd todoproject
git remote rename origin upstream
git remote add origin git@github.com:<gituser>/todoproject.git
```

4. Check to see if remote is correct
```
git remote -v

origin		git@github.com:<gituser>/todoproject.git (fetch)
origin		git@github.com:<gituser>/todoproject.git (push)

upstream	git@github.com:lyleRpalagar/todoproject.git (fetch)
upstream	git@github.com:lyleRpalagar/todoproject.git (push)
```

## Git Flow
1. Update Develop branch
2. Create Working Branch
3. *Make Development changes*
4. Update Develop Branch ( optional )
   
   - Update your Current Branch
6. Push Current Working Branch to PR 

---
> Create working branch
- ```
   git checkout origin develop
   git checkout -b {branch-name}
  ```
> Update your develop branch.
-  ```
    git checkout origin develop
    git fetch upstream develop
    git pull upstream develop
    git push origin develop
    ```

> Update your current working branch.

- ```
    git checkout {current-branch-name}
    git pull --rebase upstream develop
    git push origin {current-branch-name} -f
    ```

> Push current working branch to Pull-Request (PR) 
- ```
    git add . 
    git commit -m "{your message here}"
    git push origin {current-branch-name}
    ```

## Getting Started
> Prerequisites.
``` 
npm install -g firebase-tools
npm install -g expo-cli
npm install -g create-react-native-app
```

> Before Starting Simulator.
```
cd ios
pod install
cd ../
npm i
```

> Starting Simulator.

```
Run instructions for iOS:
    npm run run:ios

Run instructions for Android:
    npm run run:android
```