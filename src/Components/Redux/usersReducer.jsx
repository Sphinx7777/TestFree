
const SET_SHOW_USER_STATUS = '/usersReducer///SET_SHOW_USER_STATUS';
const SET_USER_EDIT_MODE = '/usersReducer///SET_USER_EDIT_MODE';
const SET_DELETE_USER = '/usersReducer///SET_DELETE_USER';





let initialState = {
	users: [
		{
			id:1,
			name:'Первый',
			email:'aaa@gmail.com',
			dateOfBirth:'11.01.1911',
			photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzkycCUttCUGZTFQNTtUxSzTg0188XLm0hVDq9fromUafGUhzl&s',
			phone:1111111111,
			show:false,
			editMode:false
		},
		{
			id:2,
			name:'Второй',
			email:'bbb@gmail.com',
			dateOfBirth:'12.02.1912',
			photoUrl:'http://funny-photo.s3.amazonaws.com/preview/navi_avatar/avatar-grinning-man-face.jpg',
			phone:2222222222,
		  show:false,
			editMode:false
		},
		{
			id:3,
			name:'Третий',
			email:'ccc@gmail.com',
			dateOfBirth:'11.03.1913',
			photoUrl: null,
			phone:3333333333,
		  show:false,
			editMode:false
		},
	],
};

const usersReducer = (state=initialState, action) => {
	switch (action.type) {
		case SET_SHOW_USER_STATUS: {
			return {...state, users:state.users.map(u=>{
				if(u.id===action.id){
					u.show=!u.show;
						return u
			}
			return u
			}
			)}
		}
		case SET_USER_EDIT_MODE: {
			return {...state, users:state.users.map(u=>{
				if(u.id===action.id){
					u.editMode=!u.editMode;
						return u
			}
			return u
			}
			)}
		}
		case SET_DELETE_USER: {
			return {...state, users:state.users.filter(u=>u.id!==action.id)
		}
		}
		default:
			return state;
	}};

export const setToggleShowUserStatus = (id) => ({type:SET_SHOW_USER_STATUS, id});
export const setUserEditMode = (id) => ({type:SET_USER_EDIT_MODE, id});
export const setDeleteUser = (id) => ({type:SET_DELETE_USER, id});





/*export const getNewUsers = () => {
	return async (dispatch) => {

		let data = await
			 dispatch(setNewUsersAC(data.items));

}};*/




export default usersReducer;