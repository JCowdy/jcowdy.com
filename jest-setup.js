import '@testing-library/jest-dom'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBug } from '@fortawesome/free-solid-svg-icons'

// Set up global icons
library.add(faTwitter, faLinkedin, faGithub, faBug)