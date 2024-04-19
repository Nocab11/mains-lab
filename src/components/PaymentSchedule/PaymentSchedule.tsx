import { JSX } from "react";

import styles from "./PaymentSchedule.module.scss";
import { PaymentScheduleCard } from "@components/PaymentSchedule/PaymentScheduleCard";
import { IPaymentSchedule } from "@components/PaymentSchedule/types";

const PaymentSchedule = (): JSX.Element => {
  const paymentSchedule: IPaymentSchedule[] = [
    {
      id: 1,
      sum: 325457,
      info: {
        date: "17.03.2024",
        total: null,
        balance: null,
      },
      text: "Платёж просрочен",
      status: 1,
    },
    {
      id: 2,
      sum: 325457,
      info: {
        date: "25.04.2024",
        total: null,
        balance: null,
      },
      text: "Ближайший платёж",
      status: 2,
    },
    {
      id: 3,
      sum: null,
      info: {
        date: null,
        total: 2732545,
        balance: {
          count: 231745,
          flag: false,
        },
      },
      text: "Всего по договору с учётом изменений",
      status: 3,
    },
  ];

  return (
    <div className={styles.payment}>
      {paymentSchedule.map((item) => (
        <PaymentScheduleCard
          key={item.id}
          id={item.id}
          sum={item.sum}
          info={item.info}
          text={item.text}
          status={item.status}
        />
      ))}
    </div>
  );
};

export { PaymentSchedule };
