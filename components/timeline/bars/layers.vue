<template>
    <div class="timeline-bars" @scroll="onScrollX">
        <span
            class="timeline-line"
            :style="{
                width: project.pixel - 1 + 'px',
                marginLeft: project.frameIndex * project.pixel + 'px'
            }"
        >
            <span></span>
            <i class="iconfont">&#xe62f;</i>
        </span>
        <div class="timeline-bars-fixed" @click="fixedBarClick">
            <bars-ruler></bars-ruler>
            <div class="timeline-item">
                <div class="timeline-item-nav" :style="{ 'width': width }"></div>
                <div class="timeline-item-show" :style="{ 'width': width }"></div>
            </div>
        </div>
        <div 
            class="timeline-bars-layer"
            v-for="layer in project.layers"
            :class="{ 'first': $index === 0 }"
            :style="{ 'width': width }"
        >
            <bars-layer :layer="layer"></bars-layer>
        </div>
    </div>
</template>

<script>

    import BarsRuler from './ruler.vue';
    import BarsLayer from './layer.vue';
    import $ from 'jquery';

    import { previewOneFrame } from 'store/actions.js';

    export default {

        name: 'LayersBars',

        components: {
            BarsRuler,
            BarsLayer
        },

        computed: {
            width () {
                return this.project.totalFrame * this.project.pixel + 'px';
            }
        },

        methods: {

            /**
             * on scroll
             */
            onScrollX () {

                let $bars = $(this.$el);
                let scrollTop = $('.timeline-wrap')[0].scrollTop;
                let $line = $('.timeline-line');
                $bars
                    .addClass('rela')
                    .find('.timeline-bars-fixed')
                    .css({
                        marginLeft: 0,
                        top: scrollTop
                    });

                $line
                    .css({
                        marginLeft: this.project.frameIndex * this.project.pixel,
                        top: scrollTop + 34,
                        bottom: 0
                    });
            },

            fixedBarClick (e) {
                const index = Math.floor((e.clientX + this.$el.scrollLeft - 509) / this.project.pixel)
                this.previewOneFrame(index);
            }
        },

        vuex: {
            getters: {
                project: ({ project }) => project.common
            },

            actions: {
                previewOneFrame
            }
        }
    }

</script>

<style lang="less">
    .timeline-bars {
        min-height: 100%;
        overflow-x: scroll;
        overflow-y: hidden;
        background: #272727;
        &-fixed {
            position: absolute;
            background: #1d1d1d;
            z-index: 1000;
            top: 0;
        }
        &-layer {
            margin-left: 8px;
        }
        .first {
            margin-top: 55px;
        }
    }

    .timeline-line {
        position: absolute;
        border-left: 1px solid #db0e0d;
        left: 509px;
        top: 34px;
        z-index: 1002;
        bottom: 20px;
        cursor: pointer;
        span {
            width: 100%;
            height: 100%;
            display: inline-block;
            opacity: 0.1;
            background: #ccc;
        }
        i {
            position: absolute;
            top: -13px;
            transform: scaleX(.8) scaleY(.9);
            left: -6.6px;
            color: #319ad2;
            cursor: pointer;
        }
    }

    .rela {
        position: relative;
        .timeline-line {
            left: 8px;
        }
    }
</style>