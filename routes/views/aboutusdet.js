var keystone = require('keystone');
//var handlebars = require('')
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

var aboutus =  keystone.list('aboutus');
exports = module.exports = function(req,res){

  var view = new keystone.View(req,res);
  var locals = res.locals;


  //	console.log("Query is",req.query);

  locals.section = 'aboutus';
  locals.filters = {
    inttitle: req.query.inttitle
  }
  var title = req.query.inttitle;
  //console.log ('title is', title);

  //console.log("Value of local tile",locals.filters.title);
//   if (req.query.title = '')
// {
//     req.query.title = 'society-for-development-of-suryanagar';
// }
  if ( title == undefined )
  {

    view.query('aboutusdet', aboutus.model.find({inttitle : "SOC"}));
  }
  else
  {
    view.query('aboutusdet', aboutus.model.find({inttitle : req.query.inttitle }));
  }
  //locals.filters.title

//  description_val = aboutusdet.description.split(/[\r\n]+/);
//    description_val = description.split(".");

 //console.log("data of ", aboutus );
  view.render('aboutusdet');
}
