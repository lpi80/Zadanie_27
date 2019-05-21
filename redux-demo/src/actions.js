import uuid from 'uuid';

export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

function addComment(text) {
    if (!text) {
        return { 
            type: ADD_COMMENT,
            text: prompt("podaj nowa nazwe: ", 'Wpisz komentarz'),
            id: uuid.v4()
        }
    }
    else return {
        type: ADD_COMMENT,
        text: text,
        id: uuid.v4()
    }
}

function editComment(id, text) {
    return {
        type: EDIT_COMMENT,
        text: prompt("podaj nowa nazwe: ", text),
        id: id
    }
}

function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id: id
    }
}

function thumbUpComment(id) {
	return {
		type: THUMB_UP_COMMENT,
		id: id
	}
}

function thumbDownComment(id) {
	return {
		type: THUMB_DOWN_COMMENT,
		id: id
	}
}

export {editComment};
export {removeComment};
export {thumbUpComment};
export {thumbDownComment};
export {addComment};