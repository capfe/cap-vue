<template>
    <div class="timeline-tabs">
        <div class="timeline-tabs-wrap">
            <div
                v-for="tab in tabs"
                class="timeline-tabs-item"
                data-id="{{ tab.id }}"
                v-bind:class="{ 'current': tab.focus }"
                v-on:click="changeTab"
            >
                <em class="iconfont" v-on:click="closeTab">&#xe627;</em>
                <span>{{ tab.name }}</span>
            </div>
        </div>
    </div>
</template>

<script>

    /**
     * @component
     */
    export default {

        name: 'TimelineTabs',

        methods: {

            closeTab: function (e) {
            },

            changeTab: function (e) {
            }
        },

        vuex: {
            getters: {
                tabs: ({ project }) => project.common.tabs
            }
        }
    }

</script>

<style lang="less">
    .timeline-tabs {
        color: #ccc;
        font-size: 12px;
        height: 30px;
        background: #1d1d1d;
        color: #999;
        &-wrap {
            background: #141414;
        }
        
        &-item {
            height: 25px;
            line-height: 28px;
            border: 1px solid #141414;
            display: inline-block;
            max-width: 250px;
            min-width: 100px;
            text-align: center;
            cursor: pointer;
            padding: 0 10px;
            em {
                margin-right: 5px;
                font-size: 10px;
                color: #666;
            }
        }

        &-item:hover {
            em {
                color: #ccc;
            }
        }

        .current {
            border: 1px solid #319ad2;
            position: relative;
            background: #1d1d1d;
            z-index: 1;
            border-bottom: 1px solid #1d1d1d;
        }
    }
</style>