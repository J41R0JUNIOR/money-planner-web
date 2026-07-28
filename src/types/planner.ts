import type { Money } from "./money";

export type PlannedEventStatus =
  | "PENDING"
  | "COMPLETED"
  | "CANCELLED";

export interface CreateEventRequest {
  account_id: string;
  category_id: string;
  name: string;
  description: string;
  planned_event_status: PlannedEventStatus;
  amount: Money;
}

export interface PlannedEvent {
  id: string;
  user_id: string;
  account_id: string;
  category_id: string;
  name: string;
  description: string;
  planned_event_status: PlannedEventStatus;
  amount: Money;
}