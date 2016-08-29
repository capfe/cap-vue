<style lang='less'>
    .cap-layer-outer {
        position: absolute;
        user-select: none;
        cursor: default;
    }

    .origin-style {
        position: absolute;
        width: 4px;
        height: 4px;
        background-color: #f00;
        transform: translateX(-50%) translateY(-50%);
        top: 0;
        left: 0;
    }
    .label {
        position: absolute;
        width: 100px;
        height: 100px;
        left: 110%;
        top: 0;
        pointer-events: none;
    }
    .static {
        pointer-events: none;
    }
</style>

<template>
    <div class="cap-layer-outer"
        :style="outerStyle"
    >
        <div class="cap-layer"
            :style="layerStyle"
            data-draggable="layer"
            :data-lid="lid"
        >
            <div class="label">
                lid: {{lid}}
                <br>
                x: {{layer.position.x.value}}
                y: {{layer.position.y.value}}
                width: {{layer.size.x.value}}
                height: {{layer.size.y.value}}
                rotate: {{layer.rotate.x.value}} {{layer.rotate.y.value}} {{layer.rotate.z.value}}
                scale: {{layer.scale.x.value}} {{layer.scale.y.value}}
                <!--skew: !!layer.skew.x.value}} !!layer.skew.y.value}}-->
                border: {{layer.css.borderWidth.value}}px {{layer.css.borderStyle.value}} {{layer.css.borderColor.value}}
                borderRadius: {{layer.css.borderRadius.value}}
                opacity: {{layer.opacity.value}}%
                <!-- boxShadow: {{layer.css.shadowX.value}}px {{layer.css.shadowY.value}}px {{layer.css.shadowBlur.value}}px #{{layer.css.shadowColor.value}} -->
            </div>

            <div class="origin-style" v-show="lid == this.clid" :style="originStyle"></div>
        </div>
        <cap-control-layer v-show="lid == this.clid"></cap-control-layer>
    </div>


</template>

<script>
import CapControlLayer from './ControlLayer.vue';

export default {
    name: 'CapLayer',
    ready () {
    },
    props: ['lid'],
    components: {
        CapControlLayer
    },
    watch: {
        imgSrc () {
            console.log('watch imgSrc')
        }
    },
    methods: {
        getValue (category, key) {
            let value;
            try {
                if (!key) {
                    value = this.layer[category].value;
                }
                else {
                    value = this.layer[category][key].value;
                }
            } catch (e) {
                if (key.toLowerCase().indexOf('color') < 0) {
                    value = 0;
                }
                else {
                    value = '#fff';
                }
            }

            return value;
        }
    },
    computed: {
        imgSrc () {
            const srcid = this.layer.sourceid;
            const sroot = this.server.root;
            const files = this.files;
            let path;
            for (let file of files) {
                if (srcid === file._id) {
                    path = file.abspath;
                    break;
                }
            }

            return `${sroot}${path}`;
        },
        layer () {
            let layers = this.layers;
            let keyframes = this.allKeyframes;
            let curFrameIndex = this.curFrameIndex;
            let layer = {};
            let lid = this.lid;

            for (var index in layers) {
                if (lid == layers[+index]._id) {
                    layer = Object.assign({}, layers[+index]);
                }
            }

            if (layer) {
                for (var i = 0; i <= curFrameIndex; i++) {
                    let curKeyframe = keyframes[i];
                    if (!curKeyframe) {
                        continue;
                    }
                    let curLayer = curKeyframe[lid];
                    if (!curLayer) {
                        continue;
                    }
                    Object.assign(layer, curLayer);
                }
            }
            return layer;
        },
        layerStyle () {
            return {
                width: `${this.getValue('size', 'x')}px`,
                height: `${this.getValue('size', 'y')}px`,
                background: `url(${this.imgSrc}) 0% 0% / cover no-repeat`,
                borderWidth: `${this.getValue('css', 'borderWidth')}px`,
                borderRadius: `${this.getValue('css', 'borderRadius')}px`,
                borderColor: `${this.getValue('css', 'borderColor')}`,
                borderStyle: `${this.getValue('css', 'borderStyle')}`,

                boxShadow: `${this.getValue('css', 'shadowX')}px ${this.getValue('css', 'shadowY')}px ${this.getValue('css', 'shadowBlur')}px ${this.getValue('css', 'shadowColor')}`
            }
        },
        outerStyle () {
            return {
                opacity: `${this.getValue('opacity')/100}`,
                transformOrigin: `0px 0px`,
                transform: `translateX(${this.getValue('position', 'x')}px)
                            translateY(${this.getValue('position', 'y')}px)
                            rotateX(${this.getValue('rotate', 'x')}deg)
                            rotateY(${this.getValue('rotate', 'y')}deg)
                            rotateZ(${this.getValue('rotate', 'z')}deg)
                            scaleX(${this.getValue('scale', 'x')})
                            scaleY(${this.getValue('scale', 'y')})`
            }
        },
        originStyle () {
            return {
                // left: `${this.layer.origin.x.value}px`,
                // top: `${this.layer.origin.y.value}px`
            }
        }
    },
    vuex: {
        getters: {
            clid: ({ project }) => project.common.clid,
            curFrameIndex: ({ project }) => project.common.frameIndex,
            layers: ({ layers }) => layers.all,
            allKeyframes: ({ keyframes }) => keyframes.all,
            files: ({ statics }) => statics.statics.files,
            server: ({ base }) => base.server
        }
    }
}
</script>
