import { FC } from "react";
import { Select } from "antd";
import styles from "./styles.module.css";
import RGKCard from "../../RGKCard";
import RGKOneColumn, { OneColumnValueType } from "..";
import { IdValue } from "../../../types/idVal";

interface RGKCardOneColumnSelectorProps {
  title: string;
  defaultValue1?: IdValue;
  defaultValue2?: IdValue;
  values1: IdValue[];
  values2: IdValue[];
  placeholder1: string;
  placeholder2: string;
  data?: OneColumnValueType[];
  href?: string;
  hrefText?: string;
  valueName: string;
  height?: number;
}

const RGKCardOneColumnSelector: FC<RGKCardOneColumnSelectorProps> = (props) => {
  return (
    <RGKCard
      title={props.title}
      hrefText={props.hrefText}
      href={props.href}
      className={styles.RGKCardOneColumn}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          height: "100%",
        }}
      >
        <div className={styles.RGKCardOneColumn_Selectors}>
          <Select
            defaultValue={props.defaultValue1}
            style={{ width: 200 }}
            placeholder={props.placeholder1}
            loading={!props.values1}
            options={props.values1}
          />
          <Select
            defaultValue={props.defaultValue2}
            style={{ width: 200 }}
            placeholder={props.placeholder2}
            loading={!props.values2}
            options={props.values2}
          />
        </div>
        <RGKOneColumn
          data={props.data}
          dataPos="middle"
          valueName={props.valueName}
          height={props.height}
        />
      </div>
    </RGKCard>
  );
};

export default RGKCardOneColumnSelector;
