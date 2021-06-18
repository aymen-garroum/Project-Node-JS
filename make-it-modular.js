let mod = require("./mymodule")

let folder = process.argv[2]
let file_type = process.argv[3]

mod(folder, file_type, function(error, filtered_files){

    if(error){console.log("Error")}

    filtered_files.forEach(el => console.log(el))

})

{

}