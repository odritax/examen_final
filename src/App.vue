<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'App',
}
</script>
<style>
#app {
  font-family: 'Ubuntu', sans-serif;  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
 /* label color */
   .input-field label {
     color: black;
   }
   /* label focus color */
   .input-field input[type=text]:focus + label {
     color: red;
   }
   /* label underline focus color */
   .input-field input[type=text]:focus {
     border-bottom: 1px solid red;
     box-shadow: 0 1px 0 0 red;
   }
   /* valid color */
   .input-field input[type=text].valid {
     border-bottom: 1px solid red;
     box-shadow: 0 1px 0 0 red;
   }
   /* invalid color */
   .input-field input[type=text].invalid {
     border-bottom: 1px solid red;
     box-shadow: 0 1px 0 0 red;
   }
   /* icon prefix focus color */
   .input-field .prefix.active {
     color: red;
   }
</style>
