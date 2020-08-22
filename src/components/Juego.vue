<template>
  <div>
   <Navbar/>
   <h3>Preguntas</h3>
   <div class="row">
     <div class="col m4"></div>
     <div class="col m4" id="preguntas">
      <form @submit.prevent="Jugar">
        <ul v-for="pregunta in azar.slice(0,3)" :key="pregunta.id">
          <li>{{pregunta.pregunta}}
          <p>
            <label>
              <input type="radio" class="with-gap" :value="pregunta.respuestas[0].valor" :name="pregunta.id"/>
              <span>{{pregunta.respuestas[0].texto}}</span>
            </label>
          </p>
        <!-- OPCION 2-->
          <p>
            <label>
              <input type="radio" class="with-gap" :value="pregunta.respuestas[1].valor" :name="pregunta.id"/>
              <span>{{pregunta.respuestas[1].texto}}</span>
            </label>
          </p>
          <!-- OPCION 3-->
          <p>
            <label>
              <input type="radio" class="with-gap" :value="pregunta.respuestas[2].valor" :name="pregunta.id"/>
              <span>{{pregunta.respuestas[2].texto}}</span>
            </label>
          </p>
          <!-- OPCION 4-->
          <p>
            <label>
              <input type="radio" class="with-gap" :value="pregunta.respuestas[3].valor" :name="pregunta.id"/>
              <span>{{pregunta.respuestas[3].texto}}</span>
            </label>
          </p>
          </li>
        </ul><br>     
        <button type="submit" class="btn">Jugar</button>
      </form>
     </div>
   </div>
  </div>
</template>
<script>
import { db } from '@/firebase';
import Navbar from '@/components/Nav.vue'
const getDate = () => {
  const trailing = (d) => ('0' + d).slice(-2);
  const now = new Date();
  return `${trailing(now.getDate())}-${trailing(now.getMonth() + 1)}-${now.getFullYear()} ${trailing(now.getHours())}:${trailing(now.getMinutes())}:${trailing(now.getSeconds())}`;
}

export default {
  name:'Home',
  data(){
    return{
      preguntas:[],
      azar:[]
    }
  },
  computed:{
    user(){
      return this.$store.state.user
    },
  },
  components:{
    Navbar
  },
  mounted(){
    this.azar = this.preguntas.sort(() => 0.5 - Math.random());
    console.log(this.azar);
  },
  methods:{
      Jugar(){
        let contador=0
    //Pregunta 1
      if(document.getElementsByClassName("with-gap")[0].checked&&document.getElementsByClassName("with-gap")[0].value=="true"){
        contador=contador+1
      }else if(document.getElementsByClassName("with-gap")[1].checked&&document.getElementsByClassName("with-gap")[1].value=="true"){
       contador=contador+1
      }else if(document.getElementsByClassName("with-gap")[2].checked&&document.getElementsByClassName("with-gap")[2].value=="true"){
       contador=contador+1
      }else if(document.getElementsByClassName("with-gap")[3].checked&&document.getElementsByClassName("with-gap")[3].value=="true"){
       contador=contador+1
      }
       //Pregunta 2
      if(document.getElementsByClassName("with-gap")[4].checked&&document.getElementsByClassName("with-gap")[4].value=="true"){
        contador=contador+1
      }else if(document.getElementsByClassName("with-gap")[5].checked&&document.getElementsByClassName("with-gap")[5].value=="true"){
       contador=contador+1
      }else if(document.getElementsByClassName("with-gap")[6].checked&&document.getElementsByClassName("with-gap")[6].value=="true"){
       contador=contador+1
      }else if(document.getElementsByClassName("with-gap")[7].checked&&document.getElementsByClassName("with-gap")[7].value=="true"){
       contador=contador+1
      }
         //Pregunta 3
      if(document.getElementsByClassName("with-gap")[8].checked&&document.getElementsByClassName("with-gap")[8].value=="true"){
        contador=contador+1
      }else if(document.getElementsByClassName("with-gap")[9].checked&&document.getElementsByClassName("with-gap")[9].value=="true"){
       contador=contador+1
      }else if(document.getElementsByClassName("with-gap")[10].checked&&document.getElementsByClassName("with-gap")[10].value=="true"){
       contador=contador+1
      }else if(document.getElementsByClassName("with-gap")[11].checked&&document.getElementsByClassName("with-gap")[11].value=="true"){
       contador=contador+1
      }
      let porcentaje=""
      if(contador==0){
        porcentaje="0%"
      }else if(contador==1){
        porcentaje="33.3%"
      }else if(contador==2){
        porcentaje="66.6%"
      }else if(contador==3){
        porcentaje="100%"
      }
      db.collection("puntajes").add({
       fecha: getDate(),
       porcentaje:porcentaje,
       puntaje:contador,
       usuario:{
         id:this.$store.state.user.id,
         nombre:this.$store.state.user.name
       }
    })
    this.$router.push('/');
    console.log(contador) 
    }
  },
  firestore(){
    return {
     preguntas: db.collection("preguntas")
      }
  },
}
</script>
<style>
#preguntas{
  text-align: left;

}
</style>
