/* eslint-disable */

const simpleRef = '/plainDoge-700x525.jpg';

// Can't really check this properly so will still decache!
const concatenatedRef = 'something' + '/plainDoge-700x525.jpg';

const refWithQuery = '/plainDoge-700x525.jpg?with=querystring';

const refWithHash = "plainDoge-700x525.jpg#ololohash";

const refWithHashQuery = "plainDoge-700x525.jpg?tough=cookie#ololohash";

const missingRef = "doesntexist.jpg";

const decachedRef = '/plainDoge-700x525.jpg?decache=done';

funcCall('/plainDoge-700x525.jpg');

const myFunc = () => '/plainDoge-700x525.jpg';

const wrongExtension = '/plainDoge-700x525.flv';

const missingConcatenatedRef = 'string' + 'doesntexist.jpg';

'just a nice string, nothing to see here';
