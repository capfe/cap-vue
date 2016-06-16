<template>
    <div
        class="timeline-item timeline-item-rotate"
    >
        <keyframe-control :layer="layer" :prop="prop"></keyframe-control>
        <span class="timeline-item-label2">
            <c-number 
                :value="rotate.x.value" 
                @on-change="changeX | debounce 300"
            ></c-number>
            <c-number
                :value="rotate.y.value"
                @on-change="changeY | debounce 300"
            ></c-number>
        </span>
    </div>
</template>

<script>

    import KeyframeControl from './control.vue';
    import cNumber from 'components/common/ui/number.vue';
    import {
        propValueChange,
        addKeyframe
    } from 'store/actions';

    function hasProp(kfs, fi, layerid, prop) {
        return kfs[fi] && kfs[fi][layerid] && kfs[fi][layerid][prop];
    }

    function preKeyframe(kfs, fi, layerid, prop) {
        for (let i = fi; i >= 0; i--) {
            if (hasProp(kfs, i, layerid, prop)) {
                return kfs[i][layerid][prop];
            }
        }
    }

    export default {

        name: 'RotateInfo',

        components: {
            KeyframeControl,
            cNumber
        },

        data () {
            return {
                prop: 'rotate'
            };
        },

        computed: {
            rotate () {
                const kfs = this.keyframes;
                const fi = this.project.frameIndex;
                const layerid = this.layer.id;
                const prop = this.prop;
                const pkf = preKeyframe(kfs, fi, layerid, prop)

                if (hasProp(kfs, fi, layerid, prop)) {
                    return kfs[fi][layerid][prop];
                }
                else if (pkf) {
                    return pkf
                }

                return this.layer[prop];
            }
        },

        props: {
            layer: Object,
        },

        methods: {
            changeX (value) {
                const me = this;
                hasProp(me.keyframes, me.project.frameIndex, me.layer.id, me.prop)
                    ? me.propValueChange(value, me.layer.id, me.prop, 'x')
                    : me.addKeyframe(me.layer, me.prop, value, 'x');
            },

            changeY (value) {
                const me = this;
                hasProp(me.keyframes, me.project.frameIndex, me.layer.id, me.prop)
                    ? me.propValueChange(value, me.layer.id, me.prop, 'y')
                    : me.addKeyframe(me.layer, me.prop, value, 'y');
            }
        },

        vuex: {
            getters: {
                project: ({ project }) => project.common,
                keyframes: ({ keyframes }) => keyframes.all
            },
            actions: {
                propValueChange,
                addKeyframe
            }
        }
    }
</script>