<template lang="">

<div data-dial-init class="fixed top-32 right-10 group">
    <button type="button" data-dial-trigger="click" data-dial-toggle="speed-dial-menu-top-right" aria-controls="speed-dial-menu-top-right" aria-expanded="false" class="flex items-center justify-center text-white bg-blue-700 rounded-full w-14 h-14 hover:bg-blue-800">
        <i class="fa-solid fa-gear text-lg transition-transform group-hover:rotate-45"></i>
        <span class="sr-only">Open actions menu</span>
    </button>
    <div id="speed-dial-menu-top-right" class="flex flex-col items-center hidden mt-4 space-y-2">
        <button data-tooltip-target="account-tooltip" data-tooltip-placement="left" data-popover-target="popover-account" data-popover-trigger="click" data-popover-placement="left" type="button" class="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 shadow-sm">
          <i class="fa-solid fa-user"></i>
        </button>
        <div id="account-tooltip" role="tooltip" class="absolute z-50 invisible inline-block w-32 px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip">
           Tài khoản
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
        <div data-popover id="popover-account" role="tooltip" class="absolute z-10 invisible inline-block w-40 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0">
          <!-- Modal create account -->
        <div class="px-3 py-2">
        <div>
          <ShowModal :modalId="createAccount.id" type="html"
        customClass="w-[56px] h-[56px] text-gray-500 bg-white rounded-full border border-gray-200 hover:text-gray-900 shadow-sm"
        :title="createAccount.showModalTemplate">
        <ModalContainer :modalId="createAccount.id" size="4xl">
          <ModalHeader head="Quản lý tài khoản" :modalId="createAccount.id"></ModalHeader>
          <!-- Modal body -->
          <div class="grid grid-cols-2">
            <InputField id="editUsernameValue" label="Tên đăng nhập *" styleClass="px-4"></InputField>
            <InputField id="editPasswordValue" label="Mật khẩu *" styleClass="px-4"></InputField>
            <InputField id="editNameValue" label="Họ tên *" styleClass="px-4"></InputField>
            <InputField id="editPhoneValue" label="Số điện thoại" styleClass="px-4"></InputField>
            <InputField id="editEmailValue" label="Email" styleClass="px-4"></InputField>
            <!-- Vị trị-chức vụ-trạng thái -->
            <div class="my-2">
              <label for="departmentAllAcc" class="block pl-7 text-sm font-semibold text-gray-900 dark:text-white">Phòng
                ban</label>
              <div class="px-4 pt-2">
                <select id="departmentAllAcc"
                  class="block w-full p-2 text-xs text-gray-900 border border-gray-300 rounded-lg">
                  <option v-for="(item, index) in departAllList" :key="index" :value="item.id">
                    {{ item.name }}
                  </option>
                </select>
              </div>
            </div>
            <div class="my-2">
              <label for="positionAllAcc" class="block pl-7 text-sm font-medium text-gray-900 dark:text-white">Vị
                trí</label>
              <div class="px-4 pt-2">
                <select id="positionAllAcc"
                  class="block w-full p-2 text-xs text-gray-900 border border-gray-300 rounded-lg">
                  <option v-for="(item, index) in positionAllList" :key="index" :value="item.id">
                    {{ item.name }}
                  </option>
                </select>
              </div>
            </div>
            <div class="my-2">
              <label for="rollAllAcc" class="block pl-7 text-sm font-medium text-gray-900 dark:text-white">Chức vụ</label>
              <div class="px-4 pt-2">
                <select id="rollAllAcc" class="block w-full p-2 text-xs text-gray-900 border border-gray-300 rounded-lg">
                  <option v-for="(item, index) in roleAllList" :key="index" :value="item.id">
                    {{ item.name }}
                  </option>
                </select>
              </div>
            </div>
            <div class="my-2">
              <label for="statusAllAcc" class="block pl-7 text-sm font-medium text-gray-900 dark:text-white">Trạng
                thái</label>
              <div class="px-4 pt-2">
                <select id="statusAllAcc"
                  class="block w-full p-2 text-xs text-gray-900 border border-gray-300 rounded-lg">
                  <option v-for="(item, index) in statusAllList" :key="index" :value="item.id">
                    {{ item.name }}
                  </option>
                </select>
              </div>
            </div>
          </div>
          <!-- Modal footer -->

          <div class="flex justify-end items-center p-6 space-x-2 border-gray-200 rounded-b dark:border-gray-600">
            <button :data-modal-hide="createAccount.id"
              class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900">
              Hủy bỏ
            </button>

            <button :data-modal-hide="createAccount.id" @click="createAccountsAll(storeId)"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              Lưu
            </button>
          </div>
        </ModalContainer>
          </ShowModal>
        </div>
        </div>
          <div data-popper-arrow></div>
        </div>
        <!-- Tao nhiem vu -->
        <button data-tooltip-target="mission-tooltip" data-tooltip-placement="left" data-popover-target="popover-mission" data-popover-trigger="click" data-popover-placement="left" type="button" class="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 shadow-sm">
          <i class="fa-solid fa-list-check"></i>
        </button>
        <div id="mission-tooltip" role="tooltip" class="absolute z-50 invisible inline-block w-32 px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip">
           Nhiệm vụ
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
        <div data-popover id="popover-mission" role="tooltip" class="absolute z-10 invisible inline-block w-40 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0">
          <!-- Modal create account -->
        <div class="px-3 py-2">
        <div>
          <ShowModal :modalId="createMission.id" type="html"
          customClass="w-[56px] h-[56px] text-gray-500 bg-white rounded-full border border-gray-200 hover:text-gray-900 shadow-sm"
          :title="createMission.showModalTemplate">
          <ModalContainer :modalId="createMission.id" size="2xl">
            <ModalHeader head="Quản lý nhiệm vụ" :modalId="createMission.id"></ModalHeader>
            <!-- Modal body -->
            <div>
              <InputField id="all_mission_txtName" label="Tên nhiệm vụ" styleClass="px-4"></InputField>
              <InputField id="all_mission_txtDes" styleClass="px-4" label="Mô tả" typeInput="textarea"></InputField>
            </div>
            <!-- Modal footer -->
            <div class="flex justify-end items-center p-6 space-x-2 border-gray-200 rounded-b dark:border-gray-600">
              <button :data-modal-hide="createMission.id"
                class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900">
                Hủy bỏ</button>
              <button :data-modal-hide="createMission.id" @click="createMissionFunct(storeId)"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Lưu</button>
            </div>
          </ModalContainer>
        </ShowModal>
        </div>
        </div>
          <div data-popper-arrow></div>
        </div>
    </div>
</div>

</template>
<script>

export default {
  data() {
    return {
      createAccount: {
        id: "createAccountNameID",
        nameID: "createAccountNameID",
        showModalTemplate: "<i class='fa-solid fa-user w-3 h-3'></i>",
      },
      createMission: {
        id: "createMissionNameID",
        nameID: "createMissionNameID",
        showModalTemplate: "<i class='fa-solid fa-bars-progress'></i>"
      }
    }
  }
}
</script>
<style lang="">

</style>