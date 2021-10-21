import React, { FC } from 'react';
import { ThemeSwitch } from '@option-blitz/libs/components/common/ThemeSwitch';
import { useTheme } from '@option-blitz/libs/hooks/ui/useTheme';
import { LanguageSwitch } from '@option-blitz/libs/components/common/LanguageSwitch';
import { useLang } from '@option-blitz/libs/hooks/useLang';
import { HelloBanner } from '../../../components/home/HelloBanner';
import styles from './styles.module.scss';

interface Props {}

const HomeDemo: FC<Props> = () => {
  const { toggleTheme, isDark } = useTheme();
  const { language, changeLanguage, t } = useLang();

  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <HelloBanner />
      </div>

      <div className={styles.table}>
        <div className={styles.row}>
          <div className={styles.label}>
            {t('Supports theming')}
          </div>
          <div className={styles.value}>
            <ThemeSwitch onChange={toggleTheme} value={isDark} size={40} />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>
            {t('And i81n translations')}
          </div>

          <div className={styles.value}>
            <LanguageSwitch value={language} onChange={changeLanguage} placement="top" />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.pre}>
            <div className={styles.comment}>
              {'// '}
              {t('there are many ready-made components in the storybook')}
            </div>

            <div>
              yarn storybook
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export { HomeDemo };
