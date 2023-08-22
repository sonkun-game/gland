
<template>


    <div>
        <div id="editShopModal"></div>

        <div class="flex justify-between">
            <!-- Some Text -->
            <p class="py-3.5">
                Thành viên đang hoạt động và ngừng hoạt động
            </p>

            <div>
                <input type="search" id="first_name"
                    class="h-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 justify-self-end"
                    placeholder="Tìm kiếm bằng tên - tài khoản">
            </div>
        </div>

        <!-- Table -->
        <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3 text-left" v-for="(item, index) in staffAuth.table.head"
                            :key="index">
                            {{ item.name }}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b" v-for="(item, index) in staffAuth.table.body" :key="index">
                        <td class="px-6 py-4 text-center">
                            {{ index }}
                        </td>
                        <td class="px-6 py-4 text-left">
                            {{ item[0] }}
                        </td>
                        <td class="px-6 py-4 text-left">
                            {{ item[1] }}
                        </td>
                        <td class="px-6 py-4 text-left">
                            {{ item[2] }}
                        </td>
                        <td class="px-6 py-4 text-left">
                            {{ item[3] }}
                        </td>
                        <td class="w-24 px-6 py-4 flex text-center">
                            <button data-modal-target="editShopModal" data-modal-toggle="editShopModal"
                                class="w-6 h-6 m-2 bg-white border rounded">
                                <i class="fa-regular fa-pen-to-square "></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- Pagination Footer -->
        <div class="flex flex-col items-end mr-10 my-2">
            <!-- Help text -->
            <span class="text-sm text-gray-700 dark:text-gray-400">
                Showing <span class="font-semibold text-gray-900 dark:text-white">1</span> to <span
                    class="font-semibold text-gray-900 dark:text-white">10</span> of <span
                    class="font-semibold text-gray-900 dark:text-white">100</span> Entries
            </span>
            <!-- Buttons -->
            <div class="inline-flex mt-2 xs:mt-0">
                <button
                    class="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-800 bg-white rounded-l">
                    Prev
                </button>
                <button
                    class="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-800 bg-white border-0 border-l border-gray-700 rounded-r ">
                    Next
                </button>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "StaffAuthPage",
    props: {
        staffAuth: {}
    }
}
</script>
  
<style scoped></style>