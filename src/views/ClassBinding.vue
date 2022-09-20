<template>
    <!-- <div class="container" v-bind:class="{'active':isActive, 'text-red':isRed}">class Binding</div> -->
    <!-- <div class="container" v-bind:class="[activeClass, redClass]">class Binding</div> -->
    <!-- <div v-bind:style="styleObejct">인라인 스타일 Binding</div> -->
    <div v-bind:style="[baseStyle, addStyle]">인라인 스타일 Binding</div>
</template>

<script>
export default {
    name: 'classBinding',
    components: {},
    data() {
        return {
            // isActive: true,
            // isRed: true

            // activeClass: 'active',
            // redClass: 'text-red'

            styleObject: {
                backgroudColor: 'yellow',
                color: 'red',
                fontWeight: 'bold'
            }, 
            baseStyle: 'background-color:yellow;width:100%;height:200px;',
            addStyle: 'color:red;font-weight:bold;'
        };
    }
}
</script>

<style scoped>
.container {
    width: 100%;
    height: 200px;
}

.active {
    background-color: yellow;
    font-weight: bold;
}

.text-red {
    color: red;
}
</style>