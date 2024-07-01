import {FC, useEffect, useState} from 'react';
import './CircularProgressBar.scss';
import {useTranslation} from "react-i18next";

interface Props {
  duration: number;
  size?: number;
  strokeWidth?: number;
}

export const CircularProgressBar: FC<Props> = (
  {
    duration,
    size = 252,
    strokeWidth = 10,
  }
) => {
  const [progress, setProgress] = useState(0);
  const {t} = useTranslation()

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevProgress + 1;
      });
    }, (duration * 1000) / 100);

    return () => clearInterval(interval);
  }, [duration]);

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className='circular-progressbar'>
      <div className="circular-progress-bar" style={{width: size, height: size}}>
        <svg width={size} height={size}>
          <circle
            className="circular-progress-bar__circle circular-progress-bar__circle-background"
            strokeWidth={strokeWidth}
            r={radius}
            cx={size / 2}
            cy={size / 2}
          />
          <circle
            className="circular-progress-bar__circle circular-progress-bar__circle-progress"
            strokeWidth={strokeWidth}
            r={radius}
            cx={size / 2}
            cy={size / 2}
            style={{strokeDasharray: circumference, strokeDashoffset: offset}}
          />
        </svg>
        <div className="circular-progress-bar__percentage">{`${progress}%`}</div>
      </div>

      <span className='circular-progress-bar__title'>{t('progressbar.title')}</span>
    </div>
  );
};
