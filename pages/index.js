import { Hero } from '../components/componentIndex';
import React from 'react'
import Style from '../styles/index.module.css'
const Home = () => {
  return (
    <div className={Style.homepage}><Hero /></div>
  )
}

export default Home