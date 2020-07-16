import React from 'react';
import About from './About'
import './../App.css';
import Content from './Content';
import Bg from './../assets/bg.jpg'

function Home() {
  return (
    <div>
      <img src={Bg} alt="" className="header"/>
      <About/>
      <Content/>
    </div>
  );
}

export default Home;
