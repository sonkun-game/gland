<template>
    <div class="p-8 text-white">
        <nav class="flex justify-between">
            <h1 class="font-bold text-4xl">Nhân sự</h1>
            <button class="bg-blue-500 rounded-lg px-4 py-1 text-lg font-bold">Tạo nhân sự</button>
        </nav>

        <CrudTable style-class="w-full text-sm text-left text-gray-500">
            <thead>
                <Row styleClass="text-sm text-gray-900 text-white" style="background-color: #1d2432;">
                    <Cell v-for="(item, index) in table.head" :key="index" styleClass="px-6 py-3"
                        :class="{ 'hidden': !item.show }" cellType="title">
                        {{ item.name }}
                    </Cell>
                </Row>
            </thead>
            <tbody>
                <Row styleClass="bg-gray-900 border-b text-white" v-for="(item, index) in table.body" :key="index">
                    <Cell styleClass="px-6 py-4">{{ index + 1 }}</Cell>
                    <Cell styleClass="px-6 py-4">{{ item.name }}</Cell>
                    <Cell styleClass="px-6 py-4">{{ item.mail }}</Cell>
                    <Cell styleClass="px-6 py-4">{{ item.script }}</Cell>
                    <Cell styleClass="px-6 py-4">{{ item.creator }}</Cell>
                    <Cell styleClass="px-6 py-4">{{ item.date }}</Cell>
                    <Cell styleClass="px-2 py-3 flex">
                        <div>
                            <button data-popover-target="popover-edit" data-modal-target="editModal"
                                data-modal-toggle="editModal"
                                class="block w-8 mr-2 text-blue-700 bg-blue-100 hover:bg-blue-700 hover:text-white  font-sm rounded-lg text-xs px-2 py-1.5 text-center"
                                type="button">
                                <i class="fa-solid fa-pen"></i>
                            </button>
                            <div data-popover id="popover-edit" role="tooltip"
                                class="absolute z-10 invisible inline-block text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400  dark:bg-gray-800">
                                <div class="px-3 py-2">
                                    <p>Chỉnh sửa</p>
                                </div>
                                <div data-popper-arrow></div>
                            </div>
                            <!-- Main modal -->
                            <div id="editModal" tabindex="-1" aria-hidden="true"
                                class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                            </div>
                        </div>
                        <div>
                            <button data-popover-target="popover-decent" data-modal-target="decentModal"
                                data-modal-toggle="decentModal"
                                class="block w-8 mr-2 text-green-700 bg-green-100 hover:bg-green-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-300 font-sm rounded-lg text-xs px-2 py-1.5 text-center"
                                type="button">
                                <i class="fa-solid fa-user"></i>
                            </button>
                            <div data-popover id="popover-decent" role="tooltip"
                                class="absolute z-10 invisible inline-block text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400  dark:bg-gray-800">
                                <div class="px-3 py-2">
                                    <p>Phân quyền</p>
                                </div>
                                <div data-popper-arrow></div>
                            </div>
                            <!-- Main modal -->
                            <div id="decentModal" tabindex="-1" aria-hidden="true"
                                class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                            </div>
                        </div>
                    </Cell>
                </Row>
            </tbody>
        </CrudTable>

    </div>
</template>

<script>
export default {
    name: "StaffPageV2",
    layout: "main_v2",
    data() {
        return {
            table: {
                head: [
                    {
                        name: "STT",
                        show: true,
                    },
                    {
                        name: "Tên nhân sự",
                        show: true,
                    },
                    {
                        name: "Email",
                        show: true,
                    },
                    {
                        name: "Kịch bản",
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
                body: [
                    {
                        name: "gland",
                        mail: "user@gmail.com",
                        script: "Sale",
                        creator: "sonht",
                        date: "09-09-2023"
                    },
                ],
            },
        }
    }
}
</script>

<style scoped></style>