<template>
    <div class="timeline-player">
        <span class="iconfont first" @click="previewOneFrame(0)"></span>
        <span class="iconfont pre" @click="preframe"></span>
        <span class="iconfont" :class="{ play: !project.pause, pause: project.pause }" @click="playOrPause"></span>
        <span class="iconfont next" @click="nextframe"></span>
        <span class="iconfont last" @click="previewOneFrame(project.totalFrame - 1)"></span>
        <span class="iconfont" :class="{ loop: project.loop, once: !project.loop }" @click="loopControl"></span>
    </div>
</template>

<script>

    import { previewOneFrame, loopControl, playControl } from 'store/actions';

    let timer;

    export default {
        name: 'previewer',

        methods: {
            preframe () {
                const me = this;
                const tf = me.project.totalFrame - 1;
                let index = me.project.frameIndex - 1;
                index = index < 0 ? (me.project.loop ? tf : 0) : index;
                me.previewOneFrame(index);
            },

            nextframe () {
                const me = this;
                const tf = me.project.totalFrame - 1;
                let index = me.project.frameIndex + 1;
                index = index > tf ? (me.project.loop ? 0 : tf) : index;
                me.previewOneFrame(index);
            },

            playOrPause () {
                const me = this;
                const tf = me.project.totalFrame;
                let index = me.project.frameIndex;
                me.playControl();
                if (me.project.pause) {
                    timer = setInterval(() => {
                        me.previewOneFrame(index);
                        if (index == tf - 1) {
                            if (!me.project.loop) {
                                index = 0;
                                me.previewOneFrame(index);
                                clearInterval(timer);
                                me.playControl();
                            }
                            index = 0;
                        }
                        index++;
                    }, 1000 / me.project.fps);
                }
                else {
                    clearInterval(timer);
                }
            }

        },

        vuex: {
            getters: {
                project: ({ project }) => project.common
            },
            actions: {
                previewOneFrame,
                loopControl,
                playControl
            }
        }
    }

</script>

<style lang="less" scoped>
    .timeline-player {
        display: inline-block;
        padding: 0 10px;
        color: #999;
        span {
            cursor: pointer;
            display: inline-block;
            font-size: 15px !important;
        }
        .first {
            &:before {
                content: '\e63f';
            }
        }
        .pre {
            &:before {
                content: '\e61f';
            }
        }
        .play {
            &:before {
                content: '\e621';
            }
        }
        .next {
            &:before {
                content: '\e620';
            }
        }
        .last {
            transform: rotateY(180deg);
            &:before {
                content: '\e63f';
            }
        }
        .loop {
            &:before {
                content: '\e643';
            }
        }
        .once {
            &:before {
                content: '\e642';
            }
        }
        .pause {
            &:before {
                content: '\e622';
            }
        }
    }
</style>