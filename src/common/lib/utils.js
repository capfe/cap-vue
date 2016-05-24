import $ from 'jquery';

export function getParent(dom, classname) {
    while (dom !== document) {
        if ($(dom).hasClass(classname)) {
            return dom;
        }
        else {
            dom = dom.parentNode;
        }
    }

    return dom;
}