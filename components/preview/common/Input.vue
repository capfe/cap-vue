<style lang='less'>
.cap-inspector-label {
    color: #999;
}

.cap-inspector-input {
    height: 14px;
    width: 40px;
    line-height: 14px;
    background: #000;
    border: 0;
    outline: none;
    color: #319ad2;
    margin: 0 4px;
    text-align: center;
}
</style>

<template>
    <label class='cap-inspector-label'>
        {{title}}
    </label>
    <input class='cap-inspector-input'
        :type='type'
        :readonly='readonly'
        v-model='value'
        @focus='focus'
        @blur='blur'
    >
    <span v-if='optionsReadonly'>
        {{ opstionsTitle }}
    </span>
    <select
        v-else='!optionsReadonly'
        v-if='options && options.length > 0'
        v-model='selected'
    >
        <option v-for='item in options'
            :value='item.value'
            :selected='item.value===optionsValue'
        >
            {{ item.title }}
        </option>
    </select>
    <span v-if='otherText' class='cap-inspector-text'>{{ otherText }}</span>
</template>

<script>
export default {
    name: 'CapInput',
    ready () {

    },
    props: {
        title: {
            type: String,
            required: false,
            default: ''
        },
        type: {
            type: String,
            required: false,
            default: 'text'
        },
        value: {
            type: null,
            required: false,
            default: ''
        },
        readonly: {
            type: Boolean,
            required: false,
            default: false
        },
        options: {
            type: Array,
            required: false,
            default: () => []
        },
        optionsReadonly: {
            type: Boolean,
            reqiured: false,
            default: false
        },
        optionsValue: {
            type: Number,
            required: false,
            default: 0
        },
        changeName: {
            type: String,
            require: false,
            default: ''
        }
    },
    methods: {
        focus () {
            this.$dispatch('willChange', {
                type: this.changeName,
                status: true
            });
        },
        blur () {
            this.$dispatch('willChange', {
                type: this.changeName,
                status: false
            });
        }
    },
    computed: {
        opstionsTitle () {
            if (!Array.isArray(this.options)) {
                return '';
            }

            for (let {title, value} of this.options) {
                if (value === this.optionsValue) {
                    return title;
                }
            }

            return '';
        }
    },
    data () {
        return {
            selected: this.selected,
            willChange: this.willChange
        }
    }
};
</script>
