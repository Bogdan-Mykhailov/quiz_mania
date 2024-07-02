import { FC, useEffect, useState } from 'react';
import './SaveDataButton.scss'
import {TableData} from "../../types";

interface Props {
  icon?: string;
  title: string;
}

export const SaveDataButton: FC<Props> = ({icon, title}) => {
  const [tableData, setTableData] = useState<TableData[]>([]);

  useEffect(() => {
    const keys = Object.keys(localStorage);
    const data: TableData[] = [];

    keys.forEach(key => {
      if (key !== 'i18nextLng') { // Перевірка, щоб не додавати ключ 'i18nextLng'
        const value = localStorage.getItem(key);
        if (value) {
          try {
            const parsedValue = JSON.parse(value);
            if (parsedValue && typeof parsedValue === 'object') {
              const { order, title, type, answer } = parsedValue;
              data.push({ order: +order, title, type, answer });
            }
          } catch (e) {
            console.warn(`Skipping key "${key}" due to invalid JSON: ${e}`);
          }
        }
      }
    });

    data.sort((a, b) => a.order - b.order);
    setTableData(data);
  }, [Object.keys(localStorage).join(',')]);

  const handleSaveData = () => {
    let csvData = 'order,title,type,answer\n';
    tableData.forEach(row => {
      csvData += `${row.order},"${row.title}","${row.type}","${row.answer}"\n`;
    });

    const blob = new Blob([csvData], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'localStorageData.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <button
      className='save-button'
      onClick={handleSaveData}
    >
      <img className='save-button__icon' src={icon} alt="Download icon"/>
      {title}
    </button>
  );
};
