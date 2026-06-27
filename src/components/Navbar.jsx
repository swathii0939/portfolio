import { useState } from 'react'
import { AppBar, Toolbar, Box, Stack, Button, IconButton, Drawer, List, ListItemButton, ListItemText, useMediaQuery } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useTheme } from '@mui/material/styles'

const NAV_LINKS = [
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Education', id: 'education' },
  { label: 'Contact', id: 'contact' },
]

export default function Navbar() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: 'rgba(11,15,25,0.85)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Toolbar sx={{ maxWidth: 1180, mx: 'auto', width: '100%', py: 1 }}>
        <Box
          sx={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: '0.95rem',
            letterSpacing: '0.04em',
            color: 'secondary.main',
            flexGrow: 1,
          }}
        >
          swathi<Box component="span" sx={{ color: 'text.primary' }}>.s</Box>
        </Box>

        {isMobile ? (
          <>
            <IconButton color="inherit" onClick={() => setOpen(true)} aria-label="Open navigation menu">
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
              <Box sx={{ width: 220, bgcolor: 'background.paper', height: '100%', pt: 4 }}>
                <List>
                  {NAV_LINKS.map((link) => (
                    <ListItemButton key={link.id} onClick={() => scrollTo(link.id)}>
                      <ListItemText primary={link.label} />
                    </ListItemButton>
                  ))}
                </List>
              </Box>
            </Drawer>
          </>
        ) : (
          <Stack direction="row" spacing={1}>
            {NAV_LINKS.map((link) => (
              <Button key={link.id} onClick={() => scrollTo(link.id)} sx={{ color: 'text.secondary', '&:hover': { color: 'text.primary' } }}>
                {link.label}
              </Button>
            ))}
          </Stack>
        )}
      </Toolbar>
    </AppBar>
  )
}
