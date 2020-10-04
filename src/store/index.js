import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tutoriales:'',
    tutorial: ''
  },
  mutations: {
    SET_TUTORIALES(state, tutoriales){
      state.tutoriales = tutoriales
    },
    BUSCAR_TITULO(state, tutoriales) {
      state.tutoriales = tutoriales
    },
    ORDENAR_TUTORIALES(state, tutoriales){
      state.tutoriales = tutoriales
    },
    DELETE_TUTORIALES(state, tutoriales){
      state.tutoriales = tutoriales
    },
    VER_TUTORIAL(state, tutorial){
      state.tutorial = tutorial
    },
  },
  actions: {
    getTutoriales({ commit }) {
      axios.get("https://rayentutorialtestapp.azurewebsites.net/tutorials").then((res) => {
        console.log(res.data);

        commit("SET_TUTORIALES", res.data);
      });
    },
    eliminarTodos({ commit }){
      axios.delete("https://rayentutorialtestapp.azurewebsites.net/deletetutorials").then((res) => {
        console.log(res.data);

        commit("DELETE_TUTORIALES", res.data);
      });
    },
    buscarTitulo({
      commit
    }, payload) {
      console.log(payload)
      axios.get('https://rayentutorialtestapp.azurewebsites.net/tutorial?description=' + payload).then((res) => {
        commit("BUSCAR_TITULO", res.data)
        console.log(res.data)
      })
    },
    ordenarTitulo({
      commit
    }, payload, orden) {
      console.log(payload)
      if (orden == "fecha"){
      }
      else{

      }
      commit("ORDENAR_TUTORIALES", res.data)
    },
    verDetalle({ commit }, payload) {
      console.log(payload.item);
      commit("VER_TUTORIAL", payload.item);
    },
  },
  modules: {
  }
})
