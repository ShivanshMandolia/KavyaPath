import React, { useEffect } from 'react';
import { Box, Typography, Button, Container, useTheme } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import { PenSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const theme = useTheme();
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      controls.start({ y: scrollY * 0.5 });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  return (
    <Box 
      className="parallax-effect"
      sx={{
        background: theme.palette.mode === 'dark'
          ? 'linear-gradient(135deg, #121212 0%, #1E1E1E 100%)'
          : 'linear-gradient(135deg, #f5f7fa 0%, #e4e9f2 100%)',
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative elements that move with parallax effect */}
      <motion.div 
        animate={controls}
        initial={{ y: 0 }}
        className="parallax-layer"
        style={{ zIndex: 1 }}
      >
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [Math.random() * 100, Math.random() * -100],
              y: [Math.random() * 100, Math.random() * -100],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            style={{
              position: 'absolute',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${50 + Math.random() * 100}px`,
              height: `${50 + Math.random() * 100}px`,
              borderRadius: '50%',
              background: `radial-gradient(circle, rgba(254,107,139,0.1) 0%, rgba(254,107,139,0) 70%)`,
            }}
          />
        ))}
      </motion.div>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, height: '100%', display: 'flex', alignItems: 'center' }}>
        <Box sx={{ maxWidth: 800, mx: 'auto', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography 
              variant="h1" 
              component="h1"
              sx={{ 
                fontWeight: 800,
                mb: 2,
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '0.02em',
              }}
            >
              कविता संगम
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Typography 
              variant="h6" 
              component="p"
              sx={{ 
                mb: 4,
                color: theme.palette.text.secondary,
                fontFamily: 'Mukta, sans-serif',
                fontSize: { xs: '1rem', sm: '1.2rem', md: '1.3rem' },
                lineHeight: 1.6,
              }}
            >
              "शब्दों के इस संगम में अपनी अनुभूतियों को उंडेलिए, अपनी कल्पनाओं को पंख दीजिए, और अपने विचारों को आवाज़ दीजिए।"
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              component={Link}
              to="/create"
              variant="contained"
              size="large"
              startIcon={<PenSquare />}
              sx={{
                background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                fontFamily: 'Mukta, sans-serif',
                fontWeight: 600,
                px: 4,
                py: 1.2,
                fontSize: '1.1rem',
                boxShadow: '0 8px 16px rgba(254, 107, 139, 0.3)',
              }}
            >
              अपनी कविता लिखें
            </Button>
          </motion.div>
        </Box>
      </Container>

      {/* Animated wave at the bottom */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '100px',
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23FE6B8B20' fill-opacity='1' d='M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,128C672,128,768,160,864,165.3C960,171,1056,149,1152,138.7C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
    </Box>
  );
};

export default Hero;