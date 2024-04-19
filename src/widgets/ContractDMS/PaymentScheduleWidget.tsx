import { JSX } from "react";

import styles from "./PaymentScheduleWidget.module.scss";
import { Tabs, TabsProps } from "antd";
import { PaymentSchedule } from "@entities/ContractDMS/PaymentSchedule/PaymentSchedule";

const PaymentScheduleWidget = (): JSX.Element => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Обзор",
      children: "Content of Tab Pane 1",
    },
    {
      key: "2",
      label: "График платежей",
      children: <PaymentSchedule />,
    },
    {
      key: "3",
      label: "История изменений",
      children: "Content of Tab Pane 3",
    },
  ];

  return (
    <div className={styles.tabs}>
      <Tabs defaultActiveKey="2" items={items} />
    </div>
  );
};

export { PaymentScheduleWidget };
