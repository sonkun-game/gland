<template>
    <div class="p-8 text-white">
        <nav class="flex justify-between">
            <h1 class="font-bold text-4xl" :class="{ 'text-white': theme === 'dark', 'text-gray-900': theme === 'light' }">
                Kịch bản
            </h1>
            <ShowModal modalId="createScriptBtnId" type="custom"
                customClass="bg-blue-500 rounded-lg px-4 py-1 text-lg font-bold" title="Tạo Kịch Bản">
                <ModalContainer modalId="createScriptBtnId" size="xl" :isDark="theme === 'dark'">
                    <ModalHeader :isDark="theme === 'dark'" head="Tạo kịch bản" modalId="createScriptBtnId">
                    </ModalHeader>
                    <InputField :isDark="theme === 'dark'" styleClass="p-2" id="scriptName" label="Tên kịch bản"
                        placeholder="Tên kịch bản" />
                    <div class="flex items-center p-6 space-x-2 justify-end border-gray-200 rounded-b dark:border-gray-600">
                        <button @click="Common.toggleModal('createScriptBtnId')"
                            class="text-gray-500 bg-tranparent hover:bg-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">
                            Hủy bỏ</button>
                        <button type="button" @click="createScript()"
                            class="btn btn-info text-white bg-blue-700 hover:bg-blue-400 border-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">Lưu</button>
                    </div>
                </ModalContainer>
            </ShowModal>
        </nav>

        <CrudTable :totalPage="totalPage" :currentPage="currentPage" style-class="w-full text-sm text-left text-gray-500">
            <thead>
                <Row :theme="theme">
                    <Cell v-for="(item, index) in table.head" :key="index" styleClass="px-6 py-3"
                        :class="{ 'hidden': !item.show }" cellType="title">
                        {{ item.name }}
                    </Cell>
                </Row>
            </thead>
            <tbody>
                <Row :theme="theme" v-for="(item, index) in table.body" :key="index">
                    <Cell styleClass="px-6 py-4">{{ index + 1 }}</Cell>
                    <Cell styleClass="px-6 py-4">{{ item.name }}</Cell>
                    <Cell styleClass="px-6 py-4">{{ item.createdBy }}</Cell>
                    <Cell styleClass="px-6 py-4">{{ item.createdAt }}</Cell>
                    <Cell styleClass="px-2 py-3 flex">
                        <ShowModal type="custom-with-icon" :modalId="'editScriptModal' + index" iconClass="fa-solid fa-pen"
                            customClass="block w-8 mr-2 text-blue-700 bg-blue-100 hover:bg-blue-700 hover:text-white  font-sm rounded-lg text-xs px-2 py-1.5 text-center">
                            <ModalContainer :modalId="'editScriptModal' + index" size="2xl" :hasBackDrop="true"
                                :isDark="theme === 'dark'">
                                <ModalHeader :isDark="theme === 'dark'" :modalId="'editScriptModal' + index"
                                    head="Chỉnh sửa kịch bản">
                                </ModalHeader>
                                <div>
                                    <InputField :isDark="theme === 'dark'" styleClass="p-4" :id="'editScript' + index"
                                        label="Tên kịch bản" :value="item.name" />
                                    <div class="p-4">
                                        <button type="button"
                                            class="btn btn-info text-white bg-blue-600 hover:bg-blue-400 border-none font-medium rounded-lg text-normal px-5 py-2.5 text-center">Lưu
                                            thay đổi</button>
                                        <button
                                            class="text-gray-500 bg-tranparent hover:bg-gray-300 rounded-lg border border-gray-200 text-normal font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">Quay
                                            lại</button>
                                    </div>
                                </div>
                            </ModalContainer>
                        </ShowModal>
                        <div>
                            <ShowModal type="custom-with-icon" :modalId="'authenScriptModal' + index"
                                iconClass="fa-solid fa-user"
                                customClass="block w-8 mr-2 text-green-700 bg-green-100 hover:bg-green-700 hover:text-white font-sm rounded-lg text-xs px-2 py-1.5 text-center">
                                <ModalContainer :modalId="'authenScriptModal' + index" size="4xl" :hasBackDrop="true"
                                    :isDark="theme === 'dark'">
                                    <div>
                                        <TabListHeader type='modal' :data="getAuthenScriptTabList(index)" @active-tablist="showScriptTab"></TabListHeader>
                                        <TabContainer :theme="theme" :id="getAuthenScriptTabList(index).dataTabsToggle">
                                            <TabItem :id="getAuthenScriptTabList(index).list[0].id" labelledby="job" :isHidden="configActive !== 0">
                                                <ConfigJob :theme="theme" :id="item.id" />
                                            </TabItem>
                                            <TabItem :id="getAuthenScriptTabList(index).list[1].id" labelledby="status" :isHidden="configActive !== 1">
                                                <ConfigStatus :theme="theme" :dataIndex="index" :id="item.id"/>
                                            </TabItem>
                                            <TabItem :id="getAuthenScriptTabList(index).list[2].id" labelledby="info" :isHidden="configActive !== 2">
                                                <ConfigInfo :theme="theme" :id="item.id" />
                                            </TabItem>
                                        </TabContainer>
                                    </div>
                                </ModalContainer>
                            </ShowModal>
                        </div>
                    </Cell>
                </Row>
            </tbody>
        </CrudTable>
    </div>
