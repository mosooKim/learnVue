<template>
    <div>
        <img src="../assets/logo.png"/>
        <img v-bind:src="url"/>
        <br>
        <input type="text" v-model="textValue">
        <button type="button" v-bind:disabled="textValue==''">Cilck</button>
    </div>
</template>

<script>
export default {
    name: 'attributeBinding',
    components: {},
    data() {
        return {
            url: '../assets/logo.png',
            textValue: ''
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