import React from 'react';

export function Login() {
  return (
    <main className='loginMain'>
      <h1>Welcome to Theory Craft</h1>
      <form method = "get" action="characterBuilder.html">
        <div>
          <input type="text" placeholder="your@email.com" class="login_info"/>
        </div>
        <div> 
          <input type="text" placeholder="password" class="login_info"/>
        </div>
        <button type="submit" class="login_buttons">Login</button>
        <button type="submit" class="login_buttons">Create</button>
      </form>
    </main>
  );
}