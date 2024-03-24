import React from "react";

import { BsInstagram } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { BsYoutube } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

function SocialMedia() {
  return (
    <div className="social-media">
      <a href="https://www.facebook.com/ramazan3ren" target="_blank">
        <BsFacebook />
      </a>
      <a href="https://www.instagram.com/ramazan3ren" target="_blank">
        <BsInstagram />
      </a>
      <a href="https://twitter.com/ramazan3ren" target="_blank">
        <RiTwitterXFill />
      </a>
      <a href="https://www.youtube.com/@ramazan3ren" target="_blank">
        <BsYoutube />
      </a>
     
    
    </div>
  );
}

export default SocialMedia;
