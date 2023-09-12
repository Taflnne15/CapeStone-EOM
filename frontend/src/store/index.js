import { createStore } from 'vuex'
import axios from 'axios'
const Capstoneurl = 'https://capstone-houp.onrender.com'

export default createStore({
  state: {
    users: null,
    user: null,
    events:null,
    event: null,
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
    setEvents(state, events){
      state.events = events
    },
    setEvent(state, event){
      state.event = event
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
        const{data} = (await axios.get(`${Capstoneurl}users`))
        context.commit("setUser",data.results)
      }catch(e){
        context.commit("setMsg", "An error has occured")
      }
      
    }
    
  },
  modules: {
  }


})
