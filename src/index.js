import React from "react";
import ReactDOM from "react-dom";
import ComponentDetail from "./CommentDetail";
import ApprovelDetail from "./ApproveDetails";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovelDetail>
        <ComponentDetail author="Prachi"/>
      </ApprovelDetail>
      <ApprovelDetail>
        <ComponentDetail author="Ankit"/>
      </ApprovelDetail>
      <ApprovelDetail>
        <ComponentDetail author="Teddy"/>
      </ApprovelDetail>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
