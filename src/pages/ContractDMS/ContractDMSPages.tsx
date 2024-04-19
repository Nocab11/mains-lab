import { JSX } from "react";
import { Layout } from "antd";
import { BreadcrumbWidget } from "@widgets/ContractDMS/BreadcrumbWidget";
import { PaymentScheduleWidget } from "@widgets/ContractDMS/PaymentScheduleWidget";
import { ContractsTableWidget } from "@widgets/ContractDMS/ContractsTableWidget";

const ContractDmsPages = (): JSX.Element => {
  return (
    <Layout>
      <BreadcrumbWidget />
      <PaymentScheduleWidget />
      <ContractsTableWidget />
    </Layout>
  );
};

export { ContractDmsPages };
