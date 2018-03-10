const assert = require('assert');
const request = require('supertest');
const mongoose = require('mongoose');

const app = require('../server');
const Project = require('../db/models/project');

describe('Creating records', () => {
  const name = 'OffAndUp';
  const category = 'Current';
  const description =
    '(Formerly OfferUpUI) Cross-browser UI/UX extension for OfferUp.com';
  const notes = 'I actually use this extension every day. Really!';
  const tags = ['Node.js', 'gulp', 'babel', 'webpack'];
  const media = [
    {
      image:
        'https://raw.githubusercontent.com/bnoden/bnoden-pf/master/client/src/components/projects/img/current/oau_prev.png',
      href:
        'https://chrome.google.com/webstore/detail/offandup/kaihmhnjmocmppfgkpofegmccjfblbik'
    }
  ];

  it('saves a project', done => {
    const project = new Project({
      name,
      category,
      description,
      notes,
      tags,
      media
    });

    project
      .save()
      .then(() => {
        const { image, href } = project.media[0];
        // console.log('\nimage:', image)
        // console.log('\nhref:', href)
        assert(image === media[0].image);
        assert(href === media[0].href);
        assert(project.name === name);
        assert(project.category === category);
        assert(project.description === description);
        assert(project.notes === notes);
        assert(project.tags.join(',') === tags.join(','));
      })
      .then(() => done());
  });
});
