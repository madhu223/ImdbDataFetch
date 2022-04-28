import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import React from 'react';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

function Getjph() {
  // const id = 2;
  const [id, setId] = React.useState('');

  // const baseURL = `https://jsonplaceholder.typicode.com/posts/${id}`;
  // const baseURL = 'https://jsonplaceholder.typicode.com/posts';
  const baseURL = 'https://jsonplaceholder.typicode.com/photos';

  const [post, setPost] = React.useState();

  function getData() {
    axios
      .get(baseURL)
      .then((response) => {
        setPost(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  React.useEffect(() => {
    getData();
  }, []);
  if (!post) return null;
  console.log({ post });

  return (
    <div className='App'>
      {/* <button onClick={GetData}>click here</button> */}
      <br />
      <h1>Welcome</h1> <br />
      <section className='size1'>
        <label htmlFor='search'>search </label> &nbsp;
        <input
          type='number'
          placeholder='search here'
          name='id'
          className='size'
          onChange={(event) => setId(event.target.value)}
        />{' '}
        &nbsp;
        <button onClick={getData}>click here</button>
      </section>
      <div>
        {/* <p>{post.title}</p> */}
        List of posts
        {/* {post.length ? post.map((p) => <li key={p.id}>{p.title}</li>) : null} */}
        {/* {post.length ? post.map((p) => <li key={p.id}>{p.title}</li>) : null} */}
        {/* {post.map((p, i) => (
          <tr key={i}>
            <td> {p.userId}</td>
            <td>{p.title}</td>
            <td>{p.body}</td>
          </tr>
        ))} */}
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>ID</th>
              <th>ALBUM_ID</th>
              <th>TITLE</th>
              <th>URL</th>
              <th>THUMBNAIL</th>
            </tr>
          </thead>
          <tbody>
            {post.map((p, i) => (
              <tr key={i}>
                <td> {p.id}</td>
                <td> {p.albumId}</td>
                <td>{p.title}</td>
                {/* <td>{p.url}</td> */}
                <td>
                  <td>
                    <a href={p.url} target='_blank'>
                      {' '}
                      {p.url}{' '}
                    </a>{' '}
                  </td>
                </td>
                {/* <td>{p.thumbnailUrl}</td> */}
                <td>
                  <td>
                    <img
                      src={p.thumbnailUrl}
                      alt='img'
                      width='50'
                      height='50'
                    />
                  </td>
                </td>
              </tr>
            ))}
            {/* <tr>
              <td> {post.userId}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Getjph;
