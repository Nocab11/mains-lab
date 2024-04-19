import { TableProps } from "antd";
import {
  DataType,
  EPaymentStatus,
} from "@entities/ContractDMS/ContractsTable/types";
import { formattedNumber } from "@shared/utils/formattedNumber";
import classNames from "classnames";
import styles from "@entities/ContractDMS/ContractsTable/ContractsTable.module.scss";
import React from "react";

export const useColumnsContractsTable = (): TableProps<DataType>["columns"] => {
  return [
    {
      title: "№ платежа",
      dataIndex: "paymentNumber",
      key: "paymentNumber",
    },
    {
      title: "Дата платежа",
      dataIndex: "paymentDate",
      key: "paymentDate",
    },
    {
      title: "Период оплаты",
      dataIndex: "paymentPeriod",
      key: "paymentPeriod",
      render: ({ paymentPeriodStartDate, paymentPeriodEndDate }) => {
        return (
          <>
            {paymentPeriodStartDate} — {paymentPeriodEndDate}
          </>
        );
      },
    },
    {
      title: "Сумма по договору за период",
      dataIndex: "contractPeriodTotalSum",
      key: "contractPeriodTotalSum",
      render: (totalSum) => {
        return <>{totalSum ? formattedNumber(totalSum) : "—"}</>;
      },
    },
    {
      title: "Сумма с учётом изменений",
      dataIndex: "changedTotalSum",
      key: "changedTotalSum",
      render: (totalSum) => {
        return <>{totalSum ? formattedNumber(totalSum) : "—"}</>;
      },
    },
    {
      title: "Статус оплаты",
      dataIndex: "paymentStatus",
      key: "paymentStatus",
      render: (status, l) => {
        return (
          <div
            className={
              l.enabled
                ? classNames(styles.status, styles.statusEnabled)
                : styles.status
            }
          >
            {status === EPaymentStatus.PAID && (
              <span className={classNames(styles.value, styles.paid)}>
                Оплачено
              </span>
            )}
            {status === EPaymentStatus.NOT_PAID && (
              <span className={classNames(styles.value, styles.notPaid)}>
                Не Оплачено
              </span>
            )}
          </div>
        );
      },
    },
  ];
};
