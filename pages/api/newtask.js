import { connectDB } from "@/utils/features";
import { Task } from "@/models/task";

const handler = async (req, res) => {
  await connectDB();

  await Task.create({
    title: "Sample text",
    description: "Sample description regarding title",
    user: "64e6f1a7e8f0f5a12b2f639c",
  });
  res.json({
    success: "true",
  });
};

export default handler;
