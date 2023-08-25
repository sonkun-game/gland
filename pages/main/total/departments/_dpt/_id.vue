<template>
  <div class=" space-y-3">
    <TabListHeader :data="data.tabList"></TabListHeader>
    <TabContainer :id="data.tabList.dataTabsToggle">
      <TabItem :id="data.tabList.list[0].id" labelledby="account">
        account - {{ id }} - {{ dpt }}
      </TabItem>
      <TabItem :id="data.tabList.list[1].id" labelledby="mission">
        mission - {{ id }} - {{ dpt }}
      </TabItem>
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
              name: "Nhiệm vụ"
            },
          ],
        },
      }
    }
  },
}
</script>
