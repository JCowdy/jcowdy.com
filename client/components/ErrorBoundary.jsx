import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }


  render() {
    if (this.state.hasError) {
      return (
        <div class='center'>
          <FontAwesomeIcon icon={['fas', 'bug']} size='9x' color='greenyellow' />
          <h1>Well this is embarassing...</h1>
          <h4>Something has gone horribly wrong. Try refreshing?</h4>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
