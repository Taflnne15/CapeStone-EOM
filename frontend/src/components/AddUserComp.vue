<template>
    <div>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Add user</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
            <input type="text" :v-model="userForm.userName" placeholder="firstName">
            <input type="text" :v-model="userForm.userSurname" placeholder="lastName">
            <input type="number" :v-model="userForm.userAge" placeholder="userAge">
            <input type="text" :v-model="userForm.userGender" placeholder="gender">
            <input type="text" :v-model="userForm.userEmail" placeholder="email">
            <input type="text" :v-model="userForm.userPass" placeholder="pass">
            <input type="text" :v-model="userForm.userInterest" placeholder="interest">
            <input type="number" v-model="userForm.userProfileUrl" placeholder="profileUrl">
            <button type="submit" @click.prevent="submitUser">Add</button>
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
userName: "",
userSurname: "",
userAge: "",
userGender: "",
userEmail: "",
userPass: "",
userInterest: "",
userProfileUrl: ""
      }
    },
    computed:{
      message(){
        return this.$store.state.msg
      }
    },
    methods: {
      submitUser(){
        this.$store.dispatch('sumbitUser', this.userForm)
        alert(this.message)
      }
    }

        }
   
</script>

<style scoped>

</style>