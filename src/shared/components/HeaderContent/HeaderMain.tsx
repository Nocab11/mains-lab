import { JSX } from "react";
import { Col, Layout, Row, Select } from "antd";
import { HeaderContent } from "@shared/components/HeaderContent/HeaderContent";
import { Notification } from "@shared/components/Notification/Notification";
import { Logout } from "@shared/components/Logout/Logout";
import {
  contactOptions,
  insuranceOptions,
} from "@shared/components/HeaderContent/constants";
import { Avatar } from "@shared/components/Avatar/Avatar";

const HeaderMain = (): JSX.Element => {
  const { Header } = Layout;

  return (
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
  );
};

export { HeaderMain };
