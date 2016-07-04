(function (global) {

  // map tells the System loader where to look for things
  var map = {
    'angular2-jwt': 'node_modules/angular2-jwt/angular2-jwt.js',
    '@angular2-material/core': 'node_modules/@angular2-material/core',
    '@angular2-material/checkbox': 'node_modules/@angular2-material/checkbox',
    '@angular2-material/button': 'node_modules/@angular2-material/button',
    '@angular2-material/progress-circle': 'node_modules/@angular2-material/progress-circle',
    '@angular2-material/card': 'node_modules/@angular2-material/card',
    '@angular2-material/input': 'node_modules/@angular2-material/input',
    '@angular2-material/toolbar': 'node_modules/@angular2-material/toolbar',
    'app': 'app', // 'dist',
    'rxjs': 'node_modules/rxjs',
    'symbol-observable': 'node_modules/symbol-observable',
    '@angular': 'node_modules/@angular'
  };

  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    '@angular2-material/core': { main: 'core.js', defaultExtension: 'js'},
    '@angular2-material/checkbox': { main: 'checkbox.js', defaultExtension: 'js'},
    '@angular2-material/button': { main: 'button.js', defaultExtension: 'js'},
    '@angular2-material/progress-circle': { main: 'progress-circle.js', defaultExtension: 'js'},
    '@angular2-material/card': { main: 'card.js', defaultExtension: 'js'},
    '@angular2-material/input': { main: 'input.js', defaultExtension: 'js'},
    '@angular2-material/toolbar': { main: 'toolbar.js', defaultExtension: 'js'},
    'app': { main: 'boot.js', defaultExtension: 'js' },
    'rxjs': { defaultExtension: 'js' },
    'symbol-observable': { main: 'index.js', defaultExtension: 'js' }
  };

  var packageNames = [
    '@angular/common',
    '@angular/compiler',
    '@angular/core',
    '@angular/forms',
    '@angular/http',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    '@angular/router'
  ];

  // add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
  packageNames.forEach(function (pkgName) {
    packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
  });

  var config = {
    map: map,
    packages: packages
  }

  // filterSystemConfig - index.html's chance to modify config before we register it.
  if (global.filterSystemConfig) { global.filterSystemConfig(config); }

  System.config(config);

})(this);