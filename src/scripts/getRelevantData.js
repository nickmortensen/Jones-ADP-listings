import getLinksData from './getLinksData.js';
import getJobCities from './getJobCities.js';
import getJobTitle from './getJobTitle.js';
import getJobPhoto from './getJobPhoto.js';


/**
 * Only pull select data from a job listing -- the stuff we'll need to use the getSingleJobHTML function.
 * @param {object} jobListing Job Listing is the data without any manipulation from a single job requisition run through the getRelevantData function
 * @returns {object} An object of data that we are most likely to use when building the HTML to display a single location.
 */
export default function getRelevantData( jobListing ) {
	let links                   = [ '', '' ]
	let isVisible               = jobListing.visibleToJobSeekerIndicator || true; // boolean
	let postingInstructionsQty  = jobListing.postingInstructions.length;
	let hasMoreThanOnePostingInstruction = postingInstructionsQty > 1;
	let postingInstructionIndex = ( jobListing.postingInstructions.length === 1 ) ? 0 : 1;
	let output                  = '#' // If no links are given, just output an empty string.

	let jobTitle = (jobListing.postingInstructions.length > 1 && jobListing.postingInstructions[1].nameCode.codeValue !== 'undefined' ) ? getJobTitle( jobListing.postingInstructions[1].nameCode.codeValue.replace( / and /g, ' & ' ) ) : getJobTitle( jobListing.postingInstructions[0].nameCode.codeValue.replace( / and /g, ' & ' ) )
	let altJobName = jobTitle;
	if ( Object.prototype.hasOwnProperty.call( jobListing.job.jobCode, 'shortName' ) ) {
		altJobName = jobListing.job.jobCode.shortName.trim();
	} else if( ! Object.prototype.hasOwnProperty.call( jobListing.job.jobCode, 'shortName' ) && Object.prototype.hasOwnProperty.call( jobListing.job.jobCode, 'longName' )) {
		altJobName = jobListing.job.jobCode.longName.trim()
	} else {
		altJobName = jobTitle;
	}
	jobTitle                    = jobTitle.trim()
	let hasLinks = Object.hasOwn( jobListing, 'links' );

	if ( hasLinks ) {
		links = getLinksData(jobListing.links);
	}

	if ( 'string' === typeof linksArray ) {
		output = linksArray
	} else if ( 'object' === typeof linksArray ) {
			let linksIndex = ( linksArray.length === 2 ) ? 1 : 0;
			output = linksArray[linksIndex].href;
	} else {
		output = 'links are undefined';
	}
const replaceR = /\sand\s/g;
	return {
		isVisible,
		clientRequisitionID: Number(jobListing.clientRequisitionID),
		id: jobListing.itemID,
		startDate: jobListing.projectedStartDate,
		visible: jobListing.visibleToJobSeekerIndicator,
		openingsQuantity: jobListing.openingsQuantity,
		companyName: jobListing.companyName,
		internalIndicator: jobListing.internalIndicator,
		locationVisibleIndicator: jobListing.locationVisibleIndicator,
		compensationVisibleIndicator: jobListing.compensationVisibleIndicator,
		effectiveDate: new Date( jobListing.requisitionStatusCode.effectiveDate ).toLocaleDateString(),
		isOpen: jobListing.requisitionStatusCode.shortName,
		isOpenType: jobListing.requisitionStatusCode.codeValue,
		locationVisibleIndicator: jobListing.locationVisibleIndicator,
		jobShortName: altJobName,
		jobTitle,
		jobPhoto: getJobPhoto( jobTitle.trim() ),
		visibleToJobSeekerIndicator: jobListing.visibleToJobSeekerIndicator,
		openingsQuantity: jobListing.openingsQuantity,
		links,
		// jobId: getLinksData( jobListing.links ).indexOf('jobId') ? new URL( links ).searchParams.get( 'jobId' ) : 0000,
		locations: getJobCities( jobListing.requisitionLocations ),
	}
}
