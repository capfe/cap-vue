<template>
    <div class="ui-number">
        <a @click="sub()">-</a>
        <input v-model="value" :readonly="!fillable" pattern="[0-9]*"/>
        <a @click="add()">+</a>
    </div>
</template>
<script>
    export default {
        props: {
            min: Number,
            max: Number,
            step: {
                type: Number,
                default: 1
            },
            value: {
                type: Number,
                default: 0
            },
            title: String,
            fillable: {
                type: Boolean,
                default: true
            },
            width: {
                type: Number,
                default: 50
            }
        },
        computed: {
            disabledMin () {
                return typeof this.min === 'undefined' ? false : +this.value <= this.min
            },
            disabledMax () {
                return typeof this.max === 'undefined' ? false : +this.value >= this.max
            }
        },
        watch: {
            value (newValue, old) {
                if (this.min && +this.value < this.min) {
                    this.value = this.min
                }
                if (this.max && +this.value > this.max) {
                    this.value = this.max
                }
                
            }
        },
        methods: {
            add () {
                if (!this.disabledMax) {
                    this.value = +this.value + this.step
                    this.$emit('on-change', +this.value)
                }
            },
            sub () {
                if (!this.disabledMin) {
                    this.value = +this.value - this.step
                    this.$emit('on-change', +this.value)
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .ui-number {
        font-size: 0;
        display: inline-block;
        margin-right: 5px;
        input {
            width: 32px;
            font-size: 12px;
            padding: 0;
            text-align: center;
            margin: 0;
        }
        a {
            font-size: 12px;
            background: #000;
            margin: 0;
            padding: 0;
            width: 10px;
            text-align: center;
            display: inline-block;
            height: 14px;
            line-height: 14px;
            color: #999;
            cursor: pointer;
        }
    }
</style>
