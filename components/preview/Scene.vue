<style lang='less'>
.cap-scene {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-around;
    z-index: 1;
    height: 200%;
    width: 200%;
}
.cap-scene-container {
    position: relative;
    width: 480px;
    height: 320px;
    transform-origin: 50% 50% 0;
    z-index: 1;
    background-color: #fff;
    border: 1px solid #ccc;
    box-shadow: 3px 3px 0 #ccc;
    perspective: 800px;
}
</style>

<template>
    <div class='cap-scene'
        @mousemove='drag'
        @mousedown='dragStart'
        @mouseup='dragEnd'
        >
        <div class="cap-scene-container">
            <cap-layer v-for="layer in originlayers"
                :lid="layer.id"
            ></cap-layer>
        </div>
    </div>

</template>

<script>
import $ from 'jquery';
import CapLayer from './common/Layer.vue';
// import * as actions from 'models/actions';
// import { getLayer } from 'models/getters';
import {
    propValueChange,
    addKeyframe,
    setCurLayerId
} from 'store/actions';

function hasProp(kfs, fi, layerid, prop) {
    return kfs[fi] && kfs[fi][layerid] && kfs[fi][layerid][prop];
}

export default {
    ready () {
        let el = $(this.$el).parent();

        el.scrollLeft(el.width()/2);
        el.scrollTop(el.height()/2);
    },
    components: {
        CapLayer
    },
    computed: {
        curLayerX: {
            get () {
                return this.curLayer.position.x.value;
            },
            set (value) {
                this.changeX(value);
            }
        },
        curLayerY: {
            get () {
                return this.curLayer.position.y.value;
            },
            set (value) {
                this.changeY(value);
            }
        },
        curLayer: {
            get () {
                let layers = this.originlayers;
                let keyframes = this.allKeyframes;
                let curFrameIndex = this.curFrameIndex;
                let layer = {};
                let lid = this.clid;
                if (!lid) {
                    return null;
                }

                for (var index in layers) {
                    if (lid == layers[+index].id) {
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
            }
        }
    },
    vuex: {
        getters: {
            curFrameIndex: ({ project }) => project.common.frameIndex,
            originlayers: ({ layers }) => layers.all,
            allKeyframes: ({ keyframes }) => keyframes.all,
            clid: ({ project }) => project.common.clid
        },
        actions: {
            setClid: setCurLayerId,
            propValueChange,
            addKeyframe
        }
    },
    methods: {
        drag (event) {
            if (!this.dragStartFlag) {
                return;
            }
            switch (this.draggableType) {
                case 'layer':
                    this.offset = {
                        x: event.clientX - this.dragStartPos.x,
                        y: event.clientY - this.dragStartPos.y
                    }
                    this.curLayerX = this.domStartPosition.x + this.offset.x;
                    this.curLayerY = this.domStartPosition.y + this.offset.y;
                    break;
                case 'anchor':
                    this.offset = {
                        x: event.clientX - this.dragStartPos.x,
                        y: event.clientY - this.dragStartPos.y
                    }
                    break;
                default:
                    break;
            }
        },
        dragStart (event) {
            this.draggableType = event.target.dataset.draggable;
            switch (this.draggableType) {
                case 'layer':
                    var clid = event.target.dataset.lid;
                    clid && this.setClid(clid);

                    this.dragStartFlag = true;
                    this.dragStartPos = {
                        x: event.clientX,
                        y: event.clientY
                    };

                    this.domStartPosition = {
                        x: this.curLayerX,
                        y: this.curLayerY
                    };
                    break;
                case 'anchor':
                    var clid = this.clid;

                    console.log(this.curLayerOrigin);

                    this.dragStartFlag = true;
                    this.dragStartPos = {
                        x: event.clientX,
                        y: event.clientY
                    };

                    this.domStartPosition = {
                        x: this.curLayerX,
                        y: this.curLayerY
                    };
                    break
                default:
                    break;
            }
        },
        dragEnd (event) {
            switch (this.draggableType) {
                case 'layer':
                    this.dragStartFlag = false;
                    break;
                default:
                    break;
            }
        },
        changeX (value) {
            const me = this;
            hasProp(me.allKeyframes, me.curFrameIndex, me.clid, 'position')
                ? me.propValueChange(value, me.clid, 'position', 'x')
                : me.addKeyframe(me.curLayer, 'position', value, 'x');
        },

        changeY (value) {
            const me = this;
            hasProp(me.allKeyframes, me.curFrameIndex, me.clid, 'position')
                ? me.propValueChange(value, me.clid, 'position', 'y')
                : me.addKeyframe(me.curLayer, 'position', value, 'y');
        }
    }
};
</script>
