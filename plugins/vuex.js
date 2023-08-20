import { createStore } from "vuex";
import { getProducts } from "@/api/getProducts";
const store = createStore({
  state() {
    return {
      count: 0,
      products: [],
      cart: [],
    };
  },
  mutations: {
    addProduct(state, product) {
      state.cart.push(product);
    },
    deleteFromCart(state, idx) {
      let removed = state.cart.splice(idx, 1)
      console.log(state.cart, removed, idx);
      // state.cart = state.cart.filter(el => {
      //     console.log(el.id, id);
      //     return el.id != id
      // })
    },
    deleteAll(state) {
      state.cart = []
    },
    setProducts(state, products) {
      state.products = products
    },
  },
  actions: {
    getProducts(context) {
      return new Promise((resolve, reject) => {
        getProducts()
          .then(r => {
            context.commit('setProducts', r)
            // console.log(state.products)
            resolve()
          })
      })
    },

  }
});

// export default defineNuxtPlugin(() => {})

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(store);

  nuxtApp.vueApp.directive('vuex', {

    mounted(el, binding) {
      console.info('Test wanting to mount', el, binding);
      alert('works'); // client = browser only !
    },
    getSSRProps(binding, vnode) {
      // you can provide SSR-specific props here
      return {}
    },
  });
  // Install the store instance as a plugin
});