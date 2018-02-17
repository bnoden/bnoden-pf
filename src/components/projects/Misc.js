import React from 'react';

import Project from './Project';
import { qtFilePrev, qtHexbinPrev, qtHiloPrev, qtTePrev } from './img/misc';
import './style/Misc.css';

const Misc = () =>
  <div>
    <p>Everything else.</p>
    <Project
      name="Qt UIs"
      description="Cross-platform user interfaces made with C++ and Qt"
      notes={
        <p>
          Special thanks to Bryan Cairns for his{' '}
          <a
            href="//www.youtube.com/playlist?list=PL2D1942A4688E9D63"
            rel="noopener noreferrer"
            target="_blank"
          >
            Qt videos
          </a>. (Now officially partnered with{' '}
          <a
          href="//www.youtube.com/playlist?list=PLizsthdRd0Ywl59atMhNyCydPrb6xz8wN"
          rel="noopener noreferrer"
          target="_blank"
          >
            Qt.io
          </a>
        )
        </p>
      }
      tags="qt, c++, ui"
      multiImage={
        <div className="imgQt">
          <a
            href="//github.com/bnoden/qtTextEditor/tree/master/TextEditor"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={qtTePrev} alt="text editor" />
          </a>
          <a
            href="//github.com/bnoden/qt/tree/master/qtGUI"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={qtHiloPrev} alt="hi lo" />
          </a>
          <a
            href="//github.com/bnoden/qt2/tree/master/qtTree"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={qtHexbinPrev} alt="hexbin" />
          </a>
          <a
            href="//github.com/bnoden/qt2/tree/master/qtAction"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={qtFilePrev} alt="qt file" />
          </a>
        </div>
      }
    />
  </div>;

export default Misc;
