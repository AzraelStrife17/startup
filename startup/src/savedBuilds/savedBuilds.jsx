import React from 'react';
import './savedBuilds.css';

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
            <form method = "get" action="characterBuilder.html">
              <tr>
                <td>
                  <button type="submit">My Epic Build 1</button>
                </td>
                <td>
                  <button type="submit">0123456789</button>
                </td>
              </tr>
            </form>
          </tbody>
        </table>

        <div className="search">
          <input className="search_input" type="text" placeholder="search for your builds"/>
        </div>
    </main>
  );
}