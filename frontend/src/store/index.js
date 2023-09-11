import { createStore } from 'vuex'
import axios from 'axios'

const url = ''

export default createStore({
  state: {
    users: null,
    user: null,
    events:null,
    evnt: null,
    spinner: null,
    token:null,
    msg:null,
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
        const{data} = (await axios.get(`${url}users`)).data
        context.commit("setUser", data.results)
      }catch(e){
        context.commit("setMsg", "An error has occured")
      }
    }
export default createStore ({ 
  actions: {
    try{
      const {msg, token, results}=(await axios.post
        (`${}user/login`, payload)).data
        if(result){
          context.commit('setUser'.{result.msg})
          cookies.set('LegitUser', {token, msg, result})
        }
    }
  }
})
  },
  modules: {
  }


})
