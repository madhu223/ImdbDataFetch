import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Imdbmvs.css';

function Imdbmovies1() {
  //   const [expression, setExprsn] = useState('batman');

  const [data, setData] = useState();
  const apiKey = 'k_1v5he7y2';
  const id = 'tt0118661';

  const baseURL = 'https://imdb-api.com/en/API/Title';
  //   `https://imdb-api.com/en/API/Title/${apiKey}/${p.id}`;
  function getData() {
    axios
      .get(`${baseURL}/${apiKey}/${id}`)
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
  //   console.log(data.fullTitle);
  //   console.log(data.directors);
  //   console.log(data.runtimeStr);
  //   console.log(data.releaseDate);
  //   console.log(data.imDbRating);

  return (
    <div>
      <br />
      <div className='container'>
        <aside className='disp'>
          <img src={data.image} alt='img' width='300' height='350' />
        </aside>
        <section>
          &nbsp;
          <h3>Title : {data.fullTitle} </h3> <br />
          <h3>Director : {data.directors} </h3> <br />
          <h3>RunTime : {data.runtimeStr} </h3> <br />
          <h3>Releasedate : {data.releaseDate} </h3> <br />
          <h3>ImdbRating : {data.imDbRating} </h3> <br />
          <br />
        </section>
      </div>
    </div>
  );
}

export default Imdbmovies1;
