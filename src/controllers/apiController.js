const fileService = require("../services/file/fileService")

async function Test(req, res) {
    res.send("test ok")
}

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

async function RetrieveFile(req, res) {
    const fileId = req.query["fileId"]
    try {
        const response = await fileService.RetrieveFile(fileId)
        res.send(response)
    } catch (error) {
        if (error.message === "fileId not found")
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

module.exports = {
    Test,
    TransformData,
    UploadFile,
    ListFiles,
    RetrieveFile,
    DeleteFile
}