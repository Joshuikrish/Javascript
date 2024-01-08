import {hello, sayHi} from './helloWorld.js';
import * as months from './importExport.js'
let root = document.getElementById('root')
root.innerText = `${hello}
${sayHi('World')}
${import.meta.url}
${months.default}
`;

