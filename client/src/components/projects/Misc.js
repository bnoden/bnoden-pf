import React from 'react';

import Project from './Project';
import { qtFilePrev, qtHexbinPrev, qtHiloPrev, qtTePrev } from './img/misc';
import './style/Misc.css';

const Misc = () =>
  <div>
    <p>Everything else.</p>
    <Project
      name='Qt TextEditor'
      description='Text Editor made with C++ and Qt'
      notes='Simple but functional.'
      tags={['qt', 'c++', 'ui']}
      image={<img src={qtTePrev} alt="text editor" />}
      href="https://github.com/bnoden/qtTextEditor/tree/master/TextEditor"
      category='Misc'
    />
    <Project
      name="Qt UIs"
      description="Experimental desktop apps made with C++ and Qt"
      notes={
        <p>
          Special thanks to Bryan Cairns for his{' '}
          <a
            href="https://www.youtube.com/playlist?list=PL2D1942A4688E9D63"
            rel="noopener noreferrer"
            target="_blank"
          >
            Qt videos
          </a>. (Now officially partnered with{' '}
          <a
            href="https://www.youtube.com/playlist?list=PLizsthdRd0Ywl59atMhNyCydPrb6xz8wN"
            rel="noopener noreferrer"
            target="_blank"
          >
            Qt.io
          </a>
          )
        </p>
      }
      tags={['qt', 'c++', 'ui']}
      multiImage={
        <div className="imgQt">
          <a
            href="https://github.com/bnoden/qt/tree/master/qtGUI"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={qtHiloPrev} alt="hi lo" />
          </a>
          <a
            href="https://github.com/bnoden/qt2/tree/master/qtTree"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={qtHexbinPrev} alt="hexbin" />
          </a>
          <a
            href="https://github.com/bnoden/qt2/tree/master/qtAction"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={qtFilePrev} alt="qt file" />
          </a>
        </div>
      }
      category="Misc"
    />
  </div>;

export default Misc;