<template>
    <div>
        <div class="flex justify-between">
            <span class="text-xl font-bold">Cấu hình công việc</span>
            <ShowModal :modalId="createConfigJobId" type="custom"
                customClass="bg-blue-500 rounded-lg px-4 py-1 text-lg font-bold" title="Tạo loại công việc">
                <ModalContainer :modalId="createConfigJobId" size="xl" :isDark="theme === 'dark'">
                    <ModalHeader :isDark="theme === 'dark'" head="Tạo loại công việc" :modalId="createConfigJobId">
                    </ModalHeader>
                    <InputField :isDark="theme === 'dark'" styleClass="p-2" id="jobTypeName" label=""
                        placeholder="Tên công việc" />
                    <div class="flex items-center p-6 space-x-2 justify-end border-gray-200 rounded-b dark:border-gray-600">
                        <button @click="Common.toggleModal(createConfigJobId)"
                            class="text-gray-500 bg-tranparent hover:bg-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">
                            Hủy bỏ</button>
                        <button type="button"
                            class="btn btn-info text-white bg-blue-700 hover:bg-blue-400 border-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">Lưu</button>
                    </div>
                </ModalContainer>
            </ShowModal>
        </div>
        <CrudTable style-class="w-full text-sm text-left text-gray-500" :theme="theme">
            <thead>
                <Row class="bg-gray-900">
                    <Cell styleClass="px-4">
                        <InputField typeInput="checkbox" label="" id="selectAll" />
                    </Cell>
                    <Cell v-for="(item, index) in table.head" :key="index" styleClass="px-6 py-3" cellType="title">
                        {{ item.name }}
                    </Cell>
                </Row>
            </thead>
            <tbody>
                <Row v-for="(item, index) in table.body" :key="index">
                    <Cell styleClass="px-4">
                        <InputField typeInput="checkbox" label="" :id="`selectItem-${index}`" />
                    </Cell>
                    <Cell styleClass="px-6 py-3" style="width: 70vw;">{{ item.name }}</Cell>
                    <Cell styleClass="px-6 py-3 flex">
                        <ShowModal type="custom-with-icon" :modalId="getEditId(index, item.id)"
                            iconClass="fa-solid fa-wrench"
                            customClass="block w-8 mr-2 text-blue-700 bg-blue-100 hover:bg-blue-700 hover:text-white  font-sm rounded-lg text-xs px-2 py-1.5 text-center">
                            <ModalContainer :modalId="getEditId(index, item.id)" size="2xl" :hasBackDrop="true"
                                :isDark="theme === 'dark'">
                                <ModalHeader :isDark="theme === 'dark'" :modalId="getEditId(index, item.id)"
                                    head="Cấu hình công việc">
                                </ModalHeader>
                                <div>
                                </div>
                            </ModalContainer>
                        </ShowModal>
                        <ShowModal type="custom-with-icon" :modalId="getDeleteId(index, item.id)"
                            iconClass="fa-solid fa-trash"
                            customClass="block w-8 mr-2 text-red-700 bg-red-100 hover:bg-red-700 hover:text-white font-sm rounded-lg text-xs px-2 py-1.5 text-center">
                            <ModalContainer :modalId="getDeleteId(index, item.id)" size="2xl" :hasBackDrop="true"
                                :isDark="theme === 'dark'">
                                <ModalHeader :isDark="theme === 'dark'" :modalId="getDeleteId(index, item.id)"
                                    head="Xóa công việc">
                                </ModalHeader>
                                <div>
                                </div>
                            </ModalContainer>
                        </ShowModal>
                    </Cell>
                </Row>
            </tbody>
        </CrudTable>
    </div>
</template>
  
<script>
import { Common } from '../../../plugins/common';

export default {
    name: "ConfigJobComponent",
    data() {
        return {
            createConfigJobId: "createTypeJobId",
            table: {
                head: [
                    { name: "Tên công việc" },
                    { name: "Thao tác" },
                ],
                body: [
                    {
                        id: 'media',
                        name: 'Quay video'
                    }
                ],
            }
        }
    },
    computed: {
        Common() {
            return Common;
        },
    },
    props: {
        theme: {
            type: String,
            default: 'light'
        }
    },
    methods: {
        getEditId(index, id) {
            return 'conig_' + id + index;
        },
        getDeleteId(index, id) {
            return 'delete_' + id + index;
        }
    }
}
</script>
  
  
  
<style></style>
  