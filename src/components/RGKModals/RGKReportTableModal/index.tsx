import { Modal } from "antd";
import { FC, useEffect, useState } from "react";
import RGKTable from "@components/RGKTable";
import { RGKTableTitleType } from "@dto/card";
import { dashboardStore } from "@store/dashboardStore";
import { reportsStore } from "@store/reportsStore";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";

interface RGKReportTableModalProps {
  open: boolean;
  onClose: (data: boolean) => void;
  title?: string;
  columns?: RGKTableTitleType[];
  rows?: any[];
}
const RGKReportTableModal: FC<RGKReportTableModalProps> = observer((props) => {
  const data = toJS(dashboardStore);
  const [title, setTitle] = useState<string>();
  const allCards = data.largeCards.concat(data.smallCards);
  useEffect(() => {
    if (props.open) {
      const card = allCards.find((item) => item.title === props.title);
      if (card) {
        const request = {
          report_title: card?.button?.[1].report_title,
          data: card?.button?.[1].data,
        };
        setTitle(request.report_title);
        reportsStore.fetchReport(request);
      }
    }
  }, [props.open]);

  const modalData = reportsStore.report;
  return (
    <Modal
      title={title}
      open={props.open}
      onOk={() => props.onClose(false)}
      destroyOnClose
      onCancel={() => props.onClose(false)}
      cancelButtonProps={{ style: { display: "none" } }}
      okButtonProps={{ style: { display: "none" } }}
      bodyStyle={{ position: "relative", width: "100%" }}
    >
      <RGKTable
        pagination
        columns={modalData.columns}
        data={modalData.data}
        loading={reportsStore.loading}
      />
    </Modal>
  );
});

export default RGKReportTableModal;
