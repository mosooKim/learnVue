<template>
    <div>
        <h1>{{sampleData}}</h1>
        <div>{{sampleData2}}</div>
    </div>
</template>

<script>
export default {
    name: 'dataBinding',
    components: {},
    data() {
        return {
            sampleData: 'Hello',
            sampleData2: 'World'
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