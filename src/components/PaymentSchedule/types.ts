export interface IPaymentScheduleInfo {
  date: string | null;
  total: number | null;
  balance: null | IBalance;
}

export interface IBalance {
  count: number;
  flag: boolean;
}

export enum IPaymentScheduleStatus {
  OVERDUE_PAYMENT_DETAILS = 1,
  NEXT_PAYMENT = 2,
  UPDATED_TOTAL_AMOUNT = 3,
}

export interface IPaymentSchedule {
  id: number;
  sum: number | null;
  info: IPaymentScheduleInfo;
  text: string;
  status: IPaymentScheduleStatus;
}
