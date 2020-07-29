import React, { useState, createContext } from "react";
import moment from "moment";

import avatar from "../../assets/carmen-sandiego.png";

export const TweetContext = createContext(null);

export const TweetProvider = ({ children }) => {
  const [likes, setLikes] = useState(460);
  const [retweets, setRetweets] = useState(65);
  const [isLiked, setIsLiked] = useState(false);
  const [isRetweeted, setIsRetweeted] = useState(false);

  const date = moment().format("LT - ll");

  return (
    <TweetContext.Provider
      value={{
        tweetContents: "Where in the world am I?",
        displayName: "Carmen Sandiego ✨",
        username: "carmen-sandiego",
        avatarSrc: avatar,
        isLikedByCurrentUser: isLiked,
        isRetweetedByCurrentUser: isRetweeted,
        date: date,
        likes,
        retweets,
      }}
    >
      {children}
    </TweetContext.Provider>
  );
};
