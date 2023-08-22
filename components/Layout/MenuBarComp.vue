
<template>
  <!-- Menu Side Bar -->
  <aside id="menu-side-bar" class="menu-bar w-0 h-screen bg-blue-700 rounded-tr-2xl rounded-br-2xl"
    :class="{ 'end': isMainPage(), 'start': !isMainPage() }">

    <button @click="openMenu()" class="w-12 absolute top-3 left-64 z-10 px-2">
      <i class="fa-solid fa-bars text-lg"></i>
    </button>

    <div id="layout-menu-head" class="px-2 py-2">
      <!-- Drop downn header -->
      <div type="button" class="flex items-center w-full text-white transition duration-100 rounded-lg group">
        <div class="w-full p-5 text-gray-500 whitespace-nowrap group-hover:text-white">
          <div class="w-32 h-32 flex justify-center items-center bg-white rounded-full">
            <img class="w-32 h-32 rounded-full"
              src="data:image/jpeg;base64,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"
              alt="imgae" />
          </div>
          <div class="my-auto text-sm mt-2 text-center">
            <div class="text-white flex items-center">
              <div class="w-2.5 h-2.5 bg-lime-400 rounded-full mr-1.5"></div>
              <div class="text-center font-semibold uppercase">Cửa hàng - ID: 9</div>
            </div>

          </div>
          <div class="grow"></div>
        </div>
      </div>
      <div>
        <div class="pl-5">
          <button id="dropdownChangeStore" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover"
            class="text-white bg-blue-700 hover:bg-yellow-400 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
            type="button">Đổi cửa hàng <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m1 1 4 4 4-4" />
            </svg></button>
          <!-- Dropdown menu -->
          <div id="dropdownHover"
            class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-52 dark:bg-gray-700">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownChangeStore">
              <li>
                <a href="#"
                  class="block font-semibold px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"><i
                    class="fa-solid fa-house mr-2"></i>Cửa
                  hàng 1</a>
              </li>
              <li>
                <a href="#"
                  class="block font-semibold px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"><i
                    class="fa-solid fa-house mr-2"></i>Cửa
                  hàng 2</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div id="layout-menu-body">
      <div class="overflow-auto px-2 py-4 overflow-y-auto no-scrollbar" style="max-height: 56vh;">
        <ul class="space-y-2 font-medium">

          <!-- display list menu -->
          <li class="font-bold" v-for="(item, index) in menuList.total" :key="index">
            <a :href="item.link">
              <button type="button" class="menu-button flex items-center w-full p-3 transition duration-100 rounded-lg">
                <i :class="item.icon" class="w-3 h-3"></i>
                <span class="flex-1 ml-3 text-left whitespace-nowrap">
                  {{ item.name }}
                </span>
              </button>
            </a>
          </li>
          <li>
            <button type="button" class="menu-button-add flex items-center w-full p-3 transition duration-100 rounded-lg">
                <i class="fa-solid fa-plus w-3 h-3"></i>
                <span class="flex-1 ml-3 text-left whitespace-nowrap">
                  Thêm phòng ban
                </span>
              </button>
          </li>
        </ul>
      </div>
    </div>
  </aside>
</template>

<style scoped>
.menu-bar {
  position: relative;
  transition: 0.5s;
}

.menu-button, .menu-button-add {
  color: white;
  border-radius: 15px;
  padding: 4px
}

.menu-button:hover {
  color: rgb(29 78 216);
  background-color: white;
}

.menu-button-add:hover {
  background-color: #E3A008;
  color: white;
}

.start {
  left: -256px;
  min-width: 0;
}

.end {
  left: 0;
  min-width: 16rem;
}

div,
a,
li,
span {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 14px;
}

img,
span,
div {
  user-select: none;
  -webkit-user-drag: none;
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */
}
</style>

<script>
import { getShopsFromApi } from "static/shop/api";

export default {
  name: "MenuBarComp",
  data() {
    return {
      menuList: {
        total: [
          // Tổng
          {
            icon: "fa-solid fa-lock",
            name: "Tổng",
            link: "/main/total/account/staff",
            id: "dropdown-menu-1",
          },
        ]
      },
      shops: [
        {
          name: "TEST"
        },
        {
          name: "TEST"
        },
        {
          name: "TEST"
        },
      ],
    }
  },
  methods: {
    openMenu: () => {
      var pos = $("#menu-side-bar").position();
      if (pos.left <= -254) {
        $("#menu-side-bar").css({ left: 0 });
        $("#menu-side-bar").css("min-width", "16rem");
      } else {
        $("#menu-side-bar").css({ left: -256 });
        $("#menu-side-bar").css("min-width", "0");
      }
    },
    isMainPage() {
      var host = this.$route.path
      return host.includes("/main/");
    }
  }
}
</script>

