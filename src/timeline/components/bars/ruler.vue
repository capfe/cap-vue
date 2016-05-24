<template>
    <canvas
        width="{{ project.totalFrame * project.pixel * 2 }}"
        height="64"
        :style="{ 'width': project.totalFrame * project.pixel + 'px' }"
    >
    </canvas>
</template>

<script>

    import Ruler from '../../lib/ruler.js';
    import store from '../../../store.js';
    import $ from 'jquery';


    export default {

        data () {
            return {
                project: store.fetchProject()
            };
        },

        ready () {

            let canvas = this.$el;
            let project = this.project;

            new Ruler({
                canvas: canvas,
                fps: project.fps,
                totalFrame: project.totalFrame,
                scale: project.scale,
                pixel: project.pixel
            });
        }
    }

</script>