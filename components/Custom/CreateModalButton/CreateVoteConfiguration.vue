<!-- Cấu hình phiếu-->
<template>
    <div>
        <!-- Button tạo chức vụ-->
        <div class="w-100 flex justify-end mb-3.5">

            <PrimaryButton :title="buttonTitle" :dataModalToggle="modalId" :dataModalTarget="modalId">
            </PrimaryButton>

            <!-- Create Modal -->
            <div :id="modalId" tabindex="-1" aria-hidden="true"
                class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div class="relative w-full max-w-xl max-h-full">
                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <!-- Modal header -->
                        <div class="flex items-start justify-between p-4 rounded">
                            <div class="text-xl bold">
                                {{ modal.head.title }}
                            </div>
                            <XButton :modalId="modalId"></XButton>
                        </div>
                        <!-- Modal body -->
                        <div class="px-4 pb-2">
                            <div class="relative z-0 w-full mb-4">
                                <label class="text-normal">{{ modal.body.row1.name }}</label>
                                <input type="text" name="floating_first_name" :id="modal.body.row1.id"
                                    class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-1.5 "
                                    placeholder=" " required />
                            </div>
                            <div class="relative z-0 w-full mb-4">
                                <label class="text-normal">{{ modal.body.row2.name }}</label>
                                <select :id="modal.body.row2.id"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-1.5">
                                    <option class="text-ellipsis" v-for="(item, index) in modal.body.row2.select"
                                        :value="item.value" :key="index">
                                        {{ item.name }}
                                    </option>
                                </select>
                            </div>

                        </div>
                        <!-- Modal footer -->
                        <div
                            class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                            <button :data-modal-hide="modalId" type="button"
                                class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Hủy
                                bỏ</button>
                            <button :data-modal-hide="modalId" type="button" @click="createBillConfig()"
                                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Lưu</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import {createBillConfig} from "static/billconfig/api";

export default {
    name: "createVoteConfiguraionModal",
    components: {},
    data() {
        return {
            bill: {
                name: "test",
                type: "test"
            }
        }
    },
    props: {
        buttonTitle: "",
        modalId: "",
        modal: {
            head: {
                title: ""
            },
            body: {
                row1: {
                    id: "",
                    name: "",
                },
                row2: {
                    id: "",
                    name: "",
                    select: []
                },
            }
        }
    },
    methods: {
        createBillConfig() {
            var billName = document.getElementById(this.modal.body.row1.id).value;
            var billType = document.getElementById(this.modal.body.row2.id).value;
            createBillConfig(billName, billType)
        },
    }
}

</script>
