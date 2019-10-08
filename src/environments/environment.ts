// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: true,
  firebase : {
    apiKey: 'AIzaSyAWX74AZYVF9uyIu7MEuHba-r2LxNQkjyY',
    authDomain: 'sfeir-comment.firebaseapp.com',
    databaseURL: 'https://sfeir-comment.firebaseio.com',
    projectId: 'sfeir-comment',
    storageBucket: 'sfeir-comment.appspot.com',
    messagingSenderId: '789105442589'
  }
};
