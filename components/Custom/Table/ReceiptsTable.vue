<template>
    <div>
        <!-- Table -->
        <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3 text-left" v-for="(item, index) in table.head" :key="index">
                            {{ item.name }}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b" v-for="(item, index) in table.body" :key="index">
                        <td class="px-6 py-4 text-center">
                            {{ index +1}}
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
                            {{ item[4] }}
                        </td>
                        <td class="px-6 py-4 text-left">
                            {{ item[5] }}
                        </td>
                        <td class="px-6 py-4 text-left">
                            {{ item[6] }}
                        </td>
                        <td class="px-6 py-2 text-left ">
                          <div v-if="item[7] === 'success'" class="bg-lime-500 rounded-lg text-center">
                            Thành công
                          </div>
                          <div v-else-if="item[7] === 'cancel'" class="bg-red-500 rounded-lg text-center">
                            Đã hủy
                          </div>
                          <div v-else-if="item[7] === 'pending'" class="bg-yellow-400 rounded-lg text-center">
                            Đã hủy
                          </div>
                          <div v-else class="bg-purple-400 rounded-lg text-center">
                            Khởi tạo
                          </div>
                        </td>
                        <td class="px-6 py-4 text-left">
                            {{ item[8] }}
                        </td>
                        <td class="w-24 px-6 py-4 flex text-center">
                            <button :data-modal-target="editID" :data-modal-toggle="editID"
                                    @click="setData(item,item[9])"
                                class="w-6 h-6 m-2 bg-white border rounded">
                                <i class="fa-regular fa-pen-to-square "></i>
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
            class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full justify-center">
            <div class="relative w-full max-w-xl max-h-full">
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <!-- Modal header -->
                    <div class="flex items-start justify-between p-4 rounded">
                        <div class="text-2xl bold">
                            Sửa thông tin
                        </div>
                        <!-- X button -->
                        <XButton :id="editID"></XButton>
                    </div>
                    <!-- Modal body -->
                    <div class="px-4 pb-2">
                        <div class="relative z-0 w-full mb-2" v-for="(item, index) in receiptsEditForm" :key="index">
                            <template v-if="item.type === 'text'">
                                <label class="text-normal">{{ item.name }}</label>
                                <input type="text" name="floating_first_name" :id="item.id" v-model="item.value"
                                    class="bg-white border border-gray -300 text-gray-900 text-sm rounded-lg block w-full p-1.5 "
                                    placeholder=" "/>
                            </template>
                            <template v-else-if="item.type === 'select'">
                                <label class="text-normal">{{ item.name }}</label>
<!--                                <SelectVue :item="item" @change="onChangeType(index, item.value)"></SelectVue>-->

                              <select :id="item.id" @input="updateValue($event.target.value, index)"
                                      class="h-8 bg-white w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg py-1.5 px-2.5">
                                <option class="text-ellipsis" v-for="(optionItem, optionIndex) in item.selectOption" :key="optionIndex"
                                        :value="optionItem.value">
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
                        <button :editIDdata-modal-hide="editID" type="button" @click="editIncomeBill()"
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
import { getAllIncomeBillConfig } from '@/static/billconfig/api.js';
export default {
    name: "ReceiptsTableComp",
    data() {
        return {
            receiptsEditForm: [
                { // 0
                    name: "Người nộp tiền",
                    id: "creatorId",
                    value: "",
                    type: "text",
                },
                { // 1
                    name: "Loại thu",
                    id: "typeId",
                    value: "",
                    type: "select",
                    selectOption: []
                },
                { // 2
                    name: "Số tiền",
                    id: "moneyId",
                    value: "",
                    type: "text",
                },
                { // 3

                },
                { // 4
                    name: "Phòng ban",
                    id: "departmentId",
                    value: "",
                    type: "select",
                    selectOption: [
                      {
                        value: 1,
                        name: "Hành chính nhân sự"
                      },
                      {
                        value: 2,
                        name: "Kinh doanh"
                      },
                      {
                        value: 3,
                        name: "Marketing"
                      },
                      {
                        value: 4,
                        name: "Kho sản phẩm"
                      }
                    ]
                },
                { // 5
                    name: "Trạng thái",
                    id: "statusId",
                    value: "",
                    type: "select",
                    selectOption: [
                        {
                            name: "Thành công",
                            value: "success",
                        },
                        {
                            name: "Đã hủy",
                            value: "cancel",
                        },
                        {
                          name: "Chờ duyệt",
                          value: "pending",
                        }
                    ]
                },
                { // 6
                    name: "Ghi chú",
                    id: "noteId",
                    value: "",
                    type: "text",
                },
            ],
          idElement:"",
          selectedDepartment:null,
          selectedBillConfig: null,
          statusBill: null
        }
    },
    mounted() {
      getAllIncomeBillConfig(this.receiptsEditForm[1].selectOption);
      this.loadDataBillConfig()
    },
    methods: {
        setData(editData, idElement) {
          this.idElement = idElement;
          console.log("editData",editData);

            var i = 2;
            this.receiptsEditForm.forEach(item => {
                if(editData[i]){
                    if(i===3) editData[i]= document.getElementById("typeId").value;
                    else if(i===7) editData[i]= document.getElementById("departmentId").value;
                    else if(i===8) editData[i]= document.getElementById("statusId").value;
                    else item.value = editData[i];
                }
              i++;
            });
        },
      updateValue(newValue, index) {
          if(index===1)this.selectedBillConfig = newValue;
          else if (index===4) this.selectedDepartment = newValue;
          else if (index === 5) this.statusBill = newValue
        console.log(index+""+"- newValue"+newValue);
      },
      editIncomeBill(){
        var url = 'http://103.142.26.40:8080/Total/api-bill/pay/edit/'+this.idElement;
        axios({
          method: 'post',
          url: url,
          responseType: 'json',
          data:{
            payPerson:this.receiptsEditForm[0].value,
            billConfigId: document.getElementById("typeId").value,
            amount: this.receiptsEditForm[2].value.replace(/,/g, ''),
            departmentId: document.getElementById("departmentId").value,
            statusBill: document.getElementById("statusId").value,
            note: document.getElementById("noteId").value
          },
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("jwt")
          }
        }).then(function (response) {
          alert(response.data.message);
          location.reload()
        });
      },
      // API NÀY NHÉ
      loadDataBillConfig() {
        this.receiptsEditForm[1].selectOption= JSON.parse(localStorage.getItem("billConfigIns"));
      },
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
