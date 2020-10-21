import React from "react";
import faker from "faker";

const comment = props => {
  return (
    <div className="comment">
      <a className="avatar">
        <img alt="avatar" src={faker.image.avatar()}/>
      </a>
      <div className="content">
  <a className="author">{props.author}</a>
        <div className="metadata">
          <span className="date">3 days ago</span>
        </div>
        <div className="text">Loved it!</div>
        <div className="actions">
          <a className="reply">Reply</a>
        </div>
      </div>
    </div>
  );
};

export default comment;
