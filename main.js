#!/usr/bin/env node

// take input in node
let inputArr = process.argv.slice(2);
// console.log(inputArr);
// let fs = require("fs");
// let path = require("path");
let helpObj = require("./commands/help");
let treeObj = require("./commands/tree");
let organizeObj = require("./commands/organize");

// node main.js tree "directoryPath"
// node main.js organize "directoryPath"
// node main.js help

let command = inputArr[0];
let types = {
  video: ["mp4", "mkv", "avi", "mov"],
  archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz", "csv"],
  documents: [
    "docx",
    "doc",
    "pdf",
    "xlsx",
    "xls",
    "odt",
    "ods",
    "odp",
    "odg",
    "odf",
    "txt",
    "ps",
    "tex",
  ],
  app: ["exe", "dmg", "pkg", "deb"],
  audio: ["mp3"],
  images: ["jpg", "jpeg", "png", "svg"],
};
switch (command) {
  case "tree":
    treeObj.treeKey(inputArr[1]);
    break;

  case "organize":
    organizeObj.organizeKey(inputArr[1]);
    break;

  case "help":
    helpObj.helpKey();
    break;

  default:
    console.log("Please input right command ❤");
    break;
}
