Getting Started with Pedagogy Toolkit Templates
====
## Building Social Repositories and Extending their Applications 

##Social Knowledge Creation in the Humanities | DHSI 2015 

Read more about the templates branch in the [Pedagogy Toolkit documentation](http://pedagogy-toolkit.org/documentation/documentation.html#teach-in-the-cloudspan-classarrowh2span).

#Getting started with GitHub

Sign-up for a GitHub account at https://github.com/join .

As soon as you have created an account, be sure to verify your e-mail. You will receive an automated e-mail from GitHub (do this straight away).

In the following steps, we will deal with basic branching and forking. Read more about these and other aspects of Git and Github at https://help.github.com/ and https://git-scm.com/ .

#Setting up your website

##Forking Pedagogy Toolkit

Naviagte to the Pedagogy Toolkit repository and view the "templates" branch at https://github.com/axchristie/toolkit/tree/templates .

Now we will copy the Pedagogy Toolkit source code to your account. Click "fork" to copy the repository.

![](http://acrl.ala.org/techconnect/wp-content/uploads/2013/05/github-fork-btn.png)

##Configuring your repository

You are now viewing your copy of the Pedagogy Toolkit code, which you can repurpose for your own projects. Let's set up your repository.

First, we need to replace the "gh-pages" branch with the "templates" branch. You may preserve the original gh-pages branch as another branch if you would like to revisit it. In the following steps, we'll simply delete it.

Go to "Settings" and change the Default branch to "templates."

Return to the repository and click "2 branches." Then delete the gh-pages branch by clicking the red trash can.

Return to the repository once more and click "branch: templates." Type "gh-pages" to create a new branch based on the templates branch.

Now return to settings and switch the default branch back to gh-pages.

**We will now edit and configure your website. Make sure you are working on the gh-pages branch (you may delete the old "templates" branch if you wish).

##Getting started with editing

You may either work directly on the GitHub website or download the GitHub client if you prefer to work locally. If you're not sure where to start, I suggest working online first and downloading the client at the end of today's workshop.

The GitHub client is available for download at https://mac.github.com/  and https://windows.github.com/ https://mac.github.com/  .
 
##Lauching your project site

The current name of your website is "toolkit." If you would like to change the name of your site,  you may do so by changing the repository name in "Settings."

Now click on "_config.yml." Once the file is open in your browser, click the pen logo to edit the file.

![](https://help.github.com/assets/images/help/repository/edit-file-edit-button.png)

We will now set the site baseurl to match the repository name you have chosen. Replace "template" with the name of your repository (if you have chosen to mantain the "toolkit" name, then replace "template" with "toolkit"). Be sure not to delete the slash.

Click "commit changes" to save your update. Congratulations on your first commit!

Your website is not viewable online at yourusername.github.io/yourrepository name (i.e., axchristie.github.io/ENGL135 ). It may take a few minutes for changes you have made to appear online.

Your project site is now live. Congratulations!

#Configuring your project site

##The basic layout of the repository

Congratulations! You now have a socially editable repository that corresponds to an active website. Updates made to this repository will automatically update the website, allowing you to easily design and share web content with students, colleagues, and so on. You may socially author your repository with other users on GitHub.

Let's examine the broad structure of your repository. There are three main types of folders present.

These correspond to code you may wish to edit later on:
_layout
_site
css

This is where we will add and edit site pages:
_posts

This is where we will add and edit main navigation pages:
index.html
Activities/index.html
Resources/index.html
Contact

*about the index.html file
This file will display as a webpage online. For instance, the index.html file in the main directory corresponds to the homepage for your site. There are also index.html files in the "Activites," "Resources," and "Contact" folders, and they correspond to the different navigation links you may follow on the site.

Each of the above folders corresponds to a different page, and each page corresponds to a different variable in the config.yml file. For instance, "activites" is stored under the variable "page2" in the config.yml file.

##Editing main navigation items

Each menu option corresponds to a page variable in the config.yml file. Replace these variables with your own options to edit the main navigation bar.

You may also change the "name" and "subtitle" variables to update the title of your site.

Edit the config.yml file and see the changes go live on your site! You will need to update the folder names and post categories manually to reflect the changes you've made (we will return to this process later).

##Editing posts

Posts correspond to individual pages on your website. Each post is filtered into a different category, and each category of posts appears on a different index.html page. You may edit existing posts as well as create your own.

##Frontmatter

This section allows you to configure basic information about the post.

Title: this variable stores the title of the post/page.
Categories: this variable categorizes the post, with the category for each main navigation page listed in its index.html file.
Images: this variable stores the image associated with the post.

Image options include the following words: books, bluebook, hamlet, clueless, focus, feather, typecase, TBA.

To add your own images, upload the image file to assets/images (this must be done using the GitHub client or Git) and add a corresponding entry for the image in style.css. Images must be roughly 225 x 150 pixels. For example, here is the css entry for the TBA image:

```css
.TBA{
	background-image:url(../assets/images/TBA.jpg);
}
```

##Editing posts in markdown

Posts are written in a format called markdown. Here are a few quick starters

```
#This is a header

##This is a second-level header

* This is a bullet point item

![](http: https://media4.giphy.com/media/QUEFPDQhw89bi/200_s.gif “this is an image”)[This is a link]( https://media4.giphy.com/media/QUEFPDQhw89bi/200_s.gif)

```