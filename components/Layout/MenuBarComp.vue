
<template>
  <!-- Menu Side Bar -->
  <aside id="menu-side-bar"
    class="menu-bar w-0 h-screen bg-gradient-to-b from-cyan-500 to-blue-500 rounded-tr-2xl rounded-br-2xl end">
    <button @click="openMenu()" class="w-10 absolute top-3 left-64 z-10 px-2">
      <i class="fa-solid fa-bars text-lg"></i>
    </button>

    <div id="layout-menu-head" class="px-2 py-2">
      <!-- Drop downn header -->
      <div type="button" class="flex items-center w-full text-white transition duration-100 rounded-lg group">
        <div class="w-full p-5 text-gray-500 whitespace-nowrap group-hover:text-white">
          <div class="w-28 h-28 flex justify-center items-center bg-white rounded-full">
            <img class="w-full h-full rounded-full"
              src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"
              alt="imgae" />
          </div>
          <div class="my-auto text-sm mt-2 text-center">
            <div class="text-white flex items-center">
              <!-- <div class="w-2.5 h-2.5 bg-lime-400 rounded-full mr-1.5"></div> -->
              <div class="text-center font-bold">Cửa hàng - ID: 9</div>
            </div>

          </div>
          <div class="grow"></div>
        </div>
      </div>
      <div>
        <div class="flex items-center justify-center">
          <button id="dropdownChangeStore" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover"
            class="text-white hover:bg-yellow-400 focus:outline-none  font-medium rounded-xl text-sm px-5 py-2.5 text-center inline-flex items-center"
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
          <li class="font-bold" v-for="(item, index) in menuList.total" :key="'all-' + index">
            <a :href="item.link">
              <button type="button" :class="{ 'menu-button-active': mainPage }"
                class="menu-button flex items-center w-full p-3 transition duration-100 rounded-lg">
                <i :class="item.icon" class="w-3 h-3"></i>
                <span class="flex-1 ml-3 text-left whitespace-nowrap">
                  {{ item.name }}
                </span>
              </button>
            </a>
          </li>
          <li>
          </li>
          <div :key="common.listDepartmentKey">
            <li class="font-bold" v-for="(item, index) in loadedDepartment" :key="'loadedDepartment-' + index">
              <a :href="item.link">
                <button type="button" :id="item.id" :class="{ 'menu-active': item.selected }"
                  class="menu-button-department flex items-center w-full p-3 transition duration-100 rounded-lg">
                  <i class="w-3 h-3 fa-solid fa-address-card"></i>
                  <span class="flex-1 ml-3 text-left whitespace-nowrap">
                    {{ item.name }}
                  </span>
                </button>
              </a>
            </li>
          </div>
          <li>
            <ShowModal :modalId="department.id" type="html"
              customClass="menu-button-add flex items-center w-full p-3 transition duration-100 rounded-lg"
              :title="department.showModalTemplate">
              <ModalContainer :modalId="department.id" class="hidden">
                <ModalHeader head="Thêm phòng ban mới" :modalId="department.id"></ModalHeader>
                <!-- Modal body -->
                <div>
                  <InputField :id="department.nameID" label="Tên phòng ban" styleClass="p-4"
                    placeholder="Nhập tên phòng ban"></InputField>
                </div>
                <!-- Modal footer -->
                <div class="flex justify-end items-center p-6 space-x-2 border-gray-200 rounded-b dark:border-gray-600">
                  <button :data-modal-hide="department.id"
                    class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900">
                    Hủy bỏ</button>
                  <button :data-modal-hide="department.id" @click="addDepartment()"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Lưu</button>
                </div>
              </ModalContainer>
            </ShowModal>
          </li>
        </ul>
      </div>
    </div>
  </aside>
</template>

<style>
.menu-bar {
  position: relative;
  transition: 0.5s;
}

.menu-button,
.menu-button-add,
.menu-button-department {
  color: white;
  border-radius: 15px;
  padding: 4px
}

