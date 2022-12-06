function getRandom() {
	return Math.floor( Math.random() * 10 );
}

function fancyLog( message, random = true, shadow = true ) {
	const textColors = [ '#fff', '#ffc600', 'rgb(51,249,238)', 'rgb(163,245,28)', '#ffffff','#ffffff','#ffffff','#ffffff','rgb(51,249,139)','#ffffff' ]
	const bgColors   = [ 'rgba(0, 0, 0, 0.25)', 'rgba(28,54,245,0.6)', '#5f3ff1', 'rgb(188,45,14)', 'rgb(249,139,51)', 'rgb(249,139,51)', 'rgb(242,111,7)', 'rgb(242,111,7)', 'rgb(249,139,51)', 'rgb(51,161,249)' ]
	const padding    = 'padding: 1ch'
	const fontSize   = 'font-size: 1.4em'
	const lineHeight = 'line-height: 1.1'
	const fontWeight = 'font-weight: 500'
	let bgColor   = `background: ${bgColors[2]}`
	let textColor = `color: ${textColors[2]}`
	let showShadow = shadow ? 'text-shadow: 1px 1px 1px black' : 'text-shadow: 1px 1px 1px none';
	if ( true === random ) {
		bgColor = `background: ${bgColors[Math.floor( Math.random() * 10 )]}`
		textColor = `color: ${textColors[Math.floor( Math.random() * 10 )]}`
	}
	let stylesArray = [ padding, fontSize, lineHeight, fontWeight, bgColor, textColor, showShadow ];

	let style = stylesArray.join( ';' )

	console.log( `%c${message}`, style );

}

/* Check to see whether the requisition's cities contain any of the cirrently checked cities '*/
function checkArrayForArrayItem( haystackArray = [], needleArray = [] ) {
	return needleArray.some( needleArrayItem => haystackArray.includes( needleArrayItem ) );
}

function checkStringForArrayItem( needlesArray, haystackString ) {
	return needlesArray.some ( item => haystackString.includes( item ) );
}

function removeClassFromAllItems( items, classToRemove ) {
	[...document.getElementsByClassName( items ) ].forEach( item => {
		item.classList.contains( classToRemove ) && item.classList.remove( classToRemove )
	})
}

// Log Mouse position
function mouseMonitor(event) {
	let mouseX = event.pageX;
	let mouseY = event.pageY;

	fancyLog( `mouse position: X: ${mouseX}, Y: ${mouseY}` )
}

function getCertificateData() {
	let returnData = {
		certificate: {
			src: 'JonesSign_auth.key',
			type: 'P12'
		},
		client_id: '74cefca1-a742-4a40-9b1c-d52fe3309b15',
		client_secret: 'd2074c45-4ad1-47ba-a019-9391000148db',
		pattern: [
			'https://api.adp.com/*',
			'accounts.adp.com'
		],
	}
	return returnData;
}

export { mouseMonitor, getRandom, fancyLog, checkArrayForArrayItem, checkStringForArrayItem, removeClassFromAllItems }
