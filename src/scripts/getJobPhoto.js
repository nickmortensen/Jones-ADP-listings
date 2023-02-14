/***
 * Apply whatever surrounding element I need to output the full url of a photo
 *
 * @NOTE YOU WILL HAVE TO NAME THE PHOTOS in the ../images folder well enough to make this worthwhile
 *
 * @param {string} photoname The name of the photo without the .jpg
 */
// next line should be commented back in on a remote server while the line after that should be commented out
function getFullUrl( photoname, filetype = 'jpg', address = 'https://jobs.jonessign.com/images/' ) {
// function getFullUrl( photoname, filetype = 'jpg', address = 'images/' ) {
	return `${address}${photoname}`
}

/**
 *
 * @param {int} totalPhotos The quantity of photos that represent the job
 * @returns int random integer from zero up until 1 less than the totalphotos
 */
function getPhotoIndex( totalPhotos = 1 ) {
	let randomIndex = Math.floor( Math.random() * totalPhotos )
	if ( totalPhotos === 1 ) {
		randomIndex = 0
	}
	// gaurd against the filename being non-existant as I've started numbering them at zero
	// also guards against it being a negative number
	if ( ( totalPhotos === randomIndex ) && ( totalPhotos > 1 ) ) {
		randomIndex = randomIndex - 1;
	}
	return randomIndex;
}

/**
 *
 * @param {string} jobSlug Initial part of the photo name
 * @param {int} totalJobPhotos Total number of options we can use for a certain job listing
 * @returns string that is the name of the photo file plus the filetype
 */
function getJobPhotoFileName( jobSlug = 'general_0', totalJobPhotos = 0) {
	return `${jobSlug}${getPhotoIndex(totalJobPhotos)}.jpg`
}
/**
 * Determine the url of the photo to accompany the job requisition based on the name of the job.
 * @param {object} jobTitle The data we pull down from the CURL Request for only a single job Requisition from ADP
 * @returns string The name of the photo file to use for the job listing
 *
 *
 * TO DO
 * FIND PHOTOS FOR THE FOLLOWING JOB TITLES
 * 'Youth Apprenticeship'
 *
 *
 */
export default function getJobPhoto( jobTitle ) {
	let jobPhoto = 'plc_01.jpg';
	let jobSlug = 'general_0'
	let output = jobPhoto;
	let totalJobPhotos = 0
	switch ( jobTitle ) {
		case 'Paint':
		case 'Painter':
		case 'Painter/Paint Prepper':
		case 'Painter/Prepper - 2nd Shift':
		case 'Pintor Automotriz':
			totalJobPhotos = 2
			jobSlug        = 'painter_0';
			jobPhoto       = getJobPhotoFileName(jobSlug, totalJobPhotos)
			output         = getFullUrl(jobPhoto);
			break;


		// case 'Billing Coordinator':
		// case 'Subcontract Manager':
		// case 'Proposal Coordinator':
		// case 'Associate Buyer':

		/**
		 * Can I just make an array and use 'includes' instead of many case statements?
		 * YOU BET!
		 */
		case ['Billing Coordinator', 'Subcontract Manager', 'Proposal Coordinator', 'Associate Buyer'].includes( jobTitle.trim() ):
			output = getFullUrl( 'service_coordinator_00.jpg' );
			break;
		case 'Fabricator':
			totalJobPhotos = 3
			jobSlug        = 'fabricator_0';
			jobPhoto       = getJobPhotoFileName(jobSlug, totalJobPhotos)
			output         = getFullUrl( jobPhoto );
			break;
		case 'Letter Fabricator':
		case 'Fabricantes de Letreros':
			totalJobPhotos = 2
			jobSlug        = 'letter_fabricator_0'
			jobPhoto       = getJobPhotoFileName(jobSlug, totalJobPhotos)
			output         = getFullUrl( jobPhoto );
			break;
		case 'Vinyl Applicator':
			output = getFullUrl( 'vinyl_applicator_00.jpg' );
			break;
		case 'Vinyl Lead':
			output = getFullUrl( 'vinyl_lead_00.jpg' );
			break;
		case 'Assembler':
		case 'Assembler - PLC':
		case 'Ensamblaje':
			totalJobPhotos = 3
			jobSlug     = 'assembler_0'
			jobPhoto    = getJobPhotoFileName(jobSlug, totalJobPhotos)
			output      = getFullUrl( jobPhoto );
			break;
		case 'Installer':
		case 'Installer - Remote':
		case 'Instaladores de Letreros':
		case 'Proposals':
			totalJobPhotos = 4
			jobSlug        = 'installer_0';
			jobPhoto       = getJobPhotoFileName(jobSlug, totalJobPhotos)
			output         = getFullUrl(jobPhoto);
			break;
		case 'Router Operator':
		case 'CNC Operator':
		case 'CNC Routing Programmer':
			totalJobPhotos = 1
			jobSlug        = 'cnc_operator_0';
			jobPhoto       = getJobPhotoFileName(jobSlug, totalJobPhotos)
			output         = getFullUrl(jobPhoto);
			break;
		case 'Estimator':
			output = getFullUrl( 'production_planner.jpg' );
			break;
		case 'Credit & Collection Manager':
			output = getFullUrl( 'call_center_00.jpg' );
			break;
		case 'HR Business Partner':
		case 'Project Manager':
			output = getFullUrl( 'production_planner.jpg' );
			break;
		case 'Sales Executive':
		case 'National Account Sales Executive':
		case 'National Sales Executive':
		case 'Commercial Sales Exec':
			totalJobPhotos = 3
			jobSlug        = 'sales_0'
			jobPhoto       = getJobPhotoFileName(jobSlug, totalJobPhotos)
			output         = getFullUrl( jobPhoto );
			break;
		case 'Press Brake Operator':
		case 'Production Planner':
		case 'Estimator':
		case 'Project Manager':
			output = getFullUrl( 'director_project_management.jpg' );
			break;
		case 'CAD Programmer':
			output = getFullUrl( 'cad_00.jpg' );
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
		case 'Construction Project Lead':
		case 'Construction Project Director/Leader':
			totalJobPhotos = 3
			jobSlug        = 'construction_project_lead_0';
			jobPhoto       = getJobPhotoFileName(jobSlug, totalJobPhotos)
			output         = getFullUrl( jobPhoto );
			break;
		case 'Cabinet Shop Carpenter':
		case 'Lead PLC Assembler':
			totalJobPhotos = 2
			jobSlug        = 'plc_0';
			jobPhoto       = getJobPhotoFileName(jobSlug, totalJobPhotos)
			output         = getFullUrl(jobPhoto);
			break;
		case 'Youth Apprenticeship':
			totalJobPhotos = 2
			jobSlug        = 'youth_apprenticeship_0';
			jobPhoto       = getJobPhotoFileName(jobSlug, totalJobPhotos)
			output         = getFullUrl(jobPhoto);
			break;
		case 'Business Analyst':
		case 'Proposal Manager - National Accounts':
			totalJobPhotos = 2
			jobSlug        = 'business_analyst_0';
			jobPhoto       = getJobPhotoFileName(jobSlug, totalJobPhotos)
			output         = getFullUrl(jobPhoto);
			break;
		default:
			output = getFullUrl( 'designer.jpg' );

	}

	return output;
}


