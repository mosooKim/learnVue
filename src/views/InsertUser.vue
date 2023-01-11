<template>
    <div>
        이름 : <input type="text" v-model="userInfo.name"/><br>
        나이 : <input type="text" v-model.number="userInfo.age"/><br>
        직업 : <input type="text" v-model="userInfo.job"/><br><br>
        <button type="button" @click="saveUserInfo">저장</button>
    </div>
</template>

<script>
export default {
    name: 'insertUser',
    components: {},
    data() {
        return {
            name: '',
            age: '',
            job: '',
            // 관련 데이터끼리 묶어주기 위해서 오브젝트로 묶어주는 것도 좋다.
            userInfo: {
              name: '',
              age: '',
              job: ''
            }
        };
    },
    setup() {},
    create() {},
    mounted() {},
    unmounted() {},
    methods: {
        saveUserInfo() {
            if(this.userInfo.name == '') {
                // return alert("사용자 이름을 입력하세요.");
                return this.$swal("사용자 이름을 입력하세요.");
            }

            if(this.userInfo.age == '') {
                // return alert("나이를 입력하세요.");
              return this.$swal("나이를 입력하세요.");
            }

            // const params = {
            //     name: this.name,
            //     age: this.age,
            //     job: this.job
            // }

            //const r = this.saveData(params);
            const r = this.saveData(this.userInfo);
            if(r == 'S') {
                alert('사용자 정보가 생성되었습니다.');
            }
        },
        saveData(userInfo) {
            console.log(userInfo);
            const r = 'S';
            return r;
        }
    }
}
</script>

<style scoped>

</style>
