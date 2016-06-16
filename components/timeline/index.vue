<template>
    <div class="timeline">
        <timeline-tabs></timeline-tabs>
        <div class="timeline-main">
            <div class="timeline-wrap" @scroll="onscrollY">
                <layers-infos></layers-infos>
                <layers-bars></layers-bars>
            </div>
            <timeline-footer></timeline-footer>
        </div>
    </div>
</template>


<script>
    import TimelineTabs from './tabs/index.vue';
    import TimelineFooter from './footer/index.vue';
    import LayersInfos from './infos/layers.vue';
    import LayersBars from './bars/layers.vue';
    import $ from 'jquery';

    /**
     * @component
     */
    export default {

        name: 'CapTimeline',

        components: {
            TimelineTabs,
            TimelineFooter,
            LayersInfos,
            LayersBars
        },

        methods: {

            /**
             * 监听滚动
             */
            onscrollY () {
                let $bars = $(this.$el).find('.timeline-bars');
                let $line = $('.timeline-line');
                let scrollLeft = -$bars[0].scrollLeft;

                $bars
                    .removeClass('rela')
                    .find('.timeline-bars-fixed')
                    .css({
                        top: 0,
                        marginLeft: scrollLeft
                    });

                $line
                    .css({
                        top: 34,
                        marginLeft: scrollLeft + this.project.frameIndex * this.project.pixel,
                        bottom: 20
                    });
            }
        },

        vuex: {
            getters: {
                project: ({ project }) => project.common
            }
        }
    };

</script>

<style lang="less" scoped>
    .timeline {
        position: fixed;
        height: 300px;
        bottom: 0;
        left: 0;
        right: 0;
        background: #1d1d1d;
        min-width: 1200px;
        &-main {
            height: 272px;
            border: 1px solid #319ad2;
            position: relative;
            top: -4px;
            overflow: hidden;
        }

        &-wrap {
            height: 252px;
            border-bottom: 1px solid #000;
            overflow-y: scroll;
        }
    }
</style>