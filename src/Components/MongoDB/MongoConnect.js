const mongoose = require('mongoose');

const db = mongoose.createConnection(`mongodb+srv://pass@free-0nx1p.mongodb.net/test?retryWrites=true&w=majority`,
	{useNewUrlParser: true,  useUnifiedTopology: true}, () => {
console.log('connected')
	});
const users = [
	{
		id: 1,
		name: 'Первый123',
		email: 'aaa@gmail.com',
		dateOfBirth: '',
		photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzkycCUttCUGZTFQNTtUxSzTg0188XLm0hVDq9fromUafGUhzl&s',
		phone: 1111111111,
		show: false,
		editMode: false
	},
	{
		id: 2,
		name: 'Второй',
		email: 'bbb@gmail.com',
		dateOfBirth: '',
		photoUrl: 'http://funny-photo.s3.amazonaws.com/preview/navi_avatar/avatar-grinning-man-face.jpg',
		phone: 2222222222,
		show: false,
		editMode: false
	},
	{
		id: 3,
		name: 'Третий',
		email: 'ccc@gmail.com',
		dateOfBirth: '',
		photoUrl: null,
		phone: 3333333333,
		show: false,
		editMode: false
	},
];

const UsersSchema = new mongoose.Schema({

	users: mongoose.Schema.Types.Mixed
});
const Users = db.model("users", UsersSchema);

const newUser = new Users({ users:users});

newUser.save(function (err, users) {
	if (err){
		console.log("Something goes wrong with user ");
	}else{
		console.log('saved successfully'+ users);
		db.close();
	}
});

// newUser.updateOne('5dc550046381ba298c3a7a2e',function (err, users) {
// 	if (err){
// 		console.log("Something goes wrong with user ");
// 	}else{
// 		console.log('saved successfully'+ users);
// 		db.close();
// 	}
// });

// Users.find({users}, (err, data) => {
// 	if (err) {
// 		throw err;
// 	}
// 	console.log('find', data);
// });

// Users.findOne({users}, (err, data) => {
// 	if (err) {
// 		throw err;
// 	}
// 	console.log('Find one', data.users);
// 	db.close();
// });

// Users.findById('5dc5a32e02e39c1f54397b24', (err, data) => {
// 	if (err) {
// 		throw err;
// 	}
// 	console.log('Find by ID', data.users);
// 	db.close();
//
// });


