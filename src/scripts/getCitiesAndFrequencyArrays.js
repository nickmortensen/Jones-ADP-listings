import adjustCityName from './adjustCityName.js';
/**
 * Builds a unique array of all the cities that we have any job opening in.
 * @param {array} allJobRequisitions The data array we pull down from the CURL Request for job Requisitions to ADP
 * @returns
 */

function getOnlyLocations( jobRequisition ) {
	let outputArray         = []
	jobRequisition.requisitionLocations.forEach( location => {
		const loc           = location.nameCode.shortName;
		const city          = loc.split(',')[0].trim();
		const state         = loc.split(',')[1];
		outputArray.push( `${adjustCityName( city )}, ${state}` );
	})
	return outputArray;
}

/**
 * Get an array Featuring arrays with a city name and how many jobs there are total attached to that city
 * @param {*} allJobRequisitions The data received back from the CURL request to ADP
 * @returns
 */
 export default function getCitiesAndFrequencyArrays( allJobRequisitions ) {
	// empty array that will eventually be all of the cities on every active job requisition
	const totalLocations  = []
	allJobRequisitions.forEach( jobRequisition => totalLocations.push( getOnlyLocations( jobRequisition ) ) )

	// @link https://stackoverflow.com/questions/54351817/what-exactly-is-concat-apply-doing-to-flatten-an-array
	const totalLocationsArray = [].concat( ...totalLocations )

	// All possible cities is a pretty big array, so let us sort it by frequency of the items,
	const cityCounter = totalLocationsArray.reduce( ( counter, key ) => {
		counter[key] = 1 + counter[key] || 1;
		return counter;
	}, {} )

	// Sort the cities array by how many jobs have this city listed as a location -- most to least
	const sortedCities = Object.entries( cityCounter ).sort( ( a, b ) => b[1] - a[1] );
	return sortedCities;
}
