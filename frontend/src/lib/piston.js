// Code Execution Service migrated to Judge0 CE via RapidAPI

const JUDGE0_API = "https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=false&wait=true";

const LANGUAGE_VERSIONS = {
  javascript: { language_id: 93 }, // Node.js 18.15.0
  python: { language_id: 71 }, // Python 3.8.1
  java: { language_id: 62 }, // Java OpenJDK 13.0.1
};

/**
 * @param {string} language - programming language
 * @param {string} code - source code to executed
 * @returns {Promise<{success:boolean, output?:string, error?: string}>}
 */
export async function executeCode(language, code) {
  try {
    const languageConfig = LANGUAGE_VERSIONS[language];

    if (!languageConfig) {
      return {
        success: false,
        error: `Unsupported language: ${language}`,
      };
    }

    const response = await fetch(JUDGE0_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
        "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY,
      },
      body: JSON.stringify({
        language_id: languageConfig.language_id,
        source_code: code,
      }),
    });

    if (!response.ok) {
      if (response.status === 403) {
        return {
          success: false,
          error: "API Key unauthorized. Did you click 'Subscribe to Test' on RapidAPI?",
        };
      }
      return {
        success: false,
        error: `HTTP error! status: ${response.status}`,
      };
    }

    const data = await response.json();

    // Judge0 Execution states (3 = Accepted)
    if (data.status.id === 3) {
      return {
        success: true,
        output: data.stdout || "No output",
      };
    } else {
      return {
        success: false,
        output: data.stdout || "",
        error: data.stderr || data.compile_output || data.status.description || "Execution failed",
      };
    }
  } catch (error) {
    return {
      success: false,
      error: `Failed to execute code: ${error.message}`,
    };
  }
}
