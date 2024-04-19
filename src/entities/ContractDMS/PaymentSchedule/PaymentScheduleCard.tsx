import { JSX, useMemo } from "react";

import AttentionIcon from "@shared/assets/attention.svg";
import MoneyIcon from "@shared/assets/money.svg";
import DocsIcon from "@shared/assets/docs.svg";
import TriangleRedIcon from "@shared/assets/triangleRed.svg";
import TriangleGreenIcon from "@shared/assets/triangleGreen.svg";

import styles from "./PaymentScheduleCard.module.scss";
import {
  IPaymentSchedule,
  IPaymentScheduleStatus,
} from "@entities/ContractDMS/PaymentSchedule/types";
import classNames from "classnames";
import { formattedNumber } from "@shared/utils/formattedNumber";
import { Card, Flex, theme, Typography } from "antd";
import { EActionsBg } from "@shared/themes/types";

const PaymentScheduleCard = (props: IPaymentSchedule): JSX.Element => {
  const { sum, info, text, status } = props;

  const { Text } = Typography;

  const { token } = theme.useToken();

  const getCurrentTheme = useMemo(() => {
    if (token.Card?.actionsBg === EActionsBg.WHITE) {
      return "defaultTheme";
    }
    return "secondTheme";
  }, [token.Card]);

  return (
    <Card
      className={
        status === IPaymentScheduleStatus.OVERDUE_PAYMENT_DETAILS
          ? classNames(styles.card, styles.cardBgRed, styles[getCurrentTheme])
          : classNames(styles.card, styles.cardBgWhite, styles[getCurrentTheme])
      }
    >
      <Flex className={styles.head}>
        {sum && <Text className={styles.sum}>{formattedNumber(sum)} ₽</Text>}
        {status === IPaymentScheduleStatus.OVERDUE_PAYMENT_DETAILS && (
          <img className={styles.icon} src={AttentionIcon} alt="attention" />
        )}
        {status === IPaymentScheduleStatus.NEXT_PAYMENT && (
          <img className={styles.icon} src={MoneyIcon} alt="money" />
        )}
        {status === IPaymentScheduleStatus.UPDATED_TOTAL_AMOUNT && (
          <img className={styles.icon} src={DocsIcon} alt="docs" />
        )}
      </Flex>

      <div className={styles.info}>
        {info.date && (
          <div className={styles.infoContent}>
            <Text className={styles.data}>{info.date}</Text>
          </div>
        )}
        {info.total && (
          <div className={styles.infoContent}>
            <Text className={styles.total}>{formattedNumber(info.total)}</Text>
            {info.balance?.flag ? (
              <Flex className={classNames(styles.balance, styles.balanceGreen)}>
                <img src={TriangleGreenIcon} alt="" />
                <Text
                  className={classNames(
                    styles.balanceCount,
                    styles.balanceCountGreen,
                  )}
                >
                  - {formattedNumber(info.balance?.count ?? 0)} ₽
                </Text>
              </Flex>
            ) : (
              <Flex className={classNames(styles.balance, styles.balanceRed)}>
                <img src={TriangleRedIcon} alt="" />
                <Text
                  className={classNames(
                    styles.balanceCount,
                    styles.balanceCountRed,
                  )}
                >
                  + {formattedNumber(info.balance?.count ?? 0)} ₽
                </Text>
              </Flex>
            )}
          </div>
        )}
      </div>

      <Text className={styles.status}>{text}</Text>
    </Card>
  );
};

export { PaymentScheduleCard };
