import React from 'react';
import Comment from './CommentContainer.js';

const CommentsList = ({comments}) => 
<ul>
	{comments.map(comment => 
	<Comment 
		key={comment.id} 
		text={comment.text} 
		votes={comment.votes} 
		{...comment}/>)}
</ul>

export default CommentsList;