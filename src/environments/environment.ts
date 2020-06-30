// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,


  // FOR THE FILTER BEGIN
  filterFormArray: [
    {
      inputType: "input",
      option: {
        formControlName: 'search',
        name: 'search'
      }
    }, {
      inputType: "date",
      option: {
        formControlName: 'date',
        name: 'date'
      }
    },
    {
      inputType: "button",
      option: {
        name: "Search"
      }
    }],
  // FOR THE FILTER END


  // FOR THE TABLE BEGIN
  tableTranslatorData: {
    colHeading: ['First Name', 'Last Name', 'Phone No.', 'QTY.', 'Action'],
    tableData: [
      { firstName: 'Sid', lastName: 'Ritz', phoneNo: '423232343', qty: '34gm' },
      { firstName: 'Sid', lastName: 'Ritz', phoneNo: '423232343', qty: '34gm' }
    ],
    option: [
      { key: 'firstName' },
      { key: 'lastName' },
      { key: 'phoneNo' },
      { key: 'qty' },
      {
        key: 'action', config: [{
          type: 'edit',
          input: 'button',
          icon: 'fa fa-eye',
          emitData: true,
          redirectLink: true,
          Link: '/home'
        },
        {
          type: 'delete',
          input: 'button',
          icon: 'fa fa-trash',
          emitData: false,
          redirectLink: true,
          Link: '/home'
        },
        {
          type: 'view',
          input: 'button',
          icon: 'fa fa-eye',
          emitData: false,
          redirectLink: true,
          Link: '/home'
        }]
      }]
  },
  // FOR THE TABLE END


  // FOR THE PAGINATION BEGIN
  paginationConfig: {
    page: 4,
    collectionSize: 43,
    boundaryLinks: true
  }
  // FOR THE PAGINATION END

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

