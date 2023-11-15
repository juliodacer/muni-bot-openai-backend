const fileService = require("../services/file/fileService")
const fineTuneService = require("../services/file/fineTuneServices")
const openAIService = require("../services/file/openAIService")

async function Test(req, res) {
    res.send("test ok")
}

//#region File
async function TransformData(req, res) {
    await fileService.TransformData()
    res.send()
}

async function UploadFile(req, res) {
    const response = await fileService.UploadFile()
    res.send(response)
}

async function ListFiles(req, res) {
    const response = await fileService.ListFiles()
    res.send(response)
}

async function RetrieveFile(req, res) {
    const fileId = req.query["fileId"]
    try {
        const response = await fileService.RetrieveFile(fileId)
        res.send(response)
    } catch (error) {
        if (error.message === "fileId not found")
            res.status(404).send(error.message)
        res.status(404).send(error.message)
    }
}

async function DeleteFile(req, res) {
    const fileId = req.query["fileId"]
    try {
        const response = await fileService.DeleteFile(fileId)
        res.send(response)
    } catch (error) {
        if (error.message === "fileId not found")
            res.status(404).send(error.message)
    }
}
//#endregion

//#region FineTune
async function CreateFineTune(req, res) {
    const fileId = req.query["fileId"]
    try {
        const response = await fineTuneService.CreateFineTune(fileId)
        res.send(response)
    } catch (error) {
        console.log(error.message)
        res.status(404).send(error.message)
    }
}

async function ListFineTune(req, res) {
    try {
        const response = await fineTuneService.ListFineTune()
        res.send(response)
    } catch (error) {
        console.log(error.message)
        res.status(404).send(error.message)
    }
}

async function RetrieveFineTune(req, res) {
    const fineTuneId = req.query["fineTuneId"]
    try {
        const response = await fineTuneService.RetrieveFineTune(fineTuneId)
        res.send(response)
    } catch (error) {
        console.log(error.message)
        res.status(404).send(error.message)
    }
}

async function CancelFineTune(req, res) {
    const fineTuneId = req.query["fineTuneId"]
    try {
        const response = await fineTuneService.CancelFineTune(fineTuneId)
        res.send(response)
    } catch (error) {
        console.log(error.message)
        res.status(404).send(error.message)
    }
}

async function DeleteModelFineTune(req, res) {
    const model = req.query["model"]
    console.log('model', model)
    try {
        const response = await fineTuneService.DeleteModelFineTune(model)
        res.send(response)
    } catch (error) {
        console.log(error.message)
        res.status(404).send(error.message)
    }
}

//#endregion

async function GetMessage(req, res) {
    const message = req.query["message"]
    try {
        const response = await openAIService.GetMessage(message)
        console.log('responseGetMessage', response)
        res.send(response)
    } catch (error) {
        console.log(error.message)
        res.status(404).send(error.message)
    }
}

module.exports = {
    Test,
    TransformData,
    UploadFile,
    ListFiles,
    RetrieveFile,
    DeleteFile,
    CreateFineTune,
    ListFineTune,
    RetrieveFineTune,
    CancelFineTune,
    DeleteModelFineTune,
    GetMessage
}