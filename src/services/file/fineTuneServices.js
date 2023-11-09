const OpenAI = require("openai")
const openai = new OpenAI({ apiKey: "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" })

async function CreateFineTune(fileId) {
    try {
        const response = await openai.fineTunes.create({
            training_file: fileId,
            model: "davinci",
            suffix: "muni-chatbot",
        })
        return response
    } catch (error) {
        throw Error({ status: 400, data: error })
    }
}

module.exports = {
    CreateFineTune
}