# Jones Sign Webflow Career Module :wrench:,



> NOTE:

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [TL;DR](#tldr)
- [Links](#links)
- [Images](#images)

- [careers.html page](#optional)
- [MIT License](#mit-license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## TL;DR

Simple HTML, CSS, & Javascript for a module that inserts Current [ADP WorkfoceNow](https://workforcenow.adp.com/mascsr/default/mdf/recruitment/recruitment.html?cid=204ff1cf-3f7e-4fae-984d-f0f3787bac3f&ccId=19000101_000001&type=MP&lang=en_US) Listings from Jones Sign Company into a Webflow page.


## Installing

1. If you are working with the Jones Webflow instance -- head to the backend of the page that resolves to [https://jonessign.com/careers]
2. Add the following code after the section that contains the "Explore Current Openings" Call-to-action (near top)
```

<!--
	++++++++++++++++++++++++++++++++++++
		JOB REQUISITIONS MODULE
	++++++++++++++++++++++++++++++++++++
-->
<div class="section whitesmoke wf-section requisitions">
	<div class="top-job-requisitions">
		<h3>Currently Open</h3>
	</div>
	<div id="job-requisitions-module">
		<div id="job-requisitions-select-element-container" class="section blue-section"></div>
		<div id="job-requisitions-all-requisitions-container" class="whitesmoke"></div>
	</div>
</div>
<!--++++++++++++++++++++++++++++++++++++
	END JOB REQUISITIONS MODULE
++++++++++++++++++++++++++++++++++++
-->

```
3. Add everything from the script tag at the bottom of index.html to the bottom of the webflow page
4. Ensure that you add the following line to the head tag in the page:
```
<link href="https://jobs.jonessign.com/styles/main.min.css" rel="stylesheet" type="text/css">
```
## Images

### Image Files
Images don't live in this git repository and they certainly aren't spit out from our job listings on [ADP WorkfoceNow](https://workforcenow.adp.com/mascsr/default/mdf/recruitment/recruitment.html?cid=204ff1cf-3f7e-4fae-984d-f0f3787bac3f&ccId=19000101_000001&type=MP&lang=en_US)

Instead they'll come [from the secure remote site at jobs.jonessign.com](https://jobs.jonessign.com/images) & that is something that works as an MVP right now and I'll be expanding the offerings as well as optimizing these images as time goes on

## Optional
Most of these files also live in a testing environment at https://jobs.jonessign.com & you can see a pretty decent [similacrum](https://jobs.jonessign.com) of what I am after here.


## [MIT License](LICENSE.md)
