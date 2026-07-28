import type { Money } from "@/types/money";

export interface Account {
  id: string;
  name: string;
  balance: Money;
}