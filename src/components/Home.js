import React from 'react';
import HomeCSS from '../css-modules/Home.module.css';

function Home() {
  return (
    <div className={HomeCSS.home}>
      <h1 className={HomeCSS.heading}>
        Welcome to our page!
      </h1>
      <div className={HomeCSS.para}>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas fugit,
          odit dignissimos consequatur quae exercitationem. Dolores ratione
          quam ducimus eaque cupiditate molestiae, hic nulla nobis in magni
          repudiandae dignissimos exercitationem corporis obcaecati fuga
          culpa odit expedita minus sequi ab. Laudantium.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas fugit,
          odit dignissimos consequatur quae exercitationem. Dolores ratione
          quam ducimus eaque cupiditate molestiae, hic nulla nobis in magni
          repudiandae dignissimos exercitationem corporis obcaecati fuga
          culpa odit expedita minus sequi ab. Laudantium.
        </p>
      </div>
    </div>
  );
}

export default Home;