// function getJobImageObject( jobTitle ) {
// 	let jobImageObject = {
// 		url: 'https://picsum.photos/300/180',
// 		caption: 'A kitty photo as something has gone haywire'
// 	}

// 	let jobPhoto = 'https://picsum.photos/300/180';
// 	let output = jobPhoto;
// 	switch ( jobTitle ) {
// 		case 'Fabricator':
// 			output = getFullUrl( 'fabrication_01.jpg' );
// 			break;
// 		case 'Letter Fabricator':
// 			output = getFullUrl( 'letter_fab_02.jpg' );
// 			break;
// 		case 'Vinyl Applicator':
// 			output = getFullUrl( 'vinyl_applicator.jpg' );
// 			break;
// 		case 'Associate Buyer':
// 			output = getFullUrl( 'electrical_service_coordinator.jpg' );
// 			break;
// 		case 'Estimator':
// 			output = getFullUrl( 'production_planner.jpg' );
// 			break;
// 		case 'HR Business Partner':
// 		case 'Project Manager':
// 			output = getFullUrl( 'production_planner.jpg' );
// 			break;
// 		case 'Sales Executive':
// 			output = getFullUrl( 'sales_04.jpg' );
// 			break;
// 		case 'Press Brake Operator':
// 		case 'Production Planner':
// 		case 'Estimator':
// 		case 'Project Manager':
// 			output = getFullUrl( 'director_project_management.jpg' );
// 			break;
// 		case 'CAD Programmer':
// 			output = getFullUrl( 'cad_01.jpg' );
// 			break;
// 		case 'Designer':
// 			output = getFullUrl( 'drafter.jpg' );
// 			break;
// 		case 'Director - National Accounts':
// 		case 'IT Helpdesk Analyst':
// 		case 'Accounting Manager':
// 			output = getFullUrl( 'designer.jpg' );
// 			break;
// 		case 'Production Supervisor':
// 		case 'Preconstruction Estimator':
// 			output = getFullUrl( 'jm_explains.jpg' );
// 			break;
// 		case 'Cabinet Shop Carpenter':
// 			output = getFullUrl( 'plc_01.jpg' );
// 			break;
// 		default:
// 			output = getFullUrl( 'plc_01.jpg' );

// 	}

// 	return jobImageObject;
// }
