import { JSX } from "react";

import { Typography, Flex } from "antd";

import styles from "./ContractNumber.module.scss";

const ContractNumber = (): JSX.Element => {
  const { Text } = Typography;
  return (
    <Flex className={styles.contract}>
      <Text className={styles.number}>Договор № 77-МЮ-3861-23/0193</Text>
      <Text className={styles.data}>
        ООО «Смарт Солюшн» 11.03.2023 — 10.03.2024
      </Text>
      <Text className={styles.status}>Действующий</Text>
    </Flex>
  );
};

export { ContractNumber };
