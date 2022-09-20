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
            // title: "부모컴포넌트에서 전송할 페이지 타이틀",
            // likes: 23,
            // isOk: true,
            // commentIds: [1,5,2,3],
            // author: {name:'홍길동', company:"회사이름"}

            parentMsg: ''
        };
    },
    computed: {
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
            // this.$refs.child_component.$refs.child_btn.click();
            // this.$refs.child_component.childFunc();
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