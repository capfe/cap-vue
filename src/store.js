/**
 * @file data service
 * @author mj(zoumiaojiang@baidu.com)
 */

import $ from 'jquery';
import Firebase from 'firebase';
import { EventEmitter } from 'events';
import { Promise } from 'es6-promise';

// const store = new EventEmitter();
// const api = new Firebase('https://baiducap.firebaseio.com');

const store = {};

var data = {

    fps: 25,

    // 总帧数
    totalFrame: 100,

    // 当前帧所在索引
    frameIndex: 0,

    // 项目名
    name: 'cap-data1',

    // 时间轴尺度（连续几个单元才显示刻度）
    scale: 5,

    // 时间轴一个单元所占用的像素宽度
    pixel: 20,

    // tab可以管理多个项目， 项目由不同的data组成
    tabs: [
        {
            id: 0,
            name: 'cap-tab1',
            focus: 1
        }
    ],
    layers: [
        {
            id: 1,
            name: '图层11',
            classname: 'test-layer-class1',

            // 状态集合（随数据读写管理）
            status: {
                // 图层可视
                view: true,

                // 图层可视反选（只看当前图层）
                dview: false,

                // 图层锁定
                lock: false,

                // 图层是否展开
                layer: true,

                // 图层属性是否展开
                props: true
            },

            // 父图层id
            parentid: 0,

            // 图层标识颜色
            layerColor: '#893456',

            // 不透明值
            opacity: {
                fx: "liner",
                value: 20
            },

            position: {
                x: {
                    fx: "liner",
                    value: 200.00
                },

                y: {
                    fx: "liner",
                    value: 300.00
                },

                z: {
                    fx: "liner",
                    value: 300.00
                }
            },
            scale: {
                x: {
                    fx: "liner",
                    value: 2 // 放大2倍, 0.5为缩小2倍
                },

                y: {
                    fx: "liner",
                    value: 0.5
                },

                z: {
                    fx: "liner",
                    value: 0.5
                }
            },

            zIndex: {
                fx: "liner",
                value: 100
            },

            rotate: {
                x: {
                    fx: "liner",
                    value: 30.01
                },
                
                y: {
                    fx: "liner",
                    value: 30.78
                },

                z: {
                    fx: "liner",
                    value: 30.80
                }
            },

            skew: {
                x:{
                    fx: "liner",
                    value: 30.90
                },

                y: {
                    fx: "liner",
                    value: 30.89
                },

                z: {
                    fx: "liner",
                    value: 30.72
                }
            },

            color: {
                fx: "liner",
                value: "#fff"
            },

            // 可能还有一堆css属性。。
        },
        {
            id: 2,
            name: '图层12',
            classname: 'test-layer-class2',
            layerColor: '#567488',
            status: {
                view: true,
                dview: false,
                lock: false,
                layer: true,
                props: true
            },
            parentid: 1,
            opacity: {
                fx: "liner",
                value: 20
            },
            position: {
                x: {
                    fx: "liner",
                    value: 200
                },

                y: {
                    fx: "liner",
                    value: 300
                },

                z: {
                    fx: "liner",
                    value: 300
                }
            },
            scale: {
                x: {
                    fx: "liner",
                    value: 2 // 放大2倍, 0.5为缩小2倍
                },

                y: {
                    fx: "liner",
                    value: 0.5
                },

                z: {
                    fx: "liner",
                    value: 0.5
                }
            },

            zIndex: {
                fx: "liner",
                value: 100
            },

            rotate: {
                x: {
                    fx: "liner",
                    value: 30
                },
                
                y: {
                    fx: "liner",
                    value: 30
                },

                z: {
                    fx: "liner",
                    value: 30
                }
            },

            skew: {
                x:{
                    fx: "liner",
                    value: 30
                },

                y: {
                    fx: "liner",
                    value: 30
                },

                z: {
                    fx: "liner",
                    value: 30
                }
            },

            color: {
                fx: "liner",
                value: "#fff"
            }
        },
        {
            id: 3,
            name: '图层13',
            classname: 'test-layer-class3',
            status: {
                view: true,
                dview: false,
                lock: false,
                layer: false,
                props: false
            },
            layerColor: '#529862',
            parentid: 2,
            opacity: {
                fx: "liner",
                value: 20
            },
            position: {
                x: {
                    fx: "liner",
                    value: 200
                },

                y: {
                    fx: "liner",
                    value: 300
                },

                z: {
                    fx: "liner",
                    value: 300
                }
            },
            scale: {
                x: {
                    fx: "liner",
                    value: 2 // 放大2倍, 0.5为缩小2倍
                },

                y: {
                    fx: "liner",
                    value: 0.5
                },

                z: {
                    fx: "liner",
                    value: 0.5
                }
            },

            zIndex: {
                fx: "liner",
                value: 100
            },

            rotate: {
                x: {
                    fx: "liner",
                    value: 30
                },
                
                y: {
                    fx: "liner",
                    value: 30
                },

                z: {
                    fx: "liner",
                    value: 30
                }
            },

            skew: {
                x:{
                    fx: "liner",
                    value: 30
                },

                y: {
                    fx: "liner",
                    value: 30
                },

                z: {
                    fx: "liner",
                    value: 30
                }
            },

            color: {
                fx: "liner",
                value: "#fff"
            }
        }
    ],

    keyframes: [
        {
            index: 2,
            layers: [
                {
                    id: 1,
                    position: {
                        x: {
                            value: 300,
                            fx: 'liner'
                        },
                        y: {
                            value: 100,
                            fx: 'liner'
                        }
                    },
                    scale: {
                        x: {
                            value: 2,
                            fx: 'liner'
                        },
                        y: {
                            value: 1,
                            fx: 'liner'
                        }
                    },
                    opacity: {
                        value: 0.3,
                        fx: 'liner'
                    }
                }
            ]
        },
        {
            index: 11,
            layers: [
                {
                    id: 1,
                    scale: {
                        x: {
                            value: 2,
                            fx: 'liner'
                        },
                        y: {
                            value: 1,
                            fx: 'liner'
                        }
                    }
                }
            ]
        },
        {
            index: 21,
            layers: [
                {
                    id: 1,
                    scale: {
                        x: {
                            value: 2,
                            fx: 'liner'
                        },
                        y: {
                            value: 1,
                            fx: 'liner'
                        }
                    }
                }
            ]
        }
    ]
};



