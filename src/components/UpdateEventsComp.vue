<template>
    <div>
     <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
   + UpdateEvents
 </button>
 
 <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
   <div class="modal-dialog">
     <div class="modal-content">
       <div class="modal-header">
         <h1 class="modal-title fs-5" id="exampleModalLabel2">Edit Products</h1>
         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
       </div>
       <div class="modal-body">
         <form @submit.prevent="editform">
            <input type="text" v-model="eventEdit.eventID" placeholder="eventID">
             <input type="text" v-model="eventEdit.eventName" placeholder="eventName">
             <input type="text" v-model="eventEdit.eventDescription" placeholder="eventDescription">
             <input type="number" v-model="eventEdit.eventDate" placeholder="eventDate">
             <input type="number" v-model="eventEdit.eventUrl" placeholder="eventURL">
             <button type="submit">Save Changes</button>
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
                 eventEdit: {
                    eventID: "",
                     eventName: "",
                     eventDescription: "",
                     eventDate: "",
                     eventUrl: ""
                 }
             }
         },
         computed: {
             message(){
                 return this.$store.state.msg
             }
         },
         methods: {
            editform(){
                 this.$store.dispatch("eventEdit", this.eventEdit)
                 alert(this.message)
             }
         }
     }
 </script>
 
 <style scoped>
 
 </style>