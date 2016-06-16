<template>
    <canvas
        id="canvas"
        width="{{ width * 2 }}"
        height="64"
        :style="{ width:  width + 'px' }"
    >
    </canvas>
</template>

<script>

    import Ruler from 'lib/ruler';

    export default {

        computed: {
            width () {
                return (this.project.totalFrame || 0) * (this.project.pixel || 0);
            }
        },

        watch: {

            // 操作canvas必须要求width是有值的
            'project.pixel' : function (val, oldVal) {
                if (!oldVal) {
                    new Ruler({
                        canvas: document.getElementById('canvas'),
                        fps: this.project.fps,
                        totalFrame: this.project.totalFrame,
                        scale: this.project.scale,
                        pixel: this.project.pixel
                    });
                }
            }
        },

        ready () {
            new Ruler({
                canvas: document.getElementById('canvas'),
                fps: this.project.fps,
                totalFrame: this.project.totalFrame,
                scale: this.project.scale,
                pixel: this.project.pixel
            });
        },

        vuex: {
            getters: {
                project: ({ project }) => project.common
            }
        }
    }

</script>

<style lang="less" scoped>
    canvas {
        cursor: pointer;
        height: 32px;
        background: #1c1c1c;
        margin-left: 8px;
        margin-bottom: -2px;
    }
</style>