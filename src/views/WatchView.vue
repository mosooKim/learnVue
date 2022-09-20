<template>
    <div>
        <input type="text" v-model.number="x1"/>
        <input type="text" v-model.number="x2"/>
        <!-- <button type="button" @click="plusNumber">계산</button> -->
        <input type="text" v-model="y"/>
    </div>
</template>

<script>
export default {
    name: 'watchView',
    components: {},
    data() {
        return {
            x1: 0,
            x2: 0,
            //y: 0
        };
    },
    //watch는 연산이 아닌 어떠한 액션을 통해서 변경되어야 하는것이 있을때 많이 쓴다
    // watch: {
    //     x1() {
    //         this.y = this.x1 + this.x2;
    //     },
    //     x2() {
    //         this.y = this.x1 + this.x2;
    //     }
    // },
    computed: {
        y() {
            return this.x1 + this.x2;
        }
    },
    setup() {},
    create() {},
    mounted() {},
    unmounted() {},
    methods: {
        plusNumber() {
            this.y = this.x1 + this.x2;
        }
    }
}
</script>

<style scoped>

</style>