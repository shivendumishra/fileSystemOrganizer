let fs = require("fs");
let path = require("path");
function treefn(dirPath) {
    // console.log("Tree command implemented for, " , dirPath);
    // let destPath;
    if(dirPath == undefined){
        treeHelper(process.cwd(), "");
        return;
    } else {
        let doesExist = fs.existsSync(dirPath);
        if(doesExist){
            treeHelper(dirPath, "");
        } else{
            console.log("Kindly enter the correct path");
            return;
        }
    }
}

function treeHelper(dirPath, indent){
    // is file or folder
    let isFile = fs.lstatSync(dirPath).isFile();
    if(isFile){
        let fileName = path.basename(dirPath);
        console.log(indent + "├──" + fileName);
    } else{
        let dirName = path.basename(dirPath);
        console.log(indent + "└──" + dirName);
        let children = fs.readdirSync(dirPath);
        for(let i=0; i<children.length; i++){
            let childPath = path.join(dirPath, children[i]);
            treeHelper(childPath, indent + "\t");
        }
    }
}

module.exports = {
    treeKey : treefn
}