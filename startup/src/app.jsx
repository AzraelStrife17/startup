import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return (
    <div className="body bg-dark text-light">
      <header>
      <h1>Theory Craft<sup>&reg;</sup></h1>
      <nav>
        <menu>
          <li><a href="index.html">Home</a></li>
          <li><a href="characterBuilder.html">Character Builder</a></li>
          <li><a href="communityBuilds.html">Community Builds</a></li>
          <li><a href="savedBuilds.html">Saved Builds</a></li>
          <li><a href="about.html">About</a></li>
        </menu>
      </nav>
    </header>

      <main>App components go here</main>

      <footer>
        <span class="text-reset">Adam Leishman</span>
        <br />
        <a href="https://github.com/AzraelStrife17/startup">GitHub</a>
      </footer>
    </div>
  );
}