<template>
  <div>
    <!-- Tab bar -->
    <div class="border-b border-gray-200 dark:border-gray-700">
      <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#accountTab"
        role="tablist">
        <li class="mr-2" role="presentation" v-for="(item, index) in tabList" :key="index">
          <button class="inline-block p-3 border-b-2 rounded-t-lg" :id="item.id + '-tab'"
            :data-tabs-target="'#' + item.id" type="button" role="tab" aria-controls="staff" aria-selected="false">
            {{ item.name }}</button>
        </li>
      </ul>
    </div>

    <div id="accountTab">
      <!-- TAB 1 Thu hoạt động =============================================> -->
      <div class="hidden py-4 rounded-lg" :id="tabList[0].id" role="tabpanel">

        <!-- Button tạo thu hđ-->
        <CreateRP buttonTitle="Thêm phiếu thu" modalId="createIncomeModal" :modal="activityIncome.modal"
              link="/link/">
        </CreateRP>


        <!-- List filter -->
        <div class="flex mb-4">
          <ListFilterVue :filter="activityIncome.filter"></ListFilterVue>
          <!-- datepicker -->
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <i class="fa-solid fa-calendar text-gray-500"></i>
            </div>
            <input datepicker type="text"
              class="h-8 w-32 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Từ ngày">
          </div>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <i class="fa-solid fa-calendar text-gray-500"></i>
            </div>
            <input datepicker type="text"
              class="h-8 w-32 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Đến ngày">
          </div>
          <div class="grow"></div>
          <!-- Search Input -->
          <div>
            <input type="search" id="first_name"
              class="h-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 justify-self-end"
              placeholder="Tìm kiếm bằng tên - tài khoản">
          </div>
        </div>
        <!-- Table -->
        <ReceiptsTable :table="activityIncome.table" editID="ReceiptsTableEdit"></ReceiptsTable>
      </div>

      <!-- TAB 2 Chi hoạt động =============================================> -->
      <div class="hidden py-4 rounded-lg" :id="tabList[1].id" role="tabpanel">

        <!-- Button tạo chức vụ-->
        <CreateRP buttonTitle="Thêm phiếu chi" modalId="createSpendModal" :modal="activityOutcome.modal"
            link="/link/">
          </CreateRP>
        <!-- List filter -->
        <div class="flex mb-4">
          <ListFilterVue :filter="activityOutcome.filter"></ListFilterVue>
          <!-- datepicker -->
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <i class="fa-solid fa-calendar text-gray-500"></i>
            </div>
            <input datepicker type="text"
              class="h-8 w-32 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Từ ngày">
          </div>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <i class="fa-solid fa-calendar text-gray-500"></i>
            </div>
            <input datepicker type="text"
              class="h-8 w-32 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Đến ngày">
          </div>
          <div class="grow"></div>
          <!-- Search Input -->
          <div>
            <input type="search" id="first_name"
              class="h-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 justify-self-end"
              placeholder="Tìm kiếm bằng tên - tài khoản">
          </div>
        </div>
        <!-- Table -->
        <PaymentTable :table="activityOutcome.table" editID="PaymentTableEdit"></PaymentTable>

      </div>

      <!-- TAB 3 Cấu hình phiếu =============================================> -->
      <div class="hidden py-4 rounded-lg" :id="tabList[2].id" role="tabpanel">

        <!-- Button tạo cấu hình phiếu-->
        <CreateVC buttonTitle="Tạo phiếu" modalId="createVoteConfigModal" :modal="voteConfiguration.modal">
        </CreateVC>
        <!-- List filter -->
        <div class="flex mb-4">
          <ListFilterVue :filter="voteConfiguration.filter"></ListFilterVue>
          <div class="grow"></div>
          <!-- Search Input -->
          <div>
            <input type="search" id="first_name"
              class="h-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 justify-self-end"
              placeholder="Tìm kiếm bằng tên - tài khoản">
          </div>
        </div>
        <!-- Table -->
        <VoteConfigurationTable :table="voteConfiguration.table" editID="VoteConfigurationTableEdit">
        </VoteConfigurationTable>

      </div>

      <!-- TAB 4 Phân quyền phiếu =============================================> -->
      <div class="hidden p-4 rounded-lg" :id="tabList[3].id" role="tabpanel">
        <!-- Text -->
        <p class="py-3.5">Cấu hình phiếu thu chi theo phòng ban</p>
        <div>
          <!-- List filter -->
          <div class="flex mb-4">
            <select v-for="(item, index) in voteAuthentication.filter" :key="index" :id="item.id"
              class="h-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg py-1.5 px-2.5 dark:bg-gray-700 dark:border-gray-600 mr-2">
              <option class="text-ellipsis" v-for="(optionItem, optionIndex) in item.selectOption" :key="optionIndex">
                {{ optionItem.name }}
              </option>
            </select>
            <!-- Save button -->
            <div>
              <!-- Button tạo chức vụ-->
              <div class="w-100 flex justify-end mb-3.5">
                <button type="button"
                  class="text-white bg-blue-500 hover:bg-blue-400 font-medium rounded-lg text-sm px-4 py-1.5 text-center">
                  <i class="fa-regular fa-floppy-disk"></i> Lưu
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>

