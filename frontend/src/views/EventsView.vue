<template>
  <div class="events" v-if="eventPosts">
    <div class="card mb-3 text-center" v-for="item in eventPosts" :key="item" >
      <div class="row g-0">
        <div class="col-md-4">
          <img :src="item.eventUrl" class="img-fluid rounded-start" :alt="item.eventName">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ item.eventName }}</h5>
            <p class="card-text">{{ item.eventDescription }}</p>
            <p class="card-text"><small class="text-body-secondary">{{ item.eventDate }}</small></p>
            <router-link
              :to="{

                name: 'singleevent',
                params: { id: item.eventID },
                query: {
                  name: item.eventName,
                  description: item.eventDescription,
                  date: item.eventDate,
                  img: item.eventUrl,
                
                },
              }"
            >
              <button class="btn">View Product</button>
            </router-link>
      
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="spinner" v-else>
    <SpinnerComp/>
  </div>
 
</template>

<script>
import SpinnerComp from '@/components/SpinnerComp.vue'

export default {
components:{
SpinnerComp

},

  computed: {
    eventPosts() {
      return this.$store.state.eventPosts;
    }
  },
  mounted() {
    this.$store.dispatch("fetchEventPosts");
  }
}
</script>

<style scoped>
.events{
  display: grid;
  grid-template-columns: auto auto auto;
text-align: center;
}
</style>