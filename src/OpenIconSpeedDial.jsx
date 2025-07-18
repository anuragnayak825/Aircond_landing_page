import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import useMediaQuery from '@mui/material/useMediaQuery';
import Fab from '@mui/material/Fab';
import Stack from '@mui/material/Stack';

export default function OpenIconSpeedDial() {
  const isMobile = useMediaQuery('(max-width:600px)');

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/+60163824522', '_blank');
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+60163824522';
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 16,
        right: 16,
        zIndex: 1000,
      }}
    >
      {isMobile ? (
        <Stack spacing={1}>
          <Fab
            onClick={handleWhatsAppClick}
            sx={{ bgcolor: '#25D366', color: '#fff', '&:hover': { bgcolor: '#25D366', opacity: 0.9 } }}
            size="medium"
          >
            <WhatsAppIcon />
          </Fab>
          <Fab
            onClick={handleCallClick}
            sx={{ bgcolor: '#007bff', color: '#fff', '&:hover': { bgcolor: '#007bff', opacity: 0.9 } }}
            size="medium"
          >
            <CallIcon />
          </Fab>
        </Stack>
      ) : (
        <SpeedDial
          ariaLabel="Support Actions"
          icon={<SpeedDialIcon />}
          direction="up"
        >
          <SpeedDialAction
            icon={<WhatsAppIcon />}
            tooltipTitle="WhatsApp"
            onClick={handleWhatsAppClick}
            sx={{
              bgcolor: '#25D366',
              color: '#fff',
              '&:hover': { bgcolor: '#25D366', opacity: 0.9 },
            }}
          />
          <SpeedDialAction
            icon={<CallIcon />}
            tooltipTitle="Call"
            onClick={handleCallClick}
            sx={{
              bgcolor: '#007bff',
              color: '#fff',
              '&:hover': { bgcolor: '#007bff', opacity: 0.9 },
            }}
          />
          <SpeedDialAction
            icon={<KeyboardArrowUpIcon />}
            tooltipTitle="Go to Top"
            onClick={handleScrollTop}
            sx={{
              bgcolor: '#6c757d',
              color: '#fff',
              '&:hover': { bgcolor: '#6c757d', opacity: 0.9 },
            }}
          />
        </SpeedDial>
      )}
    </Box>
  );
}
