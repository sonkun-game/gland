<template>
  <div>
    <div class=" space-y-3">
      <TabListHeader :data="data.tabList"></TabListHeader>
      <TabContainer :id="data.tabList.dataTabsToggle">
        <TabItem :id="data.tabList.list[0].id" labelledby="staff">

        </TabItem>
        <TabItem :id="data.tabList.list[1].id" labelledby="staff">

        </TabItem>
      </TabContainer>
    </div>

  </div>
</template>

<script>
export default {
  name: "DepartmentVue",
  data() {
    return {

    }
  },
  props: {
    status: "",
    data: {
      departments: [
        {
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
              type: "dropdown"
            },
          ],
        },
      ]
    }
  }
}
</script>

<style scoped></style>
