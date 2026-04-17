// Effet au scroll

import { useLayoutEffect } from "react"
import { useLocation } from "react-router-dom"

function ScrollToTop() {
  const location = useLocation()

  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual"
    }

    const scroll = () => {
      document.scrollingElement?.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }

    requestAnimationFrame(() => {
      requestAnimationFrame(scroll)
    })
  }, [location.pathname])

  return null
}

export default ScrollToTop