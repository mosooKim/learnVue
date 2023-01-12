<template>
    <div>
        <!-- <div>likes: {{likes}}</div>
        <div>isOk: {{isOk}}</div>
        <div>author name: {{author.name}}</div>
        <div>author company: {{author.company}}</div> -->

        <!-- <button type="button" @click="childFunc" ref="child_btn">자식에 있는 클릭</button> -->

        <!-- <h1>{{msg}}</h1> -->
        <button type="button" @click="sendFromChild">자식 컴포넌트 버튼</button>
    </div>
</template>

<script>
export default {
    name: 'childComponent',
    props:{
        likes: {
            type: Number,
            default: 0
        },
        isOk: {
            type: Boolean,
            deafault: false
        },
        commentIds: {
            type: Array
        },
        author: {
            type: Object
        }
    },
    components: {},
    data() {
        return {
            // msg: '자식에 있던 메세지'
            msg: '자식 컴포넌트로 부터 보내는 메세지'
        };
    },
    setup() {},
    create() {},
    mounted() {
        console.log(this.commentIds);
    },
    unmounted() {},
    methods: {
        childFunc() {
            alert('부모 컴포넌트에서 직접 발생시킨 이벤트');
        },
        sendFromChild() {
            //자식 컴포넌트에서 부모 컴포넌트로 이벤트, 데이터 전달하기
            // this.$emit('send-message', this.msg);
            this.msg = '자식 컴포넌트에서 데이터 변경이 일어났습니다.'
        }
    }
}
</script>

<style scoped>

</style>
