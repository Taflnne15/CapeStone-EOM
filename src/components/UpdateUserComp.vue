<template>
  <div>
    <div
      class="modal fade"
      :id="'exampleModal' + user.userID"
      tabindex="-1"
      aria-labelledby="exampleModalLabel4"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel4">
              Update User
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form>
              <input
                type="text"
                v-model="user.userName"
                placeholder="firstName"
              />
              <input
                type="text"
                v-model="user.userSurname"
                placeholder="lastName"
              />
              <input
                type="number"
                v-model="user.userAge"
                placeholder="userAge"
              />
              <input
                type="text"
                v-model="user.userGender"
                placeholder="gender"
              />
              <input type="text" v-model="user.userEmail" placeholder="email" />
              <input type="text" v-model="user.userRole" placeholder="userRole" />
              <input type="password" v-model="user.userPass" placeholder="pass" />
              <input
                type="text"
                v-model="user.userInterest"
                placeholder="interest"
              />
              <input
                type="number"
                v-model="user.userProfileUrl"
                placeholder="profileUrl"
              />
              <button
                type="button"
                @click="$store.dispatch('updateUser', this.user)"
              >
                Save Changes
              </button>
            </form>
          </div>
          <div class="modal-footer"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["user"],
  // data(){
  //     return{
  //         userForm: {
  //             userName: "",
  //             userSurname: "",
  //             userAge: "",
  //             userGender: "",
  //             userEmail: "",
  //             userPass: "",
  //             userInterest: "",
  //             userProfileUrl: ""

  //         }
  //     }
  // },
  mounted() {
    // return console.log(this.user)
  },
  computed: {
    message() {
      return this.$store.state.msg;
    },
  },
  methods: {
    submitUser() {
      this.$store.dispatch("editUser", this.userForm);
      alert(this.message);
    },
  },
};
</script>

<style scoped>
</style>
