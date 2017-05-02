'use strict';

exports.install = () => {
	F.route('/', function() {
		this.header('Connection', 'close');
		this.plain('Hello World!');
	});
};
