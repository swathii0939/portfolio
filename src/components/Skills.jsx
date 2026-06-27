import { Box, Container, Typography, Grid, Paper, LinearProgress, Stack } from '@mui/material'
import PsychologyIcon from '@mui/icons-material/Psychology'
import HubIcon from '@mui/icons-material/Hub'
import CodeIcon from '@mui/icons-material/Code'
import QueryStatsIcon from '@mui/icons-material/QueryStats'
import LanguageIcon from '@mui/icons-material/Language'
import StorageIcon from '@mui/icons-material/Storage'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import MemoryIcon from '@mui/icons-material/Memory'

const LEVELS = { Beginner: 35, Intermediate: 65, Advanced: 90 }

const SKILLS = [
  { name: 'Machine Learning', level: 'Advanced', icon: PsychologyIcon },
  { name: 'Deep Learning', level: 'Intermediate', icon: HubIcon },
  { name: 'Python', level: 'Advanced', icon: CodeIcon },
  { name: 'Data Analytics', level: 'Intermediate', icon: QueryStatsIcon },
  { name: 'Web Development', level: 'Intermediate', icon: LanguageIcon },
  { name: 'SQL', level: 'Intermediate', icon: StorageIcon },
  { name: 'NLP', level: 'Beginner', icon: ChatBubbleOutlineIcon },
  { name: 'TensorFlow', level: 'Intermediate', icon: MemoryIcon },
]

export default function Skills() {
  return (
    <Box id="skills" component="section" sx={{ py: { xs: 8, md: 10 }, bgcolor: 'background.paper' }}>
      <Container maxWidth="md">
        <Typography
          variant="overline"
          sx={{ color: 'secondary.main', fontFamily: '"JetBrains Mono", monospace', letterSpacing: '0.08em' }}
        >
          — WHAT I KNOW
        </Typography>
        <Typography variant="h2" sx={{ fontSize: { xs: '1.8rem', md: '2.2rem' }, mb: 5 }}>
          Skills &amp; Technologies
        </Typography>

        <Grid container spacing={2.5}>
          {SKILLS.map(({ name, level, icon: Icon }) => (
            <Grid item xs={12} sm={6} md={3} key={name}>
              <Paper
                elevation={0}
                sx={{
                  p: 2.5,
                  height: '100%',
                  bgcolor: 'background.default',
                  border: '1px solid',
                  borderColor: 'divider',
                  transition: 'transform 0.2s ease, border-color 0.2s ease',
                  '&:hover': { transform: 'translateY(-3px)', borderColor: 'primary.main' },
                }}
              >
                <Stack spacing={1.5}>
                  <Box
                    sx={{
                      width: 38, height: 38,
                      borderRadius: '10px',
                      bgcolor: 'rgba(124,158,255,0.12)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'primary.main',
                    }}
                  >
                    <Icon fontSize="small" />
                  </Box>
                  <Typography sx={{ fontWeight: 600 }}>{name}</Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: 'text.secondary', fontFamily: '"JetBrains Mono", monospace', fontSize: '0.7rem' }}
                  >
                    {level}
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={LEVELS[level]}
                    sx={{
                      height: 4, borderRadius: 2,
                      bgcolor: 'rgba(244,242,237,0.08)',
                      '& .MuiLinearProgress-bar': { bgcolor: 'secondary.main' },
                    }}
                  />
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
