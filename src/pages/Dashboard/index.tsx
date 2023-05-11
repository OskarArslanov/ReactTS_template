import { useEffect, useState } from "react";
import format from "date-fns/format";
import ru from "date-fns/locale/ru";
import {
  CardOneColumDataType,
  CardTableDataType,
  CardTwoColumDataType,
} from "dto/card";
import { axiosInstance } from "../../axiosConfig";
import styles from "./styles.module.css";
import RGKCardOneColumn from "../../components/RGKOneColumn/RGKCardOneColumn";
import RGKCardTwoColumn from "../../components/RGKTwoColumn/RGKCardTwoColumn";
import RGKCardTwoColumnProgress from "../../components/RGKTwoColumn/RGKCardTwoColumnProgress";
import RGKCardTable from "../../components/RGKTable/RGKCardTable";
import RGKCircleLoader from "../../components/RGKCircleLoader";
import {
  parseDayMonthYearDateFromBackend,
  parseMonthYearDateFromBackend,
} from "../../utils/dates";

const Dashboard = () => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    try {
      axiosInstance.get("/rgk24/main").then((resp) => setData(resp.data));
    } catch (err: any) {
      // ERR: FIXME
    } finally {
      setLoading(false);
    }
  }, []);

  if (!data) return null;
  const smallCards = data.cards;
  const bigCards = data.big_cards;

  const smallCard1: CardOneColumDataType = {
    title: smallCards?.[1]?.title,
    data: smallCards?.[1]?.chart.data?.map((item: any) => {
      if (!item) return undefined;
      let type = format(parseMonthYearDateFromBackend(item.xField), "LLL", {
        locale: ru,
      });
      type = type.charAt(0).toUpperCase().concat(type.slice(1));
      const value = Number(String(item.yField).split(".")[0]);
      return { type, value };
    }),
    subTitleName: String(
      Object.keys(smallCards?.[1]?.report_string?.data)?.[0]
    ),
    subTitleValue: String(
      Object.values(smallCards?.[1]?.report_string?.data)?.[0]
    ),
  };
  const smallCard2: CardOneColumDataType = {
    title: smallCards?.[2]?.title,
    data: smallCards?.[2]?.chart.data?.map((item: any) => {
      if (!item) return undefined;
      let type = format(parseMonthYearDateFromBackend(item.xField), "LLL", {
        locale: ru,
      });
      type = type.charAt(0).toUpperCase().concat(type.slice(1));
      const value = Number(String(item.yField).split(".")[0]);
      return { type, value };
    }),
    subTitleName: String(
      Object.keys(smallCards?.[2]?.report_string?.data)?.[0]
    ),
    subTitleValue: String(
      Object.values(smallCards?.[2]?.report_string?.data)?.[0]
    ),
  };
  const smallCard3: CardTwoColumDataType = {
    title: smallCards?.[3]?.title,
    data: smallCards?.[3]?.chart.data?.map((item: any) => {
      if (!item) return undefined;
      const name = item.name;
      let type = format(parseDayMonthYearDateFromBackend(item.xField), "d", {
        locale: ru,
      });
      type = type.charAt(0).toUpperCase().concat(type.slice(1));
      const value = item.yField;
      return { name, type, value };
    }),
  };

  const smallCard4: CardTableDataType = {
    title: smallCards?.[4].title,
    columns: smallCards?.[4]?.table.column_name.map((item: any) => ({
      title: item.column_name,
      dataIndex: item.key,
      key: item.key,
    })),
    data: smallCards?.[4]?.table.data,
  };

  const bigCard1: CardTwoColumDataType = {
    title: bigCards?.[1]?.title,
    data: bigCards?.[1]?.chart.data?.map((item: any) => {
      if (!item) return undefined;
      const name = item.name;
      let type = format(parseMonthYearDateFromBackend(item.xField), "LLL", {
        locale: ru,
      });
      type = type.charAt(0).toUpperCase().concat(type.slice(1));
      const value = Number(String(item.yField).split(".")[0]);
      return { name, type, value };
    }),
  };
  return (
    <div className={styles.Dashboard}>
      <RGKCircleLoader visible={loading} />
      <div className={styles.Dashboard_SmallCards}>
        <RGKCardOneColumn
          hrefText="More"
          valueName="тонн"
          typeName="мес"
          data={smallCard1}
          height={150}
          style={{ maxHeight: "300px" }}
        />
        <RGKCardOneColumn
          valueName="км"
          typeName="мес"
          data={smallCard2}
          height={150}
          style={{ maxHeight: "300px" }}
        />
        <RGKCardTwoColumn
          data={smallCard3}
          height={160}
          style={{ maxHeight: "300px" }}
        />
        <RGKCardTable
          data={smallCard4}
          title="GPS пробег всего автопарка по месяцам"
          hrefText="More"
        />
      </div>
      <div className={styles.Dashboard_LargeCards}>
        <RGKCardTwoColumnProgress
          progressbarColor="#FFC069"
          hrefText="More"
          data={bigCard1}
          height={160}
        />
        <RGKCardTable data={undefined} title="Отчет план/факт" />
      </div>
    </div>
  );
};

export default Dashboard;
