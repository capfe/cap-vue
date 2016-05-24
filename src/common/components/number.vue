<template>
    <em
        @mousedown="onMousedown"
        @mouseup="onMouseup"
    >
        {{ (number).toFixed(1) }}
    </em>
</template>

<script>

    function dragHandler(e) {

    }

    export default {

        name: 'NumberSetter',

        props: {
            number: Number,
            layer: Object,
            project: Object,
            prop: String
        },

        methods: {
            onMousedown () {
                let dom = this.$el;
                this.number = 100;
                console.log(dom);
            },

            onMouseup () {
                let dom = this.$el;
                console.log(dom);
            }
        }
    }
</script>