import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react';
import App from './App.jsx'

//? React doesn't allow you to create elements randomly using any kind of format(e.g.below)
// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click here to visit google'
// }

//? This works fine
const anotherElement = (
  <a href="https://google.com" target='_blank'>Click here </a>
)

const reactElement = React.createElement(
  'a',
  {href : 'https://google.com', target : '_blank'},
  'Click here to visit google'
)

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

// createRoot(document.getElementById('root')).render(
//   anotherElement
// )

createRoot(document.getElementById('root')).render(
  reactElement
)