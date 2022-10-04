/** @format */

import React from "react";
import PropTypes from "prop-types";
import Album from "../Album";
import "./style.scss";
AlbumList.propTypes = {
  albumList: PropTypes.array.isRequired,
};

function AlbumList({ albumList }) {
  return (
    <div>
      <h1>Có Thể Bạn Sẽ Thích</h1>
      <ul className="album-list">
        {albumList.map((album) => {
          return (
            <li key={album.id}>
              <Album album={album} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default AlbumList;
