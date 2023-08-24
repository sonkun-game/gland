
<template>
  <div>
    <TabListHeader :data="data.tabList"></TabListHeader>
    <TabContainer :id="data.tabList.dataTabsToggle">
      <TabItem :id="data.tabList.list[0].id" labelledby="staff">
        <Staff :staff="data.staff"></Staff>
      </TabItem>
      <TabItem :id="data.tabList.list[1].id" labelledby="positionAuth">
        <PositionAuth :position-auth="data.positionAuth"></PositionAuth>
      </TabItem>
      <TabItem :id="data.tabList.list[2].id" labelledby="staffAuth">
        <StaffAuth :staff-auth="data.staffAuth"></StaffAuth>
      </TabItem>
    </TabContainer>
  </div>
</template>

<script>
import Staff from '~/components/Pages/Main/Total/Account/Staff/Staff.vue';
import PositionAuth from '~/components/Pages/Main/Total/Account/Staff/PositionAuth.vue';
import StaffAuth from '~/components/Pages/Main/Total/Account/Staff/StaffAuth.vue';
import { getStaffApi } from '~/static/staff/api'
import { getAccountsFromApi } from "static/account/api";

export default {
  name: 'AccountPage',
  components: { Staff, PositionAuth, StaffAuth },
  layout: 'main',
  data() {
    return {
      data: this.$store.state.staff.data,
      status: ""
    }
  },
  mounted() {
    console.log("----------->");
    // this.$store.dispatch('fetchStaffAPI');
    getAccountsFromApi()

    console.log("----------->");
  },
  watch: {
    // hàm watch này sẽ check khi status ở data thay đổi
    // như cậu thấy đấy
    status(newValue, oldValue) {
      console.log(`New value: ${newValue}, Old value: ${oldValue}`);
      // tớ sẽ gọi lại hàm get API với status mới
      getStaffApi(newValue, "");
    }
  },
  methods: {
    // khi thay đổi filter status chả hạn thì mình sẽ lọc lại table
    // đợi t tí
    onChangeSelect() {

    }

  },

}
</script>

<style scoped>
img,
span,
div {
  user-select: none;
  -webkit-user-drag: none;
}
</style>
