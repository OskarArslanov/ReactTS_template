import {
  Map,
  GeolocationControl,
  TrafficControl,
  Clusterer,
  Placemark,
} from "@pbe/react-yandex-maps";
import { FC } from "react";
import styles from "./styles.module.css";

export interface RGKMapType {
  coordinates: number[];
  name: string;
  status: "active" | "error" | "offline";
}
interface RGKMapProps {
  className: string;
  data?: RGKMapType[];
  value?: ymaps.IMapState;
}
const RGKMap: FC<RGKMapProps> = (props) => {
  return (
    <div className={styles.RGKMap}>
      <Map
        // defaultState={{ center: [55.75, 37.57], zoom: 9, controls: [] }}
        state={props.value}
        className={props.className}
      >
        <GeolocationControl options={{ float: "left" }} />
        <TrafficControl />
        <Clusterer
          options={{
            preset: "islands#invertedVioletClusterIcons",
            groupByCoordinates: false,
          }}
        >
          {props.data?.map((item) => {
            let variant = "islands#greenStretchyIcon";
            if (item.status === "error") variant = "islands#redStretchyIcon";
            if (item.status === "offline") variant = "islands#grayStretchyIcon";
            return (
              <Placemark
                key={item.name}
                geometry={item.coordinates}
                properties={{ iconContent: item.name }}
                options={{ preset: variant }}
              />
            );
          })}
        </Clusterer>
      </Map>
    </div>
  );
};

export default RGKMap;
