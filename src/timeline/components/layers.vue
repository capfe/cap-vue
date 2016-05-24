<template>
    <div
        class="timeline-wrap"
        @scroll="onscrollY"
    >
        <layers-infos
            :project="project"
        ></layers-infos>

        <layers-bars
            :project="project"
        ></layers-bars>
    </div>
</template>

<script>

    import LayersInfos from './infos/layers.vue';
    import LayersBars from './bars/layers.vue';
    import $ from 'jquery';

    export default {

        name: 'TimelineLayers',

        components: {
            LayersInfos,
            LayersBars
        },

        props: {
            project: Object
        },

        methods: {

            /**
             * 监听滚动
             */
            onscrollY: function () {

                let $bars = $(this.$el).find('.timeline-bars');
                let $line = $('.timeline-line');
                let scrollLeft = -$bars[0].scrollLeft;

                $bars
                    .removeClass('rela')
                    .find('.timeline-fixed')
                    .css({
                        top: 0,
                        marginLeft: scrollLeft
                    });

                $line
                    .css({
                        top: 32,
                        marginLeft: scrollLeft + this.project.frameIndex * this.project.pixel
                    });
            }
        }
    };

</script>

<style lang="less">
    .rela {
        position: relative;
        .timeline-line {
            left: 8px;
        }
    }
</style>