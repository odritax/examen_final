<template>
  <div id="home">
    <Navbar/>
    <div class="row">
      <div class="input-field col m3 offset-m9">
        <i class="material-icons prefix">search</i>
        <input id="icon_prefix" v-model="buscador" type="text" class="validate">
        <label for="icon_prefix">buscar por nombre</label>
     </div>
    </div>
    <br>
      <div class="row">
        <div class="col m4 offset-m4"> <router-link :to="{path:'/juego'}" class="btn waves-light btn-large">Jugar</router-link></div><br>
      </div>
    <table class="centered">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Puntaje</th>
          <th>Porcentaje</th>
          <th>Fecha</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="puntaje in Buscador" :key="puntaje.id">
        <td>{{puntaje.usuario.nombre}}</td>
        <td>{{puntaje.puntaje}}/3</td>
        <td>{{puntaje.porcentaje}}</td>
        <td>{{puntaje.fecha}}</td>
        <!-- <td v-if="user.id==cita.paciente.id"><button  v-on:click="eliminar(cita.id)" class="btn">Cancelar</button></td>
        <td v-else>Ninguna</td> -->
      </tr>
      </tbody>
    </table>
    <br><br>
  </div>
</template>
<script>
import { db } from '@/firebase';
import Navbar from '@/components/Nav.vue'
export default {
  name:'Home',
  data(){
    return{
      puntajes:[],
      buscador:""
    }
  },
  computed:{
    user(){
      return this.$store.state.user
    },
    Buscador(){
      return this.puntajes.filter((puntaje)=> puntaje.usuario.nombre.includes(this.buscador))
    }
  },
  components:{
    Navbar
  },
  firestore(){
    return {
     puntajes: db.collection("puntajes").orderBy('porcentaje','asc')
      }
  },
}
</script>
<style>
/* html #home{
   overflow-y:hidden;
} */
</style>