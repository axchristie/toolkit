---
layout: documentation
title: Documentation
categories: documentation
picture: 
---

##Introduction<span class="arrowh2"></span>

###Site Overview<span class="arrowh3"></span>

{{ site.name }} {{ site.subtitle }} is a teaching website that offers materials for use in composition, rhetoric, and literature courses. It is intended primarily for instructors of first-year courses, particularly those who are interested in digital approaches to teaching and would like to learn more. More than simply a website for finding material, {{ site.name }} is built on top of a [public repository](https://github.com/axchristie/test) of teaching documents that is open to all contributors. The content found here is free to use; this site is open source and everything is shared under a [CC BY-SA license](http://creativecommons.org/licenses/by-sa/3.0/deed.en_US). The documentation that follows outlines what you can find on this site (including our Creative Commons license), how to contribute your own teaching content for others to access, and an introduction to powering-up your classroom by teaching with the cloud.

####Philosophy<span class="arrowh4"></span>

This site applies an open source philosophy to course development.

Every year, teachers generate a wealth of teaching documents, lesson plans, and new approaches to pedagogy. Building and refining these materials over time is the result of conversations and collaborations amongst teachers. Yet these collaborative efforts are often limited by physical boundaries, confined to groups within home institutions and at conference meetings. What if we could use new forms of online interaction to improve our teaching together? This site aims to do just that. {{ site.name }} serves as a hub for sharing teaching documents and activities. It is designed to improve the effectiveness and accessibility of digital approaches to teaching while lowering the barrier of entry.

##Sharing<span class="arrowh2"></span>

###Using the toolkit<span class="arrowh3"></span>

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
<object width="480" height="385" style="max-width: 100%;"><param name="movie" value="http://www.youtube.com/v/92eAN0Bjd84&amp;hl=en_US&amp;fs=1"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="http://www.youtube.com/v/92eAN0Bjd84&amp;hl=en_US&amp;fs=1" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="480" height="385" style="max-width: inherit;"></embed></object>
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

Using Git and the GitHub client, the toolkit can be be deployed as a teaching cloud or  a teaching website hosted via GitHub pages. Use the repository to push updated teaching material to the cloud and access it from anywhere. Or take your teaching further by turning your repository into an open source teaching website, reusing the code from this website or by using a [website template](https://github.com/axchristie/test/tree/templates) from the "templates" fork. All code is designed for [GitHub Pages](http://pages.github.com/) and [Jekyll](http://jekyllrb.com/) with extensibility and reusability in mind. Comments and additions are welcome.

##Bibliography<span class="arrowh2"></span>

###Projects<span class="arrowh3"></span>

Armoza, Jonathan, Leigh Bonds, et. al., eds.  (Overseen by a [steering/curatorial board](http://dirtdirectory.org/steeringcuratorial-board) and [editorial board](http://dirtdirectory.org/editorial-board).) [DiRT Directory](http://dirtdirectory.org/). Dirtdirectory.org, n.d. Web. 15 May 2015.

Ball, Cheryl, Douglas Eyman, et. al., eds. *[Kairos: A Journal of Rhetoric, Technology, and Pedagogy](http://kairos.technorhetoric.net/ )*. Kairos.technorhetoric.net, Summer 2015. Web. 15 May 2015. 

Barnett, Fiona, Staci Stutsman, Amanda Starling Gould, Kalle Westerling, eds. "[The Pedagogy Project](http://www.hastac.org/pedagogy-project/pedagogy-project)." *HASTAC*. HASTAC, n.d. Web. 15 May 2015. 

Buckner, Brandon, Dan Lawson, Tim Lockridge, Matthew Vollmer. [Outcome-Centered Electronic Library of Teaching Resources (O.C.E.L.O.T.)](http://www.ocelot.english.vt.edu/). Ocelot, 2015. Web. 15 May 2015.

[The Digital Repository for Academic Writing (DRAW)](http://draw.isucomm.iastate.edu/). ISUComm, 2015. Web. 15 May 2015.

Frost Davis, Rebecca, Matthew K. Gold, Katherine D. Harris, and Jentery Sayers, eds. *[Digital Pedagogy in the Humanities: Concepts, Models, and Experiments](https://github.com/curateteaching/digitalpedagogy/blob/master/announcement.md).* GitHub, Inc., 19 Dec. 2014. Web. 15 May 2015.

Harris, Katherine D., ed. "[Technology and the Classroom](http://technologyandtheclassroom.pbworks.com/w/page/21104925/FrontPage)." PBworks, 7 Dec. 2012. Web. 15 May 2015.

"[Lesson Plans](http://lessonplans.dwrl.utexas.edu/)." *Digital Writing & Research Lab (DWRL)."* Dwrl.utexas.edu, n.d. Web. 15 May 2015. 

Sava Saheli Singh, ed. "[JiTP Assignments](http://jitp.commons.gc.cuny.edu/category/assignments/)." *The Journal of Interactive Technology & Pedagogy (JiTP)*. JiTP, 21 May 2015. Web. 25 May 2015. 

Scholz, R. Trebor, ed. "[A Digital Learning Tool Kit](http://learningthroughdigitalmedia.net/a-digital-learning-tool-kit)." *Learning through Digital Media: Experiments in Technology and Pedagogy*.  Learning Through Digital Media, 31 March 2011. Web. 15 May 2015.

###Texts<span class="arrowh3"></span>

Bemer, Amanda; Moeller, Ryan M.; & Ball, Cheryl E.  "[Designing collaborative learning spaces: Where material culture meets mobile writing processes](http://www.cptsc.org/pp/vol1-2/bemer_moeller_ball1-2.pdf)." *Programmatic Perspectives: Journal of the Council for Programs in Technical and Scientific Communication*. 1(2), Sept 2009: 139-166.

Bjork, Olin. "[Digital Humanities and the First-Year Writing Course](http://www.openbookpublishers.com/htmlreader/DHP/chap04.html)" *Digital Humanities Pedagogy: Practices, Principles and Politics.* [S.l.] : Open Book Publishers, 2012.

Davidson, Cathy. "[Essential Tool Kit for Peer Learning and Peer Teaching](http://www.hastac.org/blogs/cathy-davidson/2013/06/04/essential-tool-kit-peer-learning-and-peer-teaching)." *HASTAC.* HASTAC, 4 June 2013. Web. 22 May 2015. 

Ellsworth, Elizabeth. "[The Wicked Problem of Pedagogy, An Afterword](http://learningthroughdigitalmedia.net/the-wicked-problem-of-pedagogy-an-afterword)." *Learning through Digital Media: Experiments in Technology and Pedagogy*.  Scholz, R. Trebor, ed. 2011.

Frost Davis, Rebecca. "[Digital Pedagogy Keywords](http://www.slideshare.net/rebeccadavis/digital-pedagogy-keywords)." Slideshare.net, 20 Feb. 2013. Web. 10 May 2015.

Fyfe, Paul. "[The Scale of Digital Pedagogy](https://www.youtube.com/watch?v=-xIxb5Bil5s)." 2014.

Heidebrink-Bruno, Adam. "[Syllabus as Manifesto: A Critical Approach to Classroom Culture](http://www.hybridpedagogy.com/journal/syllabus-manifesto-critical-approach-classroom-culture/)." *Hybrid Pedagogy*.  Hybrid Pedagogy, 28 August 2014. Web. 15 May 2015.

--- "[Envisioning the Radical Syllabus: A Critical Approach to Classroom Culture, Part 2](http://www.hybridpedagogy.com/journal/envisioning-radical-syllabus-critical-approach-classroom-culture-part-2/)." *Hybrid Pedagogy*.  Hybrid Pedagogy, 20 Jan. 2015. Web. 15 May 2015. 

Jakacki, Diane. "[Digital Pedagogy at DHSI](http://lmc.gatech.edu/~djakacki3/blog/2012/06/17/digital-pedagogy-at-dhsi-part-the-second/)." Lmc.gatech.edu, 17 June 2012. Web. 10 May 2015.

Kays, Trent. "[Email Instruction in First Year Writing Courses](http://www.hastac.org/blogs/trentmkays/2014/02/18/04-email-instruction-first-year-writing-courses)." The Pedagogy Project. *HASTAC*. HASTAC, 18 Feb. 2014. Web. 15 May 2015.

Kules, Bill. "[Learning to Take a Learner’s Perspective](http://jitp.commons.gc.cuny.edu/learning-to-take-a-learners-perspective/)." Teaching Fails. *JiTP*. JiTP, n.d. Web. 15 May 2015.

Losh, Elizabeth. "[YouTube Pedagogy: Finding Communities of Practice in a Distributed Learning World](http://learningthroughdigitalmedia.net/youtube-pedagogy-finding-communities-of-practice-in-a-distributed-learning-world)." *Learning through Digital Media: Experiments in Technology and Pedagogy*.  Scholz, R. Trebor, ed. 2011.

Nowviskie, Bethany. "[Supporting Practice in Community](http://nowviskie.org/2015/practice-in-community/)." Nowviskie.org, 1 May 2015. Web 15 May 2015. 

Risam, Roopika. "[In Defense of Learning Outcomes](http://roopikarisam.com/2014/08/27/in-defense-of-learning-outcomes/)." Roopikarisam.com, 27 August 2014. Web. 15 May 2015.

Robin, Valerie. "[Addressing the Elephant: The Importance of Infrastructure](http://www.hybridpedagogy.com/journal/addressing-elephant-importance-infrastructure/)." *Hybrid Pedagogy*.  Hybrid Pedagogy, 15 Oct. 2014. Web. 15 May 2015. 

Scholz, R. Trebor. "[Introduction: Learning Through Digital Media" Learning Through Digital Media Experiments in Technology and Pedagogy](http://learningthroughdigitalmedia.net/introduction-learning-through-digital-media)." *Learning through Digital Media: Experiments in Technology and Pedagogy*.  Learning Through Digital Media, 31 March 2011. Web. 15 May 2015.

Spiro, Lisa. "[What are the Costs of Not Sharing](http://mediacommons.futureofthebook.org/question/what-are-major-sociallegalprofessional-stakes-sharing-online/response/what-are-costs-not-sh )?" MediaCommons, 11 Mar 2013. Web. 15 May 2015. 

Stommel, Jesse. "[Learning is not a Mechanism](http://www.hybridpedagogy.com/journal/repost/learning-not-mechanism/)."  *Hybrid Pedagogy*. Hybrid Pedagogy, 28 April 2015. Web. 15 May 2015. 

Wernimont, Jacqueline. "[Build a Better DH Syllabus](https://jwernimont.wordpress.com/2015/02/17/build-a-better-dh-syllabus/)."  Jwernimont.wordpress.com, 18 Feb 2015. Web. 15 May 2015.