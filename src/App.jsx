import { Box, Typography } from '@mui/material';
import ThemeProvider from '@/themes';

function App() {
  return (
    <ThemeProvider>
      <Box>
        <Typography>Hello Material Ui</Typography>
      </Box>
    </ThemeProvider>
  );
}

export default App;
