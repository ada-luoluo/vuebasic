// 现在b.js想使用a.js的flag 、sum  可使用import

// import {flag} form "../people-a.js";
import {flag} from '../people-a.js'

const name = 'hong'
const age = 24

if (flag) {
	console.log('aaa')
}

