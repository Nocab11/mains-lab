import React, { JSX } from "react";
import styles from "./ContractsTable.module.scss";
import { Table } from "antd";

import { dataContractsTable } from "@entities/ContractDMS/ContractsTable/constants";
import { useColumnsContractsTable } from "@entities/ContractDMS/ContractsTable/useColumnsContractsTable";

const ContractsTable = (): JSX.Element => {
  const columns = useColumnsContractsTable();

  return (
    <Table
      columns={columns}
      dataSource={dataContractsTable}
      rowClassName={(record) => (record.enabled ? "disabled-row" : "")}
      className={styles.paid}
    />
  );
};

export { ContractsTable };
