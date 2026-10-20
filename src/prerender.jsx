import React from 'react'
import App from './App.jsx'

// Mock browser globals for Node.js prerendering environment
if (typeof globalThis.window === 'undefined') {
  globalThis.window = {
    innerWidth: 1024,
    innerHeight: 768,
    addEventListener: () => {},
    removeEventListener: () => {},
    localStorage: {
      getItem: () => null,
      setItem: () => {},
      removeItem: () => {},
    },
  }
  globalThis.document = {
    createElement: () => ({}),
    getElementById: () => null,
    querySelector: () => null,
    querySelectorAll: () => [],
    body: { style: {} },
  }
  globalThis.navigator = { userAgent: 'node' }
}

export async function prerender() {
  const { renderToString } = await import('react-dom/server')

  return {
    html: renderToString(<App />),
  }
}