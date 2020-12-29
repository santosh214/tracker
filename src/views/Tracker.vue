<template>
  <div class="tracker">
    <!-- <h1 class="">Tracker</h1>
    <div class="container">
      <div class="row">
        <div class="col">
          <h1>{{ totalTime }}</h1>
        </div>
      </div>
    </div> -->

    <div class="container-fluid  border-top">
      <div class="row ">
        <div class="col pt-3 ">
          <span class="mx-5">{{ list }} </span>
          <button
            @click="timerStart"
            :disabled="running"
            class="btn btn-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-play"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M10.804 8L5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"
              />
            </svg>
          </button>
          <button @click="timerStop" :disabled="!running" class="btn btn-info">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-pause"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"
              />
            </svg>
          </button>
          <button
            @click="timerReset"
            :disabled="running"
            class="btn btn-danger"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-repeat"
              viewBox="0 0 16 16"
            >
              <path
                d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"
              />
              <path
                fill-rule="evenodd"
                d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
              />
            </svg>
          </button>
        </div>
        <div class="col ">
          <h5>Timer</h5>
          <p class="font-weight-bold">{{ time }}</p>
          <p></p>
        </div>
      </div>
    </div>
    <p>1</p>
    <p>2</p>
    <p>3</p>
    <p>4</p>
    <p>5</p>
    <p>6</p>
  </div>
</template>
<script>
const os = require("os");

const fs = require("ba64");
// import { eapp, desktopCapturer } from "electron";
const { eapp, desktopCapturer } = require("electron");

export default {
  name: "Tracker",
  props: ["list"],
  data() {
    return {
      time: "00:00:00:000",
      todayDate: "0000-00-00",
      running: false,
      started: null,
      stoppedDuration: 0,
      timeBegan: null,
      timeStopped: null,
      totalTime: "00:00:00",
      currentTime: null,
      timeElapsed: null,
      hour: null,
      min: null,
      sec: null,
      ms: null,
      captureStart: null
    };
  },
  methods: {
    capture() {
      this.fullscreenScreenshot(function(base64data) {
        // Draw image in the img tag
        var dn = Date.now();
        console.log("temp dir", os.tmpdir());

        console.log("img path", eapp, desktopCapturer);
        fs.writeImage(
          os.tmpdir() + "/screenshots/test_" + dn,
          base64data,
          function(err) {
            if (err) throw err;
            console.log("Replaced!");
          }
        );
      }, "image/jpeg");
    },
    fullscreenScreenshot(callback, imageFormat) {
      var _this = this;
      this.callback = callback;
      imageFormat = imageFormat || "image/jpeg";
      this.handleStream = stream => {
        // Create hidden video tag
        var video = document.createElement("video");
        video.style.cssText = "position:absolute;top:-10000px;left:-10000px;";
        // Event connected to stream
        video.onloadedmetadata = function() {
          // Set video ORIGINAL height (screenshot)
          video.style.height = this.videoHeight + "px"; // videoHeight
          video.style.width = this.videoWidth + "px"; // videoWidth
          video.play();
          // Create canvas
          var canvas = document.createElement("canvas");
          canvas.width = this.videoWidth;
          canvas.height = this.videoHeight;
          var ctx = canvas.getContext("2d");
          // Draw video on canvas
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          if (_this.callback) {
            // Save screenshot to base64
            _this.callback(canvas.toDataURL(imageFormat));
          } else {
            console.log("Need callback!");
          }
          // Remove hidden video tag
          video.remove();
          try {
            // Destroy connect to stream
            stream.getTracks()[0].stop();
          } catch (e) {
            console.log("");
          }
        };
        video.srcObject = stream;
        document.body.appendChild(video);
      };
      this.handleError = function(e) {
        console.log(e);
      };
      desktopCapturer
        .getSources({ types: ["window", "screen"] })
        .then(async sources => {
          console.log(sources);
          for (const source of sources) {
            // Filter: main screen
            if (
              source.name === "Entire Screen" ||
              source.name === "Screen 1" ||
              source.name === "Screen 2"
            ) {
              console.log("img");
              try {
                const stream = await navigator.mediaDevices.getUserMedia({
                  audio: false,
                  video: {
                    mandatory: {
                      chromeMediaSource: "desktop",
                      chromeMediaSourceId: source.id,
                      minWidth: 1280,
                      maxWidth: 4000,
                      minHeight: 720,
                      maxHeight: 4000
                    }
                  }
                });
                _this.handleStream(stream);
              } catch (e) {
                _this.handleError(e);
              }
            }
          }
        });
    },
    updateTotalTime(time) {
      this.totalTime = time;
    },
    timerStart() {
      this.$emit("change", true);
      console.log("start");
      this.capture();
      if (this.running) return;
      if (this.timeBegan === null) {
        // this.timerReset();
        this.timeBegan = new Date();
      }
      if (this.timeStopped !== null) {
        this.stoppedDuration += new Date() - this.timeStopped;
      }
      this.started = setInterval(this.timerClockRunning, 10);
      this.captureStart = setInterval(this.capture, 5000);
      this.running = true;
    },
    timerStop() {

      this.running = false;
      console.log("stop");
      this.timeStopped = new Date();
      clearInterval(this.started);
      clearInterval(this.captureStart);
    },
    timerReset() {
      this.$emit("change", false);

      this.running = false;
      console.log("reset");
      clearInterval(this.started);
      this.stoppedDuration = 0;
      this.timeBegan = null;
      this.timeStopped = null;
      this.time = "00:00:00:000";
    },
    timerClockRunning() {
      // console.log("timerClockRunning ", this.running);
      (this.currentTime = new Date()),
        (this.timeElapsed = new Date(
          this.currentTime - this.timeBegan - this.stoppedDuration
        )),
        (this.hour = this.timeElapsed.getUTCHours()),
        (this.min = this.timeElapsed.getUTCMinutes()),
        (this.sec = this.timeElapsed.getUTCSeconds()),
        (this.ms = this.timeElapsed.getUTCMilliseconds());

      this.time =
        this.zeroPrefix(this.hour, 2) +
        ":" +
        this.zeroPrefix(this.min, 2) +
        ":" +
        this.zeroPrefix(this.sec, 2) +
        ":" +
        this.zeroPrefix(this.ms, 3);

      this.updateTotalTime(
        this.zeroPrefix(this.hour, 2) +
          ":" +
          this.zeroPrefix(this.min, 2) +
          ":" +
          this.zeroPrefix(this.sec, 2)
      );
    },
    zeroPrefix(num, digit) {
      var zero = "";
      for (var i = 0; i < digit; i++) {
        zero += "0";
      }
      return (zero + num).slice(-digit);
    }
  }
};
</script>
<style scoped></style>
