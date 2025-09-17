import Message from "../models/messageModel";

interface MessageData {
  name: string;
  phone: string;
  message: string;
}

const validatePhone = (phone: string): boolean => {
  const regex = /^(?:\+375|80)\d{9}$/;
  return regex.test(phone);
};

export const createMessage = async (data: MessageData) => {
  if (data.name.length < 2)
    throw new Error("Имя должно быть минимум 2 символа");
  if (!validatePhone(data.phone))
    throw new Error("Неверный формат телефона (+375... или 80...)");
  if (data.message.length < 2)
    throw new Error("Сообщение должно быть минимум 2 символа");

  const message = new Message(data);
  await message.save();
  return message;
};
