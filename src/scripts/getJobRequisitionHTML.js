/**
 * Builds the HTML Card for a single job posting.
 * @param {object} singleJob The data array we pull down from the CURL Request for only a single job Requisition from ADP
 * @returns
 */

 function getCitiesTooltip( jobCities = [] ) {
	let output = '<span class="city-tooltip-container"> &ifr;'
	let open = '<span class="popover wider above">'
	if ( jobCities.length < 22 ) {
		open  = '<span class="popover above">';
	}
	output    += open;
	jobCities.forEach( city => {
		output += `<span class="city-tag" title="${adjustCityName(city.split(', ')[0])}">TRENTON</span>`
	})
	output += '</span>';
	output += '</span><!-- end span.city-tooltip-container-->';
	return output;
}

export default function getJobRequisitionHTML( jobInfo, index, cssClass = 'single-job' ) {
	/* Don't create the HTML if the item has the visibleToJobSeekerIndicator set to 'false' */
	if ( false === jobInfo.visibleToJobSeekerIndicator ) {
		return;
	}
	// const citystring               = jobInfo.locations.map( city => adjustCityName( city.split(', ')[0] ) ).join(',');
	const availableCities          = Array.isArray( jobInfo.locations ) ? jobInfo.locations.join( ' : ') : 'DEFAULT';
	const cityString = 'HAROLd'
	const citiesAreShown           = Array.isArray( jobInfo.locations ) && jobInfo.locations.length >= 1;
	const citiesTooltip            = getCitiesTooltip( jobInfo.locations );
	const jobPhoto                 = jobInfo.jobPhoto;
	const jobTitleFontsizeOverride = jobInfo.jobTitle.length > 29 ? 'font-size: 21px;' : 'font-size: inherit;'

	const popoverSingle = `
	<div class="joblocations">
		<span class="cityCount pornstache">${adjustCityName( jobInfo.locations[0].split(', ')[0] )}, ${jobInfo.locations[0].split(', ')[1]}</span>
	</div>`
	const citiesPopover = jobInfo.locations.length == 1 ? popoverSingle : `<div class="joblocations"><span class="cityCount">${jobInfo.locations.length} Locations</span> ${citiesTooltip}</div>`;
	const order = Number( index - 1 );
	const output = `
<div
	class="${cssClass}"
	data-citystring="${citystring}"
	data-open="${jobInfo.isOpen.toLowerCase()}"
	data-type="${jobInfo.isOpenType.toLowerCase()}"
	data-id="${jobInfo.id}"
	data-visibility="${jobInfo.visible}"
	data-openings="${jobInfo.openingsQuantity}"
	data-open-from="${jobInfo.effectiveDate}"
	data-cities="${availableCities}"
	data-job-title="${jobInfo.jobTitle}"
	data-order="${order}"
	>

	<div class="jobposted" data-key="effective-date">
		<strong>Posted:&nbsp; </strong>${jobInfo.effectiveDate}TURD
	</div><!-- end div.jobposted -->
	<div class="jobtitle" data-key="job-title">
		<a style="${jobTitleFontsizeOverride}" href="${jobInfo.links}" title="link to the ${jobInfo.jobTitle} on ADP WorkforceNow">${jobInfo.jobTitle}</a>
	</div><!-- end div.jobtitle -->
	<div class="jobphoto" style="background-image: url(${jobPhoto})"></div>
	${citiesPopover}
	<div class="joblink">
		<span>
			<a
				class="adp-joblink"
				href="${jobInfo.links}"
				title="link to the ${jobInfo.jobTitle} position on our current openings page on ADP WorkforceNow">
				Learn More
			</a>
		</span>
	</div><!-- end div.joblink -->
</div><!-- end div.single-job-->
`;

	return output;
}


