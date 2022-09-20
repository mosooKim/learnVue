<template>
    <div>
        <h1>{{title}}</h1>
        <input type="text" v-model="title"/>
    </div>
</template>

<script>
export default {
    name: 'basicTitle',
    components: {},
    data() {
        return {
            title: 'Hello world2'
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