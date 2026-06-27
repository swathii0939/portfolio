import { Box, Container, Typography, Grid, Paper, Chip, Stack, Link as MLink } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

const PROJECTS = [
  {
    index: '01',
    title: 'Smart Disease Predictor',
    description:
      'A machine learning model that predicts disease likelihood from patient symptoms using classification algorithms and scikit-learn pipelines.',
    tags: ['Python', 'scikit-learn', 'Healthcare AI'],
  },
  {
    index: '02',
    title: 'Sentiment Analysis Tool',
    description:
      'A deep learning NLP model that classifies sentiment in social media text in real time, using LSTM networks with a React-based front end.',
    tags: ['TensorFlow', 'NLP', 'React'],
  },
  {
    index: '03',
    title: 'Data Analytics Dashboard',
    description:
      'An interactive visualization dashboard for exploring large datasets with dynamic charts, filters, and exportable reports, built with Pandas and Plotly.',
    tags: ['Pandas', 'Plotly', 'Data Viz'],
  },
]

export default function Projects() {
  return (
    <Box id="projects" component="section" sx={{ py: { xs: 8, md: 10 } }}>
      <Container maxWidth="md">
        <Typography
          variant="overline"
          sx={{ color: 'secondary.main', fontFamily: '"JetBrains Mono", monospace', letterSpacing: '0.08em' }}
        >
          — WHAT I'VE BUILT
        </Typography>
        <Typography variant="h2" sx={{ fontSize: { xs: '1.8rem', md: '2.2rem' }, mb: 5 }}>
          Featured Projects
        </Typography>

        <Grid container spacing={3}>
          {PROJECTS.map((p) => (
            <Grid item xs={12} md={4} key={p.index}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: '100%',
                  bgcolor: 'background.paper',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderTop: '2px solid',
                  borderTopColor: 'secondary.main',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Typography
                  sx={{
                    fontFamily: '"JetBrains Mono", monospace',
                    color: 'rgba(244,242,237,0.18)',
                    fontSize: '2rem',
                    fontWeight: 700,
                    mb: 1,
                  }}
                >
                  {p.index}
                </Typography>
                <Typography variant="h3" sx={{ fontSize: '1.15rem', mb: 1.5 }}>
                  {p.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7, mb: 2.5, flexGrow: 1 }}>
                  {p.description}
                </Typography>
                <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', mb: 2.5, gap: 1 }}>
                  {p.tags.map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      size="small"
                      sx={{
                        bgcolor: 'rgba(124,158,255,0.1)',
                        color: 'primary.main',
                        fontSize: '0.7rem',
                        fontFamily: '"JetBrains Mono", monospace',
                      }}
                    />
                  ))}
                </Stack>
                <MLink
                  href="#"
                  underline="none"
                  sx={{
                    color: 'secondary.main',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 0.5,
                  }}
                >
                  View project <ArrowForwardIcon sx={{ fontSize: '1rem' }} />
                </MLink>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
