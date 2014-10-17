---
layout: tool
title: Voyant Tools
categories: tools
picture: voyant
---

##Voyant Tools <span class="arrowh2"></span>

###[Start teaching with Voyant](http://docs.voyant-tools.org/tools/) <span class="arrowh3"></span>

![](../assets/images/post/chart.png)

###Overview <span class="arrowh3"></span>

Voyant Tools offers an online environment for text analysis. Uses for its growing suite of tools include tracking word frequency, word collocation, and visualizing trends in texts both large and small (charting instances of diction, repeated concepts, characters, etc.). Voyant can be used to prompt close reading, track trends across one or multiple novels, and visualize trends in student writing.

###Documentation <span class="arrowh3"></span>

Voyant works with a range of file types, including plain text, RTF, XML, PDF, and .doc and .docx files (among others). Choose the tools you would like to work with and input text either by uploading files or copy-and-pasting.

Detailed instructions are included with the Voyant Tools [documentation](http://docs.voyant-tools.org/start/) and [screencast tutorials](http://docs.voyant-tools.org/videos/).

##Suggested Activities <span class="arrowh2"></span>

###Close reading at scale <span class="arrowh3"></span>

Use the [cirrus word cloud generator](http://voyeurtools.org/tool/Cirrus/) to visualize two or more related scenes for close reading. Ask students first to identify word trends or patterns within each visualization and then to construct arguments that connect the similarities or differences between the two visualizations. Each visualization can draw from one passage or combine a number of related passages.

####Example <span class="arrowh4"></span>

This example deals with Shakespeare's "Measure for Measure." Collect different passages that describe Angelo and Isabella, then visualize each collection of text as a word cloud. Ask students to consider what words are similar within each visualization and what the related words suggest about the characterization of Isabella and Angelo, respectively. Then ask students to compare the two characterizations by reading across both visualizations.

Angelo's passions (embodied)

![](../assets/images/post/CirrusAngelo.png)

<!--	Exported from http://voyeurtools.org/.
	Please note that this is an early version and the API may change.
	You are strongly encouraged to subscribe to a list to receive notifications
	of updates to Voyant (updated code, planned outages, etc.) – please send
	a message to sgsinclair@voyeurtools.org. -->
<form action='http://voyeurtools.org/tool/Cirrus/' method='get' target='_blank'>
<input type='hidden' name='corpus' value="1364685340542.3762" />
<input type='hidden' name='query' value="" />
<input type='hidden' name='stopList' value="stop.en.taporware.txt" />
<input type='hidden' name='docId' value="d1364616655627.77bf5027-f91d-74d6-8207-e4e2e405faf2" />
<input type="submit" value="View Cirrus in Voyant." />
</form>


Isabella's virtue (enskied)

![](../assets/images/post/CirrusIsabella.png)

<!--	Exported from http://voyeurtools.org/.
	Please note that this is an early version and the API may change.
	You are strongly encouraged to subscribe to a list to receive notifications
	of updates to Voyant (updated code, planned outages, etc.) – please send
	a message to sgsinclair@voyeurtools.org. -->
<form action='http://voyeurtools.org/tool/Cirrus/' method='get' target='_blank'>
<input type='hidden' name='corpus' value="1364685445202.3499" />
<input type='hidden' name='query' value="" />
<input type='hidden' name='stopList' value="stop.en.taporware.txt" />
<input type='hidden' name='docId' value="d1364616655627.b5aa006e-2d76-c2d2-25e3-3d93ec8c3e7d" />
<input type="submit" value="View Cirrus in Voyant." />
</form>

* Added by [Alex Christie](http://www.twitter.com/axchristie)

###Tracking concepts across text(s) <span class="arrowh3"></span>

Use the [Bubblelines](http://voyeurtools.org/tool/Bubblelines/) or [Corpus Term Frequencies](http://voyeurtools.org/tool/CorpusTypeFrequenciesGrid/) to identify related keywords, concepts, or characters across one or multiple works. Present the class with one or two visualizations that suggests a relationship; ask students to argue for or against the trend and support their positions with evidence from the text (discoverable using the keywords in context window).

####Example <span class="arrowh4"></span>

Visualize word trends in Jane Austen's *Pride and Prejudice* to compare the relationship between money, marriage, and wealth. Is there a relationship between marriage and money in the novel. If so, what evidence exists to characterize it? Why does wealth deviate from the observed trend? Is there a reason why references to wealth only occur at certain points in the novel?

![](../assets/images/post/TrendsAusten.png)

<!--	Exported from http://voyeurtools.org/.
	Please note that this is an early version and the API may change.
	You are strongly encouraged to subscribe to a list to receive notifications
	of updates to Voyant (updated code, planned outages, etc.) – please send
	a message to sgsinclair@voyeurtools.org. -->
<form action='http://voyeurtools.org/tool/TypeFrequenciesChart/' method='get' target='_blank'>
<input type='hidden' name='corpus' value="1377376915395.6277" />
<input type='hidden' name='docIdType' value="d1377320760502.b850c41d-542e-ae60-fb0d-c7b5a83bef5e:marriage" />
<input type='hidden' name='docIdType' value="d1377320760502.b850c41d-542e-ae60-fb0d-c7b5a83bef5e:money" />
<input type='hidden' name='docIdType' value="d1377320760502.b850c41d-542e-ae60-fb0d-c7b5a83bef5e:wealth" />
<input type='hidden' name='mode' value="document" />
<input type='hidden' name='limit' value="50" />
<input type="submit" value="View Word Trends in Voyant." />
</form>

* Added by [Alex Christie](http://www.twitter.com/axchristie)

###Viewing trends in student writing <span class="arrowh3"></span>

Use text analysis to visualize trends in student writing. Do certain patterns emerge across student work that the class can reflect upon? Voyant Tools can be used to present common points of difficulty in assignments and offer an engaging interface for students to examine their writing habits.