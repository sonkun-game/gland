<template>
  <div class=" space-y-3">
    <TabListHeader :data="data.tabList"></TabListHeader>
    <TabContainer :id="data.tabList.dataTabsToggle">
      <TabItem :id="data.tabList.list[0].id" labelledby="account">
        <!-- account - {{ id }} - {{ dpt }} -->
        <Account></Account>
      </TabItem>
      <!-- Nhiệm vụ của tôi-->
      <TabItem :id="data.tabList.list[1].id" labelledby="mission">
        <!-- mission - {{ id }} - {{ dpt }} -->
        <Mission></Mission>
      </TabItem>
      <SubTabItem :id="data.tabList.list[1].subList[0].id" labelledby="jobByMe">
        <JobByMe :missionId="dpt"></JobByMe>
      </SubTabItem>
      <SubTabItem :id="data.tabList.list[1].subList[1].id" labelledby="jobByOther">
        <JobByOther :missionId="dpt"></JobByOther>
      </SubTabItem>
    </TabContainer>
  </div>
</template>

<script>
import JobByMe from '../../../../../components/Custom/Department/JobBy/JobByMe.vue';
import JobByOther from '../../../../../components/Custom/Department/JobBy/JobByOther.vue';
import Account from '../../../../../components/Pages/Main/Department/Account.vue';
import Mission from '../../../../../components/Pages/Main/Department/Mission.vue';

export default {
  cname: 'DepartmentPage',
  layout: 'main',
  components: {
    JobByMe, JobByOther, Account, Mission
  },
  async asyncData({ params }) {
    const id = params.id;
    const dpt = params.dpt;
    return { id, dpt }
  },
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
              type: "dropdown",
              subList: [
                {
                  id: "jobByMeId",
                  name: "Nhiệm vụ của tôi"
                },
                {
                  id: "jobByOtherId",
                  name: "Nhiệm vụ được giao"
                }
              ]
            },
          ],
        },
      }
    }
  },
}
</script>
