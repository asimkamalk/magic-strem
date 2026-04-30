import express from "express";
import { ENV } from "../lib/env.js";

const router = express.Router();

const JDoodleLanguages = {
  javascript: { language: "nodejs", versionIndex: "0" },
  python: { language: "python3", versionIndex: "3" },
  java: { language: "java", versionIndex: "3" },
};

router.post("/", async (req, res) => {
  const { language, code } = req.body;

  try {
    const config = JDoodleLanguages[language];
    if (!config) {
      return res.status(400).json({ error: `Unsupported language: ${language}` });
    }

    const response = await fetch("https://api.jdoodle.com/v1/execute", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        clientId: ENV.JDOODLE_CLIENT_ID,
        clientSecret: ENV.JDOODLE_CLIENT_SECRET,
        script: code,
        language: config.language,
        versionIndex: config.versionIndex,
      }),
    });

    const data = await response.json();
    
    // JDoodle returns statusCode 200 for successful execution, even if there is a compile error
    // It returns actual HTTP errors if the API request itself is malformed
    if (!response.ok) {
        return res.status(response.status).json(data);
    }

    res.json(data);
  } catch (error) {
    console.error("Error executing code via JDoodle:", error);
    res.status(500).json({ error: "Internal Server Error executing code" });
  }
});

export default router;
