var keystone = require('keystone');
var External = keystone.list('External');
exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'external';

	// Render the view

	//res.redirect('/keystone/signin');
//	console.log("Logged in user is ", req.user);
  view.query('Externals', External.model.find());
	view.render('external');
};
