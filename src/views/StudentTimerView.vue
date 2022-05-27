<template>
  <div class="container pt-4">
    <div class="row">
      <div class="col-12 col-md-8 offset-md-2">
        <div class="d-none d-print-block mb-4" v-if="startTime != null">
          Startet klokken: {{ startTime?.toLocaleString() }}
        </div>
        <div class="d-print-none">
          <div class="d-flex align-items-center">
            <code class="flex-fill">{{ startTime?.toLocaleTimeString() || "hh:mm:ss" }}</code>
            <div class="btn-group" role="group">
              <button type="button" class="btn btn-success" @click="startTimer" :disabled="timer != null">
                Start
              </button>
              <button type="button" class="btn btn-danger" @click="stopTimer" :disabled="timer == null">
                Stop
              </button>
            </div>
          </div>
          <hr>
          <code class="d-block display-4 text-center">{{ timeElapsed }}</code>
          <hr>
          <button type="button" @click="addStudent" class="btn btn-primary d-block w-100 mb-3"
            :disabled="timer == null">
            Tilføj
          </button>
        </div>
        <div class="d-grid gap-2">
          <div v-for="student in students" :key="student.time" class="d-flex align-items-center gap-3 mb-2">
            <code class="me-2">{{ student.time }}</code>
            <input type="text" class="form-control form-control-sm" v-model="student.name">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// https://github.com/lupas/vue3-keypress
import { useKeypress } from "vue3-keypress";
import { ref, reactive } from "vue";

const students = reactive([]);
const timeElapsed = ref("00:00:00");
const timer = ref(null);

const addStudent = (event) => {
  if (timer.value == null) {
    return;
  }

  let student = {
    time: timeElapsed.value,
    name: '',
  };

  students.push(student);
};

useKeypress({
  keyEvent: "keydown",
  keyBinds: [
    {
      keyCode: "enter",
      success: addStudent,
    }
  ],
});
</script>

<script>
export default {
  name: "StudentTimerView",
  data() {
    return {
      startTime: null,
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
      this.timer = null;
    },
    clearTimer() {
      this.startTime = null;
      this.timeElapsed = "00:00:00";
      this.miliseconds = 0;
      this.seconds = 0;
      this.minutes = 0;
      clearInterval(this.timer);
      this.timer = null;
    },
  },
};
</script>
