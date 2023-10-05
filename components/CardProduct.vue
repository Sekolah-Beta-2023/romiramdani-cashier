<template>
    <div class="row mt-5 mx-0">
        <div class="col-md-9 left-page bg-secondary">
            <div class="row my-5 mx-3">
                <div v-for="(product, i) in filteredProducts" :key="i" class="col-md-2">
                    <div class="mb-4 card" @click="addToCart(product.id)">
                        <img :src="product.thumbnail" alt="#" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">{{ product.title }}</h5>
                            <p class="card-text">${{ product.price }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-3 right-page">
            <h1>{{ selectedCategory }}</h1>
        </div>
    </div>
</template>
<script>
import {mapState, mapActions} from "vuex"
    export default {
        computed: {
            ...mapState('products', {
                products : 'products',
                selectedCategory: 'selectedCategory'
            }),
            filteredProducts() {
                if(!this.selectedCategory || this.selectedCategory == 'all') {
                    return this.products;
                }
                return this.products.filter(product => product.category === this.selectedCategory)
            }
        },
        methods: {
            ...mapActions({
                fetchProducts: 'products/fetchProducts',
                addToCart : 'carts/addToCart'
            })
        }, 
        mounted() {
            this.fetchProducts();
        }
    }
</script>
<style scoped>
    .left-page, .right-page {
        height: 95vh;
        overflow-y: auto;
    }
    .card {
        cursor: pointer;
        height: 300px;
    }
    .card-img-top {
        height: 180px;
        width: 100%;
        object-fit: cover;
    } 
</style>