import React from "react";
import ContractsIcon from "@shared/assets/contracts.svg";
import RocketIcon from "@shared/assets/rocket.svg";
import CalendarIcon from "@shared/assets/calendar.svg";
import DealsIcon from "@shared/assets/deals.svg";
import ApplicationIcon from "@shared/assets/application.svg";
import UsersIcon from "@shared/assets/users.svg";
import { Button, Flex, Typography } from "antd";
import styles from "@shared/components/SideBar/SideBar.module.scss";
import IncrementIcon from "@shared/assets/increment.svg";

export const useItemsSideBar = () => {
  const { Text } = Typography;

  return [
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
    {
      key: "7",
      icon: (
        <Flex className={styles.wrapperBtn}>
          <Button className={styles.btn}>
            <Text className={styles.text}>Создать заявку</Text>
            <img className={styles.increment} src={IncrementIcon} alt="" />
          </Button>
        </Flex>
      ),
      label: "Пользователи",
    },
  ];
};
