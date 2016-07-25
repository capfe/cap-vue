/**
 * @file state api
 * @author mj(zoumiaojiang@baidu.com)
 */

// mock project data

const _data = {

    fps: 60,

    // 总帧数
    totalFrame: 200,

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
            focus: 0
        },

        {
            id: 1,
            name: 'cap-tab2',
            focus: 0
        },
        {
            id: 2,
            name: 'cap-tab3',
            focus: 1
        }
    ],

    // 当前选中图层id
    clid: 0,

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
            children: [2],

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
                    value: 0.00
                },

                y: {
                    fx: "liner",
                    value: 0.00
                },

                z: {
                    fx: "liner",
                    value: 300.00
                }
            },
            scale: {
                x: {
                    fx: "liner",
                    value: 1 // 放大2倍, 0.5为缩小2倍
                },

                y: {
                    fx: "liner",
                    value: 1
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
                    value: 0
                },

                y: {
                    fx: "liner",
                    value: 0
                },

                z: {
                    fx: "liner",
                    value: 0
                }
            },

            skew: {
                x:{
                    fx: "liner",
                    value: 0
                },

                y: {
                    fx: "liner",
                    value: 0
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

            origin: {
                x:{
                    fx: "liner",
                    value: 0
                },

                y: {
                    fx: "liner",
                    value: 0
                }
            },

            size: {
                x:{
                    fx: "liner",
                    value: 100
                },

                y: {
                    fx: "liner",
                    value: 100
                }
            },
            border: {
                width: {
                    value: 1
                },
                radius: {
                    value: 0
                },
                style: {
                    value: 'solid'
                },
                color: {
                    value: '#000'
                }
            }

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
            children: [3],
            opacity: {
                fx: "liner",
                value: 20
            },
            position: {
                x: {
                    fx: "liner",
                    value: 100
                },

                y: {
                    fx: "liner",
                    value: 100
                },

                z: {
                    fx: "liner",
                    value: 300
                }
            },
            scale: {
                x: {
                    fx: "liner",
                    value: 0.5 // 放大2倍, 0.5为缩小2倍
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
                    value: 0
                },

                y: {
                    fx: "liner",
                    value: 0
                },

                z: {
                    fx: "liner",
                    value: 30
                }
            },

            skew: {
                x:{
                    fx: "liner",
                    value: 0
                },

                y: {
                    fx: "liner",
                    value: 0
                },

                z: {
                    fx: "liner",
                    value: 30
                }
            },

            color: {
                fx: "liner",
                value: "#fff"
            },

            origin: {
                x:{
                    fx: "liner",
                    value: 0
                },

                y: {
                    fx: "liner",
                    value: 0
                }
            },

            size: {
                x:{
                    fx: "liner",
                    value: 100
                },

                y: {
                    fx: "liner",
                    value: 100
                }
            },
            border: {
                width: {
                    value: 1
                },
                radius: {
                    value: 0
                },
                style: {
                    value: 'solid'
                },
                color: {
                    value: '#f00'
                }
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
                    value: 100
                },

                z: {
                    fx: "liner",
                    value: 300
                }
            },
            scale: {
                x: {
                    fx: "liner",
                    value: 1 // 放大2倍, 0.5为缩小2倍
                },

                y: {
                    fx: "liner",
                    value: 1
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
                    value: 0
                },

                y: {
                    fx: "liner",
                    value: 0
                },

                z: {
                    fx: "liner",
                    value: 0
                }
            },

            skew: {
                x:{
                    fx: "liner",
                    value: 0
                },

                y: {
                    fx: "liner",
                    value: 0
                },

                z: {
                    fx: "liner",
                    value: 30
                }
            },

            color: {
                fx: "liner",
                value: "#fff"
            },

            origin: {
                x:{
                    fx: "liner",
                    value: 0
                },

                y: {
                    fx: "liner",
                    value: 0
                }
            },

            size: {
                x:{
                    fx: "liner",
                    value: 50
                },

                y: {
                    fx: "liner",
                    value: 50
                }
            },
            border: {
                width: {
                    value: 1
                },
                radius: {
                    value: 20
                },
                style: {
                    value: 'solid'
                },
                color: {
                    value: '#0f0'
                }
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
                            value: 213,
                            fx: 'liner'
                        },
                        y: {
                            value: 340,
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
                        value: 30,
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


const PROPS = [
    'position',
    'scale',
    'rotate',
    'opacity'
];


/**
 * fetch project state
 *
 * @return {Obejct} project common data
 */
function fetchProject() {
    let project = Object.assign({}, _data);
    project.layers.map(layer => {
        layer.highlight = {
            props: false,
            layer: false,
            position: false,
            opacity: false,
            scale: false,
            rotate: false
        };
    });

    return project;
}

/**
 * fetch keyframe state
 *
 * @return {Array<Object>} keyframe list
 */
function fetchKeyframes() {

    let keyframes = [];
    _data.keyframes.map(_kf => {
        let obj = {};
        _kf.layers.map(layer => {
            obj[layer.id] = {};
            PROPS.map(prop => {
                layer[prop] && (obj[layer.id][prop] = Object.assign(
                    {},
                    {
                        type: 1,
                        status: 0,
                        index: _kf.index
                    },
                    layer[prop]
                ));
            });
        });
        keyframes[_kf.index] = obj;
    });

    keyframes.map(kf => {
        for (let layerid in kf) {
            for (let prop in kf[layerid]) {
                let rkf = kf[layerid][prop];
                // TODO: type
            }
        }
    });

    return keyframes;
}



export default {

    // mock async request data
    fetchProject: cb => {
        let project = fetchProject();
        setTimeout(
            () => cb(project)
            ,
            10
        );
    },

    fetchKeyframes: cb => {
        let keyframes = fetchKeyframes();
        setTimeout(
            () => cb(keyframes)
            ,
            10
        );
    }

};
