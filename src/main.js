
import Vue from 'vue';//por defecto
import Vuex from 'vuex';//almacen
import firebase from 'firebase/app';//para base de datos
import 'firebase/auth'//autentificacion
import VueFirestore from 'vue-firestore';//base de datos principal
import './firebase.js'
// import 'firebase/storage';//para guardar imagenes
import App from './App.vue';//por defecto
import router from './router';// routeo
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
 

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(VueFirestore, {key: 'id'});
const store = new Vuex.Store({
  state: {
      user: null,
      error: null,
  },
  mutations: {
    set_user(state, new_user) {
    state.user = new_user;
    },
    set_error(state,new_error) {
        if (new_error=="Password should be at least 6 characters"){
            state.error = "La contraseña debe tener más de 6 carácteres";
        }else if(new_error=="The email address is already in use by another account."){
            state.error="Intente con otro email el ingresado ya existe";
        }else if(new_error=="The password is invalid or the user does not have a password."){
            state.error="Error de login ingrese nuevamente su usuario y contraseña";
        }else if(new_error=="There is no user record corresponding to this identifier. The user may have been deleted."){
            state.error="Error de login ingrese nuevamente su usuario y contraseña"
        }else{
            state.error=new_error;
        }
    }
  },
  actions: {
     registro(context,datos){
        firebase.auth().createUserWithEmailAndPassword(datos.email, datos.password)
        .then(function(){
          firebase.auth().currentUser.updateProfile({
                  displayName: datos.name
              });
        })          
         .then(function(respuesta){
           console.log(respuesta)
            context.commit('set_error', null);
            context.commit('set_user',{email:datos.email, name:datos.name});
            router.push('/login');
         })
         .catch(function(error){
             console.log(error)
             context.commit('set_error', error.message);
             context.commit('set_user', null);
         })
        // //   firebase.storage().ref('usuario/'+datos.file.name).put(datos.file)
        // //  .then(function(){
        // //     firebase.storage().ref('usuario/'+datos.file.name).put(datos.file).snapshot.ref.getDownloadURL()
        // //   .then(function(url){
        // //     firebase.auth().currentUser.updateProfile({
        // //       photoURL:url,
        // //       displayName: datos.name
        // //   });
        // //   })
        //  }) 
     },
     login(context,datos){
        firebase.auth().signInWithEmailAndPassword(datos.email, datos.password)
        .then(function(response){
          console.log(response)
          console.log(datos.email)
          var name= firebase.auth().currentUser.displayName;
          var id= firebase.auth().currentUser.uid;
          context.commit('set_error', null);
          context.commit('set_user',{email:datos.email,name:name,id:id});
          router.push('/');
        })
        .catch(function(error){
          context.commit('set_error', error.message);
          context.commit('set_user', null);
        })
      },
      Salir(context){
        firebase.auth().signOut()
        .then(function(response){
          console.log(response)
          context.commit('set_error', null);
          context.commit('set_user', null);
          router.push('/login');
        })
      }
  }
})
new Vue({
    store,
    render: h => h(App),
    router,                  
}).$mount('#app')