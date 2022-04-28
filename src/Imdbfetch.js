import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import Imdbmovies from './Imdbmovies';

function Imdbfetch() {
  const [expression, setExprsn] = useState('avengers');
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

  const getData = function () {
    if (expression !== '') {
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
  };

  // const handleChange = (e) => {
  //   // (event) => setExprsn(event.target.value)
  //   setExprsn(e.target.value);
  // };

  useEffect(() => {
    getData();
  }, [expression]);
  // setExprsn(() => ' ');
  if (!data) return null;
  // console.log({ data });
  // console.log(data.results[0].id);
  // const resId = data.results[2].id;

  // const page = <Imdbmovies ID={resId} />;
  // let page;

  // function getDetails() {
  //   data.results.map((p) => {
  //     <Imdbmovies ID={p.id} />;
  //   });
  // }
  // const arr1 = [];
  // data.results.map((p, i) => {
  //   arr1.push(p.id);
  //   console.log(p.id, i);
  //   console.log(arr1);
  //   return arr1;
  // });
  // const id = {p.id};

  return (
    <div>
      {/* <Imdbmovies ID={id1} /> */}
      <h1>Welcome</h1> <br />
      <section className='size1'>
        <label htmlFor='search'>search </label> &nbsp;
        <input
          type='text'
          placeholder='search here'
          name='id'
          className='size'
          // onChange={handleChange}
          onBlur={(event) => setExprsn(event.target.value)}
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
              {/* <th>ID</th> */}
              <th>TITLE</th>
              <th>DESCRIPTION</th>
              <th>IMAGE</th>
            </tr>
          </thead>
          <tbody>
            {data.results.map((p, i) => (
              <tr key={i}>
                <td> {i + 1}</td>
                {/* <td> {p.id}</td> */}
                <td>
                  {/* <Routes>
                    <Route
                      path='Movies'
                      element={<Imdbmovies ID={p.id} />}
                    ></Route>
                  </Routes> */}
                  {/* <Link to={`/Movies/${p.id}`} target='_blank'>
                    Movies
                  </Link>{' '} */}
                  {/* <Imdbmovies ID={p.id} /> */}
                  &nbsp;
                  {/* <a
                    href={`https://imdb-api.com/en/API/Title/${apiKey}/${p.id}`}
                    // href='/'
                    // onClick={getDetails}
                    //  href={<Imdbmovies ID={p.id}/>}
                    target='_blank'
                  >
                   
                    {p.title}
                  </a> */}
                  {p.title}
                  {/* <Imdbmovies ID={p.id} /> */}
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
                  <img
                    src={p.image}
                    alt='img'
                    width='150'
                    height='150'
                    style={{ margin: 20 }}
                  />{' '}
                  <br />
                  <Link
                    to={`/Movies/${p.id}`}
                    target='_blank'
                    style={{ margin: 30 }}
                  >
                    View Details
                  </Link>
                  {/* <Routes>
                    <Route
                      path='/Movies'
                      element={<Imdbmovies ID={p.id} />}
                    ></Route>
                  </Routes> */}
                  {/* <Imdbmovies ID={p.id} /> */}
                  {/* <button
                    style={{ alineText: 'center' }}
                    onClick={Navigate(<Imdbmovies ID={p.id} />)}
                  >
                    view
                  </button> */}
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

export default Imdbfetch;
