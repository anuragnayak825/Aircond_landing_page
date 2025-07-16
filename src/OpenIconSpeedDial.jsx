import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const actions = [
  {
    icon: <WhatsAppIcon />,
    name: 'WhatsApp',
    onClick: () => window.open('https://wa.me/your_number_here', '_blank'),
    bgColor: '#25D366', // WhatsApp green
  },
  {
    icon: <CallIcon />,
    name: 'Call',
    onClick: () => (window.location.href = 'tel:+91XXXXXXXXXX'),
    bgColor: '#007bff', // Blue
  },
  {
    icon: <KeyboardArrowUpIcon />,
    name: 'Go to Top',
    onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }),
    bgColor: '#6c757d', // Gray
  },
];

export default function OpenIconSpeedDial() {
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 16,
      right:0,
        transform: 'translateX(-50%)',
        zIndex: 1000,
      }}
    >
      <SpeedDial
        ariaLabel="Support Actions"
        icon={<SpeedDialIcon />}
        direction="up"
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={action.onClick}
            sx={{
              bgcolor: action.bgColor,
              color: '#fff',
              '&:hover': {
                bgcolor: action.bgColor,
                opacity: 0.9,
              },
            }}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
