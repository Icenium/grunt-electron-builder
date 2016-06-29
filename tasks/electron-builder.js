'use strict';

var electronBuilder = require("electron-builder");

module.exports = function (grunt) {	
	grunt.registerMultiTask("electron-builder", "Package and build ready for distribution Electron app for OS X, Windows and Linux.", function () {
		var platform = electronBuilder.Platform.fromString(this.data.platformString),
			arch = null,
			options = this.data.options,
			done = this.async();

		if (this.data.archString) {
			arch = electronBuilder.archFromString(this.data.archString);
		}

		options.targets = platform.createTarget(null, arch);

		electronBuilder.build(options).then(() => {
			done();
		}).catch((error) => {
			grunt.fail.warn(error);
		});
	});
};