<template>
    <nav class="navbar navbar-dark bg-dark fixed-top">
        <div class="container-fluid">
            <div class="left-side">
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <a class="navbar-brand mx-5" href="#">Cashier</a>
            </div>
            <form class="d-flex mx-3" role="search">
                <input type="text" class="form-control mx-2" placeholder="Search" v-model="searchQuery" @input="updateSearchData">
            </form>
            <div class="offcanvas offcanvas-start text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Cashier</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Category
                            </a>
                            <ul class="dropdown-menu dropdown-menu-dark">
                                <li v-for="(category, i) in categories" :key="i" class="dropdown-item" @click="selectCategory(category)">{{ category }}</li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <nuxt-link class="nav-link" to="/">Logout</nuxt-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>
<script>
import {mapActions, mapState, mapMutations} from 'vuex'

export default {
    data() {
        return {
            searchQuery: '',
        }
    },
    computed: {
        ...mapState('products', {
            categories: 'categories',
        })
    },
    methods: {
        ...mapMutations('products', {
            selectCategory: 'selectCategory',
            searchProduct: 'searchProduct',
        }),
        updateSearchData() {
            this.searchProduct(this.searchQuery);
        },
        ...mapActions('products',{
            fetchCategories: 'fetchCategories'
        }),
    },
    mounted() {
        this.fetchCategories();
    }
}

</script>
<style scoped>
    .dropdown-item {
        cursor: pointer;
    }
</style>