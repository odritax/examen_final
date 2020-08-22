<template>
  <div>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <nav>
      <div class="nav-wrapper #00897b teal darken-1">
        <ul id="nav-mobile" class="left hide-on-med-and-down">
          <li><router-link :to="{path:'/'}"><i class="material-icons prefix">home</i></router-link></li>
          <li><router-link :to="{path:'/pregunta'}">Agregar Pregunta</router-link></li>
        </ul>
         <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a @click="Salir"><i class="tiny material-icons">power_settings_new</i></a></li>
        </ul>
        
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name:"Nav",
  methods:{
    Salir(){
      this.$store.dispatch('Salir');
    }
  }
}
</script>