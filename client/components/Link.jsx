import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Link = ({ icon, href }) => (
  <a href={href} >
    <FontAwesomeIcon icon={['fab', icon]} />
  </a>
)

export default Link
