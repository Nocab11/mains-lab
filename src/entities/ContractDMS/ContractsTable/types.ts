export enum EPaymentStatus {
  PAID = 1,
  NOT_PAID = 2,
}

export interface IPaymentPeriod {
  paymentPeriodStartDate: string;
  paymentPeriodEndDate: string;
}

export interface DataType {
  key: string;
  paymentNumber: string;
  paymentDate: string;
  paymentPeriod: IPaymentPeriod;
  contractPeriodTotalSum: number;
  changedTotalSum: number | null;
  paymentStatus: EPaymentStatus;
  enabled: boolean;
}
