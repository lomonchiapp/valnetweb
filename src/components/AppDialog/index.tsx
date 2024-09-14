import React from 'react'
import { FC } from 'react'
import { Dialog, DialogProps } from '@mui/material'
import { DialogContent, DialogTitle} from '@mui/material'

interface AppDialogProps extends DialogProps {
  title: string;
  children: React.ReactNode;
  open: boolean;
    onClose: () => void;
}

export const AppDialog: FC<AppDialogProps> = ({title, children, open, onClose}) => {
  return (
    <Dialog
        open={open}
        onClose={onClose}
        maxWidth="md"
        fullWidth
    >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
            {children}
        </DialogContent>
    </Dialog>

  )
}
