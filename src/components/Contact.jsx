import { Box, Container, Typography, Stack, Button } from '@mui/material'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined'

const LINKS = [
  { label: 'swathis@email.com', icon: MailOutlineIcon, href: 'mailto:swathis@email.com' },
  { label: 'linkedin.com/in/swathis', icon: LinkedInIcon, href: 'https://linkedin.com/in/swathis' },
  { label: 'github.com/swathis', icon: GitHubIcon, href: 'https://github.com/swathis' },
  { label: 'India', icon: PlaceOutlinedIcon, href: null },
]

export default function Contact() {
  return (
    <Box
      id="contact"
      component="section"
      sx={{
        py: { xs: 8, md: 10 },
        background: 'linear-gradient(135deg, #1B1F4A 0%, #100E33 100%)',
        textAlign: 'center',
      }}
    >
      <Container maxWidth="sm">
        <Typography
          variant="overline"
          sx={{ color: 'secondary.main', fontFamily: '"JetBrains Mono", monospace', letterSpacing: '0.08em' }}
        >
          — SAY HELLO
        </Typography>
        <Typography variant="h2" sx={{ fontSize: { xs: '1.8rem', md: '2.4rem' }, mt: 1, mb: 1.5 }}>
          Let's work together
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 4 }}>
          I'm open to internships, collaborations, and exciting AI projects. Drop me a message!
        </Typography>

        <Stack direction="row" spacing={1.5} justifyContent="center" sx={{ flexWrap: 'wrap', gap: 1.5 }}>
          {LINKS.map(({ label, icon: Icon, href }) => (
            <Button
              key={label}
              component={href ? 'a' : 'button'}
              href={href || undefined}
              target={href?.startsWith('http') ? '_blank' : undefined}
              rel={href?.startsWith('http') ? 'noopener' : undefined}
              startIcon={<Icon fontSize="small" />}
              variant="outlined"
              size="small"
              sx={{
                borderColor: 'rgba(244,242,237,0.2)',
                color: 'text.primary',
                bgcolor: 'rgba(255,255,255,0.04)',
              }}
            >
              {label}
            </Button>
          ))}
        </Stack>
      </Container>
    </Box>
  )
}
