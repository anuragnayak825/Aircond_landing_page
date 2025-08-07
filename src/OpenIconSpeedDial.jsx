import * as React from 'react';
import Box from '@mui/material/Box';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fab from '@mui/material/Fab';
import Stack from '@mui/material/Stack';

export default function SupportFloatingButtons() {
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
      <Stack spacing={1}>
        <Fab
          onClick={handleWhatsAppClick}
          sx={{
            bgcolor: '#25D366',
            width: 56,
            height: 56,
            color: '#fff',
            '&:hover': { bgcolor: '#25D366', opacity: 0.9 },
          }}
          size="medium"
        >
          <WhatsAppIcon sx={{ fontSize: 35 }} />
        </Fab>
        <Fab
          onClick={handleCallClick}
          sx={{
            bgcolor: '#007bff',
            width: 56,
            height: 56,
            color: '#fff',
            '&:hover': { bgcolor: '#007bff', opacity: 0.9 },
          }}
          size="medium"
        >
          <CallIcon sx={{ fontSize: 35 }} />
        </Fab>
      </Stack>
    </Box>
  );
}
