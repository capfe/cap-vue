
/**
 * @file config
 * @author mj(zoumiaojiang@gmail.com)
 */

export const SERVER = {
    protocol: 'http://',
    host: 'localhost',
    port: 8080,
    root: 'http://localhost:8080'
};

export const FILE_TYPES = {
    'image/jpeg': [
        '图像jpeg',
        '#fc97be',
        '.jpg'
    ],
    'image/png':[
        '图像png',
        '#b3fc74',
        '.png'
    ],
    'image/gif': [
        '图像gif',
        '#b3bffc',
        '.gif'
    ],
    'image/vnd.adobe.photoshop': [
        'psd文件',
        '#6ef4de',
        '.psd'
    ]
};


export const PROPS_TYPES = {
    position: {
        coordinate: true,
        name: '位置'
    },
    scale: {
        coordinate: true,
        name: '缩放'
    },
    rotate: {
        coordinate: true,
        name: '旋转'
    },
    skew: {
        coordinate: true,
        name: '拉伸'
    },
    origin: {
        coordinate: true,
        name: '原点'
    },
    opacity: {
        coordinate: false,
        name: '透明度'
    }
}
