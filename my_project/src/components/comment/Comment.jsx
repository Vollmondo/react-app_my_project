import React from "react";
import './Comment.css';

class Comment extends React.Component {
    render(){
        return(
        <div className="comment">
            <div className="comment_userName">{this.props.name}</div>
            <div className="comment_text">{this.props.text}</div>
        </div>
    )}
}

export {Comment}