import React from "react";

import "./Error.css";

const Error = ({ history }) => {
  return (
    <div className="error">
      <img
        src="https://www.codeur.com/blog/wp-content/uploads/2019/05/corriger-erreur-404-700x525.jpg"
        alt="error"
      />
      <button onClick={() => history.goBack()}>Go Back</button>
    </div>
  );
};

export default Error;
