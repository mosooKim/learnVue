<template>
    <div>
        <!-- <select v-model="city">
            <option value="02">서울</option>
            <option value="21">부산</option>
            <option value="064">제주</option>
        </select> -->
        
        <!-- <label><input type="checkbox" value="서울" v-model="checked">서울</label>
        <label><input type="checkbox" value="부산" v-model="checked">부산</label>
        <label><input type="checkbox" value="제주" v-model="checked">제주</label>

        <br>
        <span> 체크한 지역: {{checked}} </span> -->

        <label><input type="radio" v-bind:value="radio[0]" v-model="picked">서울</label>
        <label><input type="radio" v-bind:value="radio[1]" v-model="picked">부산</label>
        <label><input type="radio" v-bind:value="radio[2]" v-model="picked">제주</label>

        <br>
        <span> 선택한 지역: {{picked}} </span> -->
    </div>
</template>

<script>
export default {
    name: 'dataBindingInputText',
    components: {},
    data() {
        return {
            city: "21", 
            checked: [],
            radio: ["서울","부산","제주"],
            radio1: "서울",
            radio2: "부산",
            radio3: "제주",
            picked: ""
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