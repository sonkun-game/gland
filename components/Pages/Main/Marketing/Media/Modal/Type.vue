
<template>
    <div>
        <ModalContainer :modalId="modalId" size="8xl">
            <ModalHeader :modalId="modalId" head="Cấu hình hình thức"></ModalHeader>
            <ShowModal modalId="createMarketingType" type="custom"
                customClass="btn btn-info btn-normal rounded-lg bg-blue-700 hover:bg-blue-800 border-none text-white m-4"
                title="Tạo mới">
                <ModalContainer modalId="createMarketingType" size="lg">
                    <ModalHeader head="Cấu hình hình thức" modalId="createMarketingType"></ModalHeader>
                    <InputField styleClass="p-4" id="editFormMediaValue" label="" placeholder="Tên hình thức">
                    </InputField>
                    <div class="flex items-center p-6 space-x-2 justify-end border-gray-200 rounded-b dark:border-gray-600">
                        <button :data-modal-hide="modalId"
                            class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                            Hủy bỏ</button>
                        <button :data-modal-hide="modalId" type="button" @click="createFormMediaConfig(storeId)"
                            class="btn btn-info text-white bg-blue-700 hover:bg-blue-800 border-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Lưu</button>
                    </div>
                </ModalContainer>
            </ShowModal>
            <CrudTable style-class="w-full text-sm text-center mx-2 text-gray-500">
                <Thead>
                    <Row styleClass="text-sm text-gray-900 bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
                        <Cell v-for="(item, index) in table.head" :key="index" styleClass="px-6 py-3 text-center"
                            cellType="title">
                            {{ item.name }}
                        </Cell>
                    </Row>
                </Thead>
                <Tbody>
                    <Row styleClass="bg-white border-b" v-for="(item, index) in table.body" :key="index">
                        <Cell styleClass="px-6 py-4">{{ index + 1 }}</Cell>
                        <Cell styleClass="px-6 py-4">{{ formatDate(item.createdAt) }}</Cell>
                        <Cell styleClass="px-6 py-4">{{ item.createdBy }}</Cell>
                        <Cell styleClass="px-6 py-4">{{ item.name }}</Cell>
                        <Cell styleClass="px-6 py-4" cellType="status" :status="item.status ? '1' : '0'"></Cell>
                        <Cell styleClass="px-6 py-4 ">
                            <div class="m-auto flex justify-center">
                                <ShowModal :modalId="'editMarketingType' + item.id" iconClass="fa-regular fa-pen-to-square">
                                    <ModalContainer :modalId="'editMarketingType' + item.id" size="lg">
                                        <ModalHeader head="Cấu hình hình thức" :modalId="'editMarketingType' + item.id">
                                        </ModalHeader>
                                        <InputField styleClass="p-4" :id="'MF-' + item.id" :value="item.name" label="">
                                        </InputField>
                                        <div
                                            class="flex items-center p-6 space-x-2 justify-end border-gray-200 rounded-b dark:border-gray-600">
                                            <button :data-modal-hide="modalId"
                                                class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                                                Hủy bỏ</button>
                                            <button :data-modal-hide="modalId" type="button"
                                                @click="editFormMediaConfig(storeId)"
                                                class="btn btn-info text-white bg-blue-700 hover:bg-blue-800 border-none  focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Lưu</button>
                                        </div>
                                    </ModalContainer>
                                </ShowModal>
                                <ShowModal modalId="deleteMarketingType" iconClass="fa-solid fa-trash text-red-500">
                                    <ConfirmModal modalId="deleteMarketingType" title="" type="red"
                                        message="Xóa hình thức này" messageClass="text-lg text-rose-600">
                                    </ConfirmModal>
                                </ShowModal>
                            </div>
                        </Cell>
                    </Row>
                </tbody>
            </CrudTable>
        </ModalContainer>
    </div>
</template>

<script>
import moment from "moment";
import { createFormMediaConfig, getFormMediaConfig, editFormMediaConfig } from "static/marketing/media/config/form/api";

export default {
    name: "MarketingTypePage",
    data() {
        return {
            table: {
                head: [
                    { name: "STT" },
                    { name: "Ngày tạo" },
                    { name: "Người tạo" },
                    { name: "Đối tượng" },
                    { name: "Trạng thái" },
                    { name: "Thao tác" },
                ],
                body: [
                    {
                        id: "",
                        date: "04/07/2023 21:50",
                        creator: "Giang Nguyen",
                        name: "Khách hàng",
                        status: "1"
                    }
                ]
            },
            pageNum: 0,
            storeId: 1
        }
    },
    props: {
        modalId: ""
    },
    methods: {
        createFormMediaConfig(storeId) {
            createFormMediaConfig(storeId)
        },
        formatDate(date) {
            return moment(date).format('DD/MM/YYYY HH:mm');
        },
        editFormMediaConfig(storeId) {
            editFormMediaConfig(storeId)
        }
    },
    async created() {
        // var listForm = await getFormMediaConfig(this.pageNum, this.storeId);
        // this.table.body = listForm;
    }
}
</script>

<style scoped></style>
