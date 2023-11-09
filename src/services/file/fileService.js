const xlxs = require("xlsx")
const fs = require("fs")
const OpenAI = require("openai")
const openai = new OpenAI({ apiKey: "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" })
// apiKey: process.env.OPENAI_API_KEY,

async function TransformData() {
    let workbook = xlxs.readFile("src/shared/data-set.xlsx")
    let sheet_name_list = workbook.SheetNames;
    let xlData = xlxs.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]])

    for (const item of xlData) {
        let object = `{"prompt": "${item.Question} ->", "completion": "${item.Answer} END"}`
        await fs.appendFileSync("src/shared/data-set.jsonl", object, "utf8", function () { })
        await fs.appendFileSync("src/shared/data-set.jsonl", "\r\n", "utf8", function () { })
    }
}

async function UploadFile() {
    const response = await openai.files.create({
        file: fs.createReadStream("src/shared/data-set.jsonl"),
        purpose: "fine-tune",
    })
    return response
}

module.exports = {
    TransformData,
    UploadFile
}