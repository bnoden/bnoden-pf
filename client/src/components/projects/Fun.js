import React from 'react';

import Project from './Project';
import { dits_prev } from './img/fun';

const Fun = () =>
  <div>
    <p>Projects driven by curiosity and creative impulse.</p>
    <Project
      name="Delight in the Season"
      description="Silly experiment? (Beware: After opening link, clicking the word 'CLICK' will play audio/video.)"
      notes="I wanted to see what kinds of things could be done with HTML5 video, and this just sort of happened. Pure JavaScript (ES6). Not for mobile devices or Edge browser."
      tags="html5, html5-video, web-audio, javascript, css3, media"
      image={<img src={dits_prev} alt="season" />}
      href="https://bnoden.github.io/season/"
    />

    <Project
      name="thisAintNoGame"
      description="Trial experiment with Unity3D and game development in general."
      notes="Next time I'm getting someone else to animate the sprites."
      tags="c#, unity3d, game, animation, audio, media, object-oriented"
      image={
        <iframe
          title="thisaintnogame"
          width="560"
          height="315"
          style={imageStyle}
          src="https://www.youtube-nocookie.com/embed/I3TKRDwE2B4?rel=0"
          frameBorder="0"
          allowFullScreen
        />
      }
    />

    <Project
      name="BrainMaster: We Are Friends"
      description="Crappy on purpose."
      notes="After my first Unity3D experiment (thisAintNoGame), I was eager to enter a Game Jam. The Crappy Game Jam was accepting submissions. Figuring it would be a nice, gentle introduction, I entered the Jam and created the crappiest game I could within a few hours. However, the deadline moved right past me as I was adding the final touches to the staff credits theme. A fitting end, I say."
      tags="c#, unity3d, game, animation, audio, media"
      image={
        <iframe
          title="brainmaster"
          width="67%"
          frameBorder="0"
          height="167"
          src="https://itch.io/embed/108764"
        />
      }
    />
  </div>;

const imageStyle = {
  transform: window.innerWidth <= 560 ? 'scale(0.475)' : 'none',
  transformOrigin: window.innerWidth <= 560 ? 'top left' : 'none',
  marginBottom: window.innerWidth <= 560 ? '-10em' : '0'
};

export default Fun;
