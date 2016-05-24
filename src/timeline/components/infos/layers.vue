<template>
    <div class="timeline-infos">
        <div class="timeline-fixed">
            <div class="timeline-infos-nav">
                <h3 @click="timeclick">
                    {{ time }}
                </h3>
                <p>
                    <span>{{ frameIndex }}</span>
                    (<span>{{ project.fps }} fps</span>)
                </p>
            </div>
            <div class="timeline-item timeline-infos-header">
                <div class="timeline-infos-zoom timeline-infos-ops">
                    <span class="timeline-infos-view"><i class="iconfont"></i></span>
                    <span class="timeline-infos-dview"><i class="iconfont"></i></span>
                    <span class="timeline-infos-lock"><i class="iconfont"></i></span>
                </div>
                <div class="timeline-infos-zoom timeline-infos-tag"><i class="iconfont"></i></div>
                <div class="timeline-infos-zoom timeline-infos-index"><i class="iconfont">#</i> </div>
                <div class="timeline-infos-zoom timeline-infos-name"><i class="iconfont">图层名称</i></div>
                <div class="timeline-infos-zoom timeline-infos-rela"><i class="iconfont">父级</i></div>
            </div>
        </div>
        <div
            class="timeline-layer"
            v-for="layer in project.layers"
            v-bind:class="{ 'first': $index == 0 }"
        >
            <infos-layer
                :layer="layer"
                :index="$index"
                :project="project"
            ></infos-layer>
        </div>
    </div>
</template>

<script>

    import InfosLayer from './layer.vue';

    export default {

        name: 'LayersInfos',

        components: {
            InfosLayer
        },

        props: {
            project: Object
        },

        computed: {
            frameIndex () {
                let fi = this.project.frameIndex;
                let n = 0;
                // 无语了。。直接n = ('' + fi).length居然vue wran报错
                switch (('' + fi).length) {
                    case 1:
                        n = 1;break;
                    case 2:
                        n = 2;break;
                    case 3:
                        n = 3;break;
                    case 4:
                        n = 4;break;
                    case 5:
                        n = 5;break;
                    default:
                        n = 6;
                }
                return (new Array(5 - n + 1)).join(0) + fi;
            },

            time () {
                let fi = this.project.frameIndex;
                let fps = this.project.fps;
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
        }
    }

</script>

<style lang="less">
    .timeline-infos {
        .timeline-fixed {
            z-index: 1010;
        }
    }
</style>