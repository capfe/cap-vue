<template>
    <span
        class="keyframe"
        v-for="item of newKeyframes"
        :style="{
            left: item.index * 20 - 6 + 'px'
        }"
    >
        <point :item="item" :project="project"></point>
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
            prop: String,
            project: Object
        },

        data () {
            return {
                keyframes: this.project[this.layer.id][this.prop]
            };
        },

        computed: {

            newKeyframes () {
                let newKeyframes = this.keyframes.sort(
                    (a, b) => {
                        return a.index - b.index;
                    }
                );
                let len = newKeyframes.length;
                let newnewKeyframes = [];

                for (let i = 0; i < len; i++) {
                    if (newKeyframes[i].type > 0) {
                        newnewKeyframes.push(newKeyframes[i]);
                    }
                }

                let nlen = newnewKeyframes.length;

                if (nlen > 0) {
                    if (nlen > 1) {
                        let startflag = false;
                        let endflag = false;
                        for (let i = 0; i < nlen; i++) {
                            newnewKeyframes[i].type > 0 && (newnewKeyframes[i].type = 4);
                        }
                        newnewKeyframes[0].type > 0 && (newnewKeyframes[0].type = 2);
                        newnewKeyframes[nlen - 1].type > 0 && (newnewKeyframes[nlen - 1].type = 3);
                    }
                    else if (nlen == 1) {
                        newnewKeyframes[0].type > 0 && (newnewKeyframes[0].type = 1);
                    }
                }

                return newnewKeyframes;
            }
        }
    };

</script>

<style lang="less">
    .keyframe {
        cursor: pointer;
        position: absolute;
        i {
            font-size: 12px;
            display: inline-block;
        }
        i.selected {
            color: #319ad2;
        }
        i.only {
            &:before {
                content: '\e638';
            }
        }
        i.begin {
            &:before {
                content: '\e637';
            }
            transform: rotateY(180deg);
        }

        i.normal {
            &:before {
                content: '\e639';
            }
        }
        i.end {
            &:before {
                content: '\e637';
            }
        }
    }
</style>