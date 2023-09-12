<template>
    
    <div class="Login">
   
        <br>
    <br>
        <div class="LogIn">
          <h2>Login</h2>
          <div class="inputs">
        <div class="container text-center">
  <div class="row align-items-center">
   
    <div class="col">
     
<form class="row g-3" @submit.prevent="login">

  <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"
   v-model="payload.userEmail" required>
</div>
  <div class="col-auto">
    <label for="inputPassword2" class="visually-hidden">Password</label>
    <input type="password" class="form-control" id="inputPassword2" v-model="payload.userPass" placeholder="Password">
  </div>
  <div class="col-auto">
    <button type="submit" class="btn btn-primary mb-3">login</button>
  </div>
  <router-link to="/register">Register</router-link>
</form>



    </div>
    
  </div>
</div>

        </div>
        </div>
</div>
</template>

<script>
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();

    export default {
      data(){
        return{
          payload:{
            userEmail:"",
            userPass:"",
          }
        }
      }  ,
      methods:{
        login() {
      this.$store.dispatch("login", this.payload);
    },
    beforeCreate() {
      this.$store.dispatch("fetchUser")
    },
    mounted() {
      console.log(cookies.get("tatty"));
    },

      },
    }
</script>

<style scoped>
.Login{
    width: 100%;
  height: 100vh;
    background-image: url(https://i.postimg.cc/RhhPNpzQ/wallpaperflare-com-wallpaper-21.jpg);
    background-repeat: no-repeat;
  background-size: cover;

}
.LogIn{
  margin-top: 80px;
  color: white;
margin-left: 25%;
    width: 50%;
    border: 4px solid white;
   
}
label{
    margin-left: 30px;
}
.inputs{
  margin-top: 100px;
}

</style>