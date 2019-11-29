/* eslint-disable */

const simpleRef = '/plainDoge-700x525.jpg?decache=43be11133aa8b5c875b86ea64b5cfa34';

// Can't really check this properly so will still decache!
const concatenatedRef = 'something' + '/plainDoge-700x525.jpg?decache=43be11133aa8b5c875b86ea64b5cfa34';

const refWithQuery = '/plainDoge-700x525.jpg?with=querystring&decache=43be11133aa8b5c875b86ea64b5cfa34';

const refWithHash = "plainDoge-700x525.jpg?decache=43be11133aa8b5c875b86ea64b5cfa34#ololohash";

const refWithHashQuery = "plainDoge-700x525.jpg?tough=cookie&decache=43be11133aa8b5c875b86ea64b5cfa34#ololohash";

const missingRef = "doesntexist.jpg";

const decachedRef = '/plainDoge-700x525.jpg?decache=done';

funcCall('/plainDoge-700x525.jpg?decache=43be11133aa8b5c875b86ea64b5cfa34');

const myFunc = () => '/plainDoge-700x525.jpg?decache=43be11133aa8b5c875b86ea64b5cfa34';

const wrongExtension = '/plainDoge-700x525.flv';

const missingConcatenatedRef = 'string' + 'doesntexist.jpg';

'just a nice string, nothing to see here';
