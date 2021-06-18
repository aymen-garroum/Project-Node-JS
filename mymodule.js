module.exports = function (folder, file_type, callback)
{    
let fs = require("fs")
    
fs.readdir(folder,{withFileTypes:true}, function(error, files){if(error){return callback(error)}

let filtered_files = []

for(let i = 0; i < files.length; i++)
{
    if(files[i].name.includes("." + file_type)) {filtered_files.push(files[i].name)}
}

    callback(null, filtered_files) 

})

}



