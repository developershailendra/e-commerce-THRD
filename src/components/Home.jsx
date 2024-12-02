import React from 'react'
import Section from './Section'
import ProductLists from './ProductLists'
import MainSection from './MainSection'
import ProductFeatures from './ProductFeatures'
import Stats from './Stats'

const Home = () => {
  return (
    <>
    <MainSection />
    <Section />
    <ProductLists />
    <ProductFeatures />
    <Stats />
    </>
  )
}

export default Home