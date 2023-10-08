# Contribution Guidlines

## Prerequisites

#### Install Node JS

Refer to https://nodejs.org/en to install nodejs.

1. On the GitHub page for this [repository](https://github.com/tsongtheng/Add-Social-Profiles-Hacktoberfest2023), click on the button "**Star**" and then click on the button "**Fork**".

2. Clone _your forked repository_ to your computer:

   For example, run this command inside your terminal:

   ```bash
   git clone https://github.com/tsongtheng/Add-Social-Profiles-Hacktoberfest2023.git
   ```

   **Replace with \<your-github-username\>!**

3. Move to project directory:

   ```bash
   cd Add-Social-Profiles-Hacktoberfest2023
   ```

   run

   ```bash
   npm install
   npm start
   ```

4. Before you make any changes, [keep your fork in sync](https://www.freecodecamp.org/news/how-to-sync-your-fork-with-the-original-git-repository/) to avoid merge conflicts:

   ```bash
   git remote add upstream https://github.com/tsongtheng/Add-Social-Profiles-Hacktoberfest2023.git
   git pull upstream main
   ```

5. After adding the upstream and checking that all files are up to date, we now will create new branch before editing any files. There are two ways to do so:

   ```bash
   git checkout -b <branch-name>
   ```

   ```bash
   git branch <branch-name>
   git switch <branch-name>
   ```

6. If you are **_assign_** to anyone of the **issue listed** or you have created your own **issues**, work on that issues first.

📍 Now, before making any **PR**, add your social profiles to this repository and be part of the project. You can follow the instruction below.

- On **`src`** directory(folder) got to `Profiles/Profiles.js`. Inside you will see an array of objects, each one represents a name, imageLink and social account links of someone. Copy the code below and paste it at the end, fill it out with your name, imageLinks(you can copy any social account profile image address and paste it) and social accounts links.

```js
let Profiles = [
  {
    name: "Tipchan Sontheng",
    imageLink: "https://avatars.githubusercontent.com/u/69814398?v=4",
    twitterLink: "https://twitter.com/tipchan_s",
    facebookLink: "",
    githubLink: "https://github.com/tsongtheng",
    linkedinLink: "https://www.linkedin.com/in/tipchan-songtheng-5417991a8/",
    instagramLink: "",
  },
];
```

- ⚠️ **IMPORTANT NOTE #1:** If you don't have any of the 5 social media account just leave it blank as shown above.

- ⚠️ **IMPORTANT NOTE #2:** Please do **NOT** edit or remove other people from the list. This will likely prevent your PR from being merged.

7. Add the changes with `git add`, `git commit` ([write a good commit message], if possible):

   ```bash
   git add .
   git commit -m "<your-commit-message>"
   ```

8. Push your changes _to your repository_:

   ```bash
   git push --set-upstream origin <your-branch-name>
   ```

9. Go to the GitHub page of _your fork_, and make a pull request:

10. Wait until your pull request is merged. If there are any conflicts, you will get a notification and have to resolve the conflict.
