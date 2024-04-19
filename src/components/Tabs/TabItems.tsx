import { JSX } from "react";

import { Tabs } from "antd";
import type { TabsProps } from "antd";

import styles from "./TabItems.module.scss";

const TabItems = (): JSX.Element => {
  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Обзор",
      children: "Content of Tab Pane 1",
    },
    {
      key: "2",
      label: "График платежей",
      children: "Content of Tab Pane 2",
    },
    {
      key: "3",
      label: "История изменений",
      children: "Content of Tab Pane 3",
    },
  ];

  return (
    <div className={styles.tabs}>
      <Tabs defaultActiveKey="2" items={items} onChange={onChange} />
    </div>
  );
};

export { TabItems };
