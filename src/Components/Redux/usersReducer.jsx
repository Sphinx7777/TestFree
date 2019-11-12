import {load} from 'redux-localstorage-simple';

const SET_SHOW_USER_STATUS = '/usersReducer///SET_SHOW_USER_STATUS';
const CHANGE_USER_CONTACTS = '/usersReducer///CHANGE_USER_CONTACTS';
const SET_USER_EDIT_MODE = '/usersReducer///SET_USER_EDIT_MODE';
const SET_DELETE_USER = '/usersReducer///SET_DELETE_USER';
const ADD_NEW_USER = '/usersReducer///ADD_NEW_USER';
const SET_NEW_DATE_OF_BIRTH = '/usersReducer///SET_NEW_DATE_OF_BIRTH';
const EDIT_MODE = '/usersReducer///EDIT_MODE';

const dateOfBirth = new Date().toLocaleString();

let data = load({namespace: 'users'});
let initialState = data.usersPage;

if (!initialState || !initialState.users || !initialState.users.length) {
	initialState = {
		users: [
			{
				id: 1,
				name: 'Первый',
				email: 'aaa@gmail.com',
				dateOfBirth: dateOfBirth,
				photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzkycCUttCUGZTFQNTtUxSzTg0188XLm0hVDq9fromUafGUhzl&s',
				phone: 1111111111,
				show: false,
				editMode: false
			},
			{
				id: 2,
				name: 'Второй',
				email: 'bbb@gmail.com',
				dateOfBirth: dateOfBirth,
				photoUrl: 'http://funny-photo.s3.amazonaws.com/preview/navi_avatar/avatar-grinning-man-face.jpg',
				phone: 2222222222,
				show: false,
				editMode: false
			},
			{
				id: 3,
				name: 'Третий',
				email: 'ccc@gmail.com',
				dateOfBirth: dateOfBirth,
				photoUrl: null,
				phone: 3333333333,
				show: false,
				editMode: false
			},
		],
		openEditMode: false
	}
}


const usersReducer = (state = initialState, action) => {
	switch (action.type) {

		case SET_SHOW_USER_STATUS: {
			return {
				...state, users: state.users.map(u => {
						if (u.id === action.id) {
							u.show = !u.show;
							return u
						}
						return u
					}
				)
			}
		}

		case SET_NEW_DATE_OF_BIRTH: {
			return {
				...state, users: state.users.map(u => {
						if (u.id === action.id) {
							u.dateOfBirth = action.newDate;
							return u
						}
						return u
					}
				), openEditMode: false
			}
		}

		case CHANGE_USER_CONTACTS: {
			return {
				...state, users: state.users.map(u => {
						if (u.editMode) {
							u.name = action.name;
							u.email = action.email;
							u.phone = action.phone;
							u.editMode = false;
							return u
						}
						return u
					}
				), openEditMode: false
			}
		}

		case SET_USER_EDIT_MODE: {
			return {
				...state, users: state.users.map(u => {
						if (u.id === action.id) {
							u.editMode = !u.editMode;
							return u
						}
						return u
					}
				), openEditMode: !state.openEditMode
			}
		}

		case SET_DELETE_USER: {
			return {
				...state, users: state.users.filter(u => u.id !== action.id)
			}
		}

		case ADD_NEW_USER: {
			return {
				...state, ...state.users.unshift(action.user), openEditMode: false
			}
		}

		case EDIT_MODE: {
			return {
				...state, openEditMode: !state.openEditMode
			}
		}

		default:
			return state;
	}
};

export const setToggleShowUserStatus = (id) => (
	{type: SET_SHOW_USER_STATUS, id}
	);

export const setChangeNewDateOfBirth = (date) => (
	{type: SET_NEW_DATE_OF_BIRTH, ...date}
	);

export const setChangeUserContacts = (formData) => (
	{type: CHANGE_USER_CONTACTS, ...formData}
	);

export const setUserEditMode = (id) => (
	{type: SET_USER_EDIT_MODE, id}
	);

export const setDeleteUser = (id) => (
	{type: SET_DELETE_USER, id}
	);

export const addNewUser = (user) => (
	{type: ADD_NEW_USER, user}
	);

export const setEditMode = () => (
	{type: EDIT_MODE}
	);


export default usersReducer;