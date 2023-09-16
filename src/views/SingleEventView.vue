<template>
  <div v-if="eventPost">
    <div class="card mb-3" style="max-width: 540px">
      <div class="row g-0">
        <div class="col-md-4" >
          <img v-if="eventPost.eventUrl"
            :src="eventPost.eventUrl"
            class="img-fluid rounded-start"
            :alt="eventPost.eventName"
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ eventPost.eventName }}</h5>
            <p class="card-text">{{ eventPost.eventDescription }}</p>
            <p class="card-text">
              <small class="text-body-secondary">{{ eventPost.eventDate }}</small>
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
      return this.$store.state.eventPost
    }
   }
};

</script>

<style scoped>
</style>