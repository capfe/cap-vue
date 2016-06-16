/**
 * @file 时间轴的刻度
 * @author mj(zoumiaojiang@baidu.com)
 */


/**
 * @constructor
 */
class Ruler {
    constructor() {
        this.init.apply(this, arguments);
    }
}


/**
 * canvas写文字
 *
 * @param  {number} x    文字x坐标
 * @param  {number} y    文字y坐标
 * @param  {string} text 文字内容
 */
function drawText(ctx, x, y, text) {
    if (text.indexOf('s') > -1) {
        ctx.font = '16pt consolas';
        ctx.fillStyle = '#fff';
    }
    else {
        ctx.font = '15pt Calibri';
        ctx.fillStyle = '#999';
    }
    ctx.fillText(text, x - 9, y);
}


/**
 * canvas划线
 *
 * @param  {number} x1 起点x坐标
 * @param  {number} y1 起点y坐标
 * @param  {number} x2 终点x坐标
 * @param  {number} y2 终点y坐标
 */
function drawLine(ctx, x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = '#999';
    ctx.stroke();
}


/**
 * 画刻度
 *
 * @param  {number} fps 每秒跑的帧数
 * @param  {number} tf  总帧数
 */
function drawPoints() {

    var me = this;
    var pixel = me.pixel;
    var ctx = me.ctx;
    var fps = me.fps;
    var scale = me.scale;
    var w = me.canvas.width;
    var dist = 1;
    var i = 1;
    var textX;
    var lineX;
    
    while (dist < w) {

        textX = lineX = dist;

        if (dist % (2 * scale * pixel) === 0) {
            drawText(ctx, textX, 23 * 2, i + 'f');
            drawLine(ctx, lineX, 26 * 2, lineX, 32 * 2);
            if (i % fps === 0) {
                drawText(ctx, textX, 13 * 2, i / fps + 's');
            }
            i++;
        }
        else if (dist % (2 * pixel) === 0) {
            if (i % fps === 0) {
                drawText(ctx, textX, 12 * 2, i / fps + 's');
                drawLine(ctx, lineX, 26 * 2, lineX, 32 * 2);
            }
            else {
                drawLine(ctx, lineX, 30 * 2, lineX, 32 * 2);
            }
            i++;
        }

        dist++;
    } 
}


/**
 * 初始化ruler
 *
 * @param  {Object} opts ruler的配置
 */
Ruler.prototype.init = function(opts) {
    var me = this;
    me.canvas = opts.canvas;
    me.ctx = me.canvas.getContext('2d');
    me.fps = opts.fps || 60;
    me.totalFrame = opts.totalFrame || 60;
    me.scale = opts.scale || 5;
    me.pixel = opts.pixel || 16;

    me.render();
};


/**
 * 渲染标尺
 *
 * @param  {Object} opts 标尺的参数
 */
Ruler.prototype.render = function (opts) {

    Object.assign(this, opts);
    drawPoints.call(this);
};

export default Ruler;
