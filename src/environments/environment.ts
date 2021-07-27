// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseUrl : "http://localhost:50471/Patient/Registration",
  basehospitalUrl : "http://localhost:50471/Hospital/Registration",
  baseUrlLogin: 'http://localhost:50471/login',
  baseUrlPatientList: 'http://localhost:64913/api/Admin/patient-listing',
  adminstatusUrl: 'http://localhost:64913/api/Admin/updatepatient',
  baseUrlPhysicianList: 'http://localhost:64913/api/Physician/physician-listing',
  baseUrlNurseList: 'http://localhost:64913/api/Nurse/nurse-listing',
  baseurlRole:'',
  baseUrlNotes:'',
  baseurlAllergyMasterData:'http://localhost:64913/api/MasterData/Allergy-listing',
  baseurlDiagnosisMasterData:'http://localhost:64913/api/MasterData/Diagnosis-listing',
  baseurlMedicationMasterData:'http://localhost:64913/api/MasterData/Medication-listing',
  baseurlProcedureMasterData:'http://localhost:64913/api/MasterData/Procedure-listing',
  baseurlProcedureMasterDataSave:'http://localhost:64913/api/MasterData/saveProcedureData',
  baseurlMedicationMasterDataSave:'http://localhost:64913/api/MasterData/saveMedicationData',
  baseurlDiagnosisMasterDataSave:'http://localhost:64913/api/MasterData/saveDiagnosisData',
  baseurlAllergyMasterDataSave:'http://localhost:64913/api/MasterData/saveAllergyData',
  baseurlForgetPassword : "http://localhost:21072/api/Forget",
  baseurlPatientDetails: 'http://localhost:43945/api/getpatient/',
  basrurlGetNurseById: "http://localhost:43945/api/Nurse/getnurse",

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
