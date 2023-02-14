/**
 * Tighten Job Title in the event it doesn't look good or has a location within the title.
 * @param {object} jobTitle The data array we pull down from the CURL Request for only a single job Requisition from ADP
 * @returns
 */
export default function getJobTitle( jobTitle ) {
	let title;
	switch ( jobTitle.trim() ) {
		case 'Letter Fabricator - Richmond':
			title = 'Letter Fabricator';
			break;
		case 'Fabricator - Richmond':
			title = 'Fabricator';
			break;
		case 'Fabricator - Green Bay':
			title = 'Fabricator';
			break;
		case 'Construction Project Director/Leader':
			title = 'Construction Project Lead';
			break;
		case 'Commercial Sign/Branding Sales Executive':
				title = 'Commercial Sales Exec';
				break;
		case 'Pintor Automotriz (Painter)':
			title = 'Pintor Automotriz';
			break;
		case 'Ensamblaje (Assemblers)':
			title = 'Ensamblaje';
			break;
		case 'Instaladores de Letreros (Installer - Remote)':
			title = 'Instaladores de Letreros';
			break;
		case 'Fabricantes de Letreros (Metal Fabrication)':
			title = 'Fabricantes de Letreros';
			break;

		case 'Letter Fabricator - Green Bay':
			title = 'Letter Fabricator';
			break;
		case '2nd Shift Painter/Prepper':
			title = 'Painter/Prepper - 2nd Shift';
			break;
		case 'Painter/Paint Prepper - Green Bay':
			title = 'Painter/Paint Prepper';
			break;
		case 'National Account Sales Executive - Signs & Branding':
		case 'National Account Sales Executive':
		// case 'National Account Sales Executive':
			title = 'National Sales Executive';
			break;
		case 'Project Manager - National Account (Signs & Branding)':
			title = 'Project Manager - National Accounts';
			break;
		case 'Assembler - PLC - Richmond, VA':
		case 'Ensamblaje':
		case 'Assembler':
			title = 'Assembler - PLC'
			break;
		default:
			title = jobTitle;

	}

	return title.trim();
}
