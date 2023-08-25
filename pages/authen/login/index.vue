
<template>
  <div class="login-container rounded-lg shadow-xl dark:shadow-gray-800">

    <div class="login-image flex">
      <img alt="no image" src="~/assets/img/login_v3.jpg" />
    </div>

    <div class="login-action px-16 py-24">
      <div class="title text-2xl font-semibold text-center p-1">Login Account</div>
      <div class="small-text text-xs text-center text-slate-400 pb-2">Lorem Ipsum is simply dummy text of the printing
        and typesetting industry. Lorem Ipsum
        has been the industry's standard dummy text ever since the 1500s, when an unknown</div>

      <form class="inline-block p-1 w-100" action="./" method="">
        <div class="input-field p-1">
          <input autocomplete="off" v-model="username"
            class="w-100 my-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="username" id="username" name="username" placeholder="UserName" />

          <input autocomplete="off" v-model="password"
            class="w-100 my-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="password" id="password" name="password" placeholder="Password" />
        </div>
        <span class="option-field flex justify-between pb-4">
          <div class="flex items-center">
            <input type="checkbox" id="remember_me" name="remember_me"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label for="remember_me" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember
              Me</label>
          </div>
          <div>
            <a href="#" class="text-sm text-blue-600 hover:underline">Already a member ?</a>
          </div>
        </span>

        <button type="button" @click="loginForm()"
          class="w-100 text-white bg-blue-600 font-medium rounded-full text-sm px-5 py-2 mr-2 mb-2">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { sendPostApi } from '../../../plugins/api'

export default {
  name: "LoginPage",
  data() {
    return {
      username: "",
      password: ""
    }
  },
  methods: {
    loginForm() {

      axios({
        method: 'post',
        url: 'http://103.142.26.40:8080/Spa/api-authen/signing',
        responseType: 'json',
        data: {
          username: this.username,
          password: this.password,
        }
      }).then(function (response) {
        localStorage.setItem("jwt", response.data.accessToken);
        console.log(response);
      });
    }
  }
}
</script>

<style scoped>
* {
  font-family: Arial, Helvetica, sans-serif;
  user-select: none;
}

.login-container {
  width: 950px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  grid-template-columns: auto auto;
}

.login-image img {
  max-width: 475px;
}
</style>
