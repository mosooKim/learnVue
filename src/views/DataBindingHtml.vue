<template>
    <div v-html="htmlString"></div>
</template>

<script>
export default {
    name: 'dataBindingHtml',
    components: {},
    data() {
        return {
            //html data 바인딩
            htmlString: '<p style="color:red;">This is a red string.</p>'
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
