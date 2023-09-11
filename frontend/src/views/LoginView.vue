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
     
      <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Full Name </label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Taflynne Petersen" required>
</div>
<form class="row g-3">

  <div class="col-auto">
    <label for="inputPassword2" class="visually-hidden">Password</label>
    <input type="password" class="form-control" id="inputPassword2" placeholder="Password">
  </div>
  <div class="col-auto">
    <button type="submit" class="btn btn-primary mb-3">Confirm identity</button>
  </div>
</form>

    </div>
    
  </div>
</div>

        </div>
        </div>
</div>
</template>

<script>
    export default {
        
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