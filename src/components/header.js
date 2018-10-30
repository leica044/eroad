import React from 'react'
import { Link } from 'gatsby'
import './header.css'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="logo">
      <Link class="logo" to="/">eRoad</Link>
    </div>
    <div className="menu-items">
      <Link class="logo" to="/">Works</Link>
      <Link class="logo" to="/">Partners</Link>
      <Link class="logo" to="/">Team</Link>
      <Link class="logo" to="/">Feedback</Link>
      <Link class="logo" to="/">Contacts</Link>
    </div>
  </div>
)

export default Header
