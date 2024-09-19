import React from 'react'
import { Drawer } from '@mui/material'

export const HelpDrawer = ({children, setOpen, open}) => {
  return (

    <Drawer
      anchor="right"
      open={open}
      onClose={() => setOpen(false)}
      sx={{
        '& .MuiDrawer-paper': {
          width: 400,
        },
      }}
    >
      {children}
    </Drawer>
  )
}
