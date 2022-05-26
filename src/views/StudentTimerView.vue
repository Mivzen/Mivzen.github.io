<template>
  <div class="container pt-4">
    <div class="row">
      <div class="col-12 col-md-8 offset-md-2">
        <div class="d-flex align-items-center">
          <code class="flex-fill">{{ formatDate(startTime) || "hh:mm:ss" }}</code>

          <div class="btn-group" role="group">
            <button type="button" class="btn btn-success" @click="startTimer" :disabled="startTime != null">
              Start
            </button>
            <button type="button" class="btn btn-danger" @click="stopTimer" :disabled="startTime == null">
              Stop
            </button>
          </div>
        </div>
        <hr>
        <code class="display-4 text-center">{{ timeElapsed }}</code>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StudentTimerView",
  data() {
    return {
      startTime: null,
      timeElapsed: "00:00:00",
      timer: null,
      miliseconds: 0,
      seconds: 0,
      minutes: 0,
    };
  },
  methods: {
    startTimer() {
      var self = this;
      this.startTime = new Date();
      this.timer = setInterval(() => {
        self.miliseconds++;

        if (self.miliseconds == 100) {
          self.seconds += 1;
          self.miliseconds = 0;
        }
        if (self.seconds == 60) {
          self.minutes += 1;
          self.seconds = 0;
        }

        let ms = self.miliseconds,
          sec = self.seconds,
          min = self.minutes;

        if (ms < 10) {
          ms = '0' + ms;
        }
        if (sec < 10) {
          sec = '0' + sec;
        }
        if (min < 10) {
          min = '0' + min;
        }

        self.timeElapsed = `${min}:${sec}:${ms}`;
      }, 10);
    },
    stopTimer() {
      clearInterval(this.timer);
    },
    clearTimer() {
      this.startTime = null;
      this.timeElapsed = "00:00:00";
      this.miliseconds = 0;
      this.seconds = 0;
      this.minutes = 0;
      clearInterval(this.timer);
    },
    formatDate(dateTime) {
      if (!dateTime) {
        return "";
      }

      return `${dateTime.getHours()}:${dateTime.getMinutes()}:${dateTime.getSeconds()}`;
    },
  },
  computed: {},
};
</script>
