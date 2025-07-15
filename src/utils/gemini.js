import { GoogleGenerativeAI } from "@google/generative-ai";
import { GEMINI_KEY } from "./constants";

const apiKey = GEMINI_KEY
const genAI = new GoogleGenerativeAI(apiKey);

export default genAI;
