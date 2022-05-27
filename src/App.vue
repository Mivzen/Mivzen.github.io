<template>
  <PageHeader />
  <div class="flex-fill">
    <router-view />
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";

export default {
  components: {
    PageHeader,
  },
};
</script>
