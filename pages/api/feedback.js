import fs from "fs";
import path from "path";

const handler = async (req, res) => {
  if (req.method === "POST") {
    try {
      const { email, feedback } = req.body;
      const newFeedback = {
        id: new Date().toISOString(),
        email: email,
        feedback: feedback,
      };

      const filePath = await path.join(process.cwd(), "data", "feedback.json");
      const fileData = await fs.readFileSync(filePath);
      let data = [];
      if (fileData.length > 0) {
        data = await JSON.parse(fileData);
        data.push(newFeedback);
        await fs.writeFileSync(filePath, JSON.stringify(data));
      } else {
        data.push(newFeedback);
        await fs.writeFileSync(filePath, JSON.stringify(data));
      }
      await res
        .status(201)
        .json({ message: "successful", feedback: newFeedback });
    } catch (e) {
      console.log("Invalid JSON inside cart data file: ", e);
    }
  } else {
    await res.status(200).json({ message: "this works" });
  }
};

export default handler;
