import React from "react";
import video from "./images/Bite_Rain_R.mp4";

const NotFound: React.FC = () => {
  return (
    <div>
      <video id="background-video" autoPlay loop muted>
        <source src={video} type="video/mp4" />
        {/* Add more source elements for other video formats if needed */}
      </video>

      <h1>Page Not Found</h1>
      <p>Sorry, the page you're looking for doesn't exist.</p>
    </div>
  );
};

export default NotFound;
