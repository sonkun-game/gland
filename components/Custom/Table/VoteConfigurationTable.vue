<template>
    <div>
        <!-- Table -->
        <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3 text-left" v-for="(item, index) in table.head" :key="index">
                            {{ item.name }}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b" v-for="(item, index) in table.body" :key="index">
                        <td class="px-6 py-4 text-left">
                            {{ index + 1 }}
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
                        <td class="px-6 py-4 text-left">
                            <div class="text-lime-500" v-if="item[4] === '1'">
                                <i class="fa-solid fa-circle"></i>
                                Hoat động
                            </div>
                            <div class="text-red-500" v-else>
                                <i class="fa-solid fa-circle"></i>
                                Dừng Hoat động
                            </div>
                        </td>
                        <td class="w-24 py-4 flex text-center">
                            <button :data-modal-target="editID" :data-modal-toggle="editID" @click="setData(item, item[5])"
                                class="w-6 h-6 m-2 bg-white border rounded">
                                <i class="fa-regular fa-pen-to-square "></i>
                            </button>
                            <button :data-modal-target="editID" :data-modal-toggle="editID"
                                class="w-6 h-6 m-2 bg-white border-2 border-red-500 rounded">
                                <i class="fa-solid fa-trash text-red-500"></i>
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

        <!-- Edit Modal -->
        <div :id="editID" tabindex="-1" aria-hidden="true"
            class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div class="relative w-full max-w-xl max-h-full">
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <!-- Modal header -->
                    <div class="flex items-start justify-between p-4 rounded">
                        <div class="text-2xl bold">
                            Sửa thông tin cấu hình phiếu
                        </div>
                        <XButton :id="editID"></XButton>
                    </div>
                    <!-- Modal body -->
                    <div class="px-4 pb-2">
                        <div class="relative z-0 w-full mb-2" v-for="(item, index) in VoteConfigEditForm" :key="index">
                            <template v-if="item.type === 'text'">
                                <label class="text-normal">{{ item.name }}</label>
                                <input type="text" name="floating_first_name" :id="item.id"
                                    class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-1.5 "
                                    placeholder=" " />
                            </template>
                            <template v-else-if="item.type === 'select'">
                                <label class="text-normal">{{ item.name }}</label>
                                <select :id="item.id"
                                    class="h-8 bg-white w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg py-1.5 px-2.5">
                                    <option class="text-ellipsis" v-for="(optionItem, optionIndex) in item.selectOption"
                                        :key="optionIndex">
                                        {{ optionItem.name }}
                                    </option>
                                </select>
                            </template>
                        </div>
                    </div>
                    <!-- Modal footer -->
                    <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button :data-modal-hide="editID" type="button"
                            class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Hủy
                            bỏ</button>
                        <button :data-modal-hide="editID" type="button" @click="editForm()"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Lưu</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- END -->
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "VoteConfigurationTable",
    data() {
        return {
            VoteConfigEditForm: [
                {
                    name: "Tên phiếu",
                    id: "voteID",
                    value: "",
                    type: "text",
                },
                {
                    name: "Loại phiếu",
                    id: "voteType",
                    value: "",
                    type: "select",
                    selectOption: [
                        {
                            name: "Phiếu thu",
                            value: "1",
                        },
                        {
                            name: "Phiếu chi",
                            value: "0",
                        }
                    ]
                },
                {
                    name: "Trạng thái",
                    id: "voteStatus",
                    value: "",
                    type: "select",
                    selectOption: [
                        {
                            name: "Hoạt động",
                            value: "1",
                        },
                        {
                            name: "Dừng hoạt động",
                            value: "0",
                        }
                    ]
                },
            ],
            idReq: 0
        }
    },
    methods: {
        editForm() {
            var idReq = this.idReq;
            var billConfigName = document.getElementById(this.VoteConfigEditForm[0].id).value;
            var billConfigType = document.getElementById(this.VoteConfigEditForm[1].id).value;
            var status = document.getElementById(this.VoteConfigEditForm[2].id).value;

            console.log(idReq, billConfigType, status);

            if (billConfigType === 'Phiếu chi') billConfigType = 0
            else billConfigType = 1
            if (status === 'Hoạt động') status = 1;
            else status = 0
            axios({
                method: 'post',
                url: 'http://103.142.26.40:8080/Total/api-billconfig/edit/' + idReq,
                responseType: 'json',
                data: {
                    name: billConfigName,
                    type: billConfigType,
                    status: status
                },
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem("jwt")
                }
            }).then(function (response) {
                console.log(response);
                alert(response.data.message);
                location.reload()
            });
        },
        setData(editData, idItem) {
            this.idReq = idItem;
            var i = 2;
            this.VoteConfigEditForm.forEach(item => {
                if (editData[i] && item.id) {
                    document.getElementById(item.id).value = editData[i];
                    i++;
                }
            });
        }
    },
    props: {
        editID: "",

        table: {
            head: [],
            body: []
        },
    }
}
</script>
