import React from 'react'
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBug } from '@fortawesome/free-solid-svg-icons'
import App from './App'

// Set up global icons
library.add(faTwitter, faLinkedin, faGithub, faBug)

ReactDOM.render(<App />, document.getElementById('root'))
