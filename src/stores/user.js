import { defineStore } from 'pinia';
import router from '../router';
import axios from 'axios';

const loginUrl = 'https://api.av100.ru/v3/login';
const getUserUrl = 'https://api.av100.ru/v3/user/';
const apiKey = '8bcfb6e1-4fa8-4fae-872c-a435bbdbe8d9';
const deviceOS = 'windows';

export const useUserStore = defineStore('user', {
  state: () => ({
    authData: JSON.parse(localStorage.getItem('authData')) || {},
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
          localStorage.setItem('authData', JSON.stringify(response.data))
          router.push('/settings')
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
      } catch (err) {
        console.error(err);
      }
    },
    async sendUserData() {
      try {
        const headers = {
          'Accept': 'application/json',
          'X-Api-Key': apiKey,
          'X-User-Token': this.authData.token,
          'X-Device-OS': deviceOS
        }
        const response = await axios.put(`${getUserUrl}${this.authData.user?.id}`, this.userData, { headers })
        console.log(response)
      } catch (err) {
        console.log(err);
      }
    },
    setColorLenta() {
      this.userData.colorlenta = !this.userData.colorlenta
    },
    setLockLentaUpdate() {
      this.userData.locklentaupdate = !this.userData.locklentaupdate
    },
    setTimezone(e) {
      this.userData.timezonestring = e.target.value
    },
    setRedirectTarget(e) {
      this.userData.redirecttarget = Number(e.target.value)
    },
    setNotifyType(e) {
      this.userData.redirecttarget = e.target.value
    },
    setLastName(e) {
      this.userData.lname = e.target.value
    },
    setPhone(e) {
      this.userData.phone = e.target.value
    }
  },
});