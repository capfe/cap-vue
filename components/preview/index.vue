<template>
    <div class="preview">
        <div class="phone">
        </div>
        <div class="toolbar">
        </div>
    </div>
</template>

<style lang="less">
    .preview {
        position: fixed;
        left: 252px;
        right: 0;
        top: 42px;
        bottom: 302px;
        .phone {
            margin-right: 302px;
            height: 100%;
            background: #262626;
        }
        .toolbar {
            width: 300px;
            position: fixed;
            right: 0;
            top: 43px;
            bottom: 252px;
            background: #141414;
        }
    }
</style>