
<template>
  <!-- Menu Side Bar -->
  <aside id="menu-side-bar" class="menu-bar w-0 h-screen end"
    :class="{ 'border-r-2 border-gray-800': theme === 'dark', 'shadow': theme === 'light' }">
    <button type="button" @click="openMenu(); common.isClose = !common.isClose"
      class="w-10 absolute top-3 left-60 z-10 px-2"
      :class="{ 'text-white': theme === 'dark', 'text-gray-900': theme === 'light' }">
      <i v-if="common.isClose" class="fa-solid fa-arrow-right"></i>
      <i v-else class="fa-solid fa-arrow-left"></i>
    </button>

    <div id="layout-menu-body">
      <div class="overflow-auto px-2 py-4 overflow-y-auto no-scrollbar" style="max-height: 91vh;">
        <ul class="space-y-2 font-medium" :key="menuKey"
          :class="{ 'text-white': theme === 'dark', 'text-gray-900': theme === 'light' }">
          <li v-for="(item, index) in leftSideBar" :key="'menuList-total' + index">
            <Collapse :name="item.name" :isShow="true">
              <ul v-if="item.subList">
                <li v-for="(subItem, subIndex) in item.subList" :key="'subList' + subIndex" class="menu-button-department flex items-center w-full transition duration-100 rounded-lg">
                  <a :href="subItem.link"
                    :class="{ 'menu-active': ((getActiveSublist(subItem.id, subItem.link))), 'ml-4': subIndex > 1 }">
                    <i :class="subItem.icon"></i>
                    <span class="flex-1 ml-3 text-left whitespace-nowrap"> {{ subItem.name }}</span>
                  </a>
                </li>
              </ul>
            </Collapse>
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
  left: -15rem;
  min-width: 0;
}

.end {
  left: 0;
  min-width: 15rem;
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
      return this.$route.path;
    },
    urlID() {
      return this.$route.query.id;
    },
    leftSideBar: {
      get() {
        return this.menuList.total.concat(this.loadedDepartment);
      },
      set(newValue) {
        this.this.menuList.total = newValue;
      }
    },
    menuKey: {
      get() {
        return this.$store.state.menuKey;
      },
      set(newValue) {
        this.menuKey = newValue;
      }
    },
  },
  props: {
    theme: {
      type: String,
      default: ""
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
      storeId: 1,
      pageNum: 0,
      loadedDepartment: [],
      menuList: {
        total: [
          // Tổng
          {
            icon: "fa-solid fa-lock",
            name: "Tổng",
            link: "/main/total/staff",
            id: "dropdown-menu-1",
            isTotal: true,
            subList: [
              {
                id: "people",
                name: "Nhân sự",
                icon: "fa-regular fa-user",
                link: "/main/total/staff",
                selected: false,
              },
              {
                id: "department",
                name: "Phòng ban",
                icon: "fa-solid fa-house",
                link: "/main/total/department",
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
  watch: {
    // khi thay đổi giá trị menu key, thì sẽ tự động update lại thanh menu
    menuKey() {
      this.fetchDpt();
    }
  },
  mounted() {
    this.fetchDpt();
  },
  methods: {
    openMenu: () => {
      var pos = $("#menu-side-bar").position();
      if (pos.left <= -240) {
        $("#menu-side-bar").css({ left: 0 });
        $("#menu-side-bar").css("min-width", "15rem");
      } else {
        $("#menu-side-bar").css({ left: -240 });
        $("#menu-side-bar").css("min-width", "0");
      }
    },
    isMainPage() {
      var host = this.$route.path
      return host.includes("/main/total/all");
    },
    getActiveSublist(subItemId, subItemLink) {
      try {
        if(this.urlPage.includes("/script") || this.urlPage.includes("/people")) {

          return this.urlPage.includes(subItemLink) && (parseInt(this.urlID) === parseInt(subItemId));
        } else {
          return parseInt(this.urlID) === parseInt(subItemId)
        }

      } catch(error) {}
        return false
    },
    fetchDpt() {
      let url = "https://api.random-otp.io.vn:8450/gland/api-department/all?storeId=" + this.storeId + "&pageNum=" + this.pageNum;
      let resp = sendGetApi(url, null);
      let path = this.$route.path;

      resp.then((resp) => {
        let data = resp.value;
        let convertFeArr = [];
        data.forEach((item, index) => {
          let subkeyId = uuidv4();
          let checkPeople = path.includes("people?id=" + item.id);
          let checkScript = path.includes("script?id=" + item.id);

          // push array
          convertFeArr.push({
            selected: checkPeople || checkScript,
            icon: "fa-solid fa-address-card",
            name: item.name,
            link: "/main/total/departments?id=" + item.id,
            id: "department" + item.id,
            subList: [
              {
                id: "people" + subkeyId,
                name: "Nhân sự",
                icon: "fa-regular fa-user",
                link: "/main/total/list-department/people?id=" + item.id,
                selected: checkPeople,
              },
              {
                id: "script" + subkeyId,
                name: "Kịch bản",
                icon: "fa-solid fa-scroll",
                link: "/main/total/list-department/script?id=" + item.id,
                selected: checkScript,
              },
            ],
          });

          if (item.scripts) {
            // item.scripts
            item.scripts.forEach(script => {
              convertFeArr[index].subList.push({
                id: script.id,
                name: script.name,
                icon: "fa-solid fa-list-check",
                link: "/main/total/list-department/mission?id=" + script.id,
                departmentId: script.departmentId,
                department: script.department
              })
            })

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

