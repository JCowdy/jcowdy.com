import React from 'react'

const Link = ({ icon, href }) => (
  <a href={href} >
    <i className={`fab fa-${icon}`}></i>
  </a>
)

export default Link
