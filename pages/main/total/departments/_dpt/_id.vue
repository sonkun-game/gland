<template>
  <div class=" space-y-3">
    <TabListHeader :data="data.tabList"></TabListHeader>
    <TabContainer :id="data.tabList.dataTabsToggle">
      <TabItem :id="data.tabList.list[0].id" labelledby="account">
        account - {{ id }} - {{ dpt }}
      </TabItem>
      <!-- Nhiệm vụ của tôi-->
      <TabItem :id="data.tabList.list[1].id" labelledby="mission">
        mission - {{ id }} - {{ dpt }}
      </TabItem>
      <SubTabItem :id="data.tabList.list[1].subList[0].id" labelledby="jobByMe">
        1 - Công việc tạo bởi tôi
      </SubTabItem>
      <SubTabItem :id="data.tabList.list[1].subList[1].id" labelledby="jobByOther">
        2 - Công việc được giao
      </SubTabItem>
    </TabContainer>
  </div>
</template>

<script>
export default {
  cname: 'DepartmentPage',
  layout: 'main',
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
                  name: "Nhiệm vụ bởi tôi"
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
