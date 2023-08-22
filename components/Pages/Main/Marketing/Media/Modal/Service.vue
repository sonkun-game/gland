
<template>
    <div>
        <ModalContainer :modalId="modalId" size="8xl">
            <ModalHeader :modalId="modalId" head="Cấu hình dịch vụ"></ModalHeader>
            <ShowModal modalId="createMarketingService" type="custom"
                customClass="btn btn-info btn-normal bg-blue-700 rounded-lg hover:bg-blue-800 border-none text-white m-4"
                title="Tạo mới">
                <ModalContainer modalId="createMarketingService" size="lg">
                    <ModalHeader head="Cấu hình dịch vụ" modalId="createMarketingService"></ModalHeader>
                    <InputField styleClass="p-4" id="editServiceValue" label="" placeholder="Tên dịch vụ">
                    </InputField>
                    <div class="flex items-center p-6 space-x-2 justify-end border-gray-200 rounded-b dark:border-gray-600">
                        <button :data-modal-hide="modalId"
                            class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                            Hủy bỏ</button>
                        <button :data-modal-hide="modalId" type="button" @click="createServiceMediaConfig(storeId)"
                            class="btn btn-info text-white bg-blue-700 border-none hover:bg-blue-800 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Lưu</button>
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
                                <ShowModal :modalId="'editMarketingService' + item.id"
                                    iconClass="fa-regular fa-pen-to-square">
                                    <ModalContainer :modalId="'editMarketingService' + item.id" size="lg">
                                        <ModalHeader head="Cấu hình dịch vụ" :modalId="'editMarketingService' + item.id">
                                        </ModalHeader>
                                        <InputField styleClass="p-4" :id="'SV-' + item.id" :value="item.name" label="">
                                        </InputField>
                                        <div
                                            class="flex items-center p-6 space-x-2 justify-end border-gray-200 rounded-b dark:border-gray-600">
                                            <button :data-modal-hide="modalId"
                                                class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                                                Hủy bỏ</button>
                                            <button :data-modal-hide="modalId" type="button"
                                                @click="editServiceMediaConfig(storeId)"
                                                class="btn btn-info text-white bg-blue-700 border-none hover:bg-blue-800 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Lưu</button>
                                        </div>
                                    </ModalContainer>
                                </ShowModal>
                                <ShowModal modalId="deleteMarketingService" iconClass="fa-solid fa-trash text-red-500">
                                    <ConfirmModal modalId="deleteMarketingService" title="" type="red"
                                        message="Xóa dịch vụ này" messageClass="text-lg text-rose-600">
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
import { createServiceMediaConfig, getServiceMediaConfig, editServiceMediaConfig, deleteServiceMediaConfig } from "static/marketing/media/config/service/api";
import moment from "moment";

export default {
    name: "MarketingServicePage",
    data() {
        return {
            table: {
                head: [
                    { name: "STT" },
                    { name: "Ngày tạo" },
                    { name: "Người tạo" },
                    { name: "Tên dịch vụ" },
                    { name: "Trạng thái" },
                    { name: "Thao tác" },
                ],
                body: [
                    {
                        id: "",
                        date: "04/07/2023 21:50",
                        creator: "Giang Nguyen",
                        name: "Văn phòng",
                        status: "1"
                    }
                ]
            },
            storeId: 1,
            pageNum: 0
        }
    },
    props: {
        modalId: ""
    },
    methods: {
        createServiceMediaConfig(storeId) {
            createServiceMediaConfig(storeId)
        },
        formatDate(date) {
            return moment(date).format('DD/MM/YYYY HH:mm');
        },
        editServiceMediaConfig(storeId) {
            editServiceMediaConfig(storeId)
        },
        deleteServiceMediaConfig(storeId) {
            deleteServiceMediaConfig(storeId)
        }
    },
    async created() {
        // var listService = await getServiceMediaConfig(this.pageNum, this.storeId);
        // this.table.body = listService;
    }
}
</script>

<style scoped></style>
