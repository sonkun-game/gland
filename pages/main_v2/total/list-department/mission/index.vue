
<template>
    <div class="p-8">
        <div class=" space-y-3">
            <TabListHeader :data="data.tabList"></TabListHeader>
            <TabContainer :theme="theme" :id="data.tabList.dataTabsToggle">
                <TabItem :id="data.tabList.list[0].id" labelledby="staff">
                    <JobByMe :theme="theme" />
                </TabItem>
                <TabItem :id="data.tabList.list[1].id" labelledby="staff">
                    <JobByOther :theme="theme" />
                </TabItem>
            </TabContainer>
        </div>
    </div>
</template>

<script>
import JobByMe from '../../../../../components/Custom/Mission/JobByMe.vue';
import JobByOther from '../../../../../components/Custom/Mission/JobByOther.vue';

export default {
    name: "MissionDepartmentPage",
    layout: "main_v2",
    components: {
        JobByMe,
        JobByOther
    },
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
                            name: "Công việc của tôi",
                        },
                        {
                            id: "JobByOther",
                            name: "Công việc được giao",
                        },
                    ],
                }
            }
        };
    }

}
</script>

<style scoped></style>
