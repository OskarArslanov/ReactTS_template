import { CSSProperties, FC } from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

interface RGKButtonProps {
  type?: 'link' | 'text' | 'default' | 'primary' | 'dashed';
  htmlType?: 'button' | 'reset' | 'submit';
  text?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  href?: string;
  style?: CSSProperties;
  shape?: 'default' | 'circle' | 'round';
  ghost?: boolean;
}

const RGKButton: FC<RGKButtonProps> = (props) => {
  const element = (
    <Button
      shape={props.shape}
      icon={props.icon}
      htmlType={props.htmlType || 'button'}
      className={styles.RGKButton}
      onClick={props.onClick}
      style={props.style}
      type={props.type || 'default'}
      ghost={props.ghost}
    >
      {props.text}
    </Button>
  );
  return props.href ? <Link to={props.href}>{element}</Link> : element;
};

export default RGKButton;
