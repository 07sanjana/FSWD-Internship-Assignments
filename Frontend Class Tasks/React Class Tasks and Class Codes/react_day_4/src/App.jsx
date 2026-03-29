import React, { use, useEffect, useState } from 'react';

//API integration using fetch 
/*
function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.slice(0, 5));
      });
  }, []);

  return (
    <div>
      <h1>Fetch API Examples</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;
*/


//API integration using axios

// import axios from 'axios';

// function App() {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/posts")
//       .then((response) => {
//         setPosts(response.data.slice(0, 5));
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching data:", err);
//         setError("Failed to fetch posts");
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <h2>Loading...</h2>;
//   }

//   if (error) {
//     return <h2>{error}</h2>;
//   }

//   return (
//     <div>
//       <h1>Axios API Example</h1>
//       {posts.map((post) => (
//         <div key={post.id}>
//           <h3>{post.title}</h3>
//           <p>{post.body}</p>
//           <hr />
//         </div>
//       ))}
//     </div>
//   );
// }


import PostCard from '../components/postcard';
import SearchBar from '../components/searchbar';
import axios from 'axios';
import  './App.css';
//dashboard
function App() {
const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setPosts(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch posts");
        setLoading(false);
      });
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>📝 Posts</h1>

      <SearchBar search={search} setSearch={setSearch} />

      {loading && <p style={styles.loading}>Loading posts...</p>}
      {error && <p style={styles.error}>{error}</p>}

      <div style={styles.posts}>
        {!loading &&
          !error &&
          filteredPosts.map((post) => (
            <PostCard key={post.id} title={post.title} body={post.body} />
          ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "900px",
    margin: "auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#1f1f1f",
    minHeight: "100vh",
    color: "white",
  },
  heading: {
    marginBottom: "20px",
  },
  posts: {
    display: "flex",
    flexDirection: "column", // vertical stack
    gap: "16px",
  },
  error: {
    color: "red",
  },
  loading: {
    color: "lightgray",
  },
};

export default App;