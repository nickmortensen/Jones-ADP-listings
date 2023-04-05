import adjustCityName from './adjustCityName.js'; // to normalize city names - i.e "Ashland" becomes "Richmond"
/**
 * Builds the Structured Data for a single job posting.
 * Schema.org markup to make an individual job listing more palatable to Google, Bing, etc
 * @link https://developers.google.com/search/docs/appearance/structured-data/job-posting
 * @param {object} singleJob The data array we pull down from the CURL Request for only a single job Requisition from ADP
 * @returns
 */


function getJobFigure( jobPhoto, jobName ) {

	return `
	<figure	class="only-on-narrow">
	<img src="${jobPhoto}" alt="representative image of the Jones Sign Company staff position: ${jobName}"/>
	<!--<figcaption>${jobName}</figCaption>-->
	</figure>
	`
}

// export default function getSingleJobHTMLTWO( jobInfo, index, cssClass = 'single-job' ) {
//export default function getJobPostingSchemaMarkup( { id, links, locations, jobPhoto, jobTitle, isOpen, visible, openingsQuantity, effectiveDate, isOpenType, visibleToJobSeekerIndicator } = jobInfo, index, cssClass = 'single-job' ) {




function getJobPictureElement( { url, alt }, jobNme ) {
	let picture = '<picture>'
	picture += `<source srcset="${imageReg}" />`
	picture += `<img src="${image}"" alt="${caption}"/>`
	picture += '</picture>'
	return picture;
}



export default function getJobStructuredData(jobInfo) {
	const { clientRequisitionID, id, startDate, visible, openingsQuantity, companyName, effectiveDate, jobTitle, jobShortName, jobPhoto, visibleToJobSeekerIndicator, employmentType } = jobInfo;
	const writeUp = 'This will be the description of the position in short'
	const jonesLogo = 'https://www.example.com/images/logo.png'
		const output =`{
			"@context" : "https://schema.org/",
			"@type" : "JobPosting",
			"title" : "${jobTitle}",
			"description" : "<p>${writeUp}</p>",
			"identifier": {
				"@type": "PropertyValue",
				"name": "WorkForceNowID",
				"value": "${clientRequisitionID}"
			},
			"datePosted" : "${effectiveDate}",
			"validThrough" : "${startDate}",
			"employmentType" : "${employmentType}",
			"hiringOrganization" : {
				"@type" : "Organization",
				"name" : "Jones Sign Company, Inc.",
				"sameAs" : "https://jonessign.com",
				"logo" : "${jonesLogo}"
			},
			"jobLocation": {
				"@type": "Place",
				"address": {
					"@type": "PostalAddress",
					"streetAddress": "1711 Scheuring Road",
					"addressLocality": "DePere",
					"addressRegion": "WI",
					"postalCode": "54115",
					"addressCountry": "US"
				}
			}
		}`
		return output;
	}
