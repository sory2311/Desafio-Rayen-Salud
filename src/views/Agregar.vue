<template>
  <div class="agregar">
    <div>
      <b-navbar toggleable="lg" type="dark" class="tutorial">
        <b-navbar-brand href="#">Agregar tutorial</b-navbar-brand>
      </b-navbar>
    </div>
    <b-form @submit="onSubmit" @reset="onReset" class="mt-3">
      <b-form-group id="input-group-1" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.titulo"
          type="text"
          required
          placeholder="Título"
        ></b-form-input>
      </b-form-group>

      <b-form-group>
        <b-form-input
          id="input-2"
          v-model="form.profesor"
          required
          placeholder="Profesor"
        ></b-form-input>
      </b-form-group>

      <b-form-group>
        <b-form-input
          id="input-3"
          v-model="form.materia"
          required
          placeholder="Materia"
        ></b-form-input>
      </b-form-group>

      <b-form-group>
        <b-form-input
          id="input-4"
          type="datetime-local"
          v-model="form.fecha"
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

export default {
  data() {
    return {
      form: {
        titulo: "",
        profesor: "",
        materia: "",
        fecha: ""
      }
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      let agregando = {
        nombre: this.form.titulo,
        profesor: this.form.profesor,
        materia: this.form.materia,
        fecha: this.form.fecha
      };
      axios.post('https://rayentutorialtestapp.azurewebsites.net/createtutorial', agregando).then((res) => {
        if(res.data.id !== undefined){
          alert('Tutorial agregado correctamente')
          this.$router.push({ name: "Home" });
        }else{
          alert('Error al ingresar tutorial')
        }
      })
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
    },
  }
};
</script>

<style lang="scss" scoped>
.tutorial {
  background-color: #6f42c1;
}
</style>
