# Add-Social-Profiles-Hacktoberfest2023

Hello and welcome to **Add-Social-Profiles-Hacktoberfest2023**, a project for Hacktoberfest! This site is for beginners who are wiling to make a pull request to win the 2023 Hacktoberfest rewards.

# Features

You can checkout the social profiles of other people who has contributed to this repository.

# How to contribute

1. On the [GitHub page for this repository](https://github.com/tsongtheng/Add-Social-Profiles-Hacktoberfest2023), click on the button "**Star**" and then click on the button "**Fork**".

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

6. On your computer, open your text editor, and go to **src** directory (folder).

   Inside you will find **Profiles** directory, click on `Profiles.js`. You will see an array of objects, each one represents a name, imageLink and social account links of someone. Copy an example object and paste it at the end, fill it out with your name, imageLinks(you can copy any social account profile image address and paste it) and social accounts links.

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
   git add src/Profiles/Profiles.js
   git commit -m "<your-commit-message>"
   ```

8. Push your changes _to your repository_:

   ```bash
   git push origin <branch-name>
   ```

9. Go to the GitHub page of _your fork_, and make a pull request:

10. Wait until your pull request is merged. If there are any conflicts, you will get a notification and have to resolve the conflict.

# License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

# Image Credits

<!-- Image by <a href="https://pixabay.com/users/18706286-18706286/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5654794">18706286</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5654794">Pixabay</a> -->

Image by <a href="https://pixabay.com/users/manuchi-1728328/">1728328</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5654794">Pixabay</a>
