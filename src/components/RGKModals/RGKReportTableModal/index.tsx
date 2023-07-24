import { Modal } from 'antd';
import { FC } from 'react';
import RGKTable from '@components/RGKTable';
import { RGKTableTitleType } from '@dto/card';

interface RGKReportTableModalProps {
  open: boolean;
  onClose: (data: boolean) => void;
  title?: string;
  columns?: RGKTableTitleType[];
  rows?: any[];
}
const RGKReportTableModal: FC<RGKReportTableModalProps> = (props) => {
  return (
    <Modal
      title={props.title}
      open={props.open}
      onOk={() => props.onClose(false)}
      destroyOnClose
      onCancel={() => props.onClose(false)}
      cancelButtonProps={{ style: { display: 'none' } }}
      okButtonProps={{ style: { display: 'none' } }}
      bodyStyle={{ position: 'relative', width: '100%' }}
    >
      <RGKTable pagination columns={props.columns} data={props.rows} />
    </Modal>
  );
};

export default RGKReportTableModal;
