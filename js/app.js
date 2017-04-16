requirejs.config({
	paths: {
		'auth': 'js/module1.js',
		'auth': 'js/module2.js',
		'auth': 'js/module3.js'
	}
});

	require (
	[
		'module1',
		'module2',
		'module3'
	],
	function (module1, module2, module3) {
	}
);