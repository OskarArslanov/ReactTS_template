import RGKCard from '@components/RGKCard';
import RGKTable from '@components/RGKTable';
import RGKTwoColumn from '@components/RGKTwoColumn';
import RGKButton from '@components/controls/RGKButton';
import RGKDatePicker from '@components/controls/RGKDatePicker';
// import styles from './styles.module.css';
import styles from './styles.module.css';
import RGKSelect from '@components/controls/RGKSelect';
import RGKTabsSelect from '@components/controls/RGKTabsSelect';
import RGKInput from '@components/controls/RGKInput';
import RGKForm from '@components/controls/forms/RGKForm';
import { TwoColumnValueType } from '@dto/card';
// import 'src/globals.css';

const data: TwoColumnValueType[] = [
  { type: '01.2023', name: 'Расчетный', value: 5713 },
  { type: '01.2023', name: 'ДУТ', value: 5453 },
  { type: '02.2023', name: 'Расчетный', value: 4661 },
  { type: '02.2023', name: 'ДУТ', value: 5464 },
  { type: '03.2023', name: 'Расчетный', value: 3158 },
  { type: '03.2023', name: 'ДУТ', value: 6149 },
  { type: '04.2023', name: 'Расчетный', value: 1987 },
  { type: '04.2023', name: 'ДУТ', value: 5069 },
  { type: '05.2023', name: 'Расчетный', value: 656 },
  { type: '05.2023', name: 'ДУТ', value: 4087 },
];
const Agro = () => {
  const cardHeader = { minHeight: '30px', maxHeight: '30px', padding: 6 };
  return (
    <div className={styles.Agro}>
      <div className={styles.Agro_Actions}>
        <div className={styles.Agro_Actions_Filter}>
          <div className={styles.Agro_Actions_ObjectAndRange}>
            <RGKCard
              title="Объект"
              headStyle={cardHeader}
              className={styles.Agro_Actions_Object}
            >
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <RGKSelect label="Группа" bordered />
                <RGKSelect label="ТС" bordered />
              </div>
            </RGKCard>
            <RGKCard
              title="Диапазон"
              className={styles.Agro_Actions_Range}
              headStyle={cardHeader}
            >
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <RGKDatePicker label="от" />
                <RGKDatePicker label="до" />
              </div>
            </RGKCard>
          </div>
          <div className={styles.Agro_Actions_GroupAndDifferences}>
            <RGKCard
              title="Сгруппировать"
              headStyle={cardHeader}
              style={{ height: '100%' }}
            >
              <RGKTabsSelect
                classname={styles.Agro_Actions_Group}
                tabs={{
                  day: 'День',
                  week: 'Неделя',
                  month: 'Месяц',
                  quartet: 'Квартал',
                  year: 'Год',
                }}
              />
            </RGKCard>
            <RGKCard
              title="Расхождения, л"
              headStyle={cardHeader}
              style={{ height: '100%' }}
            >
              <RGKForm
                onSubmit={console.log}
                className={styles.Agro_Actions_Differences}
              >
                <RGKInput
                  name="filter"
                  rules={{ max: 100 }}
                  type="number"
                  style={{ width: '100%' }}
                />
                <RGKButton
                  text="Сбросить"
                  htmlType="reset"
                  style={{ width: '100%' }}
                />
                <RGKButton
                  text="Применить"
                  htmlType="submit"
                  style={{ width: '100%' }}
                />
              </RGKForm>
            </RGKCard>
          </div>
        </div>
        <div className={styles.Agro_Actions_SummAndDownload}>
          <RGKCard title="Сумма за период" headStyle={cardHeader}>
            <RGKTable pagination={false} style={{}} />
          </RGKCard>
          <RGKCard
            title="Скачать"
            className={`${styles.Agro_Actions_Download} hide_L`}
            headStyle={cardHeader}
          >
            <div className={styles.Agro_Actions_Download_Controls}>
              <RGKButton text="xlsx" />
              <RGKButton text="pdf" />
            </div>
          </RGKCard>
        </div>
      </div>
      <div className={styles.Agro_Table}>
        <RGKTwoColumn data={data} />
      </div>
    </div>
  );
};

export default Agro;
