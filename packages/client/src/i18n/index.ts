import { addResource, LocaleKey, useTranslation } from '@option-blitz/libs/utils/i18n';
import en from './en';
import de from './de';

addResource(LocaleKey.en, en);
addResource(LocaleKey.de, de);

export { useTranslation };
