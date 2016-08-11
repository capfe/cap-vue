<template>
    <div
        class="timeline-item timeline-item-rotate"
    >
        <keyframe-control :layer="layer" :prop="prop"></keyframe-control>
        <span class="timeline-item-label2">
            <c-number
                :value="+rotate.x.value"
                @on-change="changeX | debounce 300"
            ></c-number>
            <c-number
                :value="+rotate.y.value"
                @on-change="changeY | debounce 300"
            ></c-number>
            <c-number
                :value="+rotate.z.value"
                @on-change="changeZ | debounce 300"
            ></c-number>
        </span>
    </div>
</template>

<script>

    import KeyframeControl from './control.vue';
    import cNumber from 'components/common/ui/number.vue';
    import {
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
                const layerid = this.layer._id;
                const prop = this.prop;
                const pkf = preKeyframe(kfs, fi, layerid, prop)

                if (hasProp(kfs, fi, layerid, prop)) {
                    return kfs[fi][layerid][prop];
                }
                else if (pkf) {
                    return pkf
                }

                return this.layer[prop] || {x: {value:0, fx: 'linear'}, y: {value:0, fx: 'linear'}, z: {value:0, fx: 'linear'}};
            }
        },

        props: {
            layer: Object,
        },

        methods: {
            changeX (value) {
                const me = this;
                const projectid = me.projectid;
                const layerid = me.layer._id;
                const prop = me.prop;
                const key = 'x';
                const index = me.project.frameIndex;
                me.addKeyframe({ projectid, index, layerid, prop, key, value });
            },

            changeY (value) {
                const me = this;
                const projectid = me.projectid;
                const layerid = me.layer._id;
                const prop = me.prop;
                const key = 'y';
                const index = me.project.frameIndex;
                me.addKeyframe({ projectid, index, layerid, prop, key, value });
            },

            changeZ (value) {
                const me = this;
                const projectid = me.projectid;
                const layerid = me.layer._id;
                const prop = me.prop;
                const key = 'z';
                const index = me.project.frameIndex;
                me.addKeyframe({ projectid, index, layerid, prop, key, value });
            }
        },

        vuex: {
            getters: {
                projectid: ({ project }) => project.id,
                project: ({ project }) => project.common,
                keyframes: ({ keyframes }) => keyframes.all
            },
            actions: {
                addKeyframe
            }
        }
    }
</script>
