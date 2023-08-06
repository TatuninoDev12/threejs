import express from "express";
import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();
const router = express.Router();
const config = new Configuration({ apiKey: process.env.OPEN_AI_API_KEY });
const apenai = new OpenAIApi(config);

router.route("/").get((req, res) => {
  res.status(200).json({ message: "hello from DALL.E 2.0" });
});

router.route("/").post(async (req, res) => {
  try {
    const { prompt } = req.body;
    const response = await apenai.createImage({
      prompt,
      n: 1,
      size: "256x256",
      response_format: "b64_json",
    });
    const image = response.data.data[0].b64_json;
    res.status(200).json({ photo: image });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
