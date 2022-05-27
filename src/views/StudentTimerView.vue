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
              <button type="button" class="btn btn-success" @click="startTimer" :disabled="!stopped"
                v-if="stopped && startTime == null">
                Start
              </button>
              <button type="button" class="btn btn-success" @click="continueTimer" :disabled="!stopped" v-else>
                Forsæt
              </button>
              <button type="button" class="btn btn-danger" @click="stopTimer" :disabled="stopped">
                Stop
              </button>
              <button type="button" class="btn btn-danger" @click="clearTimer"
                :disabled="!stopped || startTime == null">
                Nulstil
              </button>
            </div>
          </div>
          <hr>
          <code class="d-block display-4 text-center">{{ timeElapsed }}</code>
          <hr>
          <button type="button" @click="addStudent" class="btn btn-sm btn-primary d-block w-100 mb-3"
            :disabled="stopped">
            Tilføj
          </button>
        </div>
        <div class="d-grid gap-2">
          <div v-for="(student, index) in students" :key="student.id" class="d-flex align-items-center gap-3 mb-2">
            <code class="me-2">{{ student.time }}</code>
            <input type="text" class="form-control form-control-sm" v-model="student.name" v-focus>
            <button type="button" class="btn btn-sm btn-outline-danger d-print-none"
              @click="removeStudentByIndex(index)" tabindex="-1">X</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useKeypress } from "@/compositions/keypress";
import { ref, reactive } from "vue";

export default {
  name: "StudentTimerView",
  setup() {
    const studentSequence = ref(0);
    const students = reactive([]);
    const timeElapsed = ref("00:00:00.000");
    const timer = ref(null);
    const stopped = ref(true);

    const addStudent = () => {
      if (timer.value == null || stopped.value) {
        return;
      }

      let student = {
        id: studentSequence.value,
        time: timeElapsed.value,
        name: '',
      };

      studentSequence.value++;
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

    return {
      students,
      timeElapsed,
      timer,
      stopped,
      addStudent,
    };
  },
  data() {
    return {
      startTime: null,
    };
  },
  methods: {
    msToTime(s) {
      // Pad to 2 or 3 digits, default is 2
      function pad(n, z) {
        z = z || 2;
        return ('00' + n).slice(-z);
      }

      var ms = s % 1000;
      s = (s - ms) / 1000;
      var secs = s % 60;
      s = (s - secs) / 60;
      var mins = s % 60;
      var hrs = (s - mins) / 60;

      return pad(hrs) + ':' + pad(mins) + ':' + pad(secs) + '.' + pad(ms, 3);
    },
    setTimer() {
      var self = this;
      this.timer = setInterval(() => {
        let elapsedMilliseconds = Date.now() - self.startTime;
        self.timeElapsed = self.msToTime(elapsedMilliseconds);
      }, 10);
    },
    startTimer() {
      this.stopped = false;
      this.startTime = new Date();
      this.setTimer();
    },
    continueTimer() {
      this.stopped = false;
      this.setTimer();
    },
    stopTimer() {
      this.stopped = true;
      clearInterval(this.timer);
    },
    clearTimer() {
      this.stopped = true;
      this.startTime = null;
      this.students.splice(0);
      this.timeElapsed = "00:00:00.000";
      clearInterval(this.timer);
    },
    removeStudentByIndex(index) {
      this.students.splice(index, 1);
    },
  },
};
</script >
