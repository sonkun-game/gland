
<template>
  <div class="flex">

    <!-- Menu Bar -->
    <MenuBarCompVue></MenuBarCompVue>

    <!-- Main Bar -->
    <div class="custom-bar w-100 grow">
      <nav class="w-100 h-15 px-4 flex justify-end border-b">
        <div class="flex items-center">
          <i class="fa-solid fa-bell p-2"></i>
          <div class="p-2">
            <i class="fa-solid fa-coins"></i>
            <span>2,000,000</span>
          </div>
          <details class="font-semibold cursor-pointer">
            <summary class="m-1 btn"><img src="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
                class="w-8 h-8 inline rounded-full bg-red-200" /></summary>
            <ul class="drop_down_style p-2 shadow menu rounded-lg dropdown-content z-[1] bg-white rounded-box w-64">
              <li
                class="block max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <div class="flex border-b pb-2">
                  <img class="w-10 h-10 rounded-full" src="https://tecdn.b-cdn.net/img/new/avatars/2.webp" alt="">
                  <h1 class="ml-2 py-2 font-medium text-base">Dang Nguyen</h1>
                </div>
                <div class="text-blue-700 hover:text-blue-800 mt-2">
                  <a :href="authenURL">
                    Xem thông tin cá nhân
                  </a>
                </div>
              </li>
              <li class="hover:bg-blue-300 p-2 rounded-lg">
                <a class="font-medium text-base"><i class="fa-solid fa-right-from-bracket"></i> Đăng
                  xuất</a>
              </li>
            </ul>
          </details>


        </div>
      </nav>

      <div>
        <client-only>
          <template #placeholder>
            <div class="w-screen h-screen fixed flex overflow-hidden">
              <div class="text-blue-500 text-4xl my-auto" style="margin-left: 30%">
                <img class="w-64 h-64" src="~/static/img/loading.png" alt="loading..." />
              </div>
            </div>
          </template>
          <div class="w-screen nuxt_container no-scrollbar overflow-scroll">
            <Nuxt />
          </div>
        </client-only>
      </div>
    </div>
  </div>
</template>

<script>
import MenuBarCompVue from '../components/Layout/MenuBarComp.vue';

export default {
  name: 'mainLayout',
  components: { MenuBarCompVue },
  data() {
    return {
      isMenuOpen: false,
      authenURL: "",
    }
  },
  mounted() {
    let protocol = window.location.protocol;
    let host = window.location.host;
    this.authenURL = protocol + "//" + host + "/authen/profile";
  },
  methods: {
    isMainPage() {
      var host = document.URL;
      return host.includes("/main/");
    },
  }
}

</script>

<style scoped>
div,
a,
li,
span {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 14px;
}
.drop_down_style {
  position: absolute;
  right: 25px;
  top: 65px;
}
.nuxt_container {
  height: 93vh;
}.no-scrollbar::-webkit-scrollbar {
    display: none;
}
.no-scrollbar {
    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;
    /* Firefox */
}
</style>
