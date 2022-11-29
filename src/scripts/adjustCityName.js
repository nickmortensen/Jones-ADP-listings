/**
 * Adjusts the name of a city into the more familiar nearest neighbor. "De Pere" will become "Green Bay"
 * @param {string} requisitionCity The name of the sity
 * @returns {string} The new name for the city.
*/
export default function adjustCityName( requisitionCity ) {
	let cityName;
	switch( requisitionCity ) {
		case 'De Pere':
			cityName = 'Green Bay';
			break;
		case 'Ashland':
			cityName = 'Richmond';
			break;
		case 'Minneapolis':
			cityName = 'St. Paul';
			break;
		default:
			cityName = requisitionCity
	}
	return cityName;
}
