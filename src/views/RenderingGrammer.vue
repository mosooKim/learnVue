<template>
    <div>
        <!-- <h1 v-if="type=='A'">A</h1>
        <h1 v-else-if="type=='B'">B</h1>
        <h1 v-else-if="type=='C'">C</h1>
        <h1 v-else>Other</h1> -->

        <h1 v-show="bRender">A</h1>
    </div>
</template>

<script>
export default {
    name: 'renderingGrammer',
    components: {},
    data() {
        return {
            // type: 'G'
            bRender: true
        };
    },
    setup() {},
    create() {},
    mounted() {},
    unmounted() {},
    methods: {

    }
}
</script>

<style scoped>

</style>