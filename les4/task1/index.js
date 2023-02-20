import './polyfills/array-flat.js';
import './polyfills/array-flatMap.js';

// импортируйте все полифилы из папки polyfills
import calcExpression, { sum, mult } from './calculator/index.js';
// импортируйте ф-цию fetchUser из profile/gateway.js под таким же именем
import fetchUser from './polyfills/gateway.js';
// импортируйте ф-цию printProfile из profile/index.js под таким же именем
import { printProfile } from './polyfills/index.js';

const calcResult = calcExpression('1 + 2');
const sumResult = sum(1, 2);
const multResult = mult(1, 2);
const userDataPromise = fetchUser('facebook');
printProfile({ name: 'Tom', from: 'The World' });
