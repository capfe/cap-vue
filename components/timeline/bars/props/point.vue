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

    export default {

        name: 'Point',

        props: {
            item: Object
        },

        methods: {
            onclick () {
                
            }
        },

        vuex: {
            getters: {

            }
        }
    }

</script>

<style lang="less" scoped>
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
</style>