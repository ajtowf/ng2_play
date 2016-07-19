// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md

/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
  '@angular2-material': 'vendor/@angular2-material',
  'angular2-jwt': 'vendor/angular2-jwt'  
};

/** User packages configuration. */
const packages: any = {
  'angular2-jwt': {
    defaultExtension: 'js',
    main: 'angular2-jwt.js'
  },
  '@angular2-material/core': { 
    format: 'cjs',
    defaultExtension: 'js',
    main: 'core.js'
  },
  '@angular2-material/checkbox': { 
    main: 'checkbox.js', 
    defaultExtension: 'js', 
    format: 'cjs' 
  },
  '@angular2-material/button': { 
    main: 'button.js', 
    defaultExtension: 'js', 
    format: 'cjs' 
  },
  '@angular2-material/progress-circle': { 
    main: 'progress-circle.js', 
    defaultExtension: 'js', 
    format: 'cjs' 
  },
  '@angular2-material/card': { 
    main: 'card.js', 
    defaultExtension: 'js', 
    format: 'cjs' 
  },
  '@angular2-material/input': { 
    main: 'input.js', 
    defaultExtension: 'js', 
    format: 'cjs' 
  },
  '@angular2-material/toolbar': { 
    main: 'toolbar.js', 
    defaultExtension: 'js', 
    format: 'cjs' 
  }
};

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/forms',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app',
  'app/shared',
  'app/about',
  'app/profile',
  'app/todo',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
