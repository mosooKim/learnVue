<template>
    <div>
        <!-- <PageTitle :title="title" /> -->
        <!-- <ChildComponent :likes="likes" :isOk="isOk" :commentIds="commentIds" :author="author" /> -->
        <!-- <button type="button" @click="callChildFunc">부모에 있는 클릭</button>
        <ChildComponent ref="child_component" /> -->

        <!-- <h1>{{parentMsg}}</h1> -->
        <!-- <ChildComponent @send-message="sendMessage" /> -->
        <button type="button" @click="showData">부모 버튼</button>
        <ChildComponent ref="child_component"/>
    </div>
</template>

<script>
// import PageTitle from '../components/PageTitle';
import ChildComponent from './ChildComponent';

export default {
    name: 'pageTitle',
    // components: {PageTitle, ChildComponent},
    components: {ChildComponent},
    data() {
        return {
            //부모 컴포넌트에서 자식 컴포넌트로 데이터 전달
            // title: "부모컴포넌트에서 전송할 페이지 타이틀",
            // likes: 23,
            // isOk: true,
            // commentIds: [1,5,2,3],
            // author: {name:'홍길동', company:"회사이름"}

            parentMsg: ''
        };
    },
    computed: {
        //computed 속성을 이용해서 부모 컴포넌트에서 자식 컴포넌트의 데이터 값 동기화하기
        msg() {
            return this.$refs.child_component.msg;
        }
    },
    setup() {},
    create() {},
    mounted() {},
    unmounted() {},
    methods: {
        callChildFunc() {
            //부모 컴포넌트에서 자식 컴포넌트의 이벤트 발생시키기
            // this.$refs.child_component.$refs.child_btn.click();
            //부모 컴포넌트에서 자식 컴포넌트의 메소드 실행시키기
            // this.$refs.child_component.childFunc();
            //부모 컴포넌트에서 자식 컴포넌트의 데이터 변경하기
            this.$refs.child_component.msg = '부모컴포넌트에서 변경한 메세지';
        },
        // sendMessage(data) {
        //     this.parentMsg = data;
        // }

        showData() {
            alert(this.msg);
        }
    }
}
</script>

<style scoped>

</style>
