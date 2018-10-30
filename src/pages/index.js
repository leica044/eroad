import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
        <div className="Hero">
          <div className="LeftTop">
            <h1 class="top">Personal sales team</h1>
            <h1 class="top-red">for your business.</h1>
            <p class="title-description">Customer friendly support innovative positive precise timely.</p>
            <p>E-Road is a financial partner of <a href="http://radiobutton.io/">Radio Button</a> software development company.</p>
            <p>Being based in Krakow E-Road develops and maintains high-loaded projects.</p>
            <p class='tip'>Scroll Down</p>
          </div>
          <div className="RightTop">
          </div>
        </div>
  </Layout>
)

export default IndexPage
