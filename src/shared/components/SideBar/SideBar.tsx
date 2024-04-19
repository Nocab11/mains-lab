import { JSX } from "react";
import { Layout, Menu } from "antd";

import styles from "./SideBar.module.scss";
import { useItemsSideBar } from "@shared/components/SideBar/useItemsSideBar";

const SideBar = (): JSX.Element => {
  const { Sider } = Layout;

  const items = useItemsSideBar();

  return (
    <>
      <Sider width={240}>
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{ height: "100%", borderRight: 0 }}
          items={items}
          className={styles.menu}
        />
      </Sider>
    </>
  );
};

export { SideBar };
