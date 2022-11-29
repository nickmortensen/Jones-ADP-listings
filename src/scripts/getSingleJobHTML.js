import adjustCityName from './adjustCityName.js'; // to normalize city names - i.e "Ashland" becomes "Richmond"
/**
 * Builds the HTML Card for a single job posting.
 * @param {object} singleJob The data array we pull down from the CURL Request for only a single job Requisition from ADP
 * @returns
 */

function getCitiesTooltip( jobCities = [] ) {
	let output = '<span class="city-tooltip-container"> &ifr;'
	let open   = jobCities.length < 22 ? '<span class="popover above">' : '<span class="popover wider above">';
	output    += open;
	jobCities.forEach( city => {
		output += `<span class="city-tag" title="${adjustCityName(city.split(', ')[0])}">${adjustCityName( city.split(', ')[0] )}</span>`
	})
	output += '</span>';
	output += '</span><!-- end span.city-tooltip-container-->';
	return output;
}

function getJobFigure( jobPhoto, jobName ) {

	return `
	<figure	class="only-on-narrow">
	<img src="${jobPhoto}" alt="representative image of the Jones Sign Company staff position: ${jobName}"/>
	<!--<figcaption>${jobName}</figCaption>-->
	</figure>
	`
}

// export default function getSingleJobHTMLTWO( jobInfo, index, cssClass = 'single-job' ) {
export default function getSingleJobHTMLTWO( { id, links, locations, jobPhoto, jobTitle, isOpen, visible, openingsQuantity, effectiveDate, isOpenType, visibleToJobSeekerIndicator } = jobInfo, index, cssClass = 'single-job' ) {
	/* Don't create the HTML if the item has the visibleToJobSeekerIndicator set to 'false' */
	if ( false === visibleToJobSeekerIndicator ) {
		return;
	}
	const citystring               = locations.map( city => adjustCityName( city.split(', ')[0] ) ).join(',');
	const availableCities          = Array.isArray( locations ) ? locations.join( ' : ') : 'DEFAULT';
	//const citiesAreShown           = Array.isArray( locations ) && locations.length >= 1;
	const citiesTooltip            = getCitiesTooltip( locations );
	const jobTitleFontsizeOverride = jobTitle.length > 29 ? 'font-size: 21px;' : 'font-size: inherit;'

	const popoverSingle = `
	<div class="joblocations">
		<h4 class="cityCount">${adjustCityName( locations[0].split(', ')[0] )}</h4>
	</div>`
	const citiesPopover = locations.length == 1 ? popoverSingle : `<div class="joblocations"><h3 class="cityCount">${locations.length } Locations</h3> ${citiesTooltip}</div>`;
	const order = Number( index - 1 );

	const jobImageFigure = getJobFigure( jobPhoto, jobTitle );
	const jobPostedDiv = `<div class="jobposted" data-key="effective-date"> <strong>Posted:&nbsp; </strong>${effectiveDate} </div><!-- end div.jobposted -->`
	const output = `
<div
	class="${cssClass}"
	data-citystring="${citystring}"
	data-open="${isOpen.toLowerCase()}"
	data-type="${isOpenType.toLowerCase()}"
	data-id="${id}"
	data-visibility="${visible}"
	data-openings="${openingsQuantity}"
	data-open-from="${effectiveDate}"
	data-cities="${availableCities}"
	data-job-title="${jobTitle}"
	data-order="${order}"
	>

	${jobImageFigure}

	<div class="job-information">
	${jobPostedDiv}
	<div class="jobtitle" data-key="job-title">
		<h3><a style="${jobTitleFontsizeOverride}" href="${links}" title="link to the ${jobTitle} on ADP WorkforceNow">${jobTitle}</a></h3>
	</div><!-- end div.jobtitle -->
	<div class="jobphoto not-on-narrow" style="background-image: url(${jobPhoto})"></div>
	${citiesPopover}
	<div class="joblink">
		<span>
			<a
				class="adp-joblink"
				href="${links}"
				title="link to the ${jobTitle} position on our current openings page on ADP WorkforceNow">
				Learn More
			</a>
		</span>
	</div><!-- end div.joblink -->
	</div> <!-- end div.job-information -->
</div><!-- end div.single-job-->
`;

	return output;
}


function getJobPictureElement( { url, alt }, jobNme ) {
	let picture = '<picture>'
	picture += `<source srcset="${imageReg}" />`
	picture += `<img src="${image}"" alt="${caption}"/>`
	picture += '</picture>'
	return picture;
}
