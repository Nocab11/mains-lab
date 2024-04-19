import { JSX } from "react";

import styles from "./PaymentSchedule.module.scss";
import { PaymentScheduleCard } from "@entities/ContractDMS/PaymentSchedule/PaymentScheduleCard";

import ArrowRight from "@shared/assets/arrowRight.svg";
import ArrowLeft from "@shared/assets/arrowLeft.svg";

import { Flex } from "antd";
import { dataPaymentSchedule } from "@entities/ContractDMS/PaymentSchedule/constants";
import classNames from "classnames";

const PaymentSchedule = (): JSX.Element => {
  return (
    <>
      <Flex className={styles.arrows} justify="flex-end" align="center">
        <img
          className={classNames(styles.arrow, styles.disabled)}
          src={ArrowLeft}
          alt=""
        />
        <img className={styles.arrow} src={ArrowRight} alt="" />
      </Flex>
      <Flex className={styles.payment}>
        {dataPaymentSchedule.map((item) => (
          <PaymentScheduleCard
            key={item.id}
            id={item.id}
            sum={item.sum}
            info={item.info}
            text={item.text}
            status={item.status}
          />
        ))}
      </Flex>
    </>
  );
};

export { PaymentSchedule };
