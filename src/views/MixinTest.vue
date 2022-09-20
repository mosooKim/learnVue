<template>
    <div>
        <button type="button" @click="getProductList">조회</button>
        <table>
            <thead>
                <tr>
                    <th>제품명</th>
                    <th>가격</th>
                    <th>배송료</th>
                    <th>카테고리</th>
                </tr>
            </thead>
            <tbody>
                <tr :key="i" v-for="(product,i) in productList">
                    <td>{{product.product_name}}</td>
                    <td>{{product.price}}</td>
                    <td>{{product.delivery_price}}</td>
                    <td>{{product.category}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
//import ApiMixin from '../api.js';
import MonitoringMixin from '../monitoring.js';

export default {
    name: 'mixinTest',
    //mixins: [ApiMixin, MonitoringMixin],
    mixins: [MonitoringMixin],
    components: {},
    data() {
        return {
            productList: []
        };
    },
    setup() {},
    create() {},
    beforeMount() {},
    mounted() {
        console.log("mixin.vue");
    },
    beforeUpdate() {},
    update() {},
    beforeUnmount() {},
    unmounted() {},
    methods: {
        async getProductList() {
            this.productList = await this.$api('https://5be860a5-e320-4f64-b1e6-d05bff261273.mock.pstmn.io/productList','get',{})
            console.log(this.productList);
        }
    }
}
</script>

<style scoped>

</style>