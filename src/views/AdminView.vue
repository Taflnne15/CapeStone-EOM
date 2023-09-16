<template>
    <div class="Admin">
<h1>This will help you keep track of all EventsPost <br> 
    Bookings being made and Users</h1>
    </div>
    <div class="tables">
        <table class="table">
        <thead>
          <tr>
            <th class="text-black">ID</th>
            <th class="text-black">Name</th>
            <th class="text-black">Description</th>
            <th class="text-black">Date</th>
          </tr>
        </thead>
        <tbody
          id="whereTheyDisplay"
          v-for="item in eventPosts"
          :key="item.eventID"
        >                            
          <tr>
            <td>{{ item.eventID}}</td>
            <td>{{ item.eventName}}</td>
            <td>{{ item.eventDescription}}</td>
            <td>{{ item.eventDate}}</td>
            <td>
              <img :src="item.eventURL" alt="" width="10rem" />
            </td>
            <td><button class="edit-btn">Edit</button></td>
            <td>
              <button class="del-btn" @click="deleteeventPosts(item.eventID) ">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>

    </div>
    <AddEvents/>

<table class="table">
    <thead>
          <tr>
            <th class="text-black">UserID</th>
            <th class="text-black">UserName</th>
            <th class="text-black">UserSurname</th>
            <th class="text-black">UserAge</th>
            <th class="text-black">UserGender</th>
            <th class="text-black">UserEmail</th>
            <th class="text-black">UserInterest</th>
         
          </tr>
        </thead>

        <tbody
          id="whereTheyDisplay"
          v-for="item in users"
          :key="item.userID"
        >                            
          <tr>
            <td>{{ item.userID}}</td>
            <td>{{ item.userName}}</td>
            <td>{{ item.UserSurname}}</td>
            <td>{{ item.userAge}}</td>
            <td>{{ item.userGender}}</td>
            <td>{{ item.userEmail}}</td>
       
            <td>{{ item.userInterest}}</td>
         
            <td>
              <img :src="item.userProfileUrl" alt="" width="10rem" />
            </td>
            <td><button class="edit-btn">Edit</button></td>
            <td>
              <button class="del-btn" @click="deleteUsers(item.usersID)">Delete</button>
            </td>
          </tr>
        </tbody>
        <AddUserComp/>
      <AddEventsComp/>
</table>
</template>

<!-- <script>
import AddEventsComp from '@/components/AddEventsComp.vue';
import AddUserComp from '@/components/AddUserComp.vue';
export default {
  components:{
AddEventsComp,
AddUserComp
  },
  computed: {
    eventPosts() {
      return this.$store.state.eventPosts;
    },
    users() {
      return this.$store.state.users;
    }
  },
  mounted() {
    this.$store.dispatch("fetchUsers");
    this.$store.dispatch("fetchEventPosts");
  },
  methods:{
    deleteEventPost(eventID){
      this.$store.dispatch('deleteEventPosts', eventID)
    },
    deleteUsers(userID){
      this.$store.dispatch('deleteUsers', userID)
    },
   async addEventPost(eventID){
    this.$store.dispatch('addEventPost', eventID)
   },
   async addUsers(userID){
    this.$store.dispatch('addUser', userID)
   }
  },

};
</script> -->

<script>
import AddEventsComp from '@/components/AddEventsComp.vue';
import AddUserComp from '@/components/AddUserComp.vue';
import UpdateEventsComp from '@/components/UpdateEventsComp.vue';
import UpdateUserComp from '@/components/UpdateUserComp.vue';
    export default {
        components: {
        AddEventsComp,
        UpdateEventsComp,
        UpdateUserComp,
        AddUserComp,
        },
        computed: {
            eventPosts(){
                return this.$store.state.eventPosts
            },
            users(){
                return this.$store.state.users
            }

        },
        mounted(){
            this.$store.dispatch("fetchUsers")
            this.$store.dispatch("fetchEventPosts")
        },
        methods: {
            deleteeventPost(eventID){
                this.$store.dispatch('deleteEventPosts', eventID)
            },
            deleteUsers(userID){
                this.$store.dispatch('deleteUsers', userID)
            },
           addEventPost(eventID){
                this.$store.dispatch('addEventPost', eventID)
            },
         addUsers(userID){
                this.$store.dispatch('addUser', userID)
            }
         }
    
    }
</script>

<style scoped>
.Admin{
    width: 100%;
  height: 100vh;
  /* background: red; */
  background-image: url(https://i.postimg.cc/1RCDfJz4/wallpaperflare-com-wallpaper-24.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  background-attachment: fixed;
}
h1{
    color: white;
}
</style>