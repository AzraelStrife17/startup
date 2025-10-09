import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { CharacterBuilder } from './characterBuilder/characterBuilder';
import { SavedBuilds } from './savedBuilds/savedBuilds';
import { CommunityBuilds } from './communityBuilds/communityBuilds';
import { About } from './about/about';

export default function App() {
  return (
    <BrowserRouter>
      <div className="body bg-dark text-light">
        <header>
        <h1>Theory Craft<sup>&reg;</sup></h1>
        <nav>
          <menu>
            <li><NavLink to=''>Login</NavLink></li>
            <li><NavLink to='characterBuilder'>Character Builder</NavLink></li>
            <li><NavLink to='communityBuilds'>Community Builds</NavLink></li>
            <li><NavLink to='savedBuilds'>Saved Builds</NavLink></li>
            <li><NavLink to='about'>About</NavLink></li>
          </menu>
        </nav>
      </header>

        <Routes>
          <Route path='/' element={<Login />} exact />
          <Route path='/characterBuilder' element={<CharacterBuilder />} />
          <Route path='/communityBuilds' element={<CommunityBuilds />} />
          <Route path='/savedBuilds' element={<SavedBuilds />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

        <footer>
          <span className="text-reset">Adam Leishman</span>
          <br />
          <a href="https://github.com/AzraelStrife17/startup">GitHub</a>
        </footer>
      </div>
    </BrowserRouter>
  );

  function NotFound() {
    return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
  }
}