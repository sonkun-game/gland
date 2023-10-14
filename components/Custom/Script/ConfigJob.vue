<template>
    <div class="container">
        <div class="flex justify-between">
            <span class="text-xl font-bold">Cấu hình công việc</span>
            <ShowModal :modalId="createConfigJobId" type="custom"
                customClass="bg-blue-500 text-white rounded-lg px-4 py-1 text-lg font-bold" title="Tạo loại công việc">
                <ModalContainer :modalId="createConfigJobId" size="xl" :isDark="theme === 'dark'">
                    <ModalHeader :isDark="theme === 'dark'" head="Tạo loại công việc" :modalId="createConfigJobId">
                    </ModalHeader>
                    <InputField :isDark="theme === 'dark'" styleClass="p-2" :id="jobTypeNameId" label=""
                        placeholder="Tên công việc" />
                    <div class="flex items-center p-6 space-x-2 justify-end border-gray-200 rounded-b dark:border-gray-600">
                        <button @click="Common.toggleModal(createConfigJobId)"
                            class="text-gray-500 bg-tranparent hover:bg-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">
                            Hủy bỏ</button>
                        <button type="button" @click="createTypeJob(id, jobTypeNameId)"
                            class="btn btn-info text-white bg-blue-700 hover:bg-blue-400 border-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">Lưu</button>
                    </div>
                </ModalContainer>
            </ShowModal>
        </div>
        <CrudTable :total-page="this.totalPage" :current-page="pageNum" style-class="w-full text-sm text-left"
            :theme="theme">
            <thead>
                <Row
                    :class="{ 'bg-gray-900 text-white': theme === 'dark', 'bg-gray-100 text-gray-900': theme === 'light' }">
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
                        <ShowModal type="custom-with-icon" modalId="authenJobConfigAction" iconClass="fa-solid fa-wrench"
                            customClass="block w-8 mr-2 text-blue-700 bg-blue-100 hover:bg-blue-700 hover:text-white  font-sm rounded-lg text-xs px-2 py-1.5 text-center">
                        </ShowModal>
                        <ShowModal type="custom-with-icon" modalId="deleteJobConfigAction" iconClass="fa-solid fa-trash"
                            customClass="block w-8 mr-2 text-red-700 bg-red-100 hover:bg-red-700 hover:text-white font-sm rounded-lg text-xs px-2 py-1.5 text-center">
                        </ShowModal>
                    </Cell>
                </Row>
            </tbody>
        </CrudTable>

        <!-- All modal -->
        <JobModal :theme="theme" />
    </div>
</template>

<script>
import { Common } from '../../../plugins/common';
import { createTypeJob, getAllTypeJobs } from "../../../static/job/api";
import JobModal from './Modal/JobModal.vue';
import { v4 as uuidv4 } from 'uuid';

export default {
    name: "ConfigJobComponent",
    components: {
        JobModal
    },
    async fetch() {
        try {
            var response = await getAllTypeJobs(this.pageNum, this.id);
            this.table.body = response.value;
            this.totalPage = response.totalPage;
        }
        catch (error) {
            console.error('Lỗi:', error);
        }
    },
    data() {
        return {
            //id: this.$route.query.id,
            pageNum: this.$route.query.pageNum ? this.$route.query.pageNum : 0,
            totalPage: 0,
            createConfigJobId: "createTypeJobId" + uuidv4(),
            jobTypeNameId: "jobTypeName" + uuidv4(), 
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
        id: {
            type: String | Number,
            default: ''
        },
        theme: {
            type: String,
            default: 'dark'
        }
    },
    methods: {
        getEditId(index, id) {
            return 'conig_' + id + index;
        },
        getDeleteId(index, id) {
            return 'delete_' + id + index;
        },
        async createTypeJob(id, jobTypeNameId) {
            console.log(`id : [${id}]`);
            if (id) {
                var response = await createTypeJob(id, jobTypeNameId);
                this.table.body = response.data.value;
                this.totalPage = response.data.totalPage;
            } else {
                console.error("Id null, empty or undefined !")
            }
        }
    }
}
</script>
<style scoped>
.container {
    height: 60vh;
    overflow-y: auto;
}
</style>
