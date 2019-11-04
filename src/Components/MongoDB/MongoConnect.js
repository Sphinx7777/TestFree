const mongoose = require('mongoose');
const {DBPASS} = require('./config');

const db = mongoose.createConnection(`mongodb+srv://${DBPASS}@free-0nx1p.mongodb.net/test?retryWrites=true&w=majority`,
	{useNewUrlParser: true,  useUnifiedTopology: true}, () => {
		console.log('connected');
	});


const UserSchema = new mongoose.Schema({
	firstName: { type: String },
	lastName: { type: String },
});
const User = db.model("User", UserSchema);

// const newUser = new User({ firstName: "Sfinx", lastName: "Sphinx"});
//
// newUser.save(function (err, newUser) {
// 	if (err){
// 		console.log("Something goes wrong with user " + newUser.firstName);
// 	}else{
// 		console.log('saved successfully');
// 	}
// });


// User.find({firstName: "Sfinx"}, (err, data) => {
// 	if (err) {
// 		throw err;
// 	}
// 	console.log('find', data);
// });

User.findOne({firstName: "Sfinx"}, (err, data) => {
	if (err) {
		throw err;
	}
	console.log('Find one', data);
});