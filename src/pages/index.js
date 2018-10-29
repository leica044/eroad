import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <h1>Personal sales team for your business.</h1>
    <p>Customer friendly support innovative positive precise timely.</p>
    <p>E-Road is a financial partner of Radio Button software development company.</p>
    <p>Being based in Krakow E-Road develops and maintains high-loaded projects.</p>
    <Link to="/page-2/">Scroll Down</Link>
  </Layout>
)

export default IndexPage
