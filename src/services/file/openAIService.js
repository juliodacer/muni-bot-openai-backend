const OpenAI = require("openai")
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

async function GetMessage(message) {
    try {
        const response = await openai.completions.create({
            model: "davinci:ft-personal:munibot-upeu-2023-11-21-10-34-55",
            // messages: [{ "role": "user", "content": message }],
            // model: "davinci:ft-personal:muni-chatbot-2023-11-09-07-18-59",
            prompt: message,
            max_tokens: 100,
            temperature: 0.3,
            // top_p: 1,
            stop: ["END"],
            // n: 1,
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