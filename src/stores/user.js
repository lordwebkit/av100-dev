import { defineStore } from 'pinia';
import axios from 'axios';

const loginUrl = 'https://api.av100.ru/v3/login';
const getUserUrl = 'https://api.av100.ru/v3/user/';
const apiKey = '8bcfb6e1-4fa8-4fae-872c-a435bbdbe8d9';
const deviceOS = 'windows';

export const useUserStore = defineStore('user', {
  state: () => ({
    authData: {},
    userData: {}
  }),
  getters: {
    getUserData: (state) => state.userData,
  },
  actions: {
    async authorization(auth) {
      if (auth.login && auth.password) {
        try {
          const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'X-Api-Key': apiKey,
            'X-Device-OS': deviceOS
          };
          const response = await axios.post(loginUrl, auth, { headers });
          this.authData = response.data;
          this.setUserData()
        } catch (err) {
          console.error(err);
        }
      }
    },
    async setUserData() {
      try {
        const headers = {
          'Accept': 'application/json',
          'X-Api-Key': apiKey,
          'X-User-Token': this.authData.token,
          'X-Device-OS': deviceOS
        };
        const response = await axios.get(`${getUserUrl}${this.authData.user?.id}`, { headers });
        this.userData = response.data;
        console.log(this.userData);
      } catch (err) {
        console.error(err);
      }
    }
  },
});


// login: '89381282102',
// password: '4384870146',
// fromuser: 2011830
