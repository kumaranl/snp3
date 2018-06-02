var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Members Model
 * ==========
 */
var Members = new keystone.List('Members');

Members.add({
	name: { type: Types.Name, required: true, index: true },
	email: { type: Types.Email, initial: true, required: true, unique: true, index: true },
	password: { type: Types.Password, initial: true, required: true },
	block: {type: Types.Select, options: [
										{	value: 'B1', label: 'Block 1 '},
										{	value: 'B2', label: 'Block 2 '},
										{	value: 'B3', label: 'Block 3 '},
										{	value: 'B4', label: 'Block 4 '},
										{	value: 'B5', label: 'Block 5 '},
										{	value: 'B6', label: 'Block 6 '},
										{	value: 'B7', label: 'Block 7 '},
										{	value: 'B8', label: 'Block 8 '},
										{	value: 'B9', label: 'Block 8 '},
]},

	propertytype: { type : Types.Select, options: [
										{	value: 'site', label: 'Site '},
										{	value: 'house', label: 'House'},
										{	value: 'commercialspace', label: 'Commercial Space'},
										{	value: 'tenant', label: 'Tenant / Leasee'},
]},
	propertynumber: { type : String, initial: true, required: true  },
  presentaddress: { type : String },
	mobilenumber: { type : Number, initial: true, required: true},
	interest : { type : String },
	createdAt: { type: Date,  default: Date.now }
}, 'Permissions', {
	isAdmin: { type: Boolean, label: 'Can access Keystone', default: false, index: true },
});

// Provide access to Keystone
Members.schema.virtual('canAccessKeystone').get(function () {
	return this.isAdmin;
});
/**
 * Relationships
 */
Members.relationship({ ref: 'Post', path: 'posts', refPath: 'author' });
/**
 * Registration
 */
Members.defaultColumns = 'name, email, password,block,propertytype, propertynumber, presentaddress, mobilenumber, interest,createdAt, isAdmin ';
Members.register();
