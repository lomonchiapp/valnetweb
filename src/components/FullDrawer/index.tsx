import React from 'react'
import { Drawer, DrawerProps } from '@mui/material'
import { FC } from 'react'


interface FullDrawerProps {
  onClose: () => void;
  open: boolean;
  children: React.ReactNode;
}

export const FullDrawer: FC<FullDrawerProps> = ({onClose, open, children}) => {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      sx={{
        '& .MuiDrawer-paper': {
          width: '100%',
          maxWidth: '100%',
        }
      }}
    >
      {children}
    </Drawer>
  )
}
