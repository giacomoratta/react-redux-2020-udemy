import { useEffect, useState } from 'react'

const Route = ({ path, children }) => {
  // with the state, we force the component to re-render
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }
    window.addEventListener('popstate', onLocationChange)

    // needed if we want to hide this component (so clean up!)
    return () => {
      window.removeEventListener('popstate', onLocationChange)
    }
  })

  return currentPath === path
    ? children
    : null
}

export default Route
