<template>
    <div>
        <h1>{{title}}</h1>
        <input type="text" v-model="title"/>
    </div>
</template>

<script>
export default {
    // 실제 화면 구성하면 이거는 거의 기본적으로 다 작성하고 써야된다.
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
