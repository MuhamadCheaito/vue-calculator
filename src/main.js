import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import VueCompositionApi from "@vue/composition-api";

Vue.use(Vuex);
Vue.use(VueCompositionApi);
Vue.config.productionTip = false;

const store = new Vuex.Store({
  state: {
    currentOprand: null,
    previousOprand: null,
    operation: null,
  },

  mutations: {
    setCurrentOprand(state, value) {
      state.currentOprand = value;
    },
    setPreviousOprand(state, value) {
      state.previousOprand = value;
    },

    setOperation(state, value) {
      state.operation = value;
    },
  },
});
new Vue({
  store: store,
  render: (h) => h(App),
}).$mount("#app");
