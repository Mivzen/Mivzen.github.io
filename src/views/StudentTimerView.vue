<template>
  <div class="container pt-4">
    <div class="row">
      <div class="col-12 col-md-8 offset-md-2">
        <div class="d-flex mb-3">
          <div class="flex-fill">{{ formattedStartTime }}</div>
          <button type="button" class="btn btn-primary" @click="startTimer">
            Start timer
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      timestamp: null,
    };
  },
  methods: {
    startTimer() {
      this.timestamp = new Date();
    },
    formatDate(dateTime) {
      if (!dateTime) {
        return "";
      }

      var date = `${dateTime.getFullYear()}-${dateTime.getMonth() + 1}-${dateTime.getDate()}`;
      var time = `${dateTime.getHours()}:${dateTime.getMinutes()}:${dateTime.getSeconds()}`;
      return date + " " + time;
    },
  },
  computed: {
    formattedStartTime() {
      return this.formatDate(this.timestamp);
    },
  },
};
</script>
