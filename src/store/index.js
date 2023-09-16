import { createStore } from 'vuex'
import axios from 'axios'
const Capstoneurl = 'https://capstone-houp.onrender.com/'
import sweet from "sweetalert";
import authenticateUser from '@/services/authenticateUser';
import router  from '@/router';
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();

export default createStore({
  state: {
    users: null,
    user: null || JSON.parse(localStorage.getItem("MusicUser")),
    eventPosts:null,
    eventPost: null,
    spinner: null,
    token:null,
    msg:null,
    inputDetails: null
  },
  getters: {
  },
  mutations: {
    setUsers(state, users){
      state.users = users
    },
    setUser(state, user){
      console.log(user)
      localStorage.setItem("MusicUser", JSON.stringify(user.result))
      state.user = user.result
    },
    updateUser(state, user){
      state.user = user
    },
    setEventPosts(state, eventPosts){
      state.eventPosts = eventPosts
    },
    updateEventPost(state, eventPost){
      state.eventPost = eventPost
    },
    setEventPost(state, eventPost){
      state.eventPost = eventPost
    },
    setSpinner(state, value){
      state.spinner = value
    },
    setMsg(state, msg){
      state.msg = msg
    }
  },
 
  actions: {
    async fetchUsers(context){
      try{
        const{results} = await (await axios.get(`${Capstoneurl}users`)).data
        context.commit("setUsers",results)
      }catch(e){
        context.commit("setMsg", "An error has occured")
      }
    } ,
    //-----fetch users----------------------
    async fetchUser(context){
      try{
        const{data} = (await axios.get(`${Capstoneurl}user`)).data
        context.commit("setUser",data.results)
      }catch(e){
        context.commit("setMsg", "An error has occured")
      }
    } ,
    //------------------------
    async deleteUsers({commit}, userID){
      try{
        const data = await axios.delete(`${Capstoneurl}users/${userID}`)
        if(data){
          context.commit('fetchUsers')
        }
      }catch(error){
        alert(error)
      }
    },
    //--------------------EditUser------------------------
    async updateUser(context, User){
      try {
        const response = await axios.patch(`${Capstoneurl}users/${User.userID}`, User)
        console.log(response)
        if (response.data.msg === "The user record was updated") {
          sweet({
            title: "User Updated",
            text: msg,
            icon: "success",
            timer: 2000
          })
        }
        // context.commit('editUsers', response.data)
        context.dispatch("fetchUsers")
      } catch (error) {
        sweet({
          title: "User Not Updated",
          text: error,
          icon: "error",
          timer: 2000
        })      }
    },
//-------------------------deleteEventPost---------------------------
    async deleteEventPost({commit}, eventID){
      try{
      const {data} =  await axios.delete(`${Capstoneurl}eventPost/${eventID}`);
        commit('seteventPosts', response.data);
      }catch(error){
        console.error('Error deleting eventPost', error)
      }
     },
 //-----------------Fetch Eventpost-----------------------------------
    async fetchEventPosts(context){
      try{
        const {data}  =  await axios.get(`${Capstoneurl}eventPosts`)
        context.commit("setEventPosts", data.results)
      }catch(e){
        context.commit("setMsg", "An error has occured")
      }
    },
    //_____________________________________________________________________________-
    async fetchEventPost(context, eventID) {
      try { 
        const {data} = await axios.get(`${Capstoneurl}eventPosts/${eventID}`);
        
        context.commit('setEventPost', data.results[0]);
      } catch (error) {
        console.error('Error fetching eventPost:', error);
      }
    },
    //---------------------------------------------------------------
    // async deletEventPost({ commit }, eventID) {
    //   try {
    //     await axios.delete(`${Capstoneurl}eventPost/${eventID}`);
    //     location.reload();
    //     commit('setEventPosts', response.data);
    //   } catch (error) {
    //     console.error('Error deleting EventPost:', error);
    //   }
    // },
    //____________________________________________________________________
    async addEventPosts({ commit }, eventPostsdata) {
      try {
        const response = await axios.post(`${Capstoneurl}eventPosts`, eventPostsdata);
        location.reload();
        commit('setEventPosts', response.data);
      } catch (error) {
        console.error('Error adding event:', error);
      }
    },
   //register user
   async register(context, payload) {
    try {
      const { msg } = (await axios.post(`${Capstoneurl}register`, payload)).data; //post request
      if (msg) { //if payload posted give us a sweet message
        sweet({
          title: "Registration",
          text: msg,
          icon: "success",
          timer: 4000,
        });
        context.dispatch("fetchUsers");
        router.push({ name: "login" });
      } else { //if not posted then give us this sweet error
        sweet({
          title: "Error",
          text: msg,
          icon: "error",
          timer: 4000
        });
      }
    } catch (e) {
      context.commit("setMsg", "An error has occured");
    }
  },
  //login user
  async login(context, payload) {
    try {
      const { msg, token, result } = (
        await axios.post(`${Capstoneurl}login`, payload) //login request`
      ).data;
      if (result) {
        context.commit("setUser", { result, msg });
        cookies.set("tatty", { msg, token, result });
        authenticateUser.applyToken(token);
        sweet({
          title: msg,
          text: `Welcome back ${result?.userName} ${result?.userSurname}`,
          icon: "success",
          timer: 4000,
        });
        router.push({ name: "home" }); //page i want to go after
      } else {
        sweet({
          title: "Error",
          text: msg,
          icon: "error",
          timer: 4000,
        });
      }
    } catch (e) {
      context.commit("setMsg", "An error has occured");
    }
  },
    //logout user
    async logOut(context) {
      context.state.user = null
      localStorage.removeItem("MusicUser")
  },










  },
  modules: {
  }


})
