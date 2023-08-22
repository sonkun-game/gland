<template>
    <div>

        <!-- Edit Modal -->
        <div id="editShopModal" tabindex="-1" aria-hidden="true"
            class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div class="relative w-full max-w-xl max-h-full">
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <!-- Modal header -->
                    <div class="flex items-start justify-between p-4 rounded">
                        <div>
                            Quản lý cửa hàng
                        </div>
                        <XButton id="editShopModal"></XButton>
                    </div>
                    <!-- Modal body -->
                    <div class="px-4 pb-2">
                        <div>
                            <div class="grid md:grid-cols-2 md:gap-6">
                                <div class="relative z-0 w-full">
                                    <label for="floating_first_name" class="text-normal">Tên cửa hàng</label>
                                    <input type="text" name="floating_first_name" id="shop_name" v-model="name"
                                        class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                                        placeholder=" " required />

                                </div>
                                <div class="relative z-0 w-full">
                                    <label for="floating_last_name" class="text-normal">Số điện thoại</label>
                                    <input type="text" name="floating_last_name" id="phone_number" v-model="phone"
                                        class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                                        placeholder=" " required />

                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="relative z-0 w-full mb-6 group">
                                <label for="floating_last_name" class="text-normal">Địa chỉ</label>
                                <textarea type="text" name="floating_last_name" id="address" v-model="address"
                                    class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                                    placeholder=" "></textarea>

                            </div>
                        </div>
                        <div>
                            <div class="relative z-0 w-50 mb-6 group">
                                <label for="floating_last_name" class="text-normal">Trạng thái</label>
                                <select name="floating_last_name" id="status" v-model="status"
                                    class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
                                    <option value="1">Hoạt động</option>
                                    <option value="0">Dừng HĐ</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <!-- Modal footer -->
                    <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button data-modal-hide="editShopModal" type="button"
                            class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Hủy
                            bỏ</button>
                        <button data-modal-hide="editShopModal" type="button" @click="editShop()"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Lưu</button>
                    </div>
                </div>
            </div>
        </div>

        <div id="accountTab" class="px-4">
            <!-- Button tạo chức vụ-->
            <div class="py-3.5 rounded-lg" id="staff" role="tabpanel" aria-labelledby="profile-tab">

                <div class="w-100 flex justify-end mb-3.5">
                    <button data-modal-target="createShopModal" data-modal-toggle="createShopModal"
                        class="text-white bg-blue-500 hover:bg-blue-400 font-medium rounded-lg text-sm px-2.5 py-1.5 text-center"
                        type="button">
                        Tạo cửa hàng
                    </button>

                    <!-- Create Modal -->
                    <div id="createShopModal" tabindex="-1" aria-hidden="true"
                        class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                        <div class="relative w-full max-w-xl max-h-full">
                            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                <!-- Modal header -->
                                <div class="flex items-start justify-between p-4 rounded">
                                    <div>
                                        Quản lý cửa hàng
                                    </div>
                                    <XButton id="createShopModal"></XButton>
                                </div>
                                <!-- Modal body -->
                                <div class="px-4 pb-2">
                                    <div>
                                        <div class="grid md:grid-cols-2 md:gap-6">
                                            <div class="relative z-0 w-full">
                                                <label for="floating_first_name" class="text-normal">Tên cửa hàng</label>
                                                <input type="text" name="floating_first_name" id="shop_name" v-model="name"
                                                    class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                                                    placeholder=" " required />
                                            </div>
                                            <div class="relative z-0 w-full">
                                                <label for="floating_last_name" class="text-normal">Số điện thoại</label>
                                                <input type="text" name="floating_last_name" id="phone_number"
                                                    v-model="phone"
                                                    class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                                                    placeholder=" " required />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="relative z-0 w-full mb-6 group">
                                            <label for="floating_last_name" class="text-normal">Địa chỉ</label>
                                            <textarea type="text" name="floating_last_name" id="address" v-model="address"
                                                class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                                                placeholder=" "></textarea>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="relative z-0 w-50 mb-6 group">
                                            <label for="floating_last_name" class="text-normal">Trạng thái</label>
                                            <select name="floating_last_name" id="status" v-model="status"
                                                class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
                                                <option value="1">Hoạt động</option>
                                                <option value="0">Dừng HĐ</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <!-- Modal footer -->
                                <div
                                    class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                                    <button data-modal-hide="createShopModal" type="button"
                                        class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Hủy
                                        bỏ</button>
                                    <button data-modal-hide="createShopModal" type="button" @click="createShop()"
                                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Lưu</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- List filter -->
                <div class="flex">
                    <select @change="fetchDataWhenChangeStatus" v-for="(item, index) in staff.staffFilter" :key="index"
                        :id="item.id"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 py-1.5 px-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mr-2">
                        <option v-for="(optionItem, optionIndex) in item.selectOption" :key="optionIndex"
                            :value="optionItem.value">
                            {{ optionItem.name }}
                        </option>
                    </select>

                    <div class="grow"></div>

                    <!-- Search Input -->
                    <div>
                        <input type="search" @change="fetchDataWhenChangeSearch"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block py-1.5 px-2.5 justify-self-end"
                            placeholder="Tìm kiếm bằng tên - tài khoản">
                    </div>
                </div>

                <!-- Some Text -->
                <p class="py-3.5">
                    Cửa hàng đang hoạt động và ngừng hoạt động
                </p>

                <!-- Some Table -->
                <div class="relative overflow-x-auto">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3 text-center" v-for="(item, index) in table.head"
                                    :key="index">
                                    {{ item.name }}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-white border-b" v-for="(item, index) in table.body" :key="index">
                                <td class="px-6 py-4 text-center">
                                    {{ item.name }}
                                </td>
                                <td class="px-6 py-4 text-center">
                                    {{ item.address }}
                                </td>
                                <td class="px-6 py-4 text-center">
                                    {{ item.phone }}
                                </td>
                                <td class="px-6 py-4 text-center">
                                    {{ item.createdAt }}
                                </td>
                                <td class="px-6 py-4 text-center">
                                    <div class="text-lime-500" v-if="item.status === '1'">
                                        <i class="fa-solid fa-circle"></i>
                                        Hoạt động
                                    </div>
                                    <div class="text-red-500" v-else>
                                        <i class="fa-solid fa-circle"></i>
                                        Dừng Hoạt động
                                    </div>
                                </td>

                                <td class="px-6 py-4 text-center">
                                    <!-- editShopModal -->
                                    <button :id="id" data-modal-target="editShopModal" data-modal-toggle="editShopModal"
                                        @click="setDataForm(item.name, item.address, item.phone, item.status, item.id)"
                                        class="w-6 h-6 bg-white border rounded">
                                        <i class="fa-regular fa-pen-to-square "></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
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
import axios from 'axios'
import { createShop, editShop, getShopsFromApi } from "static/shop/api";
export default {
    name: 'AccountPage',
    layout: 'main',
    data() {
        return {
            staff: {
                staffFilter: [
                    {
                        id: "status",
                        selectOption: [
                            {
                                selected: false,
                                name: "Tất cả trạng thái",
                                value: "",
                            },
                            {
                                selected: false,
                                name: "Hoạt động",
                                value: "1",
                            },
                            {
                                selected: false,
                                name: "Dừng hoạt động",
                                value: "0",
                            },
                        ]
                    },
                ]
            },
            table: {
                head: [
                    { name: "Tên cửa hàng" },
                    { name: "Địa chỉ" },
                    { name: "Điện thoại" },
                    { name: "Ngày tạo" },
                    { name: "Trạng thái" },
                    { name: "Thao tác" },
                ],
                body: [
                ]
            },
            name: '',
            status: '',
            phone: '',
            address: '',
            createdAt: '',
            id: ''
        }
    },
    async mounted() {
        // Gọi API tại đây và gán dữ liệu vào table.body
        var shop = await getShopsFromApi('', '');
        this.table.body = shop;
        console.log("this.table.body " + this.table.body)
    },
    methods: {
        async fetchDataWhenChangeStatus(event) {
            this.status = event.target.value
            var shop = await getShopsFromApi(this.status, this.name);
            this.table.body = shop;
        },
        async fetchDataWhenChangeSearch(event) {
            this.name = event.target.value
            var shop = await getShopsFromApi(this.status, this.name);
            this.table.body = shop;
        },
        createShop() {
            createShop(this.name, this.address, this.phone, this.status)
        },
        setDataForm(name, address, phone, status, id) {
            this.name = name;
            this.address = address;
            this.phone = phone;
            this.status = status;
            this.id = id;
            console.log(id)
        },
        editShop() {
            editShop(this.name, this.address, this.phone, this.status, this.id)
        }
    },
}
</script>

<style scoped>
img,
span,
div {
    user-select: none;
    -webkit-user-drag: none;
}
</style>
