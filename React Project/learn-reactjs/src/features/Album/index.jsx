/** @format */

import React from "react";
import AlbumList from "./components/AlbumList";

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: "Nhạc Thịnh Hành",
      thumbnailUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/a/1/d/d/a1dd45b141b92844478a6eee1252493e.jpg",
    },
    {
      id: 2,
      name: "Nhạc Trẻ Việt Nam",
      thumbnailUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/b/8/a/0/b8a05498bbfd20dca9280c3e980ff04a.jpg",
    },
    {
      id: 3,
      name: "Nhạc US-UK",
      thumbnailUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/5/7/2/8/5728212a5ebca3ecb963a87f5454de93.jpg",
    },
    {
      id: 4,
      name: "Nhạc KPOP",
      thumbnailUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/a/5/f/3/a5f387c610d2e74daec464811c81e1e4.jpg",
    },
  ];
  return (
    <div>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;
