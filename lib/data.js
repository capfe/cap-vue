/**
 * @file 存储全局数据
 * @author mj(zoumiaojiang@gmail.com)
 */


let data = {};

export default {
    get (key) {
        return data[key]
    },

    set (key, value) {
        data[key] = value;
    }
};