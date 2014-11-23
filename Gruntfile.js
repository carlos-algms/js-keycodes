module.exports = function ( grunt ){

  var options = { };

  options.uglify = {
    options : {
    },
    build : {
      src : [
        'datetostr.js'
      ],
      dest : 'datetostr.min.js'
    }
  };


  options.jasmine = {
    'default' : {
      src : 'datetostr.js',
      options : {
        specs : 'tests/*Spec.js'
      }
    }
  };


  grunt.initConfig( options );


  grunt.loadNpmTasks( 'grunt-contrib-uglify' );
  grunt.loadNpmTasks('grunt-contrib-jasmine');


  grunt.registerTask( 'default', [ ] );

};