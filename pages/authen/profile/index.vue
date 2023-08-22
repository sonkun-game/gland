
<template>
  <div class="px-5 pt-4">
    <div class="flex">
      <div
        class="w-full max-w-sm bg-white border border-gray-200 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700">
        <div class="flex justify-end px-4 pt-4">
        </div>
        <div class="flex flex-col items-center pb-10">
          <img class="w-44 h-44 mb-3 rounded-2xl shadow-lg" src="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
            alt="Bonnie image" />
          <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Nguyen Dang</h5>
          <span class="text-sm text-green-400 dark:text-gray-400"><i class="fa-solid fa-circle"></i> Làm việc</span>
          <div class="flex mt-4 space-x-3 md:mt-6">

            <!-- Modal toggle -->
            <button data-modal-target="defaultModal" data-modal-toggle="defaultModal"
              class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button">
              Chỉnh sửa thông tin
            </button>

            <!-- Main modal -->
            <div id="defaultModal" tabindex="-1" aria-hidden="true"
              class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
              <div class="relative w-full max-w-2xl max-h-full">
                <!-- Modal content -->
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  <!-- Modal header -->
                  <div class="flex items-start justify-between p-4 rounded-t dark:border-gray-600">
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                      Chỉnh sửa thông tin
                    </h3>
                    <button type="button"
                      class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      data-modal-hide="defaultModal">
                      <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                      </svg>
                      <span class="sr-only">Close modal</span>
                    </button>
                  </div>
                  <!-- Modal body -->
                  <div class="p-6 space-y-6">
                    <div>
                      <div>
                        <label for="editName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Họ và
                          tên</label>
                        <input type="text" id="editName"
                          class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      </div>
                    </div>
                    <div>
                      <div>
                        <label for="editPhoneNumber"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Số điện thoại</label>
                        <input type="text" id="editPhoneNumber"
                          class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      </div>
                    </div>
                    <div>
                      <div>
                        <label for="editMail"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input type="text" id="editMail"
                          class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      </div>
                    </div>
                  </div>
                  <!-- Modal footer -->
                  <div class="flex justify-end items-center p-6 space-x-2 border-gray-200 rounded-b dark:border-gray-600">
                    <button data-modal-hide="defaultModal" type="button"
                      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Cập
                      nhật</button>
                    <button data-modal-hide="defaultModal" type="button"
                      class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Hủy
                      bỏ</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="px-5 pt-2 pb-5">
          <div class="ml-2">
            <div class="mb-2">
              <h3 class="font-medium text-lg"><i class="fa-solid fa-location-dot"></i> HaNoi, VietNam</h3>
            </div>
            <div class="mb-2">
              <h3 class="font-medium text-lg"><i class="fa-solid fa-envelope"></i> user.name@gmail.com</h3>
            </div>
            <div class="mb-2">
              <h3 class="font-medium text-lg"><i class="fa-solid fa-phone"></i> 0123456678</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="pl-8">
        <ProfileInfo title="Thông tin cơ bản" color="red"
          :body="['Họ tên: Nguyen Dang', 'Ngày sinh: 1x - 1x-19xx', 'Giới tính: Nam']">
        </ProfileInfo>
        <ProfileInfo title="Mô tả" color="cyan"
          :body="['Phòng ban: Marketing', 'Ngày tạo: 1x - 1x-19xx', 'Vị trí: ADs']">
        </ProfileInfo>
        <ProfileInfo title="Tài khoản và bảo mật"  color="yellow"
          :body="['Tên tài khoản: dangnguyen', 'Mật khẩu: *************']">
          <div>
            <!-- Modal toggle -->
            <button data-modal-target="editModal" data-modal-toggle="editModal"
              class="block text-blue-700 bg-white hover:bg-blue-800 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button">
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <!-- Main modal -->
            <div id="editModal" tabindex="-1" aria-hidden="true"
              class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
              <div class="relative w-full max-w-2xl max-h-full">
                <!-- Modal content -->
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  <!-- Modal header -->
                  <div class="flex items-start justify-between p-4 rounded-t dark:border-gray-600">
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                      Đổi mật khẩu
                    </h3>
                    <button type="button"
                      class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      data-modal-hide="editModal">
                      <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                      </svg>
                      <span class="sr-only">Close modal</span>
                    </button>
                  </div>
                  <!-- Modal body -->
                  <div class="p-6 space-y-6">
                    <div>
                      <label for="oldPass" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mật
                        khẩu cũ</label>
                      <input type="password" id="oldPass"
                        class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    </div>
                    <div>
                      <label for="newPass" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mật
                        khẩu mới</label>
                      <input type="password" id="newPass"
                        class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    </div>
                    <div>
                      <label for="rePass" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nhập
                        lại mật khẩu
                        mới</label>
                      <input type="password" id="rePass"
                        class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    </div>
                  </div>
                  <!-- Modal footer -->
                  <div class="flex justify-end items-center p-6 space-x-2 border-gray-200 rounded-b dark:border-gray-600">
                    <button data-modal-hide="defaultModal" type="button"
                      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Cập
                      nhật</button>
                    <button data-modal-hide="defaultModal" type="button"
                      class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Hủy
                      bỏ</button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </ProfileInfo>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfilePage",
  layout: "main",
}
</script>

<style scoped></style>
