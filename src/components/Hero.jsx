import { Box, Container, Stack, Typography, Button, Chip, Avatar } from '@mui/material'
import NorthEastIcon from '@mui/icons-material/NorthEast'
import MailOutlineIcon from '@mui/icons-material/MailOutline'

// Signature element: a quiet neural-network of nodes & synapses behind the hero,
// pulsing on a slow loop — the one visual idea this page is built around.
function NeuralField() {
  const nodes = [
    [40, 60], [120, 20], [200, 90], [90, 150], [250, 40],
    [300, 130], [170, 190], [40, 220], [260, 220], [330, 60],
  ]
  const edges = [
    [0, 1], [1, 2], [0, 3], [2, 5], [1, 4], [3, 6], [6, 7], [5, 8], [4, 9], [2, 9], [3, 7],
  ]
  return (
    <Box
      component="svg"
      viewBox="0 0 360 260"
      sx={{
        position: 'absolute',
        right: { xs: -60, md: -20 },
        top: { xs: -20, md: 0 },
        width: { xs: 320, md: 460 },
        height: 'auto',
        opacity: 0.55,
        pointerEvents: 'none',
      }}
    >
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a][0]} y1={nodes[a][1]}
          x2={nodes[b][0]} y2={nodes[b][1]}
          stroke="#7C9EFF"
          strokeWidth="1"
          opacity="0.35"
        />
      ))}
      {nodes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 4.5 : 3} fill={i % 3 === 0 ? '#5EEAD4' : '#7C9EFF'}>
          <animate
            attributeName="opacity"
            values="0.5;1;0.5"
            dur={`${3 + (i % 4)}s`}
            repeatCount="indefinite"
            begin={`${i * 0.3}s`}
          />
        </circle>
      ))}
    </Box>
  )
}

export default function Hero() {
  return (
    <Box id="about" component="section" sx={{ position: 'relative', overflow: 'hidden', pt: { xs: 8, md: 12 }, pb: { xs: 10, md: 14 } }}>
      <NeuralField />
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={5} alignItems={{ md: 'center' }}>
          <Avatar
            sx={{
              width: 96, height: 96,
              bgcolor: 'background.paper',
              border: '2px solid',
              borderColor: 'secondary.main',
              fontFamily: '"Fraunces", serif',
              fontSize: '2.2rem',
              color: 'secondary.main',
            }}
          >
            S
          </Avatar>

          <Stack spacing={2.5} sx={{ maxWidth: 560 }}>
            <Chip
              label="AI & ML STUDENT · BATCH OF 2028"
              size="small"
              sx={{
                alignSelf: 'flex-start',
                bgcolor: 'rgba(94,234,212,0.1)',
                color: 'secondary.main',
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: '0.7rem',
                letterSpacing: '0.05em',
              }}
            />
            <Typography variant="h1" sx={{ fontSize: { xs: '2.4rem', md: '3.2rem' }, lineHeight: 1.1 }}>
              Hi, I'm{' '}
              <Box component="span" sx={{ color: 'secondary.main' }}>
                Swathi S.
              </Box>
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.05rem', lineHeight: 1.7 }}>
              I'm an AI &amp; ML student passionate about building intelligent systems that solve
              real-world problems — exploring machine learning, deep learning, data analytics, and
              web development along the way.
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.05rem', lineHeight: 1.7 }}>
              My goal is to create applications that blend solid software engineering with AI,
              making everyday tasks smarter and more efficient.
            </Typography>

            <Stack direction="row" spacing={1.5} sx={{ pt: 1 }}>
              <Button
                variant="contained"
                color="secondary"
                endIcon={<NorthEastIcon fontSize="small" />}
                href="/resume.pdf"
                sx={{ color: '#0B0F19', fontWeight: 700, px: 3 }}
              >
                Download Resume
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                startIcon={<MailOutlineIcon fontSize="small" />}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                sx={{ borderColor: 'rgba(244,242,237,0.25)', px: 3 }}
              >
                Let's Connect
              </Button>
            </Stack>

            <Stack direction="row" spacing={3} sx={{ pt: 2, flexWrap: 'wrap' }}>
              {[
                ['Full-Stack Projects', null],
                ['CGPA 9.2 / 10', null],
                ['Open Source Contributor', null],
              ].map(([label]) => (
                <Typography
                  key={label}
                  variant="caption"
                  sx={{
                    fontFamily: '"JetBrains Mono", monospace',
                    color: 'text.secondary',
                    fontSize: '0.75rem',
                  }}
                >
                  {label}
                </Typography>
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}
