<template lang="">
  <div>
    <h3 class="text-lg font-semibold pb-3">Nhiệm vụ bởi tôi</h3>
    <div class="flex mb-2 justify-between pt-2">
      <ShowModal type="button" customClass="pr-4 cursor-pointer" modalId="configStatus" title="Cấu hình trạng thái">
        <Status modalId="configStatus"></Status>
      </ShowModal>
      <ShowModal type="button" customClass="link link-info pr-4 cursor-pointer" modalId="configJob"
        title="Cấu hình công việc">
        <Job modalId="configJob"></Job>
      </ShowModal>
      <ShowModal type="button" customClass="link link-info pr-4 cursor-pointer" modalId="configService"
        title="Cấu hình dịch vụ">
        <Service modalId="configService"></Service>
      </ShowModal>
      <ShowModal type="button" customClass="link link-info pr-4 cursor-pointer" modalId="configType"
        title="Cấu hình hình thức">
        <Type modalId="configType"></Type>
      </ShowModal>
      <ShowModal type="button" customClass="link link-info pr-4 cursor-pointer" modalId="configTarget"
        title="Cấu hình đối tượng">
        <Target modalId="configTarget"></Target>
      </ShowModal>
      <div class="grow"></div>
      <!-- <input type="text" placeholder="Tìm kiếm theo mã nguồn"
        class="input text-sm rounded-lg border input-sm w-full max-w-xs" /> -->
    </div>
  </div>
</template>
<script>
import Status from '../Modal/Status.vue';
import Job from '../Modal/Job.vue';
import Service from '../Modal/Service.vue';
import Type from '../Modal/Type.vue';
import Target from '../Modal/Target.vue';
export default {
  components: {
    Status, Job, Service, Type, Target
  }
}
</script>
<style lang="">

</style>