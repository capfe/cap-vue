<template>
    <div
        class="kf-control"
        v-show="status"
    >
        <i 
            class="iconfont"
            :class="{ disabled: !hasPre }"
            @click="preKeyframe"
        >
            &#xe60d;
        </i>
        <i
            class="iconfont"
            :class="{ unselected: !isselected, selected: isselected }"
            @click="toggleKeyframe"
        ></i>
        <i
            class="iconfont"
            :class="{ disabled: !hasNext }"
            @click="nextKeyframe"
        >
            &#xe60e;
        </i>
    </div>
    <span
        class="timeline-item-kf"
        :class="{ haskf: status }"
        @click="toggle"
    >
        <i class="iconfont">&#xe649;</i>
    </span>
    <span class="timeline-item-label1">
        <i class="iconfont" v-show="status">&#xe630;</i>
        {{ propname }}
    </span>
</template>

<script>

    import store from '../../../../store.js';

    export default {

        name: 'KeyframeControl',

        components: {},

        props: {
            layer: Object,
            prop: String,
            project: Object
        },


        computed: {
            propname () {
                let map = {
                    opacity: '不透明度',
                    position: '位置',
                    scale: '缩放',
                    rotate: '旋转'
                };
                return map[this.prop];
            },

            isselected () {
                let keyframes = this.project[this.layer.id][this.prop];
                for (let item of keyframes) {
                    if (item.index == this.project.frameIndex && item.type != 0) {
                        return true;
                    }
                }
                return false;
            },

            hasPre () {
                let keyframes = this.project[this.layer.id][this.prop];
                for (let i = this.project.frameIndex - 1; i >= 0; i--) {
                    for (let item of keyframes) {
                        if (item.index == i && item.type != 0) {
                            return true;
                        }
                    }
                }
                return false;
            },

            hasNext () {
                let keyframes = this.project[this.layer.id][this.prop];
                for (let i = this.project.frameIndex + 1, len = this.project.totalFrame; i < len; i++) {
                    for (let item of keyframes) {
                        if (item.index == i && item.type != 0) {
                            return true;
                        }
                    }
                }
                return false;
            },

            status () {
                let keyframes = this.project[this.layer.id][this.prop];
                let flag = false;
                for (let i = 0, len = keyframes.length; i < len; i++) {
                    if (keyframes[i].type != 0) {
                        flag = true;
                        break;
                    }
                }
                return keyframes.length > 0 && flag;
            }
        },

        methods: {
            toggleKeyframe () {
                if (!this.isselected) {
                    store.addKeyframe(this.project, this.layer.id, this.project.frameIndex, this.prop);
                }
                else {
                    store.removeKeyframe(this.project, this.layer.id, this.project.frameIndex, this.prop);
                }
            },

            nextKeyframe () {
                let fi = this.project.frameIndex;
                let tf = this.project.totalFrame;
                let keyframes = this.project[this.layer.id][this.prop];
                loopNext:
                    for (let i = fi + 1, len = tf; i < len; i++) {
                        for (let item of keyframes) {
                            if (item.index == i && item.type != 0) {
                                this.project.frameIndex = i;
                                break loopNext;
                            }
                        }
                    }
            },

            preKeyframe () {
                let keyframes = this.project[this.layer.id][this.prop];
                let fi = this.project.frameIndex;
                loopPre:
                    for (let i = fi - 1; i >= 0; i--) {
                        for (let item of keyframes) {
                            if (item.index == i && item.type != 0) {
                                this.project.frameIndex = i;
                                break loopPre;
                            }
                        }
                    }
            },

            toggle () {
                if (this.status) {
                    let keyframes = this.project[this.layer.id][this.prop];
                    for (let i = 0, len = keyframes.length; i < len; i++) {
                        keyframes[i].type = 0;
                    }
                }
                else {
                    store.addKeyframe(this.project, this.layer.id, this.project.frameIndex, this.prop);
                }
            }
        }
    }
</script>

<style lang="less">
    .kf-control {
        position: absolute;
        height: 16px;
        left: 8px;
        top: 1px;
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