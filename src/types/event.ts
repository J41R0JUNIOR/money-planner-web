import type { Money } from "./money";

export interface EventType {
  id: string;
  userId: string;
  accountId: string;
  categoryId: string;
  name: string;
  description: string;
  status: string;
  amount: Money;
  startDate: string;
  recurrence: string;
};
