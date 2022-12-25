<h2>Guidelines on Reporting New Issues</h2>
If you find an issue and want to report it, GREAT! THANKS! Please include the following when reporting the issue:
 - Title and description of the issue
 - Useful tags, if any.
 - Anything, if applicable, that explains or reproduces the issue.
 - HAPPY HACKING!

<h2>Submitting PRs</h2>

CLICK [HERE](https://www.twitch.tv/videos/1686323964?t=02h45m01s) (which starts at 2:45:00) for a great tutorial from [Leon Noel](https://www.twitter.com/leonnoel) of [#100Devs](https://leonnoel.com/100devs/) on cloning, creating branches, pushing to your own branch, and making a pull request from your remote branch to the original repo's remote branch. More or less all you need to know to **start** contributing. 

There are more specifics depending on the project's guidelines as all have their own ultimate set of rules. This repository sticks to pretty standard practices when it comes to contributing.



Fork this repo & clone to your local machine:

```bash
git clone https://github.com/mathcodes/lc_hr_cw.git
```

Navigate to project directory.
```bash
cd lc_hr_cw
```
Create a new Branch
```bash
git checkout -b my-new-branch
```
Add your contribution
```bash
git add .
```
Commit your changes.
```bash
git commit -m "Relevant message"
```
Then push to your remote branch
```bashg
git push origin my-new-branch
```
Create a new pull request from your forked repository to the original repository and a maintainer will review it and either accept it, leave notes to fix some things, or close it (hopefully with notes with reasons. If any PRs are closed in this repo, there will be an explanation, an option to makes changes are submit a new one, or I will also make time to walk through the solution with you over a call! 

<h2>Commit Message Format</h2>

```
feat-<description>
```

For example, for <a href="https://github.com/mathcodes/lc_hr_cw/issues/60">this</a> issue, the commit message would be as follows:
  
```
feat-bug_correction
```
or something similar starting with `feat-`.


