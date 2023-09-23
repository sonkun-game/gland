
<template>
    <div class="p-8">
        <div class=" space-y-3">
            <TabListHeader :data="data.tabList"></TabListHeader>
            <TabContainer :theme="theme" :id="data.tabList.dataTabsToggle">
                <TabItem :id="data.tabList.list[0].id" labelledby="staff">
                    jobByMe
                </TabItem>
                <TabItem :id="data.tabList.list[1].id" labelledby="staff">
                    JobByOther
                </TabItem>
            </TabContainer>
        </div>
    </div>
</template>

<script>
export default {
    name: "MissionDepartmentPage",
    layout: "main_v2",
    computed: {
        theme: {
            get() {
                return this.$store.state.theme;
            },
            set(newValue) {
                this.theme = newValue;
            },
        }
    },
    data() {
        return {
            id: this.$route.query.id,
            storeId: 1,
            pageNum: this.$route.query.pageNum ? this.$route.query.pageNum : 0,
            totalPage: 0,
            data: {
                tabList: {
                    id: "myTab",
                    dataTabsToggle: "missionTab",
                    list: [
                        {
                            id: "jobByMe",
                            name: "Nhiệm vụ của tôi",
                        },
                        {
                            id: "JobByOther",
                            name: "Nhiệm vụ được giao",
                        },
                    ],
                }
            }
        };
    }

}
</script>

<style scoped></style>