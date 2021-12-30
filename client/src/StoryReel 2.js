import React from "react";
import "./StoryReel.css";
import Story from "./Story";
import { Avatar } from "@material-ui/core";
function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://www.economist.com/img/b/1280/721/90/sites/default/files/images/2015/09/blogs/economist-explains/code2.png"
        profileSrc={<Avatar src="" />}
        title="Rayan Diouf"
      />
      <Story
        image="https://www.economist.com/img/b/1280/721/90/sites/default/files/images/2015/09/blogs/economist-explains/code2.png"
        profileSrc={<Avatar src="" />}
        title="Sami Diouf"
      />
      <Story
        image="https://www.economist.com/img/b/1280/721/90/sites/default/files/images/2015/09/blogs/economist-explains/code2.png"
        profileSrc={<Avatar src="" />}
        title="Imen Fetoui"
      />
      <Story
        image="https://www.economist.com/img/b/1280/721/90/sites/default/files/images/2015/09/blogs/economist-explains/code2.png"
        profileSrc={<Avatar src="" />}
        title="Joseph Diouf"
      />
    </div>
  );
}

export default StoryReel;
