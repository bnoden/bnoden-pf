import React from 'react';

import Project from './Project';

const Concept = () =>
  <div className="concept">
    <Project
      name="iWantThat!"
      description="Mobile Marketplace App, school project"
      notes="This is happening. People want this. (The concept, not the presentation.)"
      image={
        <iframe
          title="i want that"
          src="https://www.slideshare.net/slideshow/embed_code/key/JF7Q1COkqgk4xb"
          frameBorder="0"
          marginWidth="0"
          marginHeight="0"
          scrolling="no"
          style={{
            width: '70vw',
            height: '45vw',
            border: '1px solid #CCC',
            borderWidth: '1px',
            marginBottom: '5px'
          }}
          allowFullScreen
        />
      }
    />
  </div>;

export default Concept;
