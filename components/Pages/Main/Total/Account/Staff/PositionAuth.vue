
<template>
    <div>
        <!-- Button tạo chức vụ-->
        <div class="w-100 flex justify-end mb-3.5">
            <button data-modal-target="createAuthAccountModal" data-modal-toggle="createAuthAccountModal"
                class="text-white bg-blue-500 hover:bg-blue-400 font-medium rounded-lg text-sm px-2.5 py-1.5 text-center"
                type="button">
                Tạo chức vụ
            </button>

            <!-- Main modal -->
            <div id="createAuthAccountModal" tabindex="-1" aria-hidden="true"
                class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div class="relative w-full max-w-4xl max-h-full">

                    <!-- Modal content -->
                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <!-- Modal header -->
                        <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                Tạo chức vụ
                            </h3>
                            <!-- X button -->
                            <button type="button"
                                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                data-modal-hide="createAuthAccountModal">
                                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span class="sr-only">Close modal</span>
                            </button>
                        </div>
                        <!-- Modal body -->
                        <div class="p-8 space-y-6">

                            <div class="mb-6 flex items-center">
                                <label for="job" class="text-sm font-medium text-gray-900 pr-4 w-48">
                                    Chức vụ
                                </label>
                                <input type="text" id="job"
                                    class="w-100 h-10 p-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg"
                                    placeholder="" required>
                            </div>

                            <div class="mb-6 flex items-center">
                                <label for="job" class="text-sm font-medium text-gray-900 pr-4 w-48">
                                    Mô tả
                                </label>
                                <textarea class="w-100 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg"
                                    placeholder=""></textarea>
                            </div>

                            <div class="mb-6 flex">
                                <label for="job" class="text-sm font-medium text-gray-900 pr-4 w-48">
                                    Chi tiết về quyền
                                </label>
                                <div class="border border-gray-300 w-100 p-4">

                                    <div class="flex items-center mb-4">
                                        <input type="checkbox" value=""
                                            class="w-4 h-4 bg-gray-100 border-gray-300 shadow-none">
                                        <label class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tất cả phân
                                            quyền</label>
                                    </div>

                                    <!-- item -->
                                    <div class="flex items-center mb-4">
                                        <input type="checkbox" value=""
                                            class="w-4 h-4 bg-gray-100 border-gray-300 shadow-none">
                                        <label class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phân quyền
                                            quản
                                            trị tài khoản</label>
                                    </div>
                                    <!-- Sub item -->
                                    <div class="border-l-2 border-cyan-700 pl-4 ml-8 mb-4">
                                        <input type="checkbox" value=""
                                            class="w-4 h-4 bg-gray-100 border-gray-300 shadow-none">
                                        <label class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phân quyền
                                            quản
                                            trị tài khoản</label>
                                    </div>
                                    <div class="flex items-center mb-4">
                                        <input type="checkbox" value=""
                                            class="w-4 h-4 bg-gray-100 border-gray-300 shadow-none">
                                        <label class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phân quyền
                                            khởi
                                            tạo tài khoản</label>
                                    </div>
                                    <div class="flex items-center mb-4">
                                        <input type="checkbox" value=""
                                            class="w-4 h-4 bg-gray-100 border-gray-300 shadow-none">
                                        <label class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phân quyền
                                            quản
                                            trị tài khoản</label>
                                    </div>
                                    <!-- Item -->
                                    <div class="flex items-center mb-4">
                                        <input type="checkbox" value=""
                                            class="w-4 h-4 bg-gray-100 border-gray-300 shadow-none">
                                        <label class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phân quyền
                                            thu
                                            chi hoạt động</label>
                                    </div>
                                    <!-- Sub item -->
                                    <div class="border-l-2 border-cyan-700 pl-4 ml-8 mb-4">
                                        <div>
                                            <input type="checkbox" value=""
                                                class="w-4 h-4 bg-gray-100 border-gray-300 shadow-none">
                                            <label class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phân
                                                quyền đề xuất
                                                chi</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" value=""
                                                class="w-4 h-4 bg-gray-100 border-gray-300 shadow-none">
                                            <label class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Cấu
                                                hình phiếu thu chi
                                                hoạt
                                                động</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" value=""
                                                class="w-4 h-4 bg-gray-100 border-gray-300 shadow-none">
                                            <label class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Cấu
                                                hình phê duyệt thu
                                                chi
                                                hoạt động</label>
                                        </div>
                                    </div>
                                    <div class="flex items-center mb-4">
                                        <input type="checkbox" value=""
                                            class="w-4 h-4 bg-gray-100 border-gray-300 shadow-none">
                                        <label class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phân quyền
                                            nguồn vốn</label>
                                    </div>
                                    <div class="flex items-center">
                                        <input id="" type="checkbox" value=""
                                            class="w-4 h-4 bg-gray-100 border-gray-300 shadow-none">
                                        <label for="" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phân
                                            quyền thu chi hoạt động</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Modal footer -->
                        <div
                            class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                            <button data-modal-hide="createAuthAccountModal" type="button"
                                class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Hủy
                                bỏ</button>
                            <button data-modal-hide="createAuthAccountModal" type="button"
                                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Lưu</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>


        <!-- Text -->
        <p class="py-3.5">
            Tất cả chức vụ trong công ty
        </p>

        <!-- Table -->
        <!-- Bảng Staff -->
        <CrudTable style-class="w-full text-sm text-left text-gray-500">
            <Thead>
                <Row styleClass="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <Cell v-for="(item, index) in positionAuth.table.head" :key="index"
                        styleClass="px-6 py-3 text-left" cellType="title">{{ item.name }}
                    </Cell>
                </Row>
            </Thead>
            <Tbody>
                <Row styleClass="bg-white border-b" v-for="(item, index) in positionAuth.table.body" :key="index">
                    <Cell styleClass="px-6 py-4">{{ index }}</Cell>
                    <Cell styleClass="px-6 py-4">{{ item.position }}</Cell>
                    <Cell styleClass="px-6 py-4">{{ item.department }}</Cell>
                    <Cell styleClass="px-6 py-4">{{ item.description }}</Cell>
                    <Cell styleClass="px-6 py-4">{{ item.authen }}</Cell>
                </Row>
            </Tbody>
        </CrudTable>
    </div>
</template>

<script>
export default {
    name: "PositionAuthPage",
    props: {
        positionAuth: {}
    }
}
</script>

<style scoped></style>
