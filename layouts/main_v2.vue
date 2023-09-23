
<template>
  <div :class="{'bg-gland':theme==='dark','bg-gray-50':theme==='light'}">

    <!-- bg-gray-900 text-white -->
    <nav class="w-100 h-15 px-4 py-2 flex justify-end text-white shadow" :class="{'bg-gray-900':theme==='dark','bg-white':theme==='light'}">
      <div class="flex items-center w-100 justify-between">
        <div class="text-lg bold title xl" :class="{'text-gray-900':theme==='light'}">Gland</div>
        <!-- <Dropdown :list="shopList" iconClass="fa-solid fa-shop pr-4"></Dropdown> -->
        <div class="grow"></div>
        <i class="fa-solid fa-bell p-2" :class="{'text-gray-900':theme==='light'}"></i>
        <div class="p-2" :class="{'text-gray-900':theme==='light'}">
          <i class="fa-solid fa-coins"></i>
          <span>2,000,000</span>
        </div>
        <details class="font-semibold cursor-pointer z-10">
          <summary class="m-1 btn"><img src="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
              class="w-8 h-8 inline rounded-full bg-red-200" /></summary>
          <ul class="drop_down_style p-2 shadow menu rounded-lg dropdown-content z-[1] rounded-box w-64" :class="{'bg-gray-900':theme==='dark','bg-gray-50':theme==='light'}">
            <li class="block max-w-sm p-2 rounded-lg">
              <div class="flex pb-2">
                <img class="w-10 h-10 rounded-full" src="https://tecdn.b-cdn.net/img/new/avatars/2.webp" alt="">
                <h1 class="ml-2 py-2 font-medium text-base" :class="{ 'text-white': theme === 'dark', 'text-gray-900': theme === 'light' }">Dang Nguyen</h1>
              </div>
              <div class="mt-2 flex w-full justify-between text-xl p-2">
                <button class="btn btn-outline p-2 mode-button" :class="{ 'active': theme === 'light' }" @click="setTheme('light')"
                  data-tooltip-target="tooltip-light">
                  <i class="fa-solid fa-sun" :class="{ 'text-white': theme === 'dark', 'text-gray-900': theme === 'light' }"></i>
                </button>
                <div id="tooltip-light" role="tooltip"
                  class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                  Bật chế độ sáng
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>

                <button class="btn btn-outline p-2 mode-button" :class="{ 'active': theme === 'dark'}" @click="setTheme('dark')"
                  data-tooltip-target="tooltip-dark">
                  <i class="fa-solid fa-moon" :class="{ 'text-white':theme==='dark','text-gray-900':theme==='light'}"></i>
                </button>
                <div id="tooltip-dark" role="tooltip"
                  class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                  Bật chế độ tối
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>

                <button class="btn btn-outline p-2 mode-button" :class="{ 'active': theme === 'sys' }" @click="setTheme('sys')"
                  data-tooltip-target="tooltip-sys">
                  <i class="fa-solid fa-display" :class="{ 'text-white':theme==='dark','text-gray-900':theme==='light'}"></i>
                </button>
                <div id="tooltip-sys" role="tooltip"
                  class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                  Bật theo hệ thống
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
              </div>
              <div class="text-blue-700 hover:text-blue-800 mt-2">
                <a :href="authenURL">
                  Xem thông tin cá nhân
                </a>
              </div>
            </li>
            <li class="hover:bg-blue-300 p-2 rounded-lg">
              <a class="font-medium text-base" :class="{ 'text-white': theme === 'dark', 'text-gray-900': theme === 'light' }">
                <i class="fa-solid fa-right-from-bracket"></i> 
                <span>Đăng xuất</span>
              </a>
            </li>
          </ul>
        </details>
      </div>
    </nav>

    <div class="flex">
      <!-- Menu Bar -->
      <MenuBarCompV2Vue :theme="theme"></MenuBarCompV2Vue>
      <!-- Main Bar -->
      <div class="custom-bar w-100 grow">
        <div>
          <client-only>
            <template #placeholder>
              <div class="w-screen h-screen fixed flex overflow-hidden">
                <div class="text-blue-500 text-4xl my-auto" style="margin-left: 30%">
                  <img class="w-64 h-64" src="~/static/img/loading.png" alt="loading..." />
                </div>
              </div>
            </template>
            <div class="w-full nuxt_container no-scrollbar overflow-scroll">
              <Nuxt />
            </div>
          </client-only>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MenuBarCompV2Vue from '../components/Layout/MenuBarCompV2.vue';

export default {
  name: 'mainV2Layout',
  components: { MenuBarCompV2Vue },
  data() {
    return {
      isMenuOpen: false,
      authenURL: "",
      theme: "",
      shopList: [
        {
          link: "#shop1",
          name: "Spa"
        },
        {
          link: "#shop1",
          name: "Gland"
        },
      ]
    }
  },
  mounted() {
    let protocol = window.location.protocol;
    let host = window.location.host;
    this.authenURL = protocol + "//" + host + "/authen/profile";

    // set theme
    let theme = localStorage.getItem("theme");
    if (theme) {
      console.log("theme : ", theme);
    } else {
      localStorage.setItem('theme', 'dark')
    }
    this.theme = localStorage.getItem("theme");
    this.$store.dispatch('updateTheme', this.theme);
   
  },
  methods: {
    isMainPage() {
      var host = document.URL;
      return host.includes("/main/");
    },
    setTheme(mode) {
      localStorage.setItem('theme',mode);
      this.theme = localStorage.getItem("theme");
      this.$store.dispatch('updateTheme', mode);
    },
    refreshMenuList() {
      console.log("refresh menu --");
      this.$refs.menu.fetchDpt();
    },
  }
}

</script>

<style scoped>
div,
a,
li,
span {
  font-family: Inter, sans-serif;
  font-size: 14px;
}
div.title {
  font-size: 20px;
  font-weight: 600;
}
.bg-gland {
  background-color: #030712;
}
.drop_down_style {
  position: absolute;
  right: 25px;
  top: 65px;
}
.nuxt_container {
  height: 93vh;
}
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.mode-button {
  width: 100%;
  height: 100%;
}
.mode-button.active {
  background-color: #ffffff0d;
  color: #60a5fa;
}
.mode-button:hover {
  background-color: #ffffff0d;
}</style>
