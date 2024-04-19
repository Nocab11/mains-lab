import React from "react";
import { Layout } from "antd";

import styles from "./ContractsTableWidget.module.scss";

import { ContractsTable } from "@entities/ContractDMS/ContractsTable/ContractsTable";

const ContractsTableWidget = (): JSX.Element => {
  const { Content } = Layout;

  return (
    <Content className={styles.content}>
      <ContractsTable />
    </Content>
  );
};

export { ContractsTableWidget };
