var keystone = require('keystone');
var Types = keystone.Field.Types;

var aboutus = new keystone.List('faqlist',{
  map: {name: 'query'},
  singular: 'faqlist',
  plural: 'faqlist',
  autokey: {path:'slug', from:'serialno', unique: true}
});

aboutus.add({
  serialno: {type: String},
  category: {type: String},
  query: {type: Types.Html, wyswig: true},
  response_detail: {type: Types.Html, wyswig: true, height : 300}
});

aboutus.register();
