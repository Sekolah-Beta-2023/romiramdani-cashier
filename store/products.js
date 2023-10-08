export const state = () => ({
    products: [],
    categories: ['all'],
    selectedCategory: null,
    searchQuery: '',
});

export const getters = {
    currency : () => (amount) => {
        return Intl.NumberFormat('en-US').format(parseInt(amount) * 15500)
    }
}

export const mutations = {
    setProducts(state, products) {
        state.products = products;
    },
    setCategories(state, categories) {
        state.categories.push(...categories);
    },
    selectCategory(state, category) {
        state.selectedCategory = category;
    },
    searchProduct(state, query) {
        state.searchQuery = query;
    }
};

export const actions = {
    fetchProducts({ commit }) {
        return this.$axios.$get('/products?limit=0').then(response => {
            commit('setProducts', response.products)
        })
    },
    fetchCategories({ commit }) {
        return this.$axios.$get('/products/categories').then(response => {
            commit('setCategories', response)
        })
    },
};
