import { useEffect } from 'react';
import RGKCircleLoader from '@components/RGKCircleLoader';
import RGKCardOneColumn from '@components/RGKOneColumn/RGKCardOneColumn';
import RGKCardTable from '@components/RGKTable/RGKCardTable';
import RGKCardTwoColumn from '@components/RGKTwoColumn/RGKCardTwoColumn';
import RGKCardTwoColumnProgress from '@components/RGKTwoColumn/RGKCardTwoColumnProgress';
import {
  getCardDataForOneColumn,
  getCardDataForTwoColumn,
  getCardDataForTable,
  getCardDataForTwoColumnWithProgress,
} from '@utils/dataFromBackendFormatters';
import { dashboardStore } from '@store/dashboardStore';
import { observer } from 'mobx-react-lite';
import styles from './styles.module.css';

const Dashboard = observer(() => {
  useEffect(() => {
    dashboardStore.fetchData();
  }, []);
  const smallCards = dashboardStore.smallCards;
  const bigCards = dashboardStore.largeCards;
  const smallCard1 = getCardDataForOneColumn(smallCards?.[0]);
  const smallCard2 = getCardDataForOneColumn(smallCards?.[1]);
  const smallCard3 = getCardDataForTwoColumn(smallCards?.[2]);
  const smallCard4 = getCardDataForTable(smallCards?.[3]);
  const bigCard1 = getCardDataForTwoColumnWithProgress(bigCards?.[0]);
  return (
    <div className={styles.Dashboard}>
      <RGKCircleLoader visible={dashboardStore.loading} />
      <div className={styles.Dashboard_SmallCards}>
        <RGKCardOneColumn
          valueName="тонн"
          typeName="мес"
          data={smallCard1}
          height={150}
          style={{ maxHeight: '300px' }}
        />
        <RGKCardOneColumn
          valueName="км"
          typeName="мес"
          data={smallCard2}
          height={150}
          style={{ maxHeight: '300px' }}
        />
        <RGKCardTwoColumn
          data={smallCard3}
          height={160}
          style={{ maxHeight: '300px' }}
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
});

export default Dashboard;
