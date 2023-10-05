export const state = () => ({
    products: [],
    categories: ['all'],
    selectedCategory: null,
});

export const mutations = {
    setProducts(state, products) {
        state.products = products;
    },
    setCategories(state, categories) {
        state.categories.push(...categories);
    },
    setSelectedCategory(state, category) {
        state.selectedCategory = category;
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
