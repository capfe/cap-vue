<template>
    <div class="timeline-bars"
        @scroll="onScrollX"
    >
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
        <div
            class="timeline-fixed timeline-fixed-bars"
            @click="preview"
        >
            <div class="timeline-bars-nav">
                <bars-ruler></bars-ruler>
            </div>
            <div class="timeline-item">
                <div
                    class="timeline-item-nav"
                    :style="{ 'width': width }"
                >
                </div>
                <div
                    class="timeline-item-show"
                    :style="{ 'width': width }"
                >
                </div>
            </div>
        </div>
        <div 
            class="timeline-layer"
            v-for="layer in project.layers"
            :class="{ 'first': $index === 0 }"
            :style="{ 'width': width }"
        >
            <bars-layer :layer="layer" :index="$index" :project="project"></bars-layer>
        </div>
    </div>
</template>

<script>

    import BarsRuler from './ruler.vue';
    import BarsLayer from './layer.vue';
    import $ from 'jquery';

    export default {

        name: 'LayersBars',

        components: {
            BarsRuler,
            BarsLayer
        },

        props: {
            project: Object,
        },

        computed: {
            width: function () {
                return this.project.totalFrame * this.project.pixel + 'px';
            }
        },

        methods: {

            /**
             * on scroll
             */
            onScrollX: function () {

                let $bars = $(this.$el);
                let scrollTop = $('.timeline-wrap')[0].scrollTop;
                let $line = $('.timeline-line');

                $bars
                    .addClass('rela')
                    .find('.timeline-fixed')
                    .css({
                        marginLeft: 0,
                        top: scrollTop
                    });

                $line
                    .css({
                        marginLeft: this.project.frameIndex * this.project.pixel,
                        top: scrollTop + 32
                    });
            },

            preview: function (e) {
                let cx = e.clientX + this.$el.scrollLeft - 509;
                let range = this.project.pixel;
                let index = Math.floor(cx / range);
                
                this.project.frameIndex = index;
            }
        }
    }

</script>