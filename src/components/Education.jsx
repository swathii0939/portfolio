import { Box, Container, Typography, Paper, Stack, Chip } from '@mui/material'
import SchoolIcon from '@mui/icons-material/School'

export default function Education() {
  return (
    <Box id="education" component="section" sx={{ py: { xs: 8, md: 10 }, bgcolor: 'background.paper' }}>
      <Container maxWidth="md">
        <Typography
          variant="overline"
          sx={{ color: 'secondary.main', fontFamily: '"JetBrains Mono", monospace', letterSpacing: '0.08em' }}
        >
          — WHERE I STUDY
        </Typography>
        <Typography variant="h2" sx={{ fontSize: { xs: '1.8rem', md: '2.2rem' }, mb: 5 }}>
          Education
        </Typography>

        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 4 },
            bgcolor: 'background.default',
            border: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} alignItems={{ sm: 'center' }}>
            <Box
              sx={{
                width: 52, height: 52, flexShrink: 0,
                borderRadius: '12px',
                bgcolor: 'rgba(124,158,255,0.12)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'primary.main',
              }}
            >
              <SchoolIcon />
            </Box>
            <Box sx={{ flexGrow: 1 }}>
              <Typography sx={{ fontWeight: 700, fontSize: '1.05rem' }}>
                B.Tech — Artificial Intelligence &amp; Machine Learning
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5 }}>
                Your College / University Name
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                2024 – 2028 · Expected Graduation May 2028
              </Typography>
              <Chip
                label="CGPA: 9.2 / 10.0"
                size="small"
                sx={{
                  mt: 1.5,
                  bgcolor: 'rgba(94,234,212,0.1)',
                  color: 'secondary.main',
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: '0.7rem',
                }}
              />
            </Box>
          </Stack>
        </Paper>
      </Container>
    </Box>
  )
}
