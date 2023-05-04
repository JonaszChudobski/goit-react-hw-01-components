import React from "react";
import css from "./FriendsList.module.css";
import PropTypes from "prop-types";
import { FriendsListItem } from "./FriendsListItem";

export const FriendsList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map((friend) => (
        <FriendsListItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
          key={friend.id}
        ></FriendsListItem>
      ))}
    </ul>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.array,
};
