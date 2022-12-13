/**
 * Tighten Job Title in the event it doesn't look good or has a location within the title.
 * @param {object} jobTitle The data array we pull down from the CURL Request for only a single job Requisition from ADP
 * @returns
 */
export default function getJobTitle( jobTitle ) {
	let title;
	switch ( jobTitle ) {
		case 'Letter Fabricator - Richmond':
			title = 'Letter Fabricator';
			break;
		case 'Fabricator - Richmond':
			title = 'Fabricator';
			break;
		case 'Fabricator - Green Bay':
			title = 'Fabricator';
			break;
		case 'Painter/Paint Prepper - Green Bay':
			title = 'Painter/Paint Prepper';
			break;
		case 'National Account Sales Executive - Signs & Branding':
			title = 'National Sales Executive';
			break;
		case 'Project Manager - National Account (Signs & Branding)':
			title = 'Project Manager - National Accounts';
			break;
		default:
			title = jobTitle;

	}

	return title;
}
