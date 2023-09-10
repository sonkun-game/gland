
<template>
  <!-- Menu Side Bar -->
  <aside id="menu-side-bar" class="menu-bar w-0 h-screen border-r-2 border-gray-800 end">
    <button type="button" @click="openMenu(); common.isClose = !common.isClose"
      class="w-10 absolute top-3 left-80 z-10 px-2 text-white">
      <i v-if="common.isClose" class="fa-solid fa-arrow-right"></i>
      <i v-else class="fa-solid fa-arrow-left"></i>
    </button>

    <div id="layout-menu-body">
      <div class="overflow-auto px-2 py-4 overflow-y-auto no-scrollbar" style="max-height: 56vh;">
        <ul class="space-y-2 font-medium">
          <li v-for="(item, index) in menuList.total" :key="'menuList-total' + index">
            <Collapse :name="item.name">
              <a v-for="(subItem, subIndex) in item.subList" :key="'subList' + subIndex" :href="subItem.link"
                class="menu-button-department flex items-center w-full transition duration-100 rounded-lg" :class="{'menu-active':urlPageV2.includes(subItem.link)}">
                <i :class="subItem.icon"></i>
                <span class="flex-1 ml-3 text-left whitespace-nowrap"> {{ subItem.name }}</span>
              </a>
            </Collapse>
          </li>

          <!-- display list menu -->
          <!-- <li class="font-bold" v-for="(item, index) in menuList.total" :key="'all-' + index">
            <a :href="item.link">
              <button type="button" :class="{ 'menu-button-active': mainPage }"
                class="menu-button flex items-center w-full p-3 transition duration-100 rounded-lg">
                <i :class="item.icon" class="w-3 h-3"></i>
                <span class="flex-1 ml-3 text-left whitespace-nowrap">
                  {{ item.name }}
                </span>
              </button>
            </a>
          </li> -->

          <!-- <div :key="common.listDepartmentKey">
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
          </div> -->


          <!-- <li>
            <ShowModal :modalId="department.id" type="html"
              customClass="menu-button-add flex items-center w-full p-3 transition duration-100 rounded-lg"
              :title="department.showModalTemplate">
              <ModalContainer :modalId="department.id" class="hidden">
                <ModalHeader head="Thêm phòng ban mới" :modalId="department.id"></ModalHeader>
                <div>
                  <InputField :id="department.nameID" label="Tên phòng ban" styleClass="p-4"
                    placeholder="Nhập tên phòng ban"></InputField>
                </div>
                <div class="flex justify-end items-center p-6 space-x-2 border-gray-200 rounded-b dark:border-gray-600">
                  <button :data-modal-hide="department.id"
                    class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900">
                    Hủy bỏ</button>
                  <button :data-modal-hide="department.id" @click="addDepartment()"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Lưu</button>
                </div>
              </ModalContainer>
            </ShowModal>
          </li> -->


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
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 24px
}

.menu-active {
  color: rgb(29 78 216);
  background-color: #ffffff0d;
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
    background-color: #ffffff0d;
  }
}

@media (prefers-color-scheme: dark) {
  .menu-button-department:hover {
    background-color: #ffffff0d;
  }
}



.start {
  left: -20rem;
  min-width: 0;
}

.end {
  left: 0;
  min-width: 20rem;
}

div,
a,
li,
span {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 16px;
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
  name: "MenuBarV2Comp",
  computed: {
    mainPage() {
      return this.isMainPage();
    },
    urlPage() {
      return window.location.path;
    },
    urlPageV2() {
      return this.$route.path;
    }
  },
  data() {
    return {
      common: {
        listDepartmentKey: 11199,
        storeId: 1,
        isClose: false,
      },
      department: {
        id: "createNewDepartmentModalID",
        nameID: "createNewDepartmentNameID",
        showModalTemplate: "<i class='fa-solid fa-plus w-3 h-3'></i><span class='flex-1 ml-3 text-left whitespace-nowrap'>Thêm phòng ban</span>",
      },
      loadedDepartment: [
        {
          selected: false,
          icon: "fa-solid fa-address-card",
          name: "Phòng ban",
          link: "/main_v2/total/staff",
          id: "department-1",
        },
      ],
      menuList: {
        total: [
          // Tổng
          {
            icon: "fa-solid fa-lock",
            name: "Tổng",
            link: "/main_v2/total/staff",
            id: "dropdown-menu-1",
            subList: [
              {
                id: "people",
                name: "Nhân sự",
                icon: "fa-regular fa-user",
                link: "/main_v2/total/staff",
                selected: false,
              },
              {
                id: "people",
                name: "Phòng ban",
                icon: "fa-solid fa-house",
                link: "/main_v2/total/department",
                selected: false,
              },
            ],
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
    // this.fetchDpt();
  },
  methods: {
    openMenu: () => {
      console.log(this);
      var pos = $("#menu-side-bar").position();
      if (pos.left <= -302) {
        $("#menu-side-bar").css({ left: 0 });
        $("#menu-side-bar").css("min-width", "20rem");
      } else {
        $("#menu-side-bar").css({ left: -320 });
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