import axios from "axios";
// Table
import ReceiptsTable from "../../../../components/Custom/Table/ReceiptsTable.vue";
import PaymentTable from "../../../../components/Custom/Table/PaymentTable.vue";
import VoteConfigurationTable from "../../../../components/Custom/Table/VoteConfigurationTable.vue";
// Filter List
import ListFilterVue from "../../../../components/Common/ListFilter.vue";
// Create Modal
import CreateRP from '../../../../components/Custom/CreateModalButton/CreateReceiptsPayment.vue';
import CreateVC from '../../../../components/Custom/CreateModalButton/CreateVoteConfiguration.vue';
import moment from "moment"
import numeral from "numeral"
import {getAllBillConfig} from "static/billconfig/api";
import {getAllBill} from "static/bill/api";

export default {
  name: 'ActivityPage',
  layout: 'main',
  components: {
    ReceiptsTable,
    PaymentTable,
    VoteConfigurationTable,
    ListFilterVue,
    CreateRP,
    CreateVC
  },
  data() {
    return {
      tabList: [
        {
          name: "Thu hoạt động",
          id: "item1"
        },
        {
          name: "Chi hoạt động",
          id: "item2"
        },
        {
          name: "Cấu hình phiếu",
          id: "item3"
        },
        {
          name: "Phân Quyền phiếu",
          id: "item4"
        },
      ],
      activityIncome: {
        modal: {
          head: {
            title: "Tạo phiếu thu"
          },
          body: {
            row1: {
              name: 'Người nộp tiền',
              id: 'paymentPersonId'
            },
            row2: {
              name: 'Số tiền',
              id: 'paymentMoneyId'
            },
            row3: {
              name: 'Loại thu',
              id: 'paymentTypeId',
              selectOption: [
                {
                  name: "Phiếu thu",
                  value: "1"
                },
                {
                  name: "Phiếu chi",
                  value: "1"
                },
              ]
            },
            row4: {
              name: 'Phòng ban',
              id: 'paymentDepartmentId',
              selectOption: [
                {
                  name: "Hành chính nhân sự",
                  value: "1"
                },
                {
                  name: "Kinh doanh",
                  value: "2"
                },
                {
                  name: "Marketing",
                  value: "3"
                },
                {
                  name: "Kho sản phẩm",
                  value: "4"
                }
              ]
            },
            row5: {
              name: 'Ghi chú',
              id: 'paymentNoteId'
            },
          }
        },
        filter: [
          {
            id: "status",
            selectOption: [
              {
                value: '',
                name: "Tất cả trạng thái"
              },
              {
                value: 'success',
                name: "Thành công"
              },
              {
                value: 'pending',
                name: "Chờ duyệt"
              },
              {
                value: 'cancel',
                name: "Đã hủy"
              },
            ]
          },
          {
            id: "position",
            selectOption: [
              {
                value: false,
                name: "Tất cả phiếu thu"
              },
              {
                value: false,
                name: "Thu phạt nhân viên"
              },
            ]
          },
          {
            id: "department",
            selectOption: [
              {
                value: '',
                name: "Tất cả phòng ban"
              },
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
              },
            ]
          },
        ],
        table: {

          head: [
            { name: "STT" },
            { name: "Ngày tạo" },
            { name: "Người tạo" },
            { name: "Người nộp tiền" },
            { name: "Loại thu" },
            { name: "Số tiền" },
            { name: "Thu vào ví" },
            { name: "Phòng ban" },
            { name: "Trạng thái" },
            { name: "Ghi chú" },
            { name: "Thao tác" },
          ],
          body: []
        },
      },
      activityOutcome: {
        modal: {
          head: {
            title: "Tạo phiếu chi"
          },
          body: {
            row1: {
              name: 'Người nhận tiền',
              id: 'spendPersonId'
            },
            row2: {
              name: 'Số tiền',
              id: 'spendMoneyId'
            },
            row3: {
              name: 'Loại chi',
              id: 'spendTypeId',
              selectOption: [
                {
                  name: "Phiếu thu",
                  value: "1"
                },
                {
                  name: "Phiếu chi",
                  value: "1"
                },
              ]
            },
            row4: {
              name: 'Phòng ban',
              id: 'spendDepartmentId',
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
            row5: {
              name: 'Ghi chú',
              id: 'spendNoteId'
            },
          }
        },
        filter: [
          {
            id: "status",
            selectOption: [
              {
                value: "",
                name: "Tất cả trạng thái"
              },
              {
                value: 'success',
                name: "Thành công"
              },
              {
                value: 'pending',
                name: "Chờ duyệt"
              },
              {
                value: 'cancel',
                name: "Đã hủy"
              },
            ]
          },
          {
            id: "position",
            selectOption: [
              {
                value: false,
                name: "Tất cả phiếu chi"
              },
              {
                value: false,
                name: "Thu phạt nhân viên"
              },
            ]
          },
          {
            id: "department",
            selectOption: [
              {
                value: '',
                name: "Tất cả phòng ban"
              },
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
              },
            ]
          },
        ],
        table: {
          head: [
            { name: "STT" },
            { name: "Ngày tạo" },
            { name: "Người tạo" },
            { name: "Người nhận tiền" },
            { name: "Loại chi" },
            { name: "Số tiền" },
            { name: "Chi từ ví" },
            { name: "Phòng ban" },
            { name: "Trạng thái" },
            { name: "Ghi chú" },
            { name: "Thao tác" },
          ],
          body: [
          ]
        },
      },
      voteConfiguration: {
        filter: [
          {
            id: "status",
            selectOption: [
              {
                value: null,
                name: "Tất cả trạng thái"
              },
              {
                value: '1',
                name: "Hoạt động"
              },
              {
                value: '0',
                name: "Không hoạt động"
              },
            ]
          },
          {
            id: "vote",
            selectOption: [
              {
                value: '',
                name: "Tất cả phiếu"
              },
              {
                value: 1,
                name: "Phiếu thu"
              },
              {
                value: 0,
                name: "Phiếu chi"
              },
            ]
          },
        ],
        table: {
          head: [
            { name: "STT" },
            { name: "Ngày tạo" },
            { name: "Người tạo" },
            { name: "Tên phiếu" },
            { name: "Loại phiếu" },
            { name: "Trạng thái" },
            { name: "Thao tác" },
          ],
          body: [
            [
            "test",
            "test",
            "1",
            "test",
            ]

          ]
        },
        modal: {
          head: {
            title: "Cấu hình phiếu"
          },
          body: {
            row1: {
              name: 'Tên Phiếu',
              id: 'voteNameId'
            },
            row2: {
              name: 'Loại phiếu',
              id: 'voteTypeId',
              select: [
                {
                  name: "Phiếu thu",
                  value: "1"
                },
                {
                  name: "Phiếu chi",
                  value: "0"
                }
              ]
            },
          }
        },
      },
      voteAuthentication: {
        filter: [
          {
            id: "department",
            selectOption: [
              {
                value: '',
                name: "Phòng ban"
              },
              {
                value: 1,
                name: "Kinh doanh"
              },
              {
                value: 2,
                name: "Marketing"
              },
              {
                value: 3,
                name: "Hành chính nhân sự"
              },
              {
                value: 4,
                name: "Kho sản phẩm"
              },
            ]
          },
          {
            id: "vote",
            selectOption: [
              {
                value: false,
                name: "Phiếu thu"
              },
              {
                value: false,
                name: "Phiếu chi"
              },
            ]
          },
        ],
      },
      type: true,
      purpose: "",
      departmentId: 0,
      fromDate: null,
      toDate: null,
      pageNum: 0,
      payPerson: "",
      creator: "",
      billConfigName: "",
      amount: "",
      nameDepartment: "",
      status: "",
      statusConfig: null,
      billConfigStatus:null,
      typConfig: null,
      note: "",
      name: "",
      phone: "",
      address: "",
      billConfigId:"",
      billId:""
    }
  },
  mounted() {
    // Load dữ liệu thu/ chi hđ
    getAllBill(true, this.activityIncome, this.purpose, this.departmentId, this.pageNum, this.fromDate, this.toDate, this.activityIncome.table.body);
    getAllBill(false, this.activityOutcome, this.purpose, this.departmentId, this.pageNum, this.fromDate, this.toDate, this.activityOutcome.table.body);
    getAllBillConfig(this.pageNum, this.typConfig, this.statusConfig, this.voteConfiguration.table.body);
    this.loadBillConfigFromLocal()
  },
  methods: {
    loadBillConfigFromLocal(){
      this.activityIncome.filter[1].selectOption = JSON.parse(localStorage.getItem("billConfigIns"));
      this.activityIncome.filter[1].selectOption.unshift({name: "Tất cả phiếu thu", value: ""})

      this.activityOutcome.filter[1].selectOption = JSON.parse(localStorage.getItem("billConfigOuts"));
      this.activityOutcome.filter[1].selectOption.unshift({name: "Tất cả phiếu chi", value: ""});
      this.activityOutcome.modal.body.row3.selectOption=JSON.parse(localStorage.getItem("billConfigOuts"));

    },

  }
}
</script>
