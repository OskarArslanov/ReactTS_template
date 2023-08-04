import { Card } from 'antd';
import { CSSProperties, FC } from 'react';
import { observer } from 'mobx-react-lite';
import styles from './styles.module.css';

interface RGKCardProps {
  size?: 'small';
  title?: string;
  href?: string;
  hrefText?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
  actions?: React.ReactNode[];
  className?: string;
  bodyStyle?: CSSProperties;
  headStyle?: CSSProperties;
}
const RGKCard: FC<RGKCardProps> = observer((props) => {
  return (
    <Card
      size={props.size}
      title={<span style={{ whiteSpace: 'break-spaces' }}>{props.title}</span>}
      extra={<a href={props.href}>{props.hrefText}</a>}
      style={props.style}
      actions={props.actions}
      className={`${styles.RGKCard} ${props.className}`}
      headStyle={{
        ...props.headStyle,
        fontWeight: 500,
        fontSize: '16px',
        display: props.title ? 'flex' : 'none',
        textAlign: 'center',
      }}
      bodyStyle={{ padding: '12px 24px', height: '100%' }}
    >
      {props.children}
    </Card>
  );
});

export default RGKCard;
