import { StylesConfig } from 'react-select';

export const getCustomStyles = <T>(): StylesConfig<T> => ({
  control: (provided) => ({
    ...provided,
    borderRadius: 4,
    border: '1px solid var(--color-grey)',
    backgroundColor: 'transparent',
    color: 'var(--color-text)',
    '&:hover': {},
    boxShadow: 'none',
    height: '100%',
    minHeight: '34px',
  }),
  singleValue: (provided) => ({
    ...provided,
    color: 'var(---color-text)',
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: '0',
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: 4,
    border: '1px solid var(--color-grey)',
    backgroundColor: 'var(--color-background)',
    padding: 6,
    zIndex: 9999,
  }),
  option: (provided, state) => ({
    ...provided,
    color: 'var(--color-text)',
    backgroundColor: state.isSelected ? '#192235' : 'transparent',
    padding: '12px 18px',
    borderRadius: 4,
    '&:active': {
      backgroundColor: 'transparent',
    },
  }),
  indicatorSeparator: (provider) => ({
    ...provider,
    height: '100%',
    backgroundColor: 'var(--color-grey)',
    margin: 0,
  }),
  indicatorsContainer: (provider, state) => ({
    ...provider,
    borderBottom: state.selectProps.menuIsOpen ? '3px solid var(--color-green)' : '',
    borderRadius: '0 0 4px 0',
    '&:hover': {
      cursor: 'pointer',
    },
    height: '100%',
  }),
  container: (provider) => ({
    ...provider,
    height: '100%',
  }),
  dropdownIndicator: (provider) => ({
    ...provider,
    padding: '0 4px',
  }),
});
