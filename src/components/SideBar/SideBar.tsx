import { JSX } from "react";
import { Layout, Menu, theme } from "antd";
import ContractsIcon from "@assets/contracts.svg";
import RocketIcon from "@assets/rocket.svg";
import CalendarIcon from "@assets/calendar.svg";
import DealsIcon from "@assets/deals.svg";
import ApplicationIcon from "@assets/application.svg";
import UsersIcon from "@assets/users.svg";
import IncrementIcon from "@assets/increment.svg";

import styles from "./SideBar.module.scss";

const SideBar = (): JSX.Element => {
  const { Sider } = Layout;

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const sideBarItems = [
    {
      key: "1",
      icon: (
        <span>
          <img src={ContractsIcon} alt="" />
        </span>
      ),
      label: "Договоры ДМС",
    },
    {
      key: "2",
      icon: (
        <span>
          <img src={RocketIcon} alt="" />
        </span>
      ),
      label: "Программы страхования",
    },
    {
      key: "3",
      icon: (
        <span>
          <img src={CalendarIcon} alt="" />
        </span>
      ),
      label: "Застрахованные",
    },
    {
      key: "4",
      icon: (
        <span>
          <img src={DealsIcon} alt="" />
        </span>
      ),
      label: "Сделки",
    },
    {
      key: "5",
      icon: (
        <span>
          <img src={ApplicationIcon} alt="" />
        </span>
      ),
      label: "Заявки",
    },
    {
      key: "6",
      icon: (
        <span>
          <img src={UsersIcon} alt="" />
        </span>
      ),
      label: "Пользователи",
    },
  ];

  return (
    <Sider width={240} style={{ background: colorBgContainer }}>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{ height: "100%", borderRight: 0 }}
        items={sideBarItems}
      />
      <div className={styles.wrapperBtn}>
        <button className={styles.btn}>
          <span className={styles.text}>Создать заявку</span>
          <img className={styles.increment} src={IncrementIcon} alt="" />
        </button>
      </div>
    </Sider>
  );
};

export { SideBar };
