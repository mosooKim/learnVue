<template>
    <div>
        이름 : <input type="text" v-model="name"/><br>
        나이 : <input type="text" v-model.number="age"/><br>
        직업 : <input type="text" v-model="job"/><br><br>
        <button type="button" @click="saveUserInfo">저장</button>
    </div>
</template>

<script>
export default {
    name: 'renderingGrammer',
    components: {},
    data() {
        return {
            name: '',
            age: '',
            job: ''
        };
    },
    setup() {},
    create() {},
    mounted() {},
    unmounted() {},
    methods: {
        saveUserInfo() {
            if(this.name == '') {
                return alert("사용자 이름을 입력하세요.");
                //return this.$swal("사용자 이름을 입력하세요.");
            }
            
            if(this.age == '') {
                return alert("나이를 입력하세요.");
            }

            const params = {
                name: this.name,
                age: this.age,
                job: this.job
            }

            const r = this.saveData(params);
            if(r == 'S') {
                alert('사용자 정보가 생성되었습니다.');
            }
        },
        saveData(params) {
            console.log(params);
            const r = 'S';
            return r;
        }
    }
}
</script>

<style scoped>

</style>