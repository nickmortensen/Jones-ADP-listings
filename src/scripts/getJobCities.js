import adjustCityName from './adjustCityName.js';
/**
 * Pull relevant links data from the links array in a given single job requisition.
 *
 * @param {Array} locationsArray Takes the links array from a single job requisision.
 * @returns array Containing the url for the job requisision.
 */
export default function getJobCities( locationsArray ) {
	const jobCitiesArray = [];
	if ( locationsArray.length ) {
		locationsArray.forEach( location => {
			if ( location.hasOwnProperty( 'nameCode' ) ) {
				let city = adjustCityName( location.nameCode.shortName.split( ',')[0] );
				let state = location.nameCode.shortName.split( ',');
				jobCitiesArray.push( `${city}` );
			}
		})
	}
	return jobCitiesArray;
}
