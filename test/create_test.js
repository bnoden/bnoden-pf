const assert = require('assert');
const request = require('supertest');
const mongoose = require('mongoose');

const app = require('../server');
const Project = require('../models/project');

describe('Creating records', () => {
  const name = 'OffAndUp';
  const section = 'Current';
  const description =
    '(Formerly OfferUpUI) Cross-browser UI/UX extension for OfferUp.com';
  const notes = 'I actually use this extension every day. Really!';
  const tags = ['node.js', 'gulp', 'babel', 'webpack'];
  const media = {
    image:
      'https://raw.githubusercontent.com/bnoden/bnoden-pf/master/client/src/components/projects/img/current/oau_prev.png',
    href:
      'https://chrome.google.com/webstore/detail/offandup/kaihmhnjmocmppfgkpofegmccjfblbik'
  };

  tags.sort();

  it('saves a project', done => {
    const project = new Project({
      name,
      section,
      description,
      notes,
      tags,
      media
    });

    project.save().then(() => {
      assert(project.name === name);
      assert(project.section === section);
      assert(project.description === description);
      assert(project.notes === notes);
      assert(project.tags.length === tags.length);
      assert(project.media.image === media.image);
      assert(project.media.href === media.href);
      done();
    });
  });
});
