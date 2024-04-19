import { Table, TableProps } from "antd";

import styles from "./Table.module.scss";
import classNames from "classnames";
import { formattedNumber } from "@utils/formattedNumber";

enum EPaymentStatus {
  PAID = 1,
  NOT_PAID = 2,
}

interface IPaymentPeriod {
  paymentPeriodStartDate: string;
  paymentPeriodEndDate: string;
}

interface DataType {
  key: string;
  paymentNumber: string;
  paymentDate: string;
  paymentPeriod: IPaymentPeriod;
  contractPeriodTotalSum: number;
  changedTotalSum: number | null;
  paymentStatus: EPaymentStatus;
  enabled: boolean;
}

const columns: TableProps<DataType>["columns"] = [
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

const data: DataType[] = [
  {
    key: "1",
    paymentNumber: "001",
    paymentDate: "05.01.2024",
    paymentPeriod: {
      paymentPeriodStartDate: "01.01.2024",
      paymentPeriodEndDate: "31.01.2024",
    },
    contractPeriodTotalSum: 235748,
    changedTotalSum: 235748,
    paymentStatus: 1,
    enabled: false,
  },
  {
    key: "2",
    paymentNumber: "002",
    paymentDate: "05.02.2024",
    paymentPeriod: {
      paymentPeriodStartDate: "01.02.2024",
      paymentPeriodEndDate: "29.02.2024",
    },
    contractPeriodTotalSum: 235748,
    changedTotalSum: 235748,
    paymentStatus: 1,
    enabled: false,
  },
  {
    key: "3",
    paymentNumber: "003",
    paymentDate: "05.03.2024",
    paymentPeriod: {
      paymentPeriodStartDate: "01.03.2024",
      paymentPeriodEndDate: "31.03.2024",
    },
    contractPeriodTotalSum: 235748,
    changedTotalSum: 235748,
    paymentStatus: 1,
    enabled: false,
  },
  {
    key: "4",
    paymentNumber: "004",
    paymentDate: "05.04.2024",
    paymentPeriod: {
      paymentPeriodStartDate: "01.04.2024",
      paymentPeriodEndDate: "31.04.2024",
    },
    contractPeriodTotalSum: 235748,
    changedTotalSum: 271295,
    paymentStatus: 2,
    enabled: false,
  },
  {
    key: "5",
    paymentNumber: "005",
    paymentDate: "05.05.2024",
    paymentPeriod: {
      paymentPeriodStartDate: "01.05.2024",
      paymentPeriodEndDate: "31.05.2024",
    },
    contractPeriodTotalSum: 235748,
    changedTotalSum: null,
    paymentStatus: 2,
    enabled: true,
  },
  {
    key: "6",
    paymentNumber: "006",
    paymentDate: "05.06.2024",
    paymentPeriod: {
      paymentPeriodStartDate: "01.06.2024",
      paymentPeriodEndDate: "31.06.2024",
    },
    contractPeriodTotalSum: 235748,
    changedTotalSum: null,
    paymentStatus: 2,
    enabled: true,
  },
  {
    key: "7",
    paymentNumber: "007",
    paymentDate: "05.07.2024",
    paymentPeriod: {
      paymentPeriodStartDate: "01.07.2024",
      paymentPeriodEndDate: "31.07.2024",
    },
    contractPeriodTotalSum: 235748,
    changedTotalSum: null,
    paymentStatus: 2,
    enabled: true,
  },
  {
    key: "8",
    paymentNumber: "008",
    paymentDate: "05.08.2024",
    paymentPeriod: {
      paymentPeriodStartDate: "01.08.2024",
      paymentPeriodEndDate: "31.08.2024",
    },
    contractPeriodTotalSum: 235748,
    changedTotalSum: null,
    paymentStatus: 2,
    enabled: true,
  },
  {
    key: "9",
    paymentNumber: "009",
    paymentDate: "05.09.2024",
    paymentPeriod: {
      paymentPeriodStartDate: "01.09.2024",
      paymentPeriodEndDate: "31.09.2024",
    },
    contractPeriodTotalSum: 235748,
    changedTotalSum: null,
    paymentStatus: 2,
    enabled: true,
  },
  {
    key: "10",
    paymentNumber: "010",
    paymentDate: "05.10.2024",
    paymentPeriod: {
      paymentPeriodStartDate: "01.10.2024",
      paymentPeriodEndDate: "31.10.2024",
    },
    contractPeriodTotalSum: 235748,
    changedTotalSum: null,
    paymentStatus: 2,
    enabled: true,
  },
  {
    key: "11",
    paymentNumber: "011",
    paymentDate: "05.11.2024",
    paymentPeriod: {
      paymentPeriodStartDate: "01.11.2024",
      paymentPeriodEndDate: "31.11.2024",
    },
    contractPeriodTotalSum: 235748,
    changedTotalSum: null,
    paymentStatus: 2,
    enabled: true,
  },
  {
    key: "12",
    paymentNumber: "012",
    paymentDate: "05.12.2024",
    paymentPeriod: {
      paymentPeriodStartDate: "01.12.2024",
      paymentPeriodEndDate: "31.12.2024",
    },
    contractPeriodTotalSum: 235748,
    changedTotalSum: null,
    paymentStatus: 2,
    enabled: true,
  },
];

const ContractsTable: React.FC = () => (
  <Table
    columns={columns}
    dataSource={data}
    rowClassName={(record) => (record.enabled ? "disabled-row" : "")}
    className={styles.paid}
  />
);

export default ContractsTable;
