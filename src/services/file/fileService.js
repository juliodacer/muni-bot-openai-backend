let xlxs = require("xlsx")
const fs = require("fs")

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

module.exports = {
    TransformData
}