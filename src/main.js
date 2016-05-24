/**
 * @file 主入口
 * @author mj(zoumiaojiang@baidu.con)
 */

import './index.less';

import Router from 'vue-router'
import Vue from 'vue';
import App from './app.vue';
import CapIndexView from './indexView.vue';



Vue.use(Router);

let router = new Router({
    hashbang: false
});


router.map({
    '/index': {
        component: CapIndexView
    },
    '/': {
        component: CapIndexView
    }
});


router.beforeEach(function () {
    window.scrollTo(0, 0)
});

router.redirect({
    '*': '/'
});


router.start(App, '#viewport');
