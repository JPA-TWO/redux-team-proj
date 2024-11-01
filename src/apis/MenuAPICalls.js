import { request } from './Api';
import { getMenulist, getBook, registBook, deleteBook } from '../modules/MenuModule';

export function callGetMenuListAPI() {
	return async (dispatch, getState) => {
		const result = await request('GET', '/menu');
		console.log('getBooklist result : ', result);

		dispatch(getMenulist(result));
	};
}

export function callGetBookAPI(id) {

	console.log('getBook api calls...');

	return async (dispatch, getState) => {

		const result = await request('GET', `/menu/${id}`);
		console.log('getBook result : ', result);

		dispatch(getBook(result));
	}
}

export function callRegistBookAPI(book) {
	console.log('registBook api calls...');

	return async (dispatch, getState) => {
		const result = await request('POST', '/menu/', book);
		console.log('registBook result : ', result);

		dispatch(registBook(result));
	};
}

export function callDeleteBookAPI(id) {

	console.log('deleteBook api calls...');

	return async (dispatch, getState) => {

		const result = await request('DELETE', `/menu/${id}`);
		console.log('deleteBook result : ', result);

		dispatch(deleteBook(result));
	}
}