store.fetchTabs = function () {
    return data.tabs;
};


function fetchKeyframes(layerid, prop) {
    let kfs = [];
    for (let item of data.keyframes) {
        for (let layer of item.layers) {
            if (layer.id == layerid && layer[prop]) {
                kfs.push({
                    index: item.index,
                    type: 4,
                    status: 0
                });
            }
        }
    }

    return kfs;
};


store.fetchProject = function () {

    let project = data;
    for (let layer of project.layers) {
        let item = {};
        for (let prop of [ 'position', 'scale', 'rotate', 'opacity' ]) {
            item[prop] = fetchKeyframes(layer.id, prop);
        }
        project[layer.id] = item;
        layer.highlight = {
            props: false,
            layer: false,
            position: false,
            opacity: false,
            scale: false,
            rotate: false
        };
    }

    return project;
};


store.addKeyframe = (project, layerid, index, prop) => {
    let keyframes = project[layerid][prop];
    let flag = false;
    for (let keyframe of keyframes) {
        if (keyframe.index == index) {
            flag = true;
            keyframe.type = 4;
            break;
        }
    }
    if (!flag) {
        keyframes.$set(keyframes.length || 0, {
            index: index,
            type: 4,
            status: 0
        });
    }
};

store.removeKeyframe = (project, layerid, index, prop) => {
    for (let item of project[layerid][prop]) {
        if (index === item.index) {
            item.type = 0;
            return;
        }
    }
};


export default store;