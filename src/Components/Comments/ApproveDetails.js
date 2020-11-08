import React from "react";
import CommentDetail from "./CommentDetail";

const approve = () => {
  return (
    <div class="ui cards">
      <div class="card">
        <CommentDetail />
        <div class="extra content">
          <div class="ui two buttons">
            <div class="ui basic green button">Approve</div>
            <div class="ui basic red button">Decline</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default approve;
