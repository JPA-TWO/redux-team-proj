import { createActions, handleActions } from 'redux-actions';

const initalState = {};

const GET_MENULIST = 'menu/GET_MENULIST';
const GET_BOOK = 'menu/GET_BOOK';
const REGIST_BOOK = 'menu/REGIST_BOOK';
const DELETE_BOOK = 'menu/DELETE_BOOK';

export const {
	menu: { getMenulist, getBook, registBook, deleteBook },
} = createActions({
	[GET_MENULIST]: (res) => ({ menulist: res }),
	[GET_BOOK]: (res) => ({ book: res }),
	[REGIST_BOOK]: (res) => ({ regist: res }),
	[DELETE_BOOK]: (res) => ({ delete: res }),
});

const menuReducer = handleActions(
	{
		[GET_MENULIST]: (state, { payload }) => {
			return payload;
		},
		[GET_BOOK]: (state, { payload }) => {
			return payload;
		},
		[REGIST_BOOK]: (state, { payload }) => {
			return payload;
		},
		[DELETE_BOOK]: (state, { payload }) => {
			return payload;
		}
	},
	initalState
);

export default menuReducer;
