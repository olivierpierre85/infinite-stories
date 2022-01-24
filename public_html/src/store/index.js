import { createStore } from 'vuex'
import { getAPI } from '../axios-api'

export const store = createStore({
    state () {
      return {
            accessToken: localStorage.getItem('accessToken') || null ,
            refreshToken: localStorage.getItem('refreshToken') || null ,
            APIData: '',
            isAdmin: false,
            showInfo: false,
      }
    },
    mutations: {
        updateStorage (state, { access, refresh }) {
          state.accessToken = access
          state.refreshToken = refresh

          localStorage.accessToken = access
          localStorage.refreshToken = refresh
        },
        destroyToken (state) {
          state.accessToken = null
          state.refreshToken = null
        },
        updateAdmin (state) {
          state.isAdmin = ! state.isAdmin
        },
        updateShowInfo (state) {
          console.log("Wata")
          state.showInfo = ! state.showInfo
        }
      },
      getters: {
        loggedIn (state) {
          return state.accessToken != null
        },
        isAdmin (state) {
          return state.isAdmin
        },
        showInfo (state) {
          return state.showInfo
        }
      },
      actions: {
        switchAdmin (context) {
          context.commit('updateAdmin')
        },
        switchShowInfo (context) {
          context.commit('updateShowInfo')
        },
        userLogout (context) {
          if (context.getters.loggedIn) {
              context.commit('destroyToken')
          }
        },
        userLogin (context, usercredentials) {
          return new Promise((resolve, reject) => {
            getAPI.post('/api-token/', {
              username: usercredentials.username,
              password: usercredentials.password
            })
              .then(response => {
                context.commit('updateStorage', { access: response.data.access, refresh: response.data.refresh }) 
                resolve()
              })
              .catch(err => {
                reject(err)
              })
          })
        }
      }
  })