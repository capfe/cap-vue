/**
 * @file 主入口
 * @author mj(zoumiaojiang@baidu.con)
 */

import Router from 'vue-router';
import resource from 'vue-resource';
import dragAndDrop from 'vue-drag-and-drop';
import Vue from 'vue';
import App from 'components/app.vue';
import CapIndexView from 'components/indexView.vue';

Vue.use(Router);
Vue.use(resource);
Vue.use(dragAndDrop);


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
