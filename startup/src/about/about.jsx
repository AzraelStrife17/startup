import React from 'react';
import './about.css';

export function About() {
  return (
    <main>
        <span class="login_name">User Logged In</span>
        <div id="picture" class="picture-box"><img class="image" src="zer0PlaceHolder.jpg" /></div>
        <p>
            As somone who is an avid gamer I often found it frustrating testing out new things not knowing how much items or upgrades effect 
            your characters skill level. That is why I descided to make Theory Craft. With Theory Craft I hope to help others in reducing the
            time they have to spend in the skill tree trying to not waste their skill point and focus more on playing. Also, for the people
            who do not enjoy building the community builds will help provide build for them to implement for their own characters.
        </p>

        <p>
            The idea of theory crafting started with Star Craft in which players would try to create the most optimized strategies based
            on statistics. This concept would later go on to become popularized for a vast variety of games, specifically in the MMO and
            rpg genres in which players would try to build the best possible characters for their respective role. Now their is a large
            online community dedicated to crafting the a best possible builds
        </p>

       <div id="quote">
        <div>Video games are bad for you? That's what they said about rock-n-roll. third-party API place holder</div>
        <div>- Shigeru Miyamoto</div>
      </div>
    </main>
  );
}