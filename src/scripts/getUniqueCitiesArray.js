/**
 * Builds a unique array of all the cities that we have any job opening in.
 * @param {array} allJobRequisitions The data array we pull down from the CURL Request for job Requisitions to ADP
 * @returns
 */

// function getOnlyLocations( jobRequisition ) {
function getOnlyLocations( { requisitionLocations } ) {
	let returnArray                    = []
	// let allLocationsForThisRequisition = jobRequisition.requisitionLocations;
	requisitionLocations.forEach( location => {
		returnArray.push( location.nameCode.shortName );
	})
	return returnArray;
}

export default function getUniqueCitiesArray( allJobRequisitions ) {
	// empty array that will eventually be all of the cities on every active job requisition
	const totalLocations  = []
	// let allPossibleCities = [];
	// allJobs is all the info from the CURL request
	allJobRequisitions.forEach( jobRequisition => totalLocations.push( getOnlyLocations( jobRequisition ) ) )

	const totalLocationsArray = [].concat.apply([], totalLocations )
	// All possible cities is a pretty big array, so let us sort it by frequency of the items,
	// That is, a city that appears 5 times will be before a city that appears only once

	const cityCounter = totalLocationsArray.reduce( ( counter, key ) => {
		counter[key] = 1 + counter[key] || 1;
		return counter;
	}, {} )

	// let sortedCities = Object.entries( cityCounter ).sort( ( a, b ) => b[1] - a[1]);const sortedCityCounter = Object.entries( cityCounter ).sort( ( a, b ) => b[1] - a[1]);
	const sortedCities = Object.entries( cityCounter ).sort( ( a, b ) => b[1] - a[1]);const sortedCityCounter = Object.entries( cityCounter ).sort( ( a, b ) => b[1] - a[1]);
	return sortedCities.map( city => city[0] )

}
