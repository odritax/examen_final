<template>
  <div>
   <Navbar/>
   <h4>Agregar una Pregunta</h4><br><br>
   <form  @submit.prevent="Registrar" action="">
  <div class="row">
    <div class="input-field col m4 offset-m4">
      <textarea  required v-model="pregunta" class="materialize-textarea" data-length="120"></textarea>
      <label for="textarea2">Pregunta</label>
    </div>
    </div>
    <div class="row">
      <div class="input-field col m4 offset-m4">
        <input type="text" class="validate" v-model="respuesta_correcta" required>
        <label class="active">Respuesta correcta</label>
      </div>
    </div>
    <div class="row">
      <div class="input-field col m4 offset-m4">
        <input type="text" class="validate" v-model="respuesta_incorrecta1" required>
        <label class="active">Respuesta incorrecta 1</label>
      </div>
    </div>
    <div class="row">
      <div class="input-field col m4 offset-m4">
        <input type="text" class="validate" v-model="respuesta_incorrecta2" required>
        <label class="active" >Respuesta incorrecta 2</label>
      </div>
    </div>
       <div class="row">
      <div class="input-field col m4 offset-m4">
        <input type="text" class="validate" v-model="respuesta_incorrecta3" required>
        <label class="active" >Respuesta incorrecta 3</label>
      </div>
    </div>
    <div class="row">
      <div class="input-field col m4 offset-m4">
      <button type="submit" class="btn">Agregar</button>
      <!-- <button class="btn">Cancelar</button> -->
      </div>
    </div>
  </form>
  </div>
</template>
<script>
import Navbar from '@/components/Nav.vue'
import { db } from '@/firebase';
import M from 'materialize-css'

export default {
  name:"Preguntas",
  components:{
    Navbar
  },
  computed:{
    user(){
      return this.$store.state.user
    }
  },
  data(){
    return{
     pregunta:"",
     respuesta_correcta:"",
     respuesta_incorrecta1:"",
     respuesta_incorrecta2:"",
     respuesta_incorrecta3:""
    }
  },
  mounted: function(){
      M.AutoInit();
    },
  methods:{
   Registrar(){
     let respuestas = [
       {
         texto: this.respuesta_correcta,
         valor: true
       },
        {
         texto: this.respuesta_incorrecta1,
         valor: false
       },
        {
         texto: this.respuesta_incorrecta2,
         valor: false
       },
        {
         texto: this.respuesta_incorrecta3,
         valor: false
       }
     ];
    respuestas = respuestas.sort(() => 0.5 - Math.random());
    db.collection("preguntas").add({
      usuario:{
        nombre:this.$store.state.user.name,
        id:this.$store.state.user.id
      }, 
      pregunta:this.pregunta,
      respuestas:respuestas
    })
    this.$router.push('/');
 }
},
}
</script>
<style scoped>
.btn{
  margin-right: 20px;
}
</style>