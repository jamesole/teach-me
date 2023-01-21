const Question = require("../models/question");
require("dotenv").config();

//OpenAI config
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  organization: process.env.OPENAI_ORG,
  apiKey: process.env.OPENAI_KEY,
});
const openai = new OpenAIApi(configuration);

const askQuestion = async (req, res) => {
  try {
    var search = req.body.search;
    if (search[-1] !== "?") {
      search = search + "?";
    }
    if (search && search !== "") {
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Explain the following topic, as if you were trying to explain it to a class full of 5th grade students: ${search}`,
        max_tokens: 3000,
        temperature: 0,
      });
      res.json({ prompt: search, response: response.data.choices[0].text });
    }
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { askQuestion };
