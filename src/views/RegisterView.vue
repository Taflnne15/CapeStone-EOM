<template>
    <div class="container">
        <form @submit.prevent="register">
<!-- userName -->
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">userName</label>
    <input type="text" class="form-control" id="exampleInputEmail1" v-model="payload.userName" aria-describedby="emailHelp" required oninvalid="this.setCustomValidity('Please insert full name')"
            oninput="this.setCustomValidity('')"
          />
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">userSurname</label>
    <input type="text" class="form-control" id="exampleInputPassword1" v-model="payload.userSurname" required oninvalid="this.setCustomValidity('Please insert full name')"
            oninput="this.setCustomValidity('')"
          />
  </div>
  <!-- userAge -->
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">userAge</label>
    <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="payload.userAge" required oninvalid="this.setCustomValidity('Please insert full name')"
            oninput="this.setCustomValidity('')"
          />
  </div>
  <!-- userGender -->
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">userGender</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="payload.userGender" required oninvalid="this.setCustomValidity('Please insert full name')"
            oninput="this.setCustomValidity('')"
          />
  </div>
  <!-- userEmail -->
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">userEmail</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="payload.userEmail" required oninvalid="this.setCustomValidity('Please insert full name')"
            oninput="this.setCustomValidity('')"
          />
  </div>
  <!-- userPass -->
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">userPass</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="payload.userPass" required oninvalid="this.setCustomValidity('Please insert full name')"
            oninput="this.setCustomValidity('')"
          />
  </div>
  <!-- userInterest -->
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">userInterest</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="payload.userInterest" required oninvalid="this.setCustomValidity('Please insert full name')"
            oninput="this.setCustomValidity('')"
          />
  </div>
 <!-- userProfileUrl -->
 <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">userProfileUrl</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="payload.userProfileUrl" required oninvalid="this.setCustomValidity('Please insert full name')"
            oninput="this.setCustomValidity('')"
          />
  </div>
 
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
</template>

<script>
    export default {
      data(){
        return{
            payload:{
userName:"",
userSurname:"", 
userAge:"", 
userGender:"", 
userEmail:"", 
userPass:"", 
userInterest:"",
userProfileUrl:""
        }
        }
  
      },  
      methods: {
    register() {
      this.$store.dispatch('register', this.payload)
    }
  }
    }
</script>

<style scoped>

</style>