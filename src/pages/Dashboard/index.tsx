import { useEffect, useState } from "react";
import RGKCircleLoader from "@components/RGKCircleLoader";
import RGKCardOneColumn from "@components/RGKOneColumn/RGKCardOneColumn";
import RGKCardTable from "@components/RGKTable/RGKCardTable";
import RGKCardTwoColumn from "@components/RGKTwoColumn/RGKCardTwoColumn";
import RGKCardTwoColumnProgress from "@components/RGKTwoColumn/RGKCardTwoColumnProgress";
import {
  getCardDataForOneColumn,
  getCardDataForTwoColumn,
  getCardDataForTable,
  getCardDataForTwoColumnWithProgress,
} from "@utils/dataFromBackendFormatters";
import { axiosInstance } from "axiosConfig";
import styles from "./styles.module.css";

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
  const smallCards = data?.cards;
  const bigCards = data?.big_cards;

  const smallCard1 = getCardDataForOneColumn(smallCards?.[1]);
  const smallCard2 = getCardDataForOneColumn(smallCards?.[2]);
  const smallCard3 = getCardDataForTwoColumn(smallCards?.[3]);
  const smallCard4 = getCardDataForTable(smallCards?.[4]);
  const bigCard1 = getCardDataForTwoColumnWithProgress(bigCards?.[1]);
  return (
    <div className={styles.Dashboard}>
      <RGKCircleLoader visible={loading} />
      <div className={styles.Dashboard_SmallCards}>
        <RGKCardOneColumn
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
        <RGKCardTable data={smallCard4} />
      </div>
      <div className={styles.Dashboard_LargeCards}>
        <RGKCardTwoColumnProgress
          progressbarColor="#FFC069"
          data={bigCard1}
          height={160}
        />
        <RGKCardTable data={undefined} />
      </div>
    </div>
  );
};

export default Dashboard;
