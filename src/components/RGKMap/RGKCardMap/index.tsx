import { FC, useState } from 'react';
import { Button } from 'antd';
import { CarOutlined } from '@ant-design/icons';
import RGKCard from '@components/RGKCard';
import styles from './styles.module.css';
import RGKMap, { RGKMapType } from '..';

interface RGKCardMapProps {
  title: string;
  data?: RGKMapType[];
}
const RGKCardMap: FC<RGKCardMapProps> = (props) => {
  const [coordinates, setCoordinates] = useState<ymaps.IMapState>({
    center: [55.75, 37.57],
    controls: [],
    zoom: 9,
  });

  return (
    <RGKCard className={styles.RGKCardMap} title={props.title}>
      <div className={styles.RGKCardMap_Body}>
        <RGKMap
          className={styles.RGKCardMap_Map}
          data={props.data}
          value={coordinates}
        />
        <ul className={styles.RGKCardMap_ItemList}>
          {props.data?.map((item) => {
            let color = 'green';
            if (item.status === 'error') color = 'red';
            if (item.status === 'offline') color = 'gray';
            return (
              <Button
                key={item.name}
                className={styles.RGKCardMap_Item}
                style={{ color }}
                icon={<CarOutlined />}
                onClick={() =>
                  setCoordinates({
                    center: item.coordinates,
                    zoom: 14,
                    controls: [],
                  })
                }
              >
                {item.name} : {item.status}
              </Button>
            );
          })}
        </ul>
      </div>
    </RGKCard>
  );
};

export default RGKCardMap;
