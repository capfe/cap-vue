<template>
    <div class="timeline-layer-sub1" :class="{ show: layer.statusLayer, hide: !layer.statusLayer }">
        <div class="timeline-item">
            <span class="timeline-item-btn">
                <i
                    class="iconfont"
                    :class="{ unfold: layer.statusProp, fold: !layer.statusProp }"
                    @click="propsToggle(index)"
                ></i>
            </span>
            <span class="timeline-item-label1">变换</span>
            <span class="timeline-item-label2">设置</span>
        </div>
        <div class="timeline-layer-sub2" :class="{ show: layer.statusProp, hide: !layer.statusProp }">
            <position :layer="layer"></position>
            <scale :layer="layer"></scale>
            <rotate :layer="layer"></rotate>
            <opacity :layer="layer"></opacity>
        </div>
    </div>
</template>

<script>

    import Position from './props/pos.vue';
    import Scale from './props/scale.vue';
    import Rotate from './props/rotate.vue';
    import Opacity from './props/opacity.vue';

    import { propsShowToggle } from 'store/actions';

    export default {

        name: 'PropsInfolayer',

        components: {
            Position,
            Scale,
            Rotate,
            Opacity
        },

        props: {
            index: Number,
            layer: Object
        },

        methods: {
            propsToggle () {
                const layerid = this.layer._id;
                const field = 'statusProp';
                const value = !this.layer.statusProp;
                const index = this.index;

                this.propsShowToggle({ layerid, field, value, index });
            }
        },

        vuex: {
            getters: {
                project: ({ project }) => project.common
            },
            actions: {
                propsShowToggle
            }
        }

    }
</script>

<style lang="less">
    .timeline-layer-sub1 {
        .timeline-item {
            padding-left: 98px;
            background: #1d1d1d;
            span {
                display: inline-block;
            }
            &-btn {
                cursor: pointer;
                margin-right: 3px;
            }
            &-label1 {
                width: 103px;
            }
            &-label2 {
                color: #319ad2;
            }
        }
    }
    .timeline-layer-sub2 {
        .timeline-item {
            padding-left: 120px;
            background: #1d1d1d;
            span {
                display: inline-block;
            }
            &-kf {
                cursor: pointer;
                padding-right: 5px;
            }
            .haskf {
                color: #319ad2;
            }
            &-label1 {
                width: 80px;
                i {
                    margin-right: 5px;
                }
            }
            &-label2 {
                color: #319ad2;
                cursor: move;
                em {
                    margin-right: 10px;
                }
                input {
                    height: 14px;
                    width: 50px;
                    line-height: 14px;
                    background: #000;
                    border: 0;
                    outline: none;
                    color: #319ad2;
                    margin-right: 10px;
                    margin-left: -2px;
                    padding-left: 2px;
                }
            }
        }
    }
</style>