import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './components/Home';
import SkillsAndProjects from './components/SkillsAndProjects.js';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Blog from './components/Blog';
import Contact from './components/Contact';

const router = createBrowserRouter([
  {
    path : '/',
    element : <App/>,
    children : [
      {
        path :"", element : <Home/>
      },
      {
        path : "SkillsAndProjects", element : <SkillsAndProjects/>
      },
      {
        path : "Education", element : <Education/>
      },
      {
        path : "Achievements", element : <Achievements/>
      },
      {
        path : "Blog", element : <Blog/>
      },
      {
        path : "Contact", element : <Contact/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

