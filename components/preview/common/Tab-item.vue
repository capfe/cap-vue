<style lang='less'>
.cap-tab-item {
    display: inline-block;
    height: 100%;
    flex: 1;
    color: #000;
    text-decoration: none;
    text-align: center;
    line-height: 40px;

    &:hover {
        background-color: #333;
    }
}
</style>

<template>
    <a class='cap-tab-item' href='javascript:void(0);'
        :class='{"cap-tab-item-selected":selected}'
        :style='style'
        @click='tabClick'>
        <slot></slot>
    </a>
</template>

<script>
export default {
    name: 'CapTabItem',
    props: {
        index: {
            type: Number,
            required: true
        },
        selected: {
            type: Boolean,
            required: false,
            default: false
        },
        activeColor: {
            type: null,
            required: false,
            default: '#03a9f4'
        },
        defaultColor: {
            type: null,
            required: false,
            default: '#000'
        }
    },
    methods: {
        tabClick () {
            this.$dispatch('d_change_index', this.index);
        }
    },
    events: {
        b_change_index (val) {
            if (this.index === val) {
                this.selected = true;
            }
            else {
                this.selected = false;
            }
        }
    },
    computed: {
        style () {
            return {
                backgroundColor: this.selected ? '#111': '',
                color: this.selected ? this.activeColor : this.defaultColor
            };
        }
    }
};
</script>
