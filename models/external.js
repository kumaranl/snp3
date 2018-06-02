var keystone = require('keystone');
var Types = keystone.Field.Types;

var external = new keystone.List('External',{
  map: {name: 'title'},
  singular: 'External',
  plural: 'Externals',
  autokey: {path:'slug', from:'title', unique: true}
});

external.add({
  title: {type: String, required: true},
  path: {type: String},
  imagepath: {type: String },
  shortdesc: {type: String }
});

external.register();
