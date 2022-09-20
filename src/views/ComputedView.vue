<template>
    <div>
        <!-- <h1>Hello, {{lastName}}{{firstName}}</h1> -->
        <!-- <h1>Hello, {{getFullName()}}</h1> -->
        <input type="text" v-model="firstName"/>
        <input type="text" v-model="lastName"/>
        <h1>Hello, {{fullName}}</h1>
    </div>
</template>

<script>
export default {
    name: 'computedView',
    components: {},
    data() {
        return {
            firstName: '모수',
            lastName: '김',
        };
    },
    computed: {
        fullName() {
            return this.lastName + this.firstName;
        }
    },
    setup() {},
    create() {},
    mounted() {},
    unmounted() {},
    methods: {
        getFullName() {
            return this.lastName + this.firstName;
        }
    }
}
</script>

<style scoped>

</style>