import { z } from "zod";
import { plannerService } from "@/services/planner";

const schema = z.object({
  account_id: z.string().min(1),
  category_id: z.string().min(1),
  name: z.string().min(1),
  description: z.string(),
  planned_event_status: z.string(),
  amount: z.number().positive(),
});

export async function createEventAction(data: unknown) {
  const values = schema.parse(data);

  await plannerService.createEvent({
    ...values,
    amount: {
      amount: values.amount,
      currency: "BRL",
    },
  });
}