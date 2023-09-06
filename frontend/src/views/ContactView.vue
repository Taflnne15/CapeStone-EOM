<template>
    <div class="contact-form">
      <div class="container text-center">
  <div class="row align-items-center">
   
    <div class="col">
      <form action="https://formspree.io/f/xleynorg" method="POST">
      <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Need a call </label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="000 000 0000" required>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<button type="submit">Send</button>
</form>

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
.contact-form{
    width: 100%;
  height: 100vh;
  background-image: url(https://i.postimg.cc/Cx7dPY5m/wallpaperflare-com-wallpaper-17.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
 
}
input:focus{
  box-shadow: 4px 4px 20px #c5202d ;
 }
 textarea:focus{
  box-shadow: 4px 4px 20px #c5202d ;
 }
 input{
  border: #c5202d;
 }
 button{
background-color: #c5202d;
padding: 10px;
border-radius: 10px;
width: 20%;
border: none;
 }
 button:hover{
  box-shadow: 4px 4px 20px white;
 }
</style>