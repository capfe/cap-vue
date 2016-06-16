<template>
    <div class="timeline-ops">
        <span class="iconfont new" title="新建图层"></span>
        <span class="iconfont delete" title="删除选中图层"></span>
    </div>
</template>

<script>

    export default {
        name: 'previewer',

        vuex: {
            getters: {

            },

            actions: {

            }
        }
    }

</script>

<style lang="less" scoped>
    .timeline-ops {
        display: inline-block;
        padding: 0 15px;
        color: #999;
        span {
            cursor: pointer;
            display: inline-block;
            font-size: 15px !important;
        }
        .new {
            &:before {
                content: '\e601';
            }
        }
        .delete {
            &:before {
                content: '\e608';
            }
        }
    }
</style>