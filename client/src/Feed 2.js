import React from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";
import { Avatar } from "@material-ui/core";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      <Post
        profilePic={<Avatar src="" />}
        message="Hello World!"
        timestamp="this is the timestamp"
        username="RayanDiouf"
        image="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcHV0ZXIlMjBjb2RlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
      />
    </div>
  );
}

export default Feed;
