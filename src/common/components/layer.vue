<template>
    <div class="ui-layer"></div>
</template>

<script>

    import Vue from 'vue'

    export default Vue.extend({

        name: 'Layer',

        compiled () {
            this.$appendTo('body');
        }

    });
</script>

<style lang="less">
    .ui-layer {
        position: absolute;
        background: #fff;
        color: #666;
    }
</style>