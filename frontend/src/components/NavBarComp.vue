<template>
    <div class="Nav">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">About</router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
         Programs
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Rock 101</a></li>
            <li><a class="dropdown-item" href="#">Rookie</a></li>
            <li><a class="dropdown-item" href="#">Adult 101</a></li>
            <li><a class="dropdown-item" href="#">Performance</a></li>
            <li><a class="dropdown-item" href="#">Songwriting</a></li>
            <li><a class="dropdown-item" href="#">House Band</a></li>
            <li><a class="dropdown-item" href="#">Little Wing</a></li>
            <li><a class="dropdown-item" href="#">All Stars</a></li>
          
           
          </ul>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/events">Events</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/bookings">Bookings </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/admin">Admin</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/contact">Contact</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/login">LogIn/Register</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.Nav{
  
}
</style>