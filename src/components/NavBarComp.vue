<template>
  <div class="Nav">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/"
                >Home</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About</router-link>
            </li>
            <li v-if="user" class="nav-item">
              <router-link class="nav-link" to="/programs"
                >Programs</router-link
              >
            </li>
            <li v-if="user" class="nav-item">
              <router-link class="nav-link" to="/events">Events</router-link>
            </li>
            <li v-if="user" class="nav-item">
              <router-link class="nav-link" to="/bookings"
                >Bookings
              </router-link>
            </li>
            <li v-if="isAdmin" class="nav-item">
              <router-link class="nav-link" to="/admin">Admin</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact">Contact</router-link>
            </li>
            <li v-if="!user" class="nav-item">
              <router-link class="nav-link" to="/login"
                >LogIn/Register</router-link
              >
            </li>
            <li v-if="user" class="nav-item">
              <router-link class="nav-link" to="/userProfile"
                >Profile</router-link
              >
            </li>
            <li v-if="user" class="nav-item">
              <button @click="logout()">logout</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import router from '@/router';
import sweet from 'sweetalert';
export default {
  computed: {
    user() {
    let route = this.$route.path
    if (this.$store.state.user) {
      return this.$store.state.user
    }
    else if (route === "/login" || route === "/" || route === "/register") {
    }
    else {
      sweet({
        title: "Login",
        text: "Please login to continue access to this site",
        icon: "error",
        timer: 5000
      })
      router.push("/login");
    }
    },
    isAdmin() {
      if (this.user) {
        if (this.user.userRole === "admin") {
          return true
        } else {
          return false
        }
      } else {

      }
      // return this.result?.userRole?.toLowerCase() === "admin";
    },
  },

  methods: {
    logout() {
      this.$store.dispatch("logOut");
      location.reload();
    },
  },
};
</script>

<style scoped>
</style>