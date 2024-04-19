import {
  Breadcrumb,
  Col,
  ConfigProvider,
  Layout,
  Row,
  Select,
  theme,
} from "antd";
import defaultTheme, { direction } from "./themes/defaultTheme";
import ContractsTable from "./tables/constracts";
import { HeaderContent } from "@components/HeaderContent/HeaderContent";
import { Avatar } from "@components/Avatar/Avatar";
import { Notification } from "@components/Notification/Notification";
import { Logout } from "@components/Logout/Logout";
import { ContractNumber } from "@components/ContractNumber/ContractNumber";
import { TabItems } from "@components/Tabs/TabItems";
import { SideBar } from "@components/SideBar/SideBar";
import { PaymentSchedule } from "@components/PaymentSchedule/PaymentSchedule";

interface IOptionType {
  label: string;
  value: number | string;
}

const contactOptions: IOptionType[] = [
  { label: "Договор 1", value: 1 },
  { label: "Договор 2", value: 2 },
];

const insuranceOptions: IOptionType[] = [
  { label: "Страхование 1", value: 1 },
  { label: "Страхование 2", value: 2 },
];

function App() {
  const { Header, Content } = Layout;
  const {
    token: { borderRadiusLG },
  } = theme.useToken();

  return (
    <ConfigProvider theme={defaultTheme} direction={direction}>
      <Header style={{ alignItems: "center" }}>
        <Row align="middle" justify="space-between">
          <Col>
            <HeaderContent />
          </Col>
          <Col style={{ display: "flex", alignItems: "center" }}>
            <Select
              style={{ width: 180, height: 24 }}
              placeholder="Выберите договоры"
              options={contactOptions}
            />
            <Select
              style={{ width: 180, height: 24, marginLeft: 15 }}
              placeholder="Выберите страхователя"
              options={insuranceOptions}
            />
            <Notification />
            <Avatar />
            <Logout />
          </Col>
        </Row>
      </Header>
      <Layout>
        <SideBar />
        <Layout>
          <Breadcrumb style={{ padding: "20px" }}>
            <Breadcrumb.Item>Главная</Breadcrumb.Item>
            <Breadcrumb.Item>Договоры ДМС</Breadcrumb.Item>
          </Breadcrumb>
          <ContractNumber />
          <TabItems />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              padding: "0 20px",
            }}
          >
            <PaymentSchedule />
          </div>
          <Content
            style={{
              margin: "20px 0 0",
              padding: "0 20px",
              // background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <ContractsTable></ContractsTable>
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
}

export default App;
