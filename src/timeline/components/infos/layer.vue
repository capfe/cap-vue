<template>
    <div
        class="timeline-item"
        :class="{ highlight: layer.highlight.layer }"
        @mouseover="layer.highlight.layer = true"
        @mouseout="layer.highlight.layer = false"
    >
        <div class="timeline-infos-zoom timeline-infos-ops">
            <span class="timeline-infos-view">
                <em
                    @click="viewToggle"
                >
                    <i
                        class="iconfont"
                        :class="{ show: layer.status.view, hide: !layer.status.view }"
                    >&#xe613;
                    </i>
                </em>
            </span>
            <span class="timeline-infos-dview">
                <em
                    @click="dviewToggle"
                >
                    <i
                        class="iconfont"
                        :class="{ show: layer.status.dview, hide: !layer.status.dview }"
                    >&#xe612;
                    </i>
                </em>
            </span>
            <span class="timeline-infos-lock">
                <em
                    @click="lockToggle"
                >
                    <i
                        class="iconfont"
                        :class="{ show: layer.status.lock, hide: !layer.status.lock }"
                    >&#xe609;
                    </i>
                </em>
            </span>
        </div>
        <div class="timeline-infos-zoom timeline-infos-tag">
            <i
                class="iconfont"
                :class="{ unfold: layer.status.layer, fold: !layer.status.layer }"
                @click="layerToggle"
            >
            </i>
            <b
                :style="{ background: layer.layerColor }"
            >
            </b>
        </div>
        <div class="timeline-infos-zoom timeline-infos-index">
            <i class="iconfont">{{ index + 1 }}</i>
        </div>
        <div class="timeline-infos-zoom timeline-infos-name">
            <i class="iconfont">&#xe614;</i>
            <input type="text" value="{{ layer.name }}"/>
        </div>
        <div class="timeline-infos-zoom timeline-infos-rela">
            <i class="iconfont">&#xe644;</i>
            <div class="selecter">
                <span>{{ layerParentname }}</span>
                <i class="iconfont">&#xe60c;</i>
                <select
                    v-model="layer.parentid"
                >
                    <option value="0">Null</option>
                    <option 
                        v-for="item in parentLayers"
                        value="{{ item.id }}"
                    >
                        {{ item.name }}
                    </option>
                </select>
            </div>
        </div>
    </div>
    <props-infolayer :layer="layer" :project="project"></props-infolayer>
</template>

<script>

    import store from '../../../store.js';
    import PropsInfolayer from './propslayer.vue';
    import $ from 'jquery';


    export default {

        name: 'InfosLayer',

        components: {
            PropsInfolayer
        },

        props: {
            layer: Object,
            index: Number,
            project: Object
        },

        computed: {

            layerParentname: function () {
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

            parentLayers: function () {
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

            layerToggle: function (e) {
                this.layer.status.layer = !this.layer.status.layer;
            },


            viewToggle: function () {
                this.layer.status.view = !this.layer.status.view;
            },


            dviewToggle: function () {
                this.layer.status.dview = !this.layer.status.dview;
            },


            lockToggle: function () {
                this.layer.status.lock = !this.layer.status.lock;
            }
        }
    }
</script>