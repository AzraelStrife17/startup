import React from 'react';
import { Link } from 'react-router-dom';
import './communityBuilds.css';

export function CommunityBuilds() {
  return (
   <main>
        <span class="login_name">User Logged In</span>
        <h1>Community Builds</h1>
        <table class="community_builds_table">
          <thead>
            <tr>
              <th>Username</th>
              <th>Build Name</th>
              <th>Build ID</th>
            </tr>
          </thead>
          <tbody>   
            
              <tr>
                <td>
                  <Link to='/characterBuilder'>Zer0</Link>
                </td>
                <td>
                  <Link to='/characterBuilder'>Elite Endgame Build</Link>
                </td>
                <td>
                  <Link to='/characterBuilder'>0123456789</Link>
                </td>
              </tr>
            

            
              <tr>
                <td>
                  <Link to='/characterBuilder'>Vex</Link>
                  <button type="submit">Vex</button>
                </td>
                <td>
                  <Link to='/characterBuilder'>Best Deadringer Build</Link>
                </td>
                <td>
                  <Link to='/characterBuilder'>0123456789</Link>
                </td>
              </tr>
          </tbody>
        </table>

        <div class="search">
          <input class="search_input" type="text" placeholder="search for builds by username, buildname, or ID"/>
        </div>
    </main>
  );
}