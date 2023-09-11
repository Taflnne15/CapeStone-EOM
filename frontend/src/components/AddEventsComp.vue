<template>
  <div>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  + Events
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Add Products</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
            <input type="text" v-model="eventAdd.eventName" placeholder="eventName">
            <input type="text" v-model="eventAdd.eventDescription" placeholder="eventDescription">
            <input type="number" v-model="eventAdd.eventDate" placeholder="eventDate">
            <input type="number" v-model="eventAdd.eventURL" placeholder="eventURL">
            <button type="submit" @click.prevent="eventAdd">Add</button>
          </form>
        </div>
        <div class="modal-footer">
      </div>
    </div>
  </div>
</div>
</div>

</template>

<script>
  export default {
    data(){
      return{
        eventAdd: "",
        eventDescription: "",
        eventDate: "",
        eventUrl:"",
      }
    },
    computed: {
message(){
  return this.$store.state.msg
}
  },
  methods:{
    Add(){
      this.$store.dispatch('eventAdd', this.eventAdd)
      alert(this.message)
    }
  }
  }

</script>

<style  scoped>

</style>