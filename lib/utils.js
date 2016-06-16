/**
 * @file utils package
 * @author mj(zoumiaojiang@baidu.com)
 */


function isObject(value) {
    return Object.prototype.toString.call(value) == '[object Object]'
}


function isArray(value) {
    return Object.prototype.toString.call(value) == '[object Array]'
}


const cloneObject = obj => {
    let ret = {};

    if (isArray(obj)) {
        ret = [];
        obj.map((item, index) => {
            ret[index] = item;
        });
    }
    else if (isObject(obj)) {
        for (let p in obj) {
            if (typeof obj[p] === 'object') {
                ret[p] = cloneObject(obj[p]);
            }
            else {
                ret[p] = obj[p];
            }
        }
    }
    else {
        ret = obj;
    }

    return ret;
}


export {
    cloneObject
}