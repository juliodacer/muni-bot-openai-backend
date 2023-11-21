// const xlxs = require("xlsx")
// const fs = require("fs")
const OpenAI = require("openai")
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

// async function TransformData() {
//     let workbook = xlxs.readFile("src/shared/data-set.xlsx")
//     let sheet_name_list = workbook.SheetNames;
//     let xlData = xlxs.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]])

//     for (const item of xlData) {
//         let object = `{"prompt": "${item.Question} ->", "completion": "${item.Answer} END"}`
//         await fs.appendFileSync("src/shared/data-set.jsonl", object, "utf8", function () { })
//         await fs.appendFileSync("src/shared/data-set.jsonl", "\r\n", "utf8", function () { })
//     }
// }

// async function UploadFile() {
//     const response = await openai.files.create({
//         file: fs.createReadStream("src/shared/data-set.jsonl"),
//         purpose: "fine-tune",
//     })
//     return response
// }

async function ListFiles() {
    const response = await openai.files.list()
    return response.body
}

async function RetrieveFile(fileId) {
    try {
        const response = await openai.files.retrieve(fileId)
        return response
    } catch (error) {
        throw new Error("fileId not found")
    }
}

async function DeleteFile(fileId) {
    try {
        const response = await openai.files.del(fileId)
        console.log('RESP', response)
        return response
    } catch (error) {
        console.log('ERROR_DELETE', error.error.message)
        throw new Error("fileId not found")
    }
}

module.exports = {
    //     TransformData,
    //     UploadFile,
    ListFiles,
    RetrieveFile,
    DeleteFile
}