.menu-active {
  background-color: #84E1BC;
  color: white;
}

.menu-button:hover {
  color: rgb(29 78 216);
  background-color: white;
}

.menu-button-active {
  color: rgb(29 78 216);
  background-color: white;
}

.menu-button-add:hover {
  background-color: #E3A008;
  color: white;
}

@media (prefers-color-scheme: light) {
  .menu-button-department:hover {
    background-color: #84E1BC;
    color: white;
  }
}

@media (prefers-color-scheme: dark) {
  .menu-button-department:hover {
    background-color: #84E1BC;
    color: white;
  }
}



.start {
  left: -256px;
  min-width: 0;
}

.end {
  left: 0;
  min-width: 14rem;
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
import { sendGetApi, sendPostApi } from "../../plugins/api";
import { Common } from "../../plugins/common";
import { v4 as uuidv4 } from 'uuid';

export default {
  name: "MenuBarComp",
  computed: {
    mainPage() {
      return this.isMainPage();
    }
  },
  data() {
    return {
      common: {
        listDepartmentKey: 11199,
        storeId: 1,
      },
      department: {
        id: "createNewDepartmentModalID",
        nameID: "createNewDepartmentNameID",
        showModalTemplate: "<i class='fa-solid fa-plus w-3 h-3'></i><span class='flex-1 ml-3 text-left whitespace-nowrap'>Thêm phòng ban</span>",
      },
      // Đây là phần load depaments
      loadedDepartment: [
        {
          selected: false,
          icon: "fa-solid fa-address-card",
          name: "Phòng ban",
          link: "/main/total/departments",
          id: "department-1",
        },
      ],
      menuList: {
        total: [
          // Tổng
          {
            icon: "fa-solid fa-lock",
            name: "Tổng",
            link: "/main/total/all",
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
  mounted() {
    this.fetchDpt();
  },
  methods: {
    openMenu: () => {
      var pos = $("#menu-side-bar").position();
      if (pos.left <= -254) {
        $("#menu-side-bar").css({ left: 0 });
        $("#menu-side-bar").css("min-width", "14rem");
      } else {
        $("#menu-side-bar").css({ left: -256 });
        $("#menu-side-bar").css("min-width", "0");
      }
    },
    isMainPage() {
      var host = this.$route.path
      return host.includes("/main/total/all");
    },
    fetchDpt() {
      let url = process.env.API_URL + "api-department?storeId=1";
      let resp = sendGetApi(url, null);
      let path = window.location.href;

      resp.then((resp) => {
        let data = resp.value;
        let convertFeArr = [];
        data.forEach(item => {
          if (!item.keyUUID) {
            alert("KeyUUID không tồn tại !");
          } else {
            convertFeArr.push({
              icon: "fa-solid fa-address-card",
              name: item.name,
              link: "/main/total/departments?id=" + item.keyUUID,
              id: "department" + item.keyUUID,
              storeId: this.storeId,
              selected: path.includes(item.keyUUID),
            });
          }

        });

        // set dât
        this.loadedDepartment = convertFeArr;
      });
    },
    addDepartment() {
      let name = document.getElementById(this.department.nameID).value;
      let keyUUID = uuidv4();

      let data = {
        icon: "fa-solid fa-address-card", // icon phòng ban
        name: name, // tên phòng ban
        link: "/main/total/departments?id=" + keyUUID, // link try cập phòng ban
        id: "department" + keyUUID, //id của phòng ban gen ra tránh trùng
        storeId: this.storeId, // thông tin store
        createdBy: "datct" // người tạo
      }
      // create api to database
      let url = process.env.API_URL + "api-department/create";
      sendPostApi(url, null, {
        name: name,
        storeId: 1,
        createdBy: "datct",
        keyUUID: keyUUID,
      });

      this.loadedDepartment.push(data);
      this.common.listDepartmentKey++;
    }
  }
}
</script>

