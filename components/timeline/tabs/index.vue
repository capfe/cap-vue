<template>
    <div class="timeline-tabs">
        <div class="timeline-tabs-wrap">
            <div
                v-for="tab in tabs"
                class="timeline-tabs-item"
                data-id="{{ tab.id }}"
                data-index="{{ $index }}"
                :class="{ 'current': tab.focus }"
                @click="changeTab(tab.id)"
                v-show="tab.show"
            >
                <em class="iconfont" @click="close">&#xe627;</em>
                <span>{{ tab.name }}</span>
            </div>
        </div>
    </div>
</template>

<script>

    import { changeTab, closeTab } from 'store/actions'; 

    /**
     * @component
     */
    export default {

        name: 'TimelineTabs',

        methods: {
            close (e) {
                e.stopPropagation();
                const index = +(e.target.parentNode.getAttribute('data-index'));
                let tab = this.tabs[index];
                if (tab.focus) {
                    this.closeTab(index);
                    this.changeTab(this.tabs[index + 1 == this.tabs.length ? 0 : index + 1].id);
                }
                else {
                    this.closeTab(index);
                }
            }
        },

        vuex: {
            getters: {
                tabs: ({ project }) => project.tabs
            },
            actions: {
                changeTab,
                closeTab
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
            min-width: 60px;
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