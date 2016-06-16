<template>
    <div
        class="timeline-item timeline-item-opacity"
    >
        <keyframe-control :layer="layer" :prop="prop"></keyframe-control>
        <span class="timeline-item-label2">
            <c-number
                :value="opacity.value"
                @on-change="change | debounce 300"
            ></c-number> %
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

        name: 'OpacityInfo',

        components: {
            KeyframeControl,
            cNumber
        },

        data () {
            return {
                prop: 'opacity'
            };
        },

        props: {
            layer: Object
        },

        computed: {
            opacity () {
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

        methods: {
            change (value) {
                const me = this;
                hasProp(me.keyframes, me.project.frameIndex, me.layer.id, me.prop)
                    ? me.propValueChange(value, me.layer.id, me.prop)
                    : me.addKeyframe(me.layer, me.prop, value);
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