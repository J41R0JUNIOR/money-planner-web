import { auth } from "./auth";
import { baseURL } from "@/types/baseURL";
import type { CreateEventRequest } from "@/types/money";

async function createEvent(request: CreateEventRequest) {
  const token = auth.getToken();

  const response = await fetch(`${baseURL}/planner/event`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(request),
  });

  if (!response.ok) {
    throw new Error(await response.text());
  }

  return response.json();
}

export const plannerService = {
  createEvent,
};