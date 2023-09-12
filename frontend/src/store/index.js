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
    user: null,
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
      state.user = user
    },
    setEventPosts(state, eventPosts){
      state.eventPosts = eventPosts
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
    async fetchUser(context){
      try{
        const{data} = (await axios.get(`${Capstoneurl}user`)).data
        context.commit("setUser",data.results)
      }catch(e){
        context.commit("setMsg", "An error has occured")
      }
    } ,
    async fetchEventPosts(context){
      try{
        const{results} = await (await axios.get(`${Capstoneurl}eventPosts`)).data
        context.commit("setEventPosts",results)
      }catch(e){
        context.commit("setMsg", "An error has occured")
      }
    } ,
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
      // console.log( msg, token, result);
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
      context.commit("setUser")
      cookies.remove("tatty")
  },









  },
  modules: {
  }


})