</template>

<script>
import { createScript, getAllScripts } from "../../../../../static/script/script";
import { Common } from "../../../../../plugins/common";
import ConfigJob from '../../../../../components/Custom/Script/ConfigJob.vue';
import ConfigStatus from '../../../../../components/Custom/Script/ConfigStatus.vue';
import ConfigInfo from '../../../../../components/Custom/Script/ConfigInfo.vue';

export default {
    name: "ListDepartmentScriptPageV2",
    layout: "main_v2",
    components: {
        ConfigJob, ConfigStatus, ConfigInfo
    },
    async fetch() {
        try {
            var response = await getAllScripts(this.pageNum, this.id);
            this.table.body = response.value;
            this.totalPage = response.totalPage;
        }
        catch (error) {
            console.error('Lỗi:', error);
        }
    },
    computed: {
        theme: {
            get() {
                return this.$store.state.theme;
            },
            set(newValue) {
                this.theme = newValue;
            },
        },
        Common() {
            return Common;
        }
    },
    data() {
        return {
            id: this.$route.query.id,
            storeId: 1,
            pageNum: this.$route.query.pageNum ? this.$route.query.pageNum : 0,
            totalPage: 0,
            currentPage: 1,
            configActive: 0,
            table: {
                head: [
                    {
                        name: "STT",
                        show: true,
                    },
                    {
                        name: "Tên phòng ban",
                        show: true,
                    },
                    {
                        name: "Người tạo",
                        show: true,
                    },
                    {
                        name: "Ngày tạo",
                        show: true,
                    },
                    {
                        name: "Thao tác",
                        show: true,
                    },
                ],
                body: [],
            },
        };
    },
    methods: {
        async createScript() {
            var response = await createScript(this.id);
            this.table.body = response.data.value;
            this.totalPage = response.data.totalPage;
            this.$store.dispatch('updateIncreMenuKey');
            Common.toggleModal('createScriptBtnId');
        },
        getAuthenScriptTabList(index) {
            return {
                id: "authenScriptTab" + index,
                dataTabsToggle: "authenScript" + index,
                list: [
                    {
                        id: "jobConfig" + index,
                        name: "Cấu hình công việc",
                    },
                    {
                        id: "statusConfig" + index,
                        name: "Cấu hình trạng thái",
                    },
                    {
                        id: "infoConfig" + index,
                        name: "Cấu hình thông tin",
                    },
                ],
            }
        },
        showScriptTab(active) {
            this.configActive = active;
        }
    },
}
</script>

<style scoped>
.tab-list-height {
    height: 80vh;
    overflow-y: auto;
}
</style>
