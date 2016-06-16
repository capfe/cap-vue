<template>
    <span
        class="keyframe"
        v-for="item of newkeyframes"
        :style="{
            left: item.index * 20 - 6 + 'px'
        }"
    >
        <point :item="item"></point>
    </span>
</template>

<script>

    import Point from './point.vue';

    export default {

        name: 'Keyframe',
        
        components: {
            Point
        },

        props: {
            layer: Object,
            prop: String
        },

        computed: {

            newkeyframes () {
                const nkfs = [];
                const kfs = this.keyframes;
                const lid = this.layer.id;
                kfs.map((item, index) => {
                    if (item) {
                        if (kfs[index][lid] && kfs[index][lid][this.prop]) {
                            nkfs.push(kfs[index][lid][this.prop]);
                        }
                    }
                });
                return nkfs;
            }
        },

        vuex: {
            getters: {
                project: ({ project }) => project.common,
                keyframes: ({ keyframes }) => keyframes.all
            }
        }
    };

</script>

<style lang="less">
    .keyframe {
        cursor: pointer;
        position: absolute;
    }
</style>