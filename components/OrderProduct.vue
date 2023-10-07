<template>
    <div class="col-md-3 right-page">
        <div class="row">
            <h2 class="my-3 ml-2">Order</h2>
            <ul>
                <li v-for="(item, i) in cartItems" :key="i" class="col mx-4 d-flex justify-content-between align-items-center">
                    <div class="row">
                        <h5>{{ item.title }}</h5>
                        <div class="col d-flex align-items-center">
                            <p class="my-2 mx-3">{{ currency(item.price) }}</p>
                            <i class="bi bi-dash fs-4 border rounded px-2" @click="decrement(item.id)"></i>
                            <p class="my-2 mx-3">{{ item.quantity }}</p>
                            <i class="bi bi-plus fs-5 border rounded px-2" @click="increment(item.id)"></i>
                        </div>
                    </div>
                    <div class="d-flex flex-column align-items-end">
                        <i class="bi bi-x-lg mb-3 text-danger" @click="remove(item.id)"></i>
                        <p>{{ currency(itemTotal(item.price, item.quantity)) }}</p>
                    </div>
                </li>
                <hr>
                <li v-if="items.length" class="col p-3 d-flex justify-content-between align-items-center">
                    <h5>Sub Total</h5>
                    <h6>{{ currency(subTotal) }}</h6>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import {mapState, mapGetters, mapActions} from 'vuex'

export default {
    computed: {
        ...mapState('carts', {
            items: 'items',
        }),
        ...mapGetters({
            cartItems: 'carts/cartItems',
            itemTotal: 'carts/itemTotal',
            currency: 'products/currency',
            subTotal: 'carts/subTotal'
        })
    },
    methods: {
        ...mapActions('carts', {
            increment: 'increment',
            decrement: 'decrement',
            remove: 'remove'
        })
    }
}
</script>
<style scoped>
    .right-page{
        height: 95vh;
        overflow-y: auto;
    }
    ul {
        list-style: none;
    }
    .bi {
        cursor: pointer;
    }
    h5, h6 {
        font-weight: bold;
    }
</style>