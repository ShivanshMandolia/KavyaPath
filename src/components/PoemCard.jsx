import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardActions, 
  Typography, 
  Box, 
  IconButton, 
  Avatar,
  Chip,
  useTheme,
  Button
} from '@mui/material';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, Share2, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PoemCard = ({ poem, index = 0 }) => {
  const [expanded, setExpanded] = useState(false);
  const [liked, setLiked] = useState(false);
  const theme = useTheme();
  const navigate = useNavigate();

  const handleLikeClick = (e) => {
    e.stopPropagation();
    setLiked(!liked);
  };

  const handlePoemClick = () => {
    navigate(`/poem/${poem.id}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
    >
      <Card
        sx={{
          borderRadius: 4,
          overflow: 'hidden',
          background: theme.palette.mode === 'dark' 
            ? 'rgba(30, 30, 30, 0.7)' 
            : 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(10px)',
          border: `1px solid ${theme.palette.mode === 'dark' 
            ? 'rgba(255, 255, 255, 0.05)' 
            : 'rgba(0, 0, 0, 0.05)'}`,
          transition: 'all 0.3s ease',
          cursor: 'pointer',
          position: 'relative',
          '&:hover': {
            boxShadow: theme.palette.mode === 'dark'
              ? '0 8px 32px rgba(0, 0, 0, 0.3)'
              : '0 8px 32px rgba(0, 0, 0, 0.1)',
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '5px',
            height: '100%',
            background: 'linear-gradient(180deg, #FE6B8B 0%, #FF8E53 100%)',
            opacity: 0,
            transition: 'opacity 0.3s ease',
          },
          '&:hover::before': {
            opacity: 1,
          }
        }}
        onClick={handlePoemClick}
      >
        <Box sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
          <Avatar 
            src={poem.authorImage} 
            alt={poem.author}
            sx={{
              width: 40,
              height: 40,
              border: '2px solid transparent',
              background: `linear-gradient(#fff, #fff) padding-box, linear-gradient(45deg, #FE6B8B, #FF8E53) border-box`,
            }}
          >
            {poem.author ? poem.author[0] : 'U'}
          </Avatar>
          <Box>
            <Typography variant="subtitle1" fontWeight={600}>
              {poem.author || 'अज्ञात'}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <Calendar size={14} />
              <Typography variant="caption" color="text.secondary">
                {poem.date || new Date().toLocaleDateString('hi-IN')}
              </Typography>
            </Box>
          </Box>
          <Chip 
            label={poem.category || 'प्रेम'} 
            size="small" 
            sx={{ 
              ml: 'auto',
              backgroundColor: 'rgba(254,107,139,0.1)',
              color: theme.palette.primary.main,
              fontWeight: 500,
              fontFamily: 'Mukta, sans-serif',
              '&:hover': {
                backgroundColor: 'rgba(254,107,139,0.2)',
              }
            }} 
          />
        </Box>
        
        <CardContent>
          <Typography 
            variant="h6" 
            fontWeight={600} 
            gutterBottom 
            sx={{ 
              fontFamily: 'Mukta, sans-serif',
            }}
          >
            {poem.title || 'शीर्षक रहित कविता'}
          </Typography>
          
          <Typography 
            variant="body1" 
            sx={{ 
              fontFamily: 'Mukta, sans-serif',
              whiteSpace: 'pre-line',
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: theme.palette.text.secondary
            }}
          >
            {expanded ? poem.content : poem.content?.split('\n').slice(0, 4).join('\n')}
            {!expanded && poem.content?.split('\n').length > 4 && '...'}
          </Typography>
        </CardContent>
        
        <CardActions disableSpacing sx={{ px: 2, pb: 2 }}>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <IconButton onClick={handleLikeClick}
              sx={{
                color: liked ? theme.palette.error.main : 'inherit',
                transition: 'all 0.2s',
              }}
            >
              <Heart 
                fill={liked ? 'currentColor' : 'none'} 
                size={20} 
              />
            </IconButton>
          </motion.div>
          <Typography variant="body2" color="text.secondary" sx={{ ml: 0.5, mr: 2 }}>
            {liked ? (poem.likes || 0) + 1 : (poem.likes || 0)}
          </Typography>
          
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <IconButton onClick={(e) => e.stopPropagation()}>
              <MessageCircle size={20} />
            </IconButton>
          </motion.div>
          <Typography variant="body2" color="text.secondary" sx={{ ml: 0.5, mr: 2 }}>
            {poem.comments || 0}
          </Typography>
          
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <IconButton onClick={(e) => e.stopPropagation()}>
              <Share2 size={20} />
            </IconButton>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ marginLeft: 'auto' }}
          >
            <Button
              variant="text"
              size="small"
              onClick={handlePoemClick}
              sx={{
                fontFamily: 'Mukta, sans-serif',
                color: theme.palette.primary.main,
                '&:hover': {
                  background: 'rgba(254, 107, 139, 0.05)',
                }
              }}
            >
              पूरी कविता पढ़ें
            </Button>
          </motion.div>
        </CardActions>
      </Card>
    </motion.div>
  );
};

export default PoemCard;