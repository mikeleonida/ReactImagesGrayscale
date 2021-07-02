import React from "react";
import ReactDOM from "react-dom";

img1 = "https://picsum.photos/200";
img2 = "https://picsum.photos/200";
img3 = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading">My Favorite Views</h1>
    <ul>
      <img className="food-image" alt="image1" src={img1 + "?grayscale"} />
      <p />
      <img className="food-image" alt="image2" src={img2} />
      <p />
      <img className="food-image" alt="image3" src={img3} />
    </ul>
  </div>,
  document.getElementById("root")
);
