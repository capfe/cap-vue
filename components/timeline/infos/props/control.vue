<template>
    <div class="kf-control" v-show="status">
        <i 
            class="iconfont"
            :class="{ disabled: !hasPre }"
            @click="preKeyframe(layer._id, prop)"
        >&#xe60d;</i>
        <i
            class="iconfont"
            :class="{
                unselected: !isselected,
                selected: isselected
            }"
            @click="keyframeToggle"
        ></i>
        <i
            class="iconfont"
            :class="{ disabled: !hasNext }"
            @click="nextKeyframe(layer._id, prop)"
        >&#xe60e;</i>
    </div>
    <span
        class="timeline-item-kf"
        :class="{ haskf: status }"
        @click="lockKeyframeToggle"
    >
        <i class="iconfont">&#xe649;</i>
    </span>

    <span class="timeline-item-label1">
        <i class="iconfont" v-show="status">&#xe630;</i>
        {{ propname }}
    </span>
</template>

<script>

    import {
        nextKeyframe,
        preKeyframe,
        addKeyframe,
        removeKeyframe,
        emptyKeyframe
    } from 'store/actions';

    import { PROPS_TYPES } from 'lib/configs';


    export default {

        name: 'KeyframeControl',

        props: {
            layer: Object,
            prop: String,
        },

        methods: {

            keyframeToggle () {
                const me = this;
                const projectid = me.projectid;
                const index = me.project.frameIndex;
                const layerid = me.layer._id;
                const prop = me.prop;
                const type = PROPS_TYPES[prop].coordinate;
                me.isselected
                    ? me.removeKeyframe({ layerid, prop })
                    : me.addKeyframe({ index, projectid, layerid, prop, type });
            },

            lockKeyframeToggle () {
                const me = this;
                const projectid = me.projectid;
                const index = me.project.frameIndex;
                const layerid = me.layer._id;
                const prop = me.prop;
                const type = PROPS_TYPES[prop].coordinate;
                me.status
                    ? me.emptyKeyframe({ layerid, prop })
                    : me.addKeyframe({ projectid, index, layerid, prop, type });
            }
        },

        computed: {

            propname () {
                return PROPS_TYPES[this.prop].name;
            },

            isselected () {
                const kfs = this.keyframes;
                const fi = this.project.frameIndex;
                const lid = this.layer._id;
                const prop = this.prop;
                return kfs[fi] && kfs[fi][lid] && kfs[fi][lid][prop];
            },

            hasPre () {
                const kfs = this.keyframes;
                const fi = this.project.frameIndex;
                const lid = this.layer._id;
                const prop = this.prop;
                for (let i = fi - 1; i >= 0; i--) {
                    if (kfs[i] && kfs[i][lid] && kfs[i][lid][prop]) {
                        return true;
                    }
                }
                return false;
            },

            hasNext () {
                const kfs = this.keyframes;
                const tf = this.project.totalFrame;
                const fi = this.project.frameIndex;
                const lid = this.layer._id;
                const prop = this.prop;
                for (let i = fi + 1; i <= tf; i++) {
                    if (kfs[i] && kfs[i][lid] && kfs[i][lid][prop]) {
                        return true;
                    }
                }
                return false;
            },

            status () {
                const kfs = this.keyframes;
                const tf = this.project.totalFrame;
                const lid = this.layer._id;
                const prop = this.prop;
                for (let i = 0; i <= tf; i++) {
                    if (kfs[i] && kfs[i][lid] && kfs[i][lid][prop]) {
                        return true;
                    }
                }
                return false;
            }
        },

        vuex: {
            getters: {
                project: ({ project }) => project.common,
                projectid: ({ project }) => project.id,
                keyframes: ({ keyframes }) => keyframes.all
            },
            actions: {
                nextKeyframe,
                preKeyframe,
                addKeyframe,
                removeKeyframe,
                emptyKeyframe
            }
        },

    }
</script>

<style lang="less">
    .kf-control {
        position: absolute;
        height: 16px;
        left: 14px;
        top: 0;
        i {
            font-size: 12px;
            cursor: pointer;
        }
        i.unselected {
            &:before {
                content: '\e638';
            }
        }
        i.disabled {
            color: #555;
        }
        i.selected {
            color: #319ad2;
            &:before {
                content: '\e639';
            }
        }
    }
</style>