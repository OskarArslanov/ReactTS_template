import { Card } from "antd";
import { FC } from "react";
import styles from "./styles.module.css";

interface RGKCardProps {
  size?: "small";
  title?: string;
  href?: string;
  hrefText?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  actions?: React.ReactNode[];
  className?: string;
}
const RGKCard: FC<RGKCardProps> = (props) => {
  return (
    <Card
      size={props.size}
      title={props.title}
      extra={<a href={props.href}>{props.hrefText}</a>}
      style={props.style}
      actions={props.actions}
      className={`${props.className} ${styles.RGKCard}`}
      headStyle={{
        fontWeight: 500,
        fontSize: "16px",
        lineHeight: "24px",
        maxHeight: 48,
        display: props.title ? "block" : "none",
      }}
      bodyStyle={{ padding: "12px 24px", height: "100%" }}
    >
      {props.children}
    </Card>
  );
};

export default RGKCard;
