import { useState } from "react";
import "./App.css";
import Post from "./Post";

function App() {
  const [posts, setPosts] = useState([
    {
      username: "alinasir",
      caption: "Let Go!",
      imageUrl: "https://reactjs.org/logo-og.png",
    },
    {
      username: "zainabdhila",
      caption: "Lets Not Go!",
      imageUrl: "https://reactjs.org/logo-og.png",
    },
  ]);
  return (
    <div className="App">
      {/* ColorZilla */}
      <div className="app__headerImage">
        <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" />
      </div>

      <h1>Hello World!</h1>

      {/* Header */}

      {posts.map((post) => (
        <Post
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  );
}

export default App;
