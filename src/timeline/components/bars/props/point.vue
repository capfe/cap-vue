<template>
    <i
        class="iconfont"
        :class="{
            only: item.type == 1,
            begin: item.type == 2,
            end: item.type == 3,
            normal: item.type == 4,
            selected: item.status
        }"
        @click="onclick"
    >
    </i>
</template>

<script>

    import Layer from '../../../../common/components/layer.vue';

    let KeyframeLayer = Layer.extend({
        data () {
            return {
                top: 100,
                left: -1000,
                width: 400,
                height: 200
            }
        },

        methods: {
            show () {
                this.left = window.screen.availWidth / 2 - 200;
            },

            hide () {
                this.left = -1000;
            }
        }
    });

    export default {

        name: 'Point',

        props: {
            item: Object,
            project: Object
        },

        methods: {
            onclick () {
                if (!this.item.status) {
                    for (let layer of this.project.layers) {
                        for (let prop of ['opacity', 'rotate', 'scale', 'position']) {
                            for (let keyframe of this.project[layer.id][prop]) {
                                keyframe.status = false;
                            }
                        }
                    }

                    this.item.status = true;
                }
                else {
                    // alert('属性浮层')

                    let dialog = this.$refs.addCategoryDialog;
                    if (!dialog) {
                        dialog = new KeyframeLayer({
                            parent: this,
                            components: {
                                //'ui-addcategory': AddCategory
                            },
                            template: `
                                <div class="ui-layer add-category-layer" 
                                    v-bind:style="{top: top + 'px', left: left + 'px', width: width + 'px', zIndex: 200000, height: height + 'px'}">
                                </div>
                            `,
                            events: {
                                done(e) {
                                    this.hide();
                                    e.returnValue = false;
                                }
                            }
                        });
                        this.$refs.addCategoryDialog = dialog;
                        dialog.$mount();
                    }
                    dialog.show();

                }
            }
        }
    }

</script>

<style>
    .add-category-layer .form {
    background: #fff;
}
.add-category-layer .form-title,
.add-category-layer .form-title:hover,
.add-category-layer .form-title:focus {
    background: #eee;
    border: 1px solid #ddd;
    color: #333;
}
.edit-category-layer .fa-times-circle-o {
    color: red;
    cursor: pointer;
    font-size: 16px;
    margin: 5px;
}
.add-category {
    margin: 0 5px;
    cursor: pointer;
}
.edit-category {
    cursor: pointer;
}
</style>