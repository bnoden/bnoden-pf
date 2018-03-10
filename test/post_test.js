const assert = require('assert');
const request = require('supertest');
const mongoose = require('mongoose');

const app = require('../server');

// const Project = mongoose.model('project');
const Project = require('../db/models/project');

describe('Projects controller', () => {
  it('POST to /api/projects creates a new project', done => {
    const name = 'Calculator';
    const category = 'Old';
    const description =
      'Carefully crafted calculator with issues';
    const notes = 'This was a fun and rewarding experience. I think everyone should build a calculator at least once.';
    const tags = ['jquery', 'javascript', 'html', 'css'];
    const media = {
      image:
        'https://raw.githubusercontent.com/bnoden/bnoden-pf/master/client/src/components/projects/img/old/calc_prev.png',
      href:
        'https://codepen.io/bnoden/full/Meggmq/'
    };

    tags.sort();
    Project.count().then(count => {
      request(app).post('/api/projects').send({ name, category, description, notes, tags, media }).end(() => {
        Project.count().then(newCount => {
          // console.log('count:', count);
          // console.log('newCount:', newCount);
          assert(count === 1);
          assert(Project[0].name === name);
          assert(Project[0].category === category);
          assert(Project[0].description === description);
          assert(Project[0].notes === notes);
          assert(Project[0].tags.length === tags.length);
          assert(Project[0].media.image === media.image);
          assert(Project[0].media.href === media.href);
        });
      });
    });
    done();
  });
});
