import React, { useEffect } from "react";
import { useState } from "react";
import Post from "../post/Post";
import "./Feed.css";
import axios from "axios";
import Skeleton from "../skeleton/Skeleton";

const Feed = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getVideos = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get("/api/videos/1");
        setVideos(res.data);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
      }
    };
    getVideos();
  }, []);

  return (
    <div className="feed">
      {isLoading ? (
        <Skeleton type="feed" />
      ) : (
        videos.map((video, index) => {
          return <Post video={video} key={index} />;
        })
      )}
    </div>
  );
};

export default Feed;
