module.exports = function ( grunt ){

  var options = { };

  options.uglify = {
    options : {
    },
    build : {
      src : [
        'keycodes.js'
      ],
      dest : 'keycodes.min.js'
    }
  };


  options.jasmine = {
    'default' : {
      src : 'keycodes.js',
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