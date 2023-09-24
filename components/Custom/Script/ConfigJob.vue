<template>
    <div>
        <div class="flex justify-between pb-4">
            <span class="text-xl font-bold">Cấu hình công việc</span>
            <ShowModal modalId="createTypeJobId" type="custom"
                customClass="bg-blue-500 rounded-lg px-4 py-1 text-lg font-bold" title="Tạo loại công việc">
                <ModalContainer modalId="createTypeJobId" size="xl" :isDark="theme === 'dark'">
                    <ModalHeader :isDark="theme === 'dark'" head="Tạo loại công việc" modalId="createTypeJobId">
                    </ModalHeader>
                    <InputField :isDark="theme === 'dark'" styleClass="p-2" id="jobTypeName" label=""
                        placeholder="Tên công việc" />
                    <div class="flex items-center p-6 space-x-2 justify-end border-gray-200 rounded-b dark:border-gray-600">
                        <button @click="Common.toggleModal('createTypeJobId')"
                            class="text-gray-500 bg-tranparent hover:bg-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">
                            Hủy bỏ</button>
                        <button type="button" 
                            class="btn btn-info text-white bg-blue-700 hover:bg-blue-400 border-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">Lưu</button>
                    </div>
                </ModalContainer>
            </ShowModal>
        </div>
        <CrudTabel style-class="w-full text-sm text-left text-gray-500">
            <thead>
                <Row class="bg-gray-900">
                    <Cell v-for="(item, index) in table.head" :key="index" styleClass="px-6 py-3"
                        cellType="title">
                        {{ item.name }}
                    </Cell>
                </Row>
            </thead>
            <tbody>
                <Row v-for="(item, index) in table.body" :key="index">
                    <Cell styleClass="px-6 py-3" style="width: 70vw;">{{ item.name }}</Cell>
                    <Cell styleClass="px-6 py-3 flex">
                        <ShowModal type="custom-with-icon" :modalId="'conig_' + item.id + index"
                            iconClass="fa-solid fa-wrench"
                            customClass="block w-8 mr-2 text-blue-700 bg-blue-100 hover:bg-blue-700 hover:text-white  font-sm rounded-lg text-xs px-2 py-1.5 text-center">
                            <ModalContainer :modalId="'conig_' + item.id + index" size="2xl" :hasBackDrop="true"
                                :isDark="theme === 'dark'">
                                <ModalHeader :isDark="theme === 'dark'" :modalId="item.id + index"
                                    head="Cấu hình công việc">
                                </ModalHeader>
                                <div>
                                </div>
                            </ModalContainer>
                        </ShowModal>
                        <ShowModal type="custom-with-icon" :modalId="item.id + index" iconClass="fa-solid fa-trash"
                            customClass="block w-8 mr-2 text-red-700 bg-red-100 hover:bg-red-700 hover:text-white font-sm rounded-lg text-xs px-2 py-1.5 text-center">
                            <ModalContainer :modalId="item.id + index" size="2xl" :hasBackDrop="true"
                                :isDark="theme === 'dark'">
                                <ModalHeader :isDark="theme === 'dark'" :modalId="item.id + index"
                                    head="Cấu hình công việc">
                                </ModalHeader>
                                <div>
                                </div>
                            </ModalContainer>
                        </ShowModal>
                    </Cell>
                </Row>
            </tbody>
        </CrudTabel>
    </div>
</template>
  
<script>
import { Common } from '../../../plugins/common';

export default {
    name: "ConfigJobComponent",
    data() {
        return {
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
        }
    },
    props: {
        theme: {
            type: String,
            default: 'light'
        }
    }
}
</script>
  
  
  
<style></style>
  