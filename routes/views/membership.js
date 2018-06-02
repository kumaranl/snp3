var keystone = require('keystone');
var Members = keystone.list('Members');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'membership';
	locals.formData = req.body || {};
	locals.validationErrors = {};
	locals.memberSubmitted = false;

	// On POST requests, add the Enquiry item to the database
	view.on('post', { action: 'membership' }, function (next) {
	console.log("DAta entered is ",locals.formData);
		var newMember = new Members.model();
		var updater = newMember.getUpdateHandler(req);

		updater.process(req.body, {
			flashErrors: true,
			fields: 'name, email, password,block, propertytype, propertynumber, presentaddress, mobilenumber, interest,createdAt, isAdmin',
			errorMessage: 'There was a problem creating a new Member',
		}, function (err) {
			if (err) {
				locals.validationErrors = err.errors;
			} else {
				locals.memberSubmitted = true;
			}
			next();
		});
	});
	// Render the view
	view.render('membership');
};
