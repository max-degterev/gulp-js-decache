const assert = require('assert');
const Vinyl = require('vinyl');

const decache = require('./');

it('should decache images', (done) => {
  const stream = decache({ value: '0.0.1' });

  stream.on('data', (file) => {
    assert(/\?decache=0\.0\.1/.test(file.contents.toString('utf8')));
    done();
  });

  stream.write(new Vinyl({
    contents: Buffer.from('const imageUrl = \'fantastic_Image@2x.jpg\';'),
  }));
});

it('should ignore decache images', (done) => {
  const stream = decache({ ignore: [/^fantastic_/] });

  stream.on('data', (file) => {
    assert(/'fantastic_Image@2x.jpg';/.test(file.contents.toString('utf8')));
    done();
  });

  stream.write(new Vinyl({
    contents: Buffer.from('const imageUrl = \'fantastic_Image@2x.jpg\';'),
  }));
});
