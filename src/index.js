import React from "react";
import ReactDOM from "react-dom";
import ComponentDetail from './CommentDetail';

const App = () => {
  return (
    <ComponentDetail />
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
