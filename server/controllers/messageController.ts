import { Request, Response } from "express";
import { createMessage } from "../services/messageService";

interface MessageData {
  name: string;
  phone: string;
  message: string;
}

export const createMessageController = async (
  req: Request<{}, {}, MessageData>,
  res: Response
) => {
  try {
    const data = req.body;
    const newMessage = await createMessage(data);
    res.status(201).json({ success: true, data: newMessage });
  } catch (error: any) {
    res.status(400).json({ success: false, error: error.message });
  }
};
