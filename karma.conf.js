module.exports = function(config) {
  config.set({
    basePath: '',
    autoWatch: false,
    frameworks: ['jasmine'],
    files: [
      'js/*.js',
      'test/*Spec.js'
    ],
    browsers: ['Chrome'],

    reporters: ['progress', 'coverage'],
    preprocessors: { 'js/*.js': ['coverage'] },

    singleRun: true
  });
};
