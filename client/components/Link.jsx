import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Link = ({ icon, href, label }) => (
  <a href={href} aria-label={label} >
    <FontAwesomeIcon icon={['fab', icon]} />
  </a>
)

export default Link
