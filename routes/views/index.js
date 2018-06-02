var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';

	// Render the view

	//res.redirect('/keystone/signin');
//	console.log("Logged in user is ", req.user);

	view.render('index');


};
