<template>
  <div v-if="eventPost">
    <div class="card mb-3" style="max-width: 540px" v-for="item in eventPost" :key="item.eventID">
      <div class="row g-0">
        <div class="col-md-4" >
          <img
            :src="item.eventUrl"
            class="img-fluid rounded-start"
            :alt="item.eventName"
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ item.eventName }}</h5>
            <p class="card-text">{{ item.eventDescription }}</p>
            <p class="card-text">
              <small class="text-body-secondary">{{ item.eventDate }}</small>
            </p>
            <router-link to="/events" class="btn-btn-primary">Back</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["eventID"],
  mounted() {
    this.$store.dispatch("fetchEventPost", this.eventID);
  },
  computed:{
    eventPost(){
      return this.$store.state.eventPost[0]
    }
   }
};

</script>

<style scoped>
</style>