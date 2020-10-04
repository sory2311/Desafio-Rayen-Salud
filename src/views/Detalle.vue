<template>
  <div class="agregar">
    <div>
      <b-navbar toggleable="lg" type="dark" class="tutorial">
        <b-navbar-brand href="#">Detalle tutorial</b-navbar-brand>
      </b-navbar>
    </div>
    <b-form @submit="onSubmit" @reset="onReset" class="mt-3">
      <b-form-group id="input-group-1" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="tutorial.nombre"
          type="text"
          required
          placeholder="Título"
        ></b-form-input>
      </b-form-group>

      <b-form-group>
        <b-form-input
          id="input-2"
          v-model="tutorial.profesor"
          required
          placeholder="Profesor"
        ></b-form-input>
      </b-form-group>

      <b-form-group>
        <b-form-input
          id="input-3"
          v-model="tutorial.materia"
          required
          placeholder="Materia"
        ></b-form-input>
      </b-form-group>

      <b-form-group>
        <b-form-input
          id="input-4"
          type="datetime-local"
          v-model="tutorial.fecha"
          required
          placeholder="Fecha"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Agregar</b-button>
    </b-form>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState } from "vuex";
export default {
  data() {
    return {
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
    },
  },
  computed: {
    ...mapState(["tutorial"])
  }
};
</script>

<style lang="scss" scoped>
.tutorial {
  background-color: #6f42c1;
}
</style>
