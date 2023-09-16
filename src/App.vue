<template>
<NavBarComp/>
  <router-view/>
  <FooterComp/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav .router-link-exact-active {
  color: #c5202d;
}
</style>
<script>
import NavBarComp from './components/NavBarComp.vue';
import FooterComp from './components/FooterComp.vue';


export default{
components: {
  NavBarComp,
  FooterComp
}
}
</script>
