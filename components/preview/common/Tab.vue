<style lang='less'>
.cap-tab {
    position: relative;
    display: flex;
    height: 100%;
    justify-content: space-around;
    align-items: center;
    overflow: hidden;

    .cap-tab-highlightline {
        position: absolute;
        left: 0;
        bottom: 0;
        height: 1px;
        transition: left 0.5s ease-in-out;
    }
}
</style>

<template>
    <nav class='cap-tab'>
        <cap-tab-item
            v-for='item in items'
            :index='$index'
            :active-color='activeColor'
            :default-color='defaultColor'
        >
            {{item.title}}
        </cap-tab-item>
        <div class='cap-tab-highlightline'
            :style='[lineStyle]'
        ></div>
    </nav>
</template>

<script>
import CapTabItem from './Tab-item.vue';

export default {
    name: 'CapTab',
    ready () {
        const tabList = this.$el.querySelectorAll('.cap-tab-item');
        this.tabCount = tabList.length;
        this.lineWidth = `${100 / this.tabCount}%`;
        this.index = this.defaultIndex;
    },
    props: {
        activeColor: {
            type: null,
            required: false,
            default: '#000'
        },
        defaultColor: {
            type: null,
            required: false,
            default: '#fff'
        },
        lineColor: {
            type: null,
            required: false,
            default: '#03a9f4'
        },
        defaultIndex: {
            type: Number,
            required: false,
            default: 0
        },
        items: {
            type: Array
        }
    },
    computed: {
        lineLeft () {
            return `${this.index * (100 / this.tabCount)}%`;
        },
        lineStyle () {
            return {
                left: this.lineLeft,
                backgroundColor: this.lineColor,
                width: this.lineWidth
            };
        }
    },
    watch: {
        index (val) {
            this.$broadcast('b_change_index', val);
            this.$dispatch('d_change_index', val);
        }
    },
    components: {
        CapTabItem
    },
    methods: {
    },
    events: {
        d_change_index (index) {
            this.index = index;
        }
    },
    data () {
        return {
            index: -1
        };
    }
};
</script>
