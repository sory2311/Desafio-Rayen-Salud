<template>
  <div class="home">
    <div>
      <b-navbar toggleable="lg" type="dark" class="tutorial">
        <b-navbar-brand href="#">Tutoriales</b-navbar-brand>
      </b-navbar>
    </div>

    <div>
      <b-form inline>
        <b-input
          id="inline-form-input-name"
          class="mb-2 mr-sm-2 mb-sm-0"
          placeholder="Buscar por Titulo"
          v-model="tutorialBuscado"
        ></b-input>
        <b-button variant="primary" @click="buscar">Buscar</b-button>
      </b-form>
    </div>
    <div>
      <b-form-select v-model="selected" @change="onChange()" class="mb-3">
        <b-form-select-option :value="null">Selecciona una Opción</b-form-select-option>
         <b-form-select-option value="titulo">Titulo</b-form-select-option>
          <b-form-select-option value="fecha">Fecha</b-form-select-option>
      </b-form-select>

    </div>
    <div>
      <b-table striped hover :items="tutoriales" :fields="fields">
        <template v-slot:cell(nombre)="data">
          {{ data.item.nombre}}
        </template>
        <template v-slot:cell(profesor)="data">
          {{ data.item.profesor}}
        </template>
        <template v-slot:cell(fecha)="data">
          {{ data.item.fecha }}
        </template>
        <template v-slot:cell(ver)="row">
          <b-button size="sm" @click="showDetalle(row)">Ver Detalle</b-button>
      </template>
      </b-table>
    </div>
    <div>
      <b-button variant="outline-primary" @click="eliminar"
        >ELIMINAR TODOS</b-button
      >
    </div>

    <div>
      <b-button class="mas" variant="info" @click="agregar">+</b-button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      selected: null,
      tutorialBuscado:"",
      form: {
        busqueda: ""
      },
      fields: ["nombre", "profesor", "fecha", "ver"],
    };
  },
  name: "Home",
  components: {},
  methods: {
    ...mapActions(["getTutoriales", "buscarTitulo","eliminarTodos","verDetalle"]),
    eliminar() {
      this.eliminarTodos()
    },

    buscar(){
      this.buscarTitulo(this.tutorialBuscado);
    },
    onChange(){
        console.log(this.selected)
    },
    agregar(){
      this.$router.push({ name: "Agregar" });

    },
    showDetalle(tutorial){
      this.verDetalle(tutorial);
      this.$router.push({ name: "Detalle" });
    }
  },
  
  mounted() {
    this.getTutoriales();
  },
  computed: {
    ...mapState(["tutoriales"])
  }
};
</script>

<style lang="scss" scoped>
.tutorial {
  background-color: #6f42c1;
}
.mas {
  border-radius: 25px;
  margin-left: 350px;
  margin-bottom: 0px;
  position: fixed
}
</style>
