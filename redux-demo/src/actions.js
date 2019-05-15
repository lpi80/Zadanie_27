import uuid from 'uuid';

export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

function addComment(text) {
    return {
        type: ADD_COMMENT,
        text:text,
        id: uuid.v4()
    }
}

function editComment(id, newText) {
    return {
        type: EDIT_COMMENT,
        text:newText,
        id: uuid.v4()
    }
}

function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id: uuid.v4()
    }
}

function thumbUpComment(commentid) {
	return {
		type: THUMB_UP_COMMENT,
		id: commentid
	}
}

function thumbDownComment(commentid) {
	return {
		type: THUMB_DOWN_COMMENT,
		id: commentid
	}
}

export {editComment};
export {removeComment};
export {thumbUpComment};
export {thumbDownComment};
export {addComment};