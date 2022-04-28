import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Imdbmovies1 from './Imdbmovies1';

function Imdbfetch1() {
  const [expression, setExprsn] = useState('batman');

  const [data, setData] = useState();
  const apiKey = 'k_1v5he7y2';
  // const apiKey = 'k_epyh4j1k';
  // const apiKey = 'k_9i33ga1a';
  // const apiKey = 'k_12345678';
  const baseURL = 'https://imdb-api.com/API/SearchMovie';
  // const expression = 'spiderman';

  // const getData = () =>
  //   fetch(`${baseURL}/${apiKey}/${expression}`)
  //     .then((res) => res.json())
  //     .catch((error) => console.log('Error occured'));
  // useEffect(() => {
  //   getData().then((data) => setData(data));
  // }, []);
  // console.log({ data });
  // console.log(data.results);

  function getData() {
    axios
      .get(`${baseURL}/${apiKey}/${expression}`)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getData();
  }, []);
  if (!data) return null;
  console.log({ data });
  return (
    <div>
      <Imdbmovies1 />
      <h1>Welcome</h1> <br />
      <section className='size1'>
        <label htmlFor='search'>search </label> &nbsp;
        <input
          type='text'
          placeholder='search here'
          name='id'
          className='size'
          onChange={(event) => setExprsn(event.target.value)}
          // onBlur={(event) => setExprsn(event.target.value)}
        />{' '}
        &nbsp;
        <button onClick={getData}>click here</button>
      </section>
      {/* {post.length ? post.map((p) => <li key={p.id}>{p.title}</li>) : null} */}
      {/* {data.results.length
        ? data.results.map((item, i) => (
            <ul key={i}>
              <li>{item.title}</li>
            </ul>
          ))
        : null} */}
      <br />
      <br />
      <div>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>S.NO</th>
              <th>ID</th>
              <th>TITLE</th>
              <th>DESCRIPTION</th>
              <th>IMAGE</th>
            </tr>
          </thead>
          <tbody>
            {data.results.map((p, i) => (
              <tr key={i}>
                <td> {i + 1}</td>
                <td> {p.id}</td>
                <td>
                  <a
                    href={`https://imdb-api.com/en/API/Title/${apiKey}/${p.id}`}
                    // href={<Imdbmovies />}
                    target='_blank'
                  >
                    {p.title}
                  </a>
                </td>
                <td>{p.description}</td>
                {/* <td>{p.image}</td> */}
                {/* <td>
                  <a href={p.image} target='_blank'>
                    {' '}
                    {p.image}{' '}
                  </a>{' '}
                </td> */}
                <td>
                  <img src={p.image} alt='img' width='150' height='150' />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* {data.results.length
        ? data.results.map((item, i) => (
            <ul>
              <li key={i}>{item.title}</li>
              <li key={item.id}>{item.image}</li>
            </ul>
          ))
        : null} */}
    </div>
  );
}

export default Imdbfetch1;
