<template lang="">
  <!-- Setting -->
<div data-dial-init class="fixed right-6 bottom-6 group">
    <div id="speed-dial-menu-default" data-tooltip-target="tooltip-account" data-tooltip-placement="left" class="flex flex-col items-center hidden mb-4 space-y-2">
    <div>
      <ShowModal :modalId="createAccount.id" type="html" customClass="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm" :title="createAccount.showModalTemplate">
    <ModalContainer :modalId="createAccount.id" size="4xl">
      <ModalHeader head="Quản lý tài khoản" :modalId="createAccount.id"></ModalHeader>
      <!-- Modal body -->
      <div>
          <!-- Tạo tài khoản ---- Hiển thị danh sách tài khoản -->
      </div>
      <!-- Modal footer -->
      <div class="flex justify-end items-center p-6 space-x-2 border-gray-200 rounded-b dark:border-gray-600">
        <button :data-modal-hide="createAccount.id" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900">Hủy bỏ</button>
        <button :data-modal-hide="createAccount.id" @click="createAccountsAll(storeId)" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Lưu
        </button>
      </div>
    </ModalContainer>
  </ShowModal>
    </div>
    <div id="tooltip-account" role="tooltip" class="absolute z-10 invisible inline-block w-32 px-3 py-2 text-sm font-medium text-white text-center transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">Tài khoản</div>
    </div>

    <button type="button" data-dial-toggle="speed-dial-menu-default" aria-controls="speed-dial-menu-default" aria-expanded="false" class="flex items-center justify-center text-white bg-blue-700 rounded-full w-14 h-14 hover:bg-blue-800">
        <i class="fa-solid fa-gear text-lg transition-transform group-hover:rotate-45"></i>
        <span class="sr-only">Open actions menu</span>
    </button>
</div>

</template>
<script>
export default {
  name: "SettingButton",
  data() {
    return {
      createAccount: {
        id: "createAccountNameID",
        nameID: "createAccountNameID",
        showModalTemplate: "<i class='fa-solid fa-user w-3 h-3'></i>",
      },
    }
  }
}
</script>
<style lang="">

</style>