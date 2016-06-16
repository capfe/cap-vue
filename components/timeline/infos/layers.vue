<template>
    <div class="timeline-infos">
        <div class="timeline-infos-fixed">
            <div class="timeline-infos-nav">
                <div class="timeline-time">
                    <h3 @click="timeclick">{{ time }}</h3>
                    <p><span>{{ sframeIndex }}</span>(<span>{{ project.fps }} fps</span>)</p>
                </div>
                <previewer></previewer>
                <control></control>
            </div>
            <div class="timeline-infos-header">
                <span class="timeline-infos-ops">
                    <em class="iconfont"></em>
                    <em class="iconfont"></em>
                    <em class="iconfont"></em>
                </span>
                <span class="timeline-infos-tag iconfont"></span>
                <span class="timeline-infos-index">#</span>
                <span class="timeline-infos-name">图层名称</span>
                <span class="timeline-infos-rela">父级</span>
            </div>
        </div>
        <div
            class="timeline-infos-layer"
            v-for="layer of project.layers"
            v-bind:class="{ 'first': $index === 0 }"
        >
            <infos-layer :index="$index" :layer="project.layers[$index]"></infos-layer>
        </div>
    </div>
</template>

<script>

    import InfosLayer from './layer.vue';
    import previewer from './previewer.vue';
    import control from './control.vue';

    export default {

        name: 'LayersInfos',

        components: {
            InfosLayer,
            previewer,
            control
        },

        computed: {
            sframeIndex () {
                let fi = this.project.frameIndex;
                return (new Array(5 - String(fi).length + 1)).join(0) + fi;
            },

            time () {
                let fi = this.project.frameIndex || 0;
                let fps = this.project.fps || 1;
                let f = fi % fps;
                let s = Math.floor(fi / fps) % 60;
                let m = Math.floor(fi / fps / 60) % 60;
                let h = Math.floor(fi / fps / 60 /60) % 60;

                return  h 
                    + ':' + (m < 10 ? ('0' + m) : m)
                    + ':' + (s < 10 ? ('0' + s) : s)
                    + '.' + (f < 10 ? ('0' + f) : f)
            }
        },

        methods: {
            timeclick () {
                console.log(this.time)
            }
        },

        vuex: {
            getters: {
                project: ({ project }) => project.common
            }
        }
    }

</script>

<style lang="less" scoped>
    .timeline-time {
        display: inline-block;
        width: 85px;
    }
    .timeline-ops {
        display: inline-block;
    }
    .timeline-infos {
        width: 500px;
        min-height: 100%;
        float: left;
        border-right: 1px solid #000;

        &-fixed {
            position: absolute;
            background: #1d1d1d;
            top: 0;
            z-index: 2010;
        }
        &-layer {
            position: relative;
            z-index: 2005;
        }
        .first {
            margin-top: 55px;
        }
        &-nav {
            font-family: arial;
            height: 34px;
            padding-left: 10px;
        }
        .timeline-time {
            color: #319ad2;
            h3 {
                font-size: 16px;
                font-weight: bold;
            }
        }

        &-header {
            border-bottom: 1px solid #000;
            height: 20px;
            line-height: 20px;
            position: relative;
            background: #272727;
            color: #999;
            span {
                display: inline-block;
                border-left: 1px solid #000;
                border-right: 1px solid #333;
                padding-left: 5px;
                height: 12px;
                line-height: 12px;
                margin-top: 4px;
                float: left;
                em {
                    display: inline-block;
                    width: 20px;
                }
            }
        }
        &-ops {width: 66px;}
        &-tag {width: 40px;}
        &-tagicon {width: 16px;}
        &-index {width: 40px;}
        &-name {width: 120px;}
        &-rela {width: 200px;}
    }
</style>