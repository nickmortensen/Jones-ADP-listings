/**
 * Pull relevant links data from the links array in a given single job requisition.
 *
 * @param {Array} linksArray Takes the links array from a singl ejob requisision.
 * @returns array  Containing the url for the job requisision.
 */
export default function getLinksData( linksArray ) {
	let output     = '#' // If no links are given, just output an empty string.

	if ( 'string' === typeof linksArray ) {
		output = linksArray
	} else if ( 'object' === typeof linksArray ) {
			let linksIndex = ( linksArray.length === 2 ) ? 1 : 0;
			output = linksArray[linksIndex].href;
	} else {
		output = 'links are undefined';
	}
	return output;
}
