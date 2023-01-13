import { createTheme } from '@mui/material';

const mainTheme = createTheme({
  palette: {
    main: '#F4F4F4',
    backgroundMain: '#282828',
    backgroundSecondary: '#A9A9A9',
    checked: '#10C200',
    notChecked: '#366EFF'
  },
  shadows: [
    '16px 16px 20px rgba(0, 0, 0, 0.15), -8px -8px 20px rgba(255, 255, 255, 0.05)',
    ...Array(25).fill('none')
  ],
  components: {
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          padding: '2px 29px 2px 15px',
          display: 'flex',
          alignItems: 'center'
        },
        expandIconWrapper: {
          fontSize: '21px',
          color: '#F4F4F4'
        },
        content: {
          '&.Mui-expanded': {
            margin: '12px 0'
          }
        }
      }
    }
  }
});

export default mainTheme;
