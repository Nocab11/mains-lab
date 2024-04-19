import { JSX } from "react";
import { Breadcrumb, Flex, Typography } from "antd";

import styles from "./BreadcrumbWidget.module.scss";

const BreadcrumbWidget = (): JSX.Element => {
  const { Text } = Typography;
  return (
    <>
      <Breadcrumb className={styles.breadcrumb}>
        <Breadcrumb.Item>Главная</Breadcrumb.Item>
        <Breadcrumb.Item>Договоры ДМС</Breadcrumb.Item>
      </Breadcrumb>
      <Flex className={styles.contract}>
        <Text className={styles.number}>Договор № 77-МЮ-3861-23/0193</Text>
        <Text className={styles.data}>
          ООО «Смарт Солюшн» 11.03.2023 — 10.03.2024
        </Text>
        <Text className={styles.status}>Действующий</Text>
      </Flex>
    </>
  );
};

export { BreadcrumbWidget };
