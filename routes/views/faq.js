var keystone = require('keystone');

var handlebars = require('handlebars');
handlebars.registerHelper('splitDesc', function(description) {
  var description = description.split("\r\n");
  var final = '';
  for (var i= 0 ; i < description.length ; i++){

    final = final + "<p>" + description[i] + "</p>";
  }

  return (final);
  //return handlebars.SafeString("test", description[0] + " <br/> " + description[1]);
  //return description;
});

  exports = module.exports = function(req,res){

  var view = new keystone.View(req,res);
  var locals = res.locals;
  locals.section = 'faqlist';
  view.query('faqlist', keystone.list('faqlist').model.find());
  view.render('faqlist');
}
