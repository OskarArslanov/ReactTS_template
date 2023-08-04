import { CSSProperties, FC, useState } from 'react';
import RGKButton from '../RGKButton';
import styles from './styles.module.css';

interface RGKTabsSelectProps {
  tabs: Record<string, string>;
  style?: CSSProperties;
  classname?: string;
}
const RGKTabsSelect: FC<RGKTabsSelectProps> = (props) => {
  const [selected, setSelected] = useState(props.tabs[0]);
  return (
    <ul
      className={`${styles.RGKTabsSelect} ${props.classname}`}
      style={props.style}
    >
      {Object.keys(props.tabs).map((key) => (
        <RGKButton
          key={key}
          text={props.tabs[key]}
          onClick={() => setSelected(key)}
          type={selected === key ? 'primary' : 'default'}
        />
      ))}
    </ul>
  );
};

export default RGKTabsSelect;
