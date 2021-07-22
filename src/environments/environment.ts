// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {

  production: false,
  baseUrlNotes : "https://localhost:44379/api/Send",
  baseurlRole:"https://localhost:44379/api/Send?noteId",
  baseUrl : "http://localhost:50471/Patient/Registration",
  basehospitalUrl : "http://localhost:50471/Hospital/Registration",
  baseUrlLogin: 'http://localhost:50471/login',
  baseUrlPatientList: 'http://localhost:64913/api/Admin/patient-listing',
  adminstatusUrl: 'http://localhost:64913/api/Admin/updatepatient',
  baseUrlPhysicianList: 'http://localhost:64913/api/Physician/physician-listing',
  baseUrlNurseList: 'http://localhost:64913/api/Nurse/nurse-listing',
 
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
