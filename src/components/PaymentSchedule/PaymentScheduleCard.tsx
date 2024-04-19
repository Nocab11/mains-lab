import { JSX } from "react";

import AttentionIcon from "@assets/attention.svg";
import MoneyIcon from "@assets/money.svg";
import DocsIcon from "@assets/docs.svg";
import TriangleRedIcon from "@assets/triangleRed.svg";
import TriangleGreenIcon from "@assets/triangleGreen.svg";

import styles from "./PaymentScheduleCard.module.scss";
import {
  IPaymentSchedule,
  IPaymentScheduleStatus,
} from "@components/PaymentSchedule/types";
import classNames from "classnames";
import { formattedNumber } from "@utils/formattedNumber";

const PaymentScheduleCard = (props: IPaymentSchedule): JSX.Element => {
  const { sum, info, text, status } = props;

  return (
    <div
      className={
        status === IPaymentScheduleStatus.OVERDUE_PAYMENT_DETAILS
          ? classNames(styles.card, styles.cardBgRed)
          : classNames(styles.card, styles.cardBgWhite)
      }
    >
      <div className={styles.head}>
        {sum && <span className={styles.sum}>{formattedNumber(sum)} ₽</span>}
        {status === IPaymentScheduleStatus.OVERDUE_PAYMENT_DETAILS && (
          <img className={styles.icon} src={AttentionIcon} alt="attention" />
        )}
        {status === IPaymentScheduleStatus.NEXT_PAYMENT && (
          <img className={styles.icon} src={MoneyIcon} alt="money" />
        )}
        {status === IPaymentScheduleStatus.UPDATED_TOTAL_AMOUNT && (
          <img className={styles.icon} src={DocsIcon} alt="docs" />
        )}
      </div>

      <div className={styles.info}>
        {info.date && <span className={styles.data}>{info.date}</span>}
        {info.total && (
          <div className={styles.wrapTotal}>
            <span className={styles.total}>{formattedNumber(info.total)}</span>
            {info.balance?.flag ? (
              <div className={classNames(styles.balance, styles.balanceGreen)}>
                <img src={TriangleGreenIcon} alt="" />
                <span
                  className={classNames(
                    styles.balanceCount,
                    styles.balanceCountGreen,
                  )}
                >
                  - {formattedNumber(info.balance?.count ?? 0)} ₽
                </span>
              </div>
            ) : (
              <div className={classNames(styles.balance, styles.balanceRed)}>
                <img src={TriangleRedIcon} alt="" />
                <span
                  className={classNames(
                    styles.balanceCount,
                    styles.balanceCountRed,
                  )}
                >
                  + {formattedNumber(info.balance?.count ?? 0)} ₽
                </span>
              </div>
            )}
          </div>
        )}
      </div>

      <span className={styles.status}>{text}</span>
    </div>
  );
};

export { PaymentScheduleCard };
