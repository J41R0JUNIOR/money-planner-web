import { auth } from "@/services/auth";
import { baseURL } from "@/types/baseURL";
import type { EventType } from "@/types/event";

export async function GetEventsAction(): Promise<EventType[]> {
  let response: Response;

  try {
    response = await fetch(`${baseURL.getBaseURL()}/planner/event`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${auth.getToken()}`,
      },
    });
  } catch {
    throw new Error("Erro de conexão com o servidor");
  }

  if (!response.ok) {
    throw new Error("Erro ao buscar eventos");
  }
const data = await response.json();

console.log("dados recebidos",data);
console.log(Array.isArray(data));

return data ?? [];
}