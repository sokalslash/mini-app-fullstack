import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";

interface FormData {
  name: string;
  phone: string;
  message: string;
}

const FormPage: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      await axios.post(
        import.meta.env.VITE_API_URL || "http://localhost:5000/api/messages",
        data
      );
      message.success("Сообщение отправлено!");
      reset();
    } catch (error: any) {
      message.error(error.response?.data?.error || "Неизвестная ошибка");
    } finally {
      setLoading(false);
    }
  };

  const validatePhone = (value: string): string | boolean => {
    const regex = /^(?:\+375|80)\d{9}$/;
    return regex.test(value) || "Неверный формат (+375... или 80...)";
  };

  return (
    <div style={{ maxWidth: "400px", margin: "100px auto" }}>
      <h2>Отправить сообщение</h2>
      <Form layout="vertical" onSubmitCapture={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={control}
          rules={{
            required: "Обязательно",
            minLength: { value: 2, message: "Минимум 2 символа" },
          }}
          render={({ field }) => (
            <Form.Item
              label="Имя"
              help={errors.name?.message}
              validateStatus={errors.name ? "error" : ""}
            >
              <Input {...field} placeholder="Имя" />
            </Form.Item>
          )}
        />
        <Controller
          name="phone"
          control={control}
          rules={{ required: "Обязательно", validate: validatePhone }}
          render={({ field }) => (
            <Form.Item
              label="Телефон"
              help={errors.phone?.message}
              validateStatus={errors.phone ? "error" : ""}
            >
              <Input {...field} placeholder="Телефон (+375... или 80...)" />
            </Form.Item>
          )}
        />
        <Controller
          name="message"
          control={control}
          rules={{
            required: "Обязательно",
            minLength: { value: 2, message: "Минимум 2 символа" },
          }}
          render={({ field }) => (
            <Form.Item
              label="Сообщение"
              help={errors.message?.message}
              validateStatus={errors.message ? "error" : ""}
            >
              <Input.TextArea {...field} placeholder="Сообщение" />
            </Form.Item>
          )}
        />
        <Button type="primary" htmlType="submit" loading={loading} block>
          Отправить
        </Button>
      </Form>
    </div>
  );
};

export default FormPage;
