const OpenAI = require("openai")
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

async function GetMessage(message) {
    try {
        const response = await openai.completions.create({
            model: "davinci:ft-personal:muni-chatbot-2023-11-09-07-18-59",
            // messages: [{ "role": "user", "content": message }],
            // model: "davinci:ft-personal:muni-chatbot-2023-11-09-07-18-59",
            prompt: message,
            max_tokens: 150,
            temperature: 0.8,
            // topP: 1,
            // stop: ["END"],
            // n: 2,
        })

        if (response?.choices?.length > 0)
            return response.choices[0]?.text

    } catch (error) {
        console.log('ERROR_GetMessage', error)
        throw Error("Lo siento, ocurrio un problema, intentalo mas tarde")
    }
}

module.exports = {
    GetMessage
}