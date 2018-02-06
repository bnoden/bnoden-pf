import React from 'react';

import Project from './Project';
import { calcprev, cbprev, jssprev, mdprev, quprev, tttprev } from './img/old';

const Old = () =>
  <div>
    <p>
      "That does NOT belong in a museum!" Dr. Jones growled in his most
      threatening tone.
    </p>

    <Project
      name="Markdown Previewer"
      description="Preview Markdown formatting before commiting"
      notes="Say hello to Quincy."
      tags="react, sass, bootstrap, ajax, javascript, html"
      image={<img src={mdprev} alt="markdown previewer" style={{ backgroundColor: '#d0ecff' }} />}
      href={'https://codepen.io/bnoden/full/KMVJaj/'}

    />

    <Project
      name="Car Brands"
      description="Demonstration of dropdown selections with animations and more. Choose a brand, get a logo. Click logo to remove."
      notes="It's just some unremarkable jQuery, but, I like it. Maybe it's the logos."
      tags="jquery, javascript, html, css"
      image={<img src={cbprev} alt="car brands" />}
      href="https://codepen.io/bnoden/full/beEOYa/"
    />

    <Project
      name="js-splash"
      description="Video game splash screen in vanilla JavaScript"
      notes="After reading YDKJS, I quit relying on jQuery for animations. This was the (overcomplicated) result."
      tags="javascript, html, css"
      image={<img src={jssprev} alt="js splash" />}
      href="https://codepen.io/bnoden/full/qNdXBZ/"
    />

    <Project
      name="TicTacToe"
      description="Tic Tac Toe with names, levels, scores, and animations"
      notes="At one point this was becoming an RPG with a TicTacToe-based battle system. I left evidence of this in the code. I still think about it sometimes."
      tags="jquery, javascript, html, sass"
      image={<img src={tttprev} alt="tictactoe" />}
      href="https://codepen.io/bnoden/full/pbgavX/"
    />

    <Project
      name="Calculator"
      description="Carefully crafted calculator with issues"
      notes="This was a fun and rewarding experience. I think everyone should build a calculator at least once."
      tags="jquery, javascript, html, css"
      image={<img src={calcprev} alt="calculator" />}
      href="https://codepen.io/bnoden/full/Meggmq/"
    />

    <Project
      name="Quotes"
      description="Press the speech balloon for quotes and colors in the style of EarthBound. (Only one quote.)"
      notes="I'm satisfied with the one quote. Text generated with ebtext (https://github.com/beager/ebtext)."
      tags="jquery, javascript, html, css"
      image={<img src={quprev} alt="quotes" />}
      href="https://codepen.io/bnoden/full/NNQdLK/"
    />
  </div>;

export default Old;
