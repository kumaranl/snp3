var keystone = require('keystone');
var Types = keystone.Field.Types;

var aboutus = new keystone.List('aboutus',{
  map: {name: 'title'},
  singular: 'aboutus',
  plural: 'aboutusdet',
  autokey: {path:'slug', from:'title', unique: true}
});

aboutus.add({
  title: {type: String, required: true},
  inttitle: {type: String},
  description: {type: Types.Html, wyswig: true, height : 300}
});

aboutus.register();
