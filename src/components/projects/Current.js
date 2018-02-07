import React from 'react';

import Project from './Project';
import { browserIs } from '../access';
import { oau_prev, this_prev, ws_prev, wv_prev } from './img/current';

const Current = () =>
  <div>
    <p>Projects in active development or continued improvement:</p>
    <Project
      name="This"
      description="Not just a portfolio."
      notes="This is a responsive single-page React app that I built, pretty much from scratch. (Did I hit all the buzzwords?) I plan to do more with it later."
      tags="node.js, react, react-router, css3, html5, responsive"
      image={<img src={this_prev} alt="thiss" />}
      href="https://github.com/bnoden/bnoden-pf"
    />

    <Project
      name="weSeddit (working title)"
      description="Experimental social platform prototype"
      notes="Could be used for a blog, message board, chat interface, Twitter-esque social media platform, Slack-esque collaborative workspace, and more. Still figuring this one out. (You may notice ProtoMan. He makes dummy posts every 5 seconds to simulate user contributions in realtime.)"
      tags="node.js, react, redux, rest, api, server"
      image={<img src={ws_prev} alt="weseddit" />}
      href="https://weseddit.firebaseapp.com/"
    />

    <Project
      name="OffAndUp"
      description="(Formerly OfferUpUI) Cross-browser UI/UX extension for OfferUp.com"
      notes="I actually use this extension every day. Really!"
      tags="node.js, gulp, babel, webpack"
      image={<img src={oau_prev} alt="off and up" />}
      href={
        browserIs.Chrome()
          ? 'https://chrome.google.com/webstore/detail/offandup/kaihmhnjmocmppfgkpofegmccjfblbik'
          : browserIs.Firefox()
            ? 'https://addons.mozilla.org/en-US/firefox/addon/offandup/'
            : 'https://github.com/bnoden/OffAndUp'
      }
    />
    <Project
      name="WebVideo"
      description="Media player for PC with various settings, built with HTML5 and React."
      notes="This started as a simple attempt to play a particular series of coding lessons with the optimal display size and playback controls, for watching and coding along. I would like to redo the whole thing and add a lot more features."
      tags="node.js, react, html5, css3, html5-video, babel, media"
      image={<img src={wv_prev} alt="web video" />}
      href={
        window.innerWidth >= 1000
          ? 'https://bnoden-video.firebaseapp.com'
          : 'https://github.com/bnoden/webvideo'
      }
    />
  </div>;

export default Current;
