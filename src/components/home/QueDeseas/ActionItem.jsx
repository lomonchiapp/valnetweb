import React from 'react'
import PropTypes from 'prop-types'
import { Box, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'

export const ActionItem = ({title, text, img}) => {
    
        const styles = {
            title: {
                fontSize: 18,
                fontWeight: 700,
                color: '#333',
            },
            text: {
                fontSize: 13,
                color: '#333',
                maxWidth: 170
            }
        }
  return (
    <Grid item size={3} sx={{
        display: 'flex',
        gap: '1rem',
        alignItems: 'center',
        cursor: 'pointer',
        backgroundColor: '#fff',
        p:2,
        justifyContent: 'space-evenly',
        borderRadius: 5,
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
        textAlign: 'left',
        transition: 'all 0.2s ease-in-out',
        '&:hover': {
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            transform: 'translateY(-2px)',
            transition: 'all 0.2s ease-in-out'
        },
        flexDirection: { xs: 'column', md: 'row' },
        img: {
            width: { xs: '100%', md: 'auto' },
            height: { xs: 'auto', md: '100%' },
        }
    }}>
        <Box>
            <img src={img} alt={title} />
        </Box>
        <Box>
            <Typography sx={styles.title}>{title}</Typography>
            <Typography sx={styles.text}>{text}</Typography>
        </Box>
    </Grid>
  )
}

ActionItem.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
}
