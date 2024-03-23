import React from 'react';
const Video = ({ videoSrcURL, videoTitle }) => (
  <div className='video'>
    <iframe
      src={videoSrcURL}
      title={videoTitle}
      type='video/mp4'
      allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
      webkitallowfullscreen='true'
    />
  </div>
);
export default Video;
