"use server";

import { apiServer } from "@/lib/apis-server";

export const sendContactMessage = async (prevState, formData) => {
  const data = {
    full_name: formData.get("full_name"),
    email: formData.get("email"),
    category: formData.get("category"),
    message: formData.get("message"),
  };

  const res = await apiServer.createContactMessage(data);

  return {
    success: res?.success,
    message: res?.message,
  };
};
