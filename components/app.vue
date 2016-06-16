<template>
    <div id="wrapper">
        <!-- main view -->
        <router-view
            class="view"
            keep-alive
            transition
            transition-mode="out-in">
        </router-view>
    </div>
</template>