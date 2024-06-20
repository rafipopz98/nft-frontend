import React from 'react'
import { Hero, Service } from '../components/componentIndex';
import Style from '../styles/index.module.css'
const Home = () => {
  return (
    <div className={Style.homepage}><Hero />
      <Service />
    </div>
  )
}

export default Home