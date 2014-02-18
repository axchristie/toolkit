---
layout: documentation
title: Documentation
categories: documentation
picture: 
---

##Introduction<span class="arrowh2"></span>

###Site Overview<span class="arrowh3"></span>

Composition toolkit is a teaching website that offers materials for use in composition, rhetoric, and literature courses. It is intended primarily for instructors of first-year courses, particularly those who are interested in digital approaches to teaching and would like to learn more. More than simply a website for finding material, Composition toolkit is built on top of a [public repository](https://github.com/axchristie/test) of teaching documents that is open to all contributors. The content found here is free to use; this site is open source and everything is shared under a [CC BY-SA license](http://creativecommons.org/licenses/by-sa/3.0/deed.en_US). The documentation that follows outlines what you can find on this site (including our Creative Commons license), how to contribute your own teaching content for others to access, and an introduction to powering-up your classroom by teaching with the cloud.

####Philosophy<span class="arrowh4"></span>

This site applies an open source philosophy to course development.

Every year, teachers generate a wealth of teaching documents, lesson plans, and new approaches to pedagogy. Building and refining these materials over time is the result of conversations and collaborations amongst teachers. Yet these collaborative efforts are often limited by physical boundaries, confined to groups within home institutions and at conference meetings. What if we could use new forms of online interaction to improve our teaching together? This site aims to do just that. Composition Toolkit serves as a hub for sharing teaching documents and activities. It is designed to improve the effectiveness and accessibility of digital approaches to teaching while lowering the barrier of entry.

##Sharing<span class="arrowh2"></span>
###Using the toolkit <span class="arrowh3"></span>

####Teaching Resources <span class="arrowh4"></span>

Documents listed as teaching resources include lesson content (such as activity sheets and writing prompts), student aids (grammar handouts and the like), online texts for use in the classroom, pedagogic videos, and more. This content can be used to build course activities, integrate media into the classroom, and direct students toward research and writing aids.

####Online Tools <span class="arrowh4"></span>

Strategies for electronic approaches to teaching, including experiments in digital pedagogy, can be implemented using online tools in the classroom. Examples of these approaches include generating word clouds to prompt close reading and using online reading environments to identify areas of difficulty in an assigned text. The entry for each tool contains an overview (covering what the tool does), documentation (covering how the tool works), and a list of suggested uses in the classroom. Teachers are invited to share their success stories by adding new suggested activities for each tool.

##Contributing<span class="arrowh2"></span>
###Working with the teaching repository<span class="arrowh3"></span>

All teaching content on the site is housed in our [public repository on GitHub](https://github.com/axchristie/test). Each page on this site corresponds to a file in the ["_posts" folder](https://github.com/axchristie/test/tree/gh-pages/_posts) of that repository; for instance, [here](https://github.com/axchristie/test/blob/gh-pages/_posts/2013-12-12-documentation.md) is the file for this very page.

In order to add your own teaching material to the repository, you will need to [sign up for a GitHub account](https://github.com/). This process is free and usually takes less than a minute. Additions to the toolkit can be submitted via pull requests, and toolkit can be deployed as a teaching could or website by forking.

Further details on working with GitHub, including [forking](https://help.github.com/articles/fork-a-repo) and [pull requests](https://help.github.com/articles/using-pull-requests) can be found in the [GitHub documentation](https://help.github.com/). The conventions used by this repository are detailed below.

###Adding content<span class="arrowh3"></span>

All content on this site is formatted in [markdown](http://whatismarkdown.com/). Detailed descriptions of working with markdown can be found [on GitHub](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) and at [Daring Fireball](http://daringfireball.net/projects/markdown/). Guidelines for formatting each type of content this site hosts can be found below. This site also uses [Animate.css](http://daneden.github.io/animate.css/).

####Add a teaching resource <span class="arrowh4"></span>

Links to online teaching resources are formatted as follows.

{% highlight html %}
* [title](url)

{% endhighlight %}

For instance, a link to [Purdue OWL: Close Reading Strategies](http://owl.english.purdue.edu/owl/resource/616/01/) is written in markdown as the following.


{% highlight html%}
* [Purdue OWL: Close Reading Strategies](http://owl.english.purdue.edu/owl/resource/616/01/)
{% endhighlight %}

And the sentence above is written as follows.

{% highlight html%}
For instance, a link to [Purdue OWL: Close Reading Strategies](http://owl.english.purdue.edu/owl/resource/616/01/) is written in markdown as the following.
{% endhighlight %}

####Add a video <span class="arrowh4"></span>

Youtube videos can be added in markdown using the following. The string between "/v/" and "&amp" (here, "92eAN0Bjd84") is taken from the original youtube URL.

{% highlight html%}
<object width="480" height="385"><param name="movie" value="http://www.youtube.com/v/92eAN0Bjd84&amp;hl=en_US&amp;fs=1"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="http://www.youtube.com/v/92eAN0Bjd84&amp;hl=en_US&amp;fs=1" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="480" height="385"></embed></object>
{% endhighlight %}

####Add a file <span class="arrowh4"></span>

New files can be added to the repository using the [GitHub Client]() or Git. Files are located in the [assets]() folder and the link provided should use Google Docs Viewer along with a static URL for the raw hosted file. See the following example for reference.

{% highlight html%}
* [Millington, "The Playboy of the Western World](http://docs.google.com/viewer?url=https://github.com/axchristie/test/blob/gh-pages/assets/docs/sample_texts/drama/SP146_Playboy.doc?raw=true)
{% endhighlight %}

####Add an online tool <span class="arrowh4"></span>

Adding new online tools (or new pages more generally) requires acquainting yourself with the css and markdown conventions for the site. Add the new page by creating a markdown file that follows the YAML front-matter conventions used for the site. The layout and resource variables correspond to the type of content added. The picture variable corresponds to an image url indicated at the bottom of the style.css file for the site. Be sure to add a 280x240 image file (thumbnail) and the corresponding css for a new page. Existing pictures can also be reused.

Front-matter

{% highlight html%}
---
layout: resource
title: Close Reading
categories: resources
picture: focus
---
{% endhighlight %}


Headers

{% highlight html%}
####Add an online tool <span class="arrowh4"></span>
{% endhighlight %}

One-word headers also work as html anchors.


##Teach in the cloud<span class="arrowh2"></span>

Using Git and the GitHub client, the toolkit can be be deployed as a teaching cloud or  a teaching website hosted via GitHub pages. Use the repository to push updated teaching material to the cloud and access it from anywhere. Or take your teaching further by turning your repository into an open source teaching website, reusing the code from this website or by using a website template from the "templates" fork. All code is designed for [GitHub Pages](http://pages.github.com/) and [Jekyll](http://jekyllrb.com/) with extensibility and reusability in mind. Comments and additions are welcome.