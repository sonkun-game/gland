<template>
  <div class="p-8" :class="{'text-white bg-gray-900':theme==='dark'}">

    <div id="accordion-collapse" data-accordion="collapse" v-for="(item, index) in authenMission.loadedDepartment">
      <h3 :id="toId('accordion-collapse-heading',index, false)">
        <button type="button"
          class="flex items-center justify-between w-full p-2 font-medium text-left border rounded-t-xl"
          :data-accordion-target="toId('accordion-collapse-body',index, true)" aria-expanded="true"
          aria-controls="accordion-collapse-body-1">
          <span>{{ item.name }}</span>
        </button>
      </h3>
      <div :id="toId('accordion-collapse-body',index, false)" class="hidden" aria-labelledby="accordion-collapse-heading-1">
        <div class="">
          <summary>
            <InputField typeInput="checkbox" :label="item.name" :id="'missionModalDepartment' + index" />
          </summary>
          <InputField label="Tài khoản" :id="'missionModalAccount' + index" styleClass="px-5 py-2" typeInput="checkbox" />
          <InputField label="Nhiệm vụ" :id="'missionModalMission' + index" styleClass="px-5 py-2" typeInput="checkbox" />
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import StatusBar from '../../components/Common/Button/StatusBar.vue';

export default {
  name: "",
  layout: "main_v2",
  components: {
    StatusBar
  },
  data() {
    return {
      theme: 'dark',
      authenMission: {
        id: "authenMissionNameID",
        showModalTemplate: "Phân quyền nhiệm vụ",
        authenMissionKey: 11649,
        missionAllList: [
          {
            name: "Nhiệm vụ Media",
          }
        ],
        // Đây là phần load depaments
        loadedDepartment: [
          {
            selected: false,
            icon: "fa-solid fa-address-card",
            name: "Phòng ban A",
            link: "/main/total/departments",
            id: "department-1",
            storeId: 1,
          },
          {
            selected: false,
            icon: "fa-solid fa-address-card",
            name: "Phòng ban B",
            link: "/main/total/departments",
            id: "department-1",
            storeId: 1,
          },
        ],
      }
    }
  },
  methods: {
    toId(id, index, isHash) {
      if(isHash) {
        return '#' + id + '-' + index
      }
      return id + '-' + index;
    }
  }
}
</script>

<style scoped></style>