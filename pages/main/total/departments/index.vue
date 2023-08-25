<template>
  <div class=" space-y-3">
    <TabListHeader :data="data.tabList"></TabListHeader>
    <TabContainer :id="data.tabList.dataTabsToggle">
      <TabItem :id="data.tabList.list[0].id" labelledby="account">
        {{ test1 }}
      </TabItem>
      <TabItem :id="data.tabList.list[1].id" labelledby="mission">
        {{ test2 }}
      </TabItem>
    </TabContainer>
  </div>
</template>

<script>
export default {
  cname: 'DepartmentPage',
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
              name: "Nhiệm vụ"
            },
          ],
        },
      }
    }
  },
  props: {
    test1: "",
    test2: ""
  }
}
</script>
