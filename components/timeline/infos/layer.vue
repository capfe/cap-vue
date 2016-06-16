<template>
    <div
        class="timeline-item"
    >
        <label class="timeline-infos-ops">
            <span>
                <em @click="viewToggle(index)">
                    <i class="iconfont" :class="{ show: view, hide: !view }">&#xe613;</i>
                </em>
            </span>
            <span>
                <em @click="dviewToggle(index)">
                    <i class="iconfont" :class="{ show: dview, hide: !dview }">&#xe612;</i>
                </em>
            </span>
            <span>
                <em @click="lockToggle(index)">
                    <i class="iconfont" :class="{ show: lock, hide: !lock }">&#xe609;</i>
                </em>
            </span>
        </label>
        <label class="timeline-infos-tag">
            <i
                class="iconfont"
                :class="{ unfold: layerstatus, fold: !layerstatus }"
                @click="layerShowToggle(index)"
            >
            </i>
            <b :style="{ background: layer.layerColor }"></b>
        </label>
        <label class="timeline-infos-index">
            <i class="iconfont">{{ index + 1 }}</i>
        </label>
        <label class="timeline-infos-name">
            <i class="iconfont">&#xe614;</i>
            <input 
                type="text"
                value="{{ layer.name }}"
                @keyup="inputChange | debounce 300"
            />
        </label>
        <label class="timeline-infos-rela">
            <i class="iconfont">&#xe644;</i>
            <div class="selecter">
                <span>{{ layerParentname }}</span>
                <i class="iconfont">&#xe60c;</i>
                <select
                    @change="selectChange"
                >
                    <option value="0">Null</option>
                    <template v-for="item of parentLayers">
                        <option value="{{ item.id }}" v-if="item.id == layer.parentid" selected>{{ item.name }}</option>
                        <option value="{{ item.id }}" v-else>{{ item.name }}</option>
                    </template>
                </select>
            </div>
        </label>
    </div>
    <props-infolayer :index="index" :layer="layer"></props-infolayer>
</template>

<script>

    import PropsInfolayer from './propslayer.vue';
    import {
        fetchLayer,
        layerShowToggle,
        viewToggle,
        dviewToggle,
        lockToggle,
        parentChange,
        layernameChange
    }
    from 'store/actions.js'

    export default {

        name: 'InfosLayer',

        components: {
            PropsInfolayer
        },

        props: {
            index: Number,
            layer: Object
        },

        computed: {

            lock () {
                return this.layer.status.lock
            },
            view () {
                return this.layer.status.view
            },
            dview () {
                return this.layer.status.dview
            },
            layerstatus () {
                return this.layer.status.layer
            },

            layerParentname () {
                let pid = this.layer.parentid;
                let pname = 'Null';

                 for (let item of this.project.layers) {
                    if (+item.id === +pid) {
                        pname = item.name;
                        break;
                    }
                }
                return pname;
            },

            parentLayers () {
                let temp = [];
                for (let item of this.project.layers) {
                    if (+item.id !== +this.layer.id) {
                        temp.push(item);
                    }
                }
                return temp;
            }
        },

        methods: {

            selectChange (e) {
                this.parentChange(this.index, e.target.value);
            },

            inputChange (e) {
                this.layernameChange(this.index, e.target.value);
            }
        },

        vuex: {
            getters: {
                project: ({ project }) => project.common
            },

            actions: {
                fetchLayer,
                layerShowToggle,
                viewToggle,
                dviewToggle,
                lockToggle,
                parentChange,
                layernameChange
            }
        }
    }
</script>

<style lang="less">
    .timeline-item {
        border-bottom: 1px solid #000;
        height: 20px;
        line-height: 20px;
        position: relative;
        background: #272727;
        color: #999;
        &-show {
            height: 3px;
            border-radius: 3px;
            margin-top: 2px;
            background: #1ebc1c;
            z-index: 10;
            margin-left: 8px;
        }
        &-hover {
            background: #333 !important;
        }

        label {
            display: inline-block;
            float: left;
            i,
            span,
            em,
            b,
            input {
                display: inline-block;
                vertical-align: middle;
            }
        }
    }

    .timeline-infos {
        &-ops {
            width: 66px;
            border: none;
            padding-left: 5px;
            span {
                width: 20px;
                em {
                    background: #000;
                    width: 14px;
                    height: 14px;
                    text-align: center;
                    line-height: 14px;
                    cursor: pointer;
                    i.hide {
                        display: none;
                    }
                }
            }
        }
        &-index {
            width: 40px;
            padding-left: 7px;
        }
        &-tag {
            width: 40px;
            padding-left: 7px;
            i {
                cursor: pointer;
                margin-right: 4px;
            }
            b {
                display: inline-block;
                width: 14px;
                height: 14px;
                background: #fff;
            }
        }
        &-tagicon {
            width: 16px;
            padding-left: 7px;
            display: inline-block;
        }

        &-name {
            width: 120px;
            padding-left: 7px;
            input {
                border: 0;
                outline: none;
                background: #000;
                width: 100px;
                color: #999;
                padding-left: 2px;
                line-height: 18px;
                height: 18px;
            }
        }

        &-rela {
            width: 200px;
            padding-left: 7px;
            border-right: none;
            .selecter {
                position: relative;
                display: inline-block;
                width: 180px;
                background: #000;
                height: 18px;
                line-height: 18px;
                vertical-align: middle;
                overflow: hidden;
                white-space: nowrap;
                margin-left: 2px;
                padding-left: 2px;
                span {
                    position: absolute;
                    z-index: 20;
                    top: 0;
                }
                i {
                    position: absolute;
                    right: 5px;
                    transform: scale(0.7);
                }
                select {
                    opacity: 0;
                    position: absolute;
                    width: 180px;
                    z-index: 21;
                }
            }
        }
    }
    .fold {
        &:before {
            content: '\e60e';
        }
    }
    .unfold {
        &:before {
            content: '\e60c';
        }
    }
    .highlight {
        background: #333 !important;
    }
    .selected {
        color: #319ad2;
    }
    .show {
        display: block;
    }
    .hide {
        display: none;
    }
</style>