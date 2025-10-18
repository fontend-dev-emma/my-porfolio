"use server";

import { supabase } from "./supabase";

export async function createMessage(feedbackData) {
  const newFeedback = {
    ...feedbackData,
  };

  const { data, error } = await supabase.from("messages").insert([newFeedback]).select();

  if (error) throw new Error(error.message);

  return { success: true, data };
}
