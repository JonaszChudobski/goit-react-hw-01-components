import React from "react";
import "./App.css";
import { Profile } from "./components/Profile/Profile";
import { Statistics } from "./components/Statistics/Statistics";
import { FriendsList } from "./components/FriendsList/FriendsList";
import { TransactionHistory } from "./components/TransactionHistory/TransactionHistory";
import user from "./user.json";
import data from "./data.json";
import friends from "./friends.json";
import transactions from "./transactions.json";

function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      ></Profile>
      <Statistics title="Upload stats" stats={data}></Statistics>
      <Statistics stats={data}></Statistics>
      <FriendsList friends={friends}></FriendsList>
      <TransactionHistory items={transactions}></TransactionHistory>
    </>
  );
}

export default App;
