// Karma configuration
// Generated on Mon Feb 05 2018 16:13:18 GMT-0800 (PST)

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jquery-3.2.1', 'jasmine', 'browserify'],
      files: [
        'js/*.js',
        'spec/*-spec.js'
      ],
      exclude: [
      ],
      preprocessors: {
        'js/*.js': [ 'browserify'],
        'spec/*.js': ['browserify']
      },
      plugins: [
        'karma-jquery',
        'karma-browserify',
        'karma-jasmine',
        'karma-chrome-launcher',
        'karma-jasmine-html-reporter'
      ],

      reporters: ['progress', 'kjhtml'],
      port: 9876,
      colors: true,
      logLevel: config.LOG_INFO,
      autoWatch: true,
      browsers: ['Chrome'],
      singleRun: false,
      concurrency: Infinity
    })
  }
