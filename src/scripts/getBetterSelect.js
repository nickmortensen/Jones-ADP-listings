import getCitiesAndFrequencyArrays from './getCitiesAndFrequencyArrays.js'; // Aarray featuring arrays with a city name[0] and how many jobs there are total attached to that city[1]


function createFewerJobCitiesOptionItem( city ) {
	// let openings = city[1];
	let cityName = city[0].split( ',' )[0].trim();
	// let altTag   = `There is a single opening in ${cityName}`;
	return `<span class="singleJobCity">${cityName}</span>`
}

function singleCityOptionContainer( citiesPlusFrequency = [] ) {
	const cityState = citiesPlusFrequency[0].trim();
	const cityName  = cityState.split( ',' )[0].trim();
	const openings  = citiesPlusFrequency[1]
	const altTag    = 1 === openings ? `There is a single opening in ${cityState}` : `There are ${openings} job openings in ${cityName}`;
	const labelText = cityName
	const output    = `
<span class="city-select-container" data-jobs="${openings}" title="${altTag}">
	<input id="${cityName}" class="city-select-input" type="checkbox" value="${cityName}" />
	<label for="${cityName}" class="city-select-label">${labelText}</label>
</span>`
		return output;
}


/**
 * Output an HTML element for the user to check boxes for the cities they wish to see the jobs from
 * @param {array} getCitiesAndFrequencyArrays Azrray of arrays with [0]location and [1]quantity of openings
 * @returns
 */
 export default function getBetterSelectThree( data, windowWidth = 1200 ) {
	let width  = Number( windowWidth )
	let height = Number( window.innerHeight )
	let citiesPlusFrequency      = getCitiesAndFrequencyArrays( data )
	let justCities               = citiesPlusFrequency.map( cities => cities[0].split(',')[0].trim() )
	let justCityStates           = citiesPlusFrequency.map( cities => cities[0] )

	let allTheOptions              = []
	let singleCityHTMLArray        = []
	let twoCitiesHTMLArray         = []
	let threeOrMoreCitiesHTMLArray = []



	const onlyTwoCities       = citiesPlusFrequency.filter( city => city[1] === 2 )
	const onlyOneCity         = citiesPlusFrequency.filter( city => city[1] === 1 )
	const threeOrMoreCities   = citiesPlusFrequency.filter( city => city[1] > 2 )

	onlyOneCity.forEach( city => singleCityHTMLArray.push( singleCityOptionContainer( city ) ) )
	onlyTwoCities.forEach( city => twoCitiesHTMLArray.push( singleCityOptionContainer( city ) ) )
	threeOrMoreCities.forEach( city => threeOrMoreCitiesHTMLArray.push( singleCityOptionContainer( city ) ) )

	let lessThanTwoHTMLArray = [...singleCityHTMLArray,...twoCitiesHTMLArray]
	const totalCities        = getCitiesAndFrequencyArrays.length;

	let buttonContainer = '<div class="select-cities-bottom-button-container">';
	buttonContainer    += '<button type="button" id="clearSelectedCities" class="select-cities-bottom-button" alt="reset the cities checkboxes to all be unchecked" title="filter jobs by city using the checkboxes" disabled>Filter By City</button>';
	buttonContainer    += '</div> <!-- end div.select-cities-bottom-button-container -->';

	let checkboxes = '<div class="cities-select-container">';
	checkboxes    += threeOrMoreCitiesHTMLArray.join('')
	// checkboxes    += '<details><summary>More Cities</summary>'
	// checkboxes    += lessThanTwoHTMLArray.join('')
	// checkboxes    += '</details>'
	checkboxes    += '</div><!-- end div.cities-select-container -->';

	let output = `
<div class="job-requisitions-select-element" data-totalCities="${totalCities}">
	<div class="select-cities-top-container">
		<button type="button" class="toggle-hidden-cities">Filter By City</button>
	</div><!-- end .select-cities-top-container-->
`
	output    += '<div class="select-cities-bottom-container">';
	output    += checkboxes;
	output    += buttonContainer;
	output    +='</div><!-- end div.select-cities-bottom-container-->';
	output    += '</div><!-- end div.job-requisitions-select-element -->';
	return output;
}

