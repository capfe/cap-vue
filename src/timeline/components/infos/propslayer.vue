<template>
    <div
        class="timeline-layer-sub1"
        :class="{ show: layer.status.layer, hide: !layer.status.layer }"
    >
        <div
            class="timeline-item"
            :class="{ highlight: layer.highlight.props }"
            @mouseover="layer.highlight.props = true"
            @mouseout="layer.highlight.props = false"
        >
            <span class="timeline-item-btn">
                <i
                    class="iconfont"
                    :class="{ unfold: layer.status.props, fold: !layer.status.props }"
                    @click="toggle"
                ></i>
            </span>
            <span class="timeline-item-label1">变换</span>
            <span class="timeline-item-label2">设置</span>
        </div>
        <div
            class="timeline-layer-sub2"
            :class="{ show: layer.status.props, hide: !layer.status.props }"
        >
            <position :layer="layer" :project="project"></position>
            <scale :layer="layer" :project="project"></scale>
            <rotate :layer="layer" :project="project"></rotate>
            <opacity :layer="layer" :project="project"></opacity>
        </div>
    </div>
</template>

<script>

    import Position from './props/pos.vue';
    import Scale from './props/scale.vue';
    import Rotate from './props/rotate.vue';
    import Opacity from './props/opacity.vue';

    export default {

        name: 'PropsInfolayer',

        components: {
            Position,
            Scale,
            Rotate,
            Opacity
        },

        props: {
            layer: Object,
            project: Object
        },

        methods: {

            toggle: function (e) {
                this.layer.status.props = !this.layer.status.props;
            }
        }

    }
</script>