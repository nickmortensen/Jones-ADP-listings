/**
 * Pull Relevant Data from a SINGLE location among the (often several) job requisition locations.
 * @param {object} location Relevant data from a single location -- typically among an array of 'requisitionLocations' within a job requisition
 * @returns
 */
function getIndividualLocationInfo( location ) {
	let cityState = location.hasOwnProperty( 'nameCode' ) ? location.nameCode.shortName : 'NOCITY, XX'
	let state     = location.address.hasOwnProperty('countrySubdivisionLevel1') ? location.address.countrySubdivisionLevel1.codeValue : 'XX';
	return {
		// locationID: location.itemID,
		locationID: location.nameCode.codeValue,
		cityState,
		//country: location.address.countryCode,
		city: location.address.cityName,
		state,
		streetAddress: location.address.lineOne,
		postalCode: location.address.postalCode,
	}
}

/**
 * Tuck the relevant location for a job requisition into a tidier array
 * @param {array} locationsArray
 */
export default function getTheLocations( locationsArray ) {
	let output = []

	if ( Array.isArray( locationsArray ) ) {
		locationsArray.forEach( location => output.push( getIndividualLocationInfo( location ) ) )
	}
	return output
}
