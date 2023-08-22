
<template>
  <div class="p-3">
    <!-- Button -->
    <div class="flex justify-between">
      <h3 class="text-2xl font-bold text-left py-2 text-blue-700">Đề xuất chi</h3>
    </div>
    <div class="flex justify-end pt-3">
      <nav aria-label="navigation">
        <ul class="flex items-center -space-x-px h-8 text-sm">
          <li>
            <a href="#"
              class="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              <span class="sr-only">Previous</span>
              <svg class="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M5 1 1 5l4 4" />
              </svg>
            </a>
          </li>
          <li>
            <a href="#" aria-current="page"
              class="z-10 flex items-center justify-center px-3 h-8 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">1</a>
          </li>
          <li>
            <a href="#"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
          </li>
          <li>
            <a href="#"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">3</a>
          </li>
          <li>
            <a href="#"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
          </li>
          <li>
            <a href="#"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
          </li>
          <li>
            <a href="#"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              <span class="sr-only">Next</span>
              <svg class="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m1 9 4-4-4-4" />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="pt-3">
      <div class="relative overflow-x-auto overflow-y-auto max-h-[600px] shadow-md sm:rounded-lg">
        <table class="w-full table-auto text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-base text-gray-900 bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                STT
              </th>
              <th scope="col" class="px-6 py-3">
                Ngày tạo
              </th>
              <th scope="col" class="px-6 py-3">
                Người tạo
              </th>
              <th scope="col" class="px-6 py-3">
                Người nộp
              </th>
              <th scope="col" class="px-6 py-3">
                Loại thu
              </th>
              <th scope="col" class="px-6 py-3">
                Số tiền
              </th>
              <th scope="col" class="px-6 py-3">
                Chi từ ví
              </th>
              <th scope="col" class="px-6 py-3">
                Mã nguồn
              </th>
              <th scope="col" class="px-6 py-3">
                Trạng thái
              </th>
              <th scope="col" class="px-6 py-3">
                Ghi chú
              </th>
              <th scope="col" class="px-6 py-3">
                Thao tác
              </th>

            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap dark:text-white">
                1
              </th>
              <td class="px-6 py-4">
                31/07/2023 11:18
              </td>
              <td class="px-6 py-4">
                Nguyễn Đăng
              </td>
              <td class="px-6 py-4">
                Đăng
              </td>
              <td class="px-6 py-4">
                Thu tiền test
              </td>
              <td class="px-6 py-4 text-green-500">
                1,100,000
              </td>
              <td class="px-6 py-4">
                Ví Nguyễn Đăng
              </td>
              <td class="px-6 py-4">
                demo
              </td>
              <td class="px-6 py-4">
                <label
                  class="bg-green-100 text-center text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                  <p>Thành công</p>
                </label>
              </td>
              <td class="px-6 py-4">
                demo
              </td>
              <td class="px-6 py-4">
                <div class="flex justify-around">
                  <div>
                    <button
                      class="block text-blue-700 bg-blue-100 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-sm rounded-lg text-xs px-2 py-1.5 text-center"
                      type="button">
                      <i class="fa-solid fa-check"></i>
                    </button>
                  </div>
                  <div>
                    <button
                      class="block text-red-700 bg-red-100 hover:bg-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-sm rounded-lg text-xs px-2 py-1.5 text-center"
                      type="button">
                      <i class="fa-solid fa-xmark"></i>
                    </button>
                  </div>
                  <div>
                    <button data-modal-target="modalView" data-modal-toggle="modalView"
                      class="block text-green-700 bg-green-100 hover:bg-green-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-300 font-sm rounded-lg text-xs px-2 py-1.5 text-center"
                      type="button">
                      <i class="fa-solid fa-eye"></i>
                    </button>
                    <!-- Main modal -->
                    <div id="modalView" tabindex="-1" aria-hidden="true"
                      class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                      <div class="relative w-full max-w-2xl max-h-full">
                        <!-- Modal content -->
                        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                          <!-- Modal header -->
                          <div class="flex items-start justify-between p-4 rounded-t dark:border-gray-600">
                            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                              Chứng từ
                            </h3>
                            <button type="button"
                              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                              data-modal-hide="modalView">
                              <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                  stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                              </svg>
                              <span class="sr-only">Close modal</span>
                            </button>
                          </div>
                          <!-- Modal button -->
                          <!-- <div
                            class="flex items-center justify-end p-6 space-x-2 border-gray-200 rounded-b dark:border-gray-600">
                            <button data-modal-hide="defaultModal" type="button"
                              class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Xóa</button>
                            <button data-modal-hide="defaultModal" type="button"
                              class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Hủy</button>
                          </div> -->
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap dark:text-white">
                1
              </th>
              <td class="px-6 py-4">
                31/07/2023 11:18
              </td>
              <td class="px-6 py-4">
                Nguyễn Đăng
              </td>
              <td class="px-6 py-4">
                Đăng
              </td>
              <td class="px-6 py-4">
                Thu tiền test
              </td>
              <td class="px-6 py-4 text-green-500">
                1,100,000
              </td>
              <td class="px-6 py-4">
                Ví Nguyễn Đăng
              </td>
              <td class="px-6 py-4">
                demo
              </td>
              <td class="px-6 py-4">
                <label
                  class="bg-yellow-100 text-center text-yellow-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                  <p>Chờ duyệt</p>
                </label>
              </td>
              <td class="px-6 py-4">
                demo
              </td>
              <td class="px-6 py-4">
                <div class="flex justify-around">
                  <div>
                    <button
                      class="block text-blue-700 bg-blue-100 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-sm rounded-lg text-xs px-2 py-1.5 text-center"
                      type="button">
                      <i class="fa-solid fa-check"></i>
                    </button>
                  </div>
                  <div>
                    <button
                      class="block text-red-700 bg-red-100 hover:bg-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-sm rounded-lg text-xs px-2 py-1.5 text-center"
                      type="button">
                      <i class="fa-solid fa-xmark"></i>
                    </button>
                  </div>
                  <div>
                    <button data-modal-target="modalView" data-modal-toggle="modalView"
                      class="block text-green-700 bg-green-100 hover:bg-green-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-300 font-sm rounded-lg text-xs px-2 py-1.5 text-center"
                      type="button">
                      <i class="fa-solid fa-eye"></i>
                    </button>
                    <!-- Main modal -->
                    <div id="modalView" tabindex="-1" aria-hidden="true"
                      class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                      <div class="relative w-full max-w-2xl max-h-full">
                        <!-- Modal content -->
                        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                          <!-- Modal header -->
                          <div class="flex items-start justify-between p-4 rounded-t dark:border-gray-600">
                            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                              Chứng từ
                            </h3>
                            <button type="button"
                              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                              data-modal-hide="modalView">
                              <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                  stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                              </svg>
                              <span class="sr-only">Close modal</span>
                            </button>
                          </div>
                          <!-- Modal button -->
                          <!-- <div
                            class="flex items-center justify-end p-6 space-x-2 border-gray-200 rounded-b dark:border-gray-600">
                            <button data-modal-hide="defaultModal" type="button"
                              class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Xóa</button>
                            <button data-modal-hide="defaultModal" type="button"
                              class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Hủy</button>
                          </div> -->
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>


          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "MarketingActivityPrososalOutcome",
}
</script>

<style scoped></style>