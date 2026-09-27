import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

let messages = ["1st message", "2nd message", "3rd message"];

app.get("/get-messages", (_, res) => {
  res.json({ messages });
});

app.get("/test", (_, res) => {
  res.json({ message: "Test route is working" });
});

app.listen(PORT, () => {
  console.log(`Backend is listening on http://localhost:${PORT}`);
});
