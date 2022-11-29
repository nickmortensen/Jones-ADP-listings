/***
 * Apply whatever surrounding element I need to output the full url of a photo
 *
 * @param {string} photoname The name of the photo without the .jpg
 */
function getFullUrl( photoname, filetype = 'jpg', address = 'https://jobs.jonessign.com/images/' ) {
	return `${address}${photoname}`
}

/**
 * Determine the url of the photo to accompany the job requisition based on the name of the job.
 * @param {object} jobTitle The data array we pull down from the CURL Request for only a single job Requisition from ADP
 * @returns
 */
export default function getJobPhoto( jobTitle ) {
	let jobPhoto = 'https://picsum.photos/300/180';
	let output = jobPhoto;
	switch ( jobTitle ) {
		case 'Paint':
			case 'Painter':
				output = getFullUrl( 'paint_03.jpg' );
				break;
		case 'Billing Coordinator':
		case 'Subcontract Manager':
		case 'Proposal Coordinator':
			output = getFullUrl( 'electrical_service_coordinator.jpg' );
			break;
		case 'Fabricator':
			output = getFullUrl( 'fabrication_01.jpg' );
			break;
		case 'Letter Fabricator':
			output = getFullUrl( 'letter_fab_02.jpg' );
			break;
		case 'Vinyl Applicator':
			output = getFullUrl( 'vinyl_applicator.jpg' );
			break;
		case 'Assembler':
			output = getFullUrl( 'assembly_03.jpg' );
			break;
		case 'Installer':
			output = getFullUrl( 'install_01.jpg' );
			break;
		case 'Router Operator':
		case 'CNC Operator':
			output = getFullUrl( 'cnc_01.jpg' );
			break;
		case 'Associate Buyer':
			output = getFullUrl( 'electrical_service_coordinator.jpg' );
			break;
		case 'Estimator':
			output = getFullUrl( 'production_planner.jpg' );
			break;
		case 'Credit & Collection Manager':
			output = getFullUrl( 'call_center.jpg' );
			break;
		case 'HR Business Partner':
		case 'Project Manager':
			output = getFullUrl( 'production_planner.jpg' );
			break;
		case 'Sales Executive':
			output = getFullUrl( 'sales_04.jpg' );
			break;
		case 'Press Brake Operator':
		case 'Production Planner':
		case 'Estimator':
		case 'Project Manager':
			output = getFullUrl( 'director_project_management.jpg' );
			break;
		case 'CAD Programmer':
			output = getFullUrl( 'cad_01.jpg' );
			break;
		case 'Designer':
			output = getFullUrl( 'drafter.jpg' );
			break;
		case 'Director - National Accounts':
		case 'IT Helpdesk Analyst':
		case 'Accounting Manager':
			output = getFullUrl( 'designer.jpg' );
			break;
		case 'Production Supervisor':
		case 'Preconstruction Estimator':
			output = getFullUrl( 'jm_explains.jpg' );
			break;
		case 'Cabinet Shop Carpenter':
			output = getFullUrl( 'plc_01.jpg' );
			break;
		default:
			output = getFullUrl( 'plc_01.jpg' );

	}

	return output;
}


function getJobImageObject( jobTitle ) {
	let jobImageObject = {
		url: 'https://picsum.photos/300/180',
		caption: 'A kitty photo as something has gone haywire'
	}

	let jobPhoto = 'https://picsum.photos/300/180';
	let output = jobPhoto;
	switch ( jobTitle ) {
		case 'Paint':
			case 'Painter':
				output = getFullUrl( 'paint_03.jpg' );
				break;
		case 'Billing Coordinator':
		case 'Subcontract Manager':
		case 'Proposal Coordinator':
			output = getFullUrl( 'electrical_service_coordinator.jpg' );
			break;
		case 'Fabricator':
			output = getFullUrl( 'fabrication_01.jpg' );
			break;
		case 'Letter Fabricator':
			output = getFullUrl( 'letter_fab_02.jpg' );
			break;
		case 'Vinyl Applicator':
			output = getFullUrl( 'vinyl_applicator.jpg' );
			break;
		case 'Assembler':
			output = getFullUrl( 'assembly_03.jpg' );
			break;
		case 'Installer':
			output = getFullUrl( 'install_01.jpg' );
			break;
		case 'Router Operator':
		case 'CNC Operator':
			output = getFullUrl( 'cnc_01.jpg' );
			break;
		case 'Associate Buyer':
			output = getFullUrl( 'electrical_service_coordinator.jpg' );
			break;
		case 'Estimator':
			output = getFullUrl( 'production_planner.jpg' );
			break;
		case 'Credit & Collection Manager':
			output = getFullUrl( 'call_center.jpg' );
			break;
		case 'HR Business Partner':
		case 'Project Manager':
			output = getFullUrl( 'production_planner.jpg' );
			break;
		case 'Sales Executive':
			output = getFullUrl( 'sales_04.jpg' );
			break;
		case 'Press Brake Operator':
		case 'Production Planner':
		case 'Estimator':
		case 'Project Manager':
			output = getFullUrl( 'director_project_management.jpg' );
			break;
		case 'CAD Programmer':
			output = getFullUrl( 'cad_01.jpg' );
			break;
		case 'Designer':
			output = getFullUrl( 'drafter.jpg' );
			break;
		case 'Director - National Accounts':
		case 'IT Helpdesk Analyst':
		case 'Accounting Manager':
			output = getFullUrl( 'designer.jpg' );
			break;
		case 'Production Supervisor':
		case 'Preconstruction Estimator':
			output = getFullUrl( 'jm_explains.jpg' );
			break;
		case 'Cabinet Shop Carpenter':
			output = getFullUrl( 'plc_01.jpg' );
			break;
		default:
			output = getFullUrl( 'plc_01.jpg' );

	}

	return jobImageObject;
}
