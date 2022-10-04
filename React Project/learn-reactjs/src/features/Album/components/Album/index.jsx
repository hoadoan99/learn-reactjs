/** @format */
import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style.scss";
Album.propTypes = {
  album: PropTypes.object.isRequired,
};

function Album({ album }) {
  // console.log(album);
  const [count, setcount] = useState(0);
  const [color, setcolor] = useState("black");
  return (
    <div className="album">
      <div className="album__thumbnails">
        <img src={album.thumbnailUrl} alt="" />
      </div>
      <p className="album__name">{album.name}</p>
      <p>{color}</p>
      <button onClick={() => setcolor("white")}>Click Me White!</button>
      <button onClick={() => setcolor("black")}>Click Me Black!</button>
    </div>
  );
}

export default Album;
