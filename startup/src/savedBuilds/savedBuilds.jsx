import React from 'react';
import './savedBuilds.css';
import { Link } from 'react-router-dom';

export function SavedBuilds() {
  return (
    <main>
        <span className="login_name">User Logged In</span>
        <h1>My Builds</h1>
        <table className="saved_builds_table">
          <thead>
            <th>Build Name</th>
            <th>Build ID</th>
          </thead>
          <tbody>   
              <tr>
                <td>
                  <Link to='/characterBuilder'>My Epic Build 1</Link>
                </td>
                <td>
                  <Link to='/characterBuilder'>0123456789</Link>
                </td>
              </tr>
          </tbody>
        </table>

        <div className="search">
          <input className="search_input" type="text" placeholder="search for your builds"/>
        </div>
    </main>
  );
}