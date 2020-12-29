<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <button type="button" class="btn btn-primary" @click="cap">Capture</button>
  </div>
</template>

<script>
//https://www.electronjs.org/docs/api/desktop-capturer
//https://www.electronjs.org/docs/api/browser-window#wincapturepagerect
//https://www.electronjs.org/docs/api/native-image#imagegetbitmapoptions
import { desktopCapturer, remote } from "electron";

//const electron,{ desktopCapturer } = require("electron");
/*
function fullscreenScreenshot(callback, imageFormat) {
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
        console.log("stream error ", e);
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
          source.name === "Entire screen" ||
          source.name === "Screen 1" ||
          source.name === "Screen 2"
        ) {
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
}
*/

//const desktopCapturer = electron.desktopCapturer
const { screen } = remote; // Main process modules
const electronScreen = screen;

// const shell = electron.shell;
const fs = require("fs");
// const os = require("os");
// const path = require("path");

// const screenshot = document.getElementById("screen-shot");
// const screenshotMsg = document.getElementById("screenshot-path");

setTimeout(function() {
  console.log("setTimeout ");
  console.log("electronScreen ", electronScreen);
  //console.log("shell ", shell);

  console.log("collecting screen...");
  // const thumbSize = determineScreenShotSize();
  // let options = { types: ["screen"], thumbnailSize: thumbSize };
  // console.log(" getting thumbSize, options ", thumbSize, options);

  desktopCapturer.getSources({ types: ["screen"] }).then(async sources => {
    for (const source of sources) {
      console.log("source.name ", source);
      if (source.name === "Entire Screen" || source.name === "Screen 1") {
        console.log("outout png ", source.thumbnail.toPNG());
        var dn = Date.now();
        fs.writeFile(
          "screenshots/test_" + dn + ".png",
          source.thumbnail.toPNG(),
          function(err) {
            if (err) throw err;
            console.log("Replaced!");
          }
        );

        //const screenshotPath = path.join(os.tmpdir(), "screenshot.png");

        // fs.writeFile(screenshotPath, source.thumbnail.toPng(), function(error) {
        //   if (error) return console.log(error);
        //   shell.openExternal("file://" + screenshotPath);
        //   // Const message = ` save screenshot to ${screenshotpath}`
        //   console.log(` save screenshot to ${screenshotPath}`);
        // });
      }
    }
  });

  /*
  desktopCapturer.getSources(options).than(sources => {
    console.log("in getSources ");
    //if (error) return console.log("desktopCapturer error", error);

    sources.forEach(function(source) {
      console.log("in sources loop ", source.name);

      if (source.name === "Entire screen" || source.name === "Screen 1") {
        // const screenshotPath = path.join(os.tmpdir(), "screenshot.png");
        console.log("ource.thumbnail.toPng() ", source.thumbnail.toPng());
        // fs.writeFile(screenshotPath, source.thumbnail.toPng(), function(error) {
        //   if (error) return console.log(error);
        //   shell.openExternal("file://" + screenshotPath);
        //   // Const message = ` save screenshot to ${screenshotpath}`
        //   console.log(` save screenshot to ${screenshotPath}`);
        // });
      }
    });
  }); */
}, 5000);

// function determineScreenShotSize() {
//   const screenSize = electronScreen.getPrimaryDisplay().workAreaSize;
//   const maxDimension = Math.max(screenSize.width, screenSize.height);
//   return {
//     width: maxDimension * window.devicePixelRatio,
//     height: maxDimension * window.devicePixelRatio
//   };
// }
//import { remote } from "electron";
//import fs from "fs";
//import Vue from "electron";

// const remote = require("electron").remote;
// // const remote = require("electron");
// // const BrowserWindow = remote.BrowserWindow;
//console.log("remote load ", remote);

setTimeout(function() {
  console.log("setTimeout other");

  // fullscreenScreenshot(function(base64data) {
  //   // Draw image in the img tag
  //   console.log("fullscreenScreenshot", base64data);
  // }, "image/png");

  // const webContents = remote.getCurrentWebContents();
  // console.log("webContents ", webContents)
  /*var dn = Date.now();
  webContents
    .capturePage({
      x: 0,
      y: 0,
      width: 1000,
      height: 2000
    })
    .then(img => {
      console.log("img ", img.isEmpty(), img);
      fs.writeFile("screenshots/test_" + dn + ".png", img.toPNG(), function(
        err
      ) {
        if (err) throw err;
        console.log("Replaced!");
      });
    });
*/
  // remote.getCurrentWebContents().capturePage(function(img) {
  //   console.log("image ", img.toPng());
  //   //remote.require("fs").writeFile(opt.filename, img.toPng(), cb);
  // });
  /*remote
    .getCurrentWindow()
    .capturePage({
      x: 0,
      y: 0,
      width: 1000,
      height: 2000
    })
    .then(img => {
      console.log("img ", img.isEmpty(), img);
      //console.log("image ", img.getBitmap());
      //var b64 = Buffer.from(img.toJPEG(90)).toString("base64");
      //console.log("b64 ", b64);
      var dn = Date.now();
      fs.writeFile("screenshots/test_" + dn + ".jpeg", img.toJPEG(90), function(err) {
        if (err) throw err;
        console.log("Replaced!");
      });
    });
    */
}, 5000);

// // @ is an alias to /src
// //module.exports = screenshot

// function screenshot(opt, cb) {
//   cb = cb || function() {};
//   //var remote;
//   try {
//     // const { remote } = require("electron").remote;
//     console.log("remote in screenshot ", remote);
//     setTimeout(function() {
//       remote.getCurrentWindow().capturePage(function handleCapture(img) {
//         console.log("image ", opt.filename, img.toPng());
//         remote.require("fs").writeFile(opt.filename, img.toPng(), cb);
//       });
//     }, opt.delay);
//   } catch (e) {
//     //remote = require('' + 'remote')
//     console.log("remote not found.");
//   }
// }

export default {
  name: "Test",
  methods: {
    cap() {
      console.log("cap work");

      // screenshot(
      //   {
      //     filename: "test.png",
      //     delay: 1000
      //   },
      //   function(d) {
      //     console.log("d ", d);
      //   }
      // );
    }
  }
};
</script>
