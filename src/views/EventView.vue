<template>
    <div>
        <button type="button" v-on:click="increaseCounter">Add 1</button>
        <button type="button" v-on:click="one(), two()">Alert</button>
        <p>The count is : {{counter}}</p>

        <select v-model="city" @change="changeSelect">
            <option value="서울">서울</option>
            <option value="부산">부산</option>
            <option value="제주">제주</option>
        </select>

        <input type="text" v-model="textValue" @keyup.enter="showValue" />
    </div>
</template>

<script>
export default {
    name: 'eventView',
    components: {},
    data() {
        return {
            counter: 0,
            city: ""
        };
    },
    setup() {},
    create() {},
    mounted() {},
    unmounted() {},
    methods: {
        increaseCounter() {
            this.counter = this.counter + 1;
        },
        one() {
            alert("one");
        },
        two() {
            alert("two");
        },

        changeSelect() {
            alert(this.city);
        },

        showValue() {
            //tab, delete, esc, space, up, down, left, right, enter
            alert(this.textValue);
        }
    }
}
</script>

<style scoped>

</style>