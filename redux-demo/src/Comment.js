import React from 'react';
import {thumbUpComment} from './actions.js';
import {thumbDownComment} from './actions.js';
import {removeComment} from './actions.js';
import {editComment} from './actions.js';

const Comment = ({text, votes, id, thumbUpComment, thumbDownComment, removeComment}) => 
<li>
	{text}  
	<span>votes: {votes}</span>
	 <button onClick={() => thumbUpComment(id)}>Thumb up</button>
	 <button onClick={() => thumbDownComment(id)}>Thumb down</button>
	 <button onClick={() => removeComment(id)}>Remove</button>
	 <button onClick={() => editComment(id)}>Edit</button>
</li>;

export default Comment;