import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import StarRating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
      <p>This move has been rated {movieRating} stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating
      maxRating={5}
      messages={["hello", "cool", "awesome", "horrible", "nice"]}
    />
    <StarRating maxRating={10} size={24} color="red" defaultRating={5} />

    <Test />
  </React.StrictMode>
);
