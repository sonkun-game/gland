<template>
  <div class=" space-y-3">
    <TabListHeader :data="data.tabList"></TabListHeader>
    <TabContainer :id="data.tabList.dataTabsToggle">
      <TabItem :id="data.tabList.list[0].id" labelledby="staff">
        <!-- Tài khoản -->
        <AccountAll />
      </TabItem>
      <TabItem :id="data.tabList.list[1].id" labelledby="staff">
        <!-- Nv -->
        <MissionAll />
      </TabItem>
      <TabItem :id="data.tabList.list[2].id" labelledby="staff">
        <!-- Phòng ban-->
        <DecentAll />
      </TabItem>
      <TabItem :id="setting" labelledby="staff">
        <SettingVue />
      </TabItem>
    </TabContainer>
  </div>
</template>

<script>
import AccountAll from '../../../../components/Pages/Main/All/AccountAll.vue';
import DecentAll from '../../../../components/Pages/Main/All/DecentAll.vue';
import MissionAll from '../../../../components/Pages/Main/All/MissionAll.vue';

export default {
  cname: 'AllPage',
  components: {
    AccountAll, MissionAll, DecentAll
  },
  layout: 'main',
  data() {
    return {
      status: "",
      data: {
        tabList: {
          id: "myTab",
          dataTabsToggle: "accountTab",
          list: [
            {
              id: "infoTab",
              name: "Tài khoản",
            },
            {
              id: "detailInfoTab",
              name: "Nhiệm vụ",
            },
            {
              id: "evidenceTab",
              name: "Phòng ban",
            },


          ],
        },
      }
    }
  },
}
</script>
