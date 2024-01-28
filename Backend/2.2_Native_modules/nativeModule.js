const fs = require("fs");
const { buffer } = require("stream/consumers");

// fs.writeFile("message.html", "Hello from NodeJS!", (err)=>{
//     if (err) throw err;
//     console.log("The file has been saved!");
// });'2.2_Native_modules\message.txt'
const fileDir = "C:/Users/Yaroslav/OneDrive/Рабочий стол/webDevProjects/Backend/2.2_Native_modules/message.txt";
fs.readFile(fileDir, ,(err, data)=>{
    if(err){
        console.log("Huston we have an error", err);
        return;
    }
    console.log(data.toString());
});