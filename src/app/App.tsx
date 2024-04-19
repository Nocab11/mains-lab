import { JSX } from "react";

import { ConfigProvider, Layout } from "antd";
import defaultTheme, { direction } from "@shared/themes/defaultTheme";

import { ContractDmsPages } from "@pages/ContractDMS/ContractDMSPages";
import { HeaderMain } from "@shared/components/HeaderContent/HeaderMain";
import { SideBar } from "@shared/components/SideBar/SideBar";

const App = (): JSX.Element => {
  return (
    <ConfigProvider theme={defaultTheme} direction={direction}>
      <HeaderMain />
      <Layout>
        <SideBar />
        <ContractDmsPages />
      </Layout>
    </ConfigProvider>
  );
};

export default App;
