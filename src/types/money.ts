export interface Money {
  /**
   * Valor armazenado em centavos.
   *
   * Exemplo:
   * 100   = R$ 1,00
   * 1050  = R$ 10,50
   * 350000 = R$ 3.500,00
   */
  amount: number;

  currency: "BRL";
}