const OpenAI = require("openai")
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

async function CreateFineTune(fileId) {
    try {
        const response = await openai.fineTunes.create({
            training_file: fileId,
            model: "davinci",
            suffix: "munibot-upeu",
        })
        return response
    } catch (error) {
        throw Error(error.error.message)
    }
}

async function ListFineTune() {
    try {
        const response = await openai.fineTunes.list()
        return response
    } catch (error) {
        throw Error(error.error.message)
    }
}

async function RetrieveFineTune(fineTubeId) {
    try {
        const response = await openai.fineTunes.retrieve(fineTubeId)
        return response
    } catch (error) {
        throw Error(error.error.message)
    }
}

async function CancelFineTune(fineTubeId) {
    try {
        const response = await openai.fineTunes.cancel(fineTubeId)
        return response
    } catch (error) {
        console.log('ERR', error.message)
        throw Error(error.error.message)
    }
}

async function DeleteModelFineTune(model) {
    try {
        const response = await openai.models.delete(model)
        return response
    } catch (error) {
        console.log(error.message)
        throw Error(error.error.message)
    }
}

module.exports = {
    CreateFineTune,
    ListFineTune,
    RetrieveFineTune,
    CancelFineTune,
    DeleteModelFineTune
}