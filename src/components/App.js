import React from "react";
import PostList from "./PostList";
import UserHeader from "./UserHeader";

export default function App() {
  return (
    <div className="ui container">
      <PostList />
      <h1>Hello</h1>
      <UserHeader />
    </div>
  );
}
