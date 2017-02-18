module.exports = function(grunt){


  grunt.initConfig({

    sass:{
      compile:{
      files:[{
        src:'res/style.scss',
        dest:'dist/css/style.css'
      }]
    }
    },

    copy:{
      html:{
      files:[{
        src:'res/index.html',
        dest:'dist/index.html'
      }]
    },
  },

  concat:{
    js:{
      files: [{
        src: "res/js/*.js",
        dest: "dist/js/script.js"
      }]
    }
  },

  watch:{
    html:{
      files:[
        'res/index.html'
      ],
      tasks: ['copy']
    },
    js:{
      files:['res/js/*.js'],
      tasks: ['concat:js']
    },
    sass: {
      files:[
        'res/sass/*.scss','res/style.scss'
      ],
      tasks: ['sass']
    }
  }

  });

  // Loading Plugins //

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Resgistering Custom Tasks //

  grunt.registerTask('build',['sass','copy','concat']);
  grunt.registerTask('start',['build','watch']);

};
