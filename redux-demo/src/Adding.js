import {connect} from 'react-redux';
import React from 'react';
import { addComment } from './actions.js';

const Adding = ({text, addComment }) => 
    <button onClick={() => addComment(text)}>Add</button> 

const mapDispatchToProps = dispatch => ({
    addComment: (text) => dispatch(addComment(text))
});
      
export default connect(null, mapDispatchToProps)(Adding);    
