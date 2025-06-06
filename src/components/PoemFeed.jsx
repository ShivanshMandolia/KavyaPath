import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Container, Typography, Box } from '@mui/material';
import PoemCard from './PoemCard';

// Sample poem data
const poems = [
  {
    id: 1,
    title: 'जिंदगी के सफर में',
    content: 'जिंदगी के सफर में हमसे टकराए कैसे-कैसे लोग,\nकुछ ख़ुशी के पल दिए, कुछ ने सिखाए ग़म के योग।\nकुछ तो आये और चले गए, हवा के झोंकों की तरह,\nकुछ ने हर पल साथ निभाया, बरसते बादलों की तरह।\nकुछ ने दिया साया, कुछ ने दिखायी धूप,\nकुछ ने दिया अपनापन, कुछ ने छुआ दूर से।',
    author: 'सुमित शर्मा',
    authorImage: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop',
    date: '10 मार्च, 2025',
    category: 'प्रेम',
    likes: 245,
    comments: 32
  },
  {
    id: 2,
    title: 'वतन के नाम',
    content: 'जिस देश में गंगा बहती है,\nवो देश है मेरा,\nजिस देश में हिमालय सजता है,\nवो देश है मेरा।\n\nजिस देश की मिट्टी में मिलकर,\nअनगिनत वीरों ने दम तोड़ा है,\nजिस देश की खातिर हजारों ने,\nफांसी के फंदे को चूमा है।',
    author: 'अनुराग मिश्रा',
    authorImage: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=40&h=40&fit=crop',
    date: '2 मार्च, 2025',
    category: 'देशभक्ति',
    likes: 378,
    comments: 45
  },
  {
    id: 3,
    title: 'प्रकृति का आह्वान',
    content: 'हरे-भरे वृक्षों की छाँव से,\nमिलती है शांति की एक राह।\nपक्षियों के कलरव से गूंजती,\nसुरीली सी एक थाह।\n\nनदियों का बहता जल जैसे,\nकहता है कहानी अनमोल।\nपर्वतों की ऊंचाई देखो,\nहरदम रहते अडोल।',
    author: 'प्रेरणा गुप्ता',
    authorImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop',
    date: '15 फरवरी, 2025',
    category: 'प्रकृति',
    likes: 183,
    comments: 24
  },
  {
    id: 4,
    title: 'तेरी याद',
    content: 'तेरी याद में दिन गुजरे, तेरी याद में रातें,\nतेरे बिन अब लगती नहीं, कोई भी मुलाकातें।\n\nजब तुम थे तो हर पल था, खुशियों से भरा-पूरा,\nअब हर खुशी लगती है, तेरे बिना अधूरा।\n\nक्या हुआ जो दूर हो तुम, दिल में तो बसे हो,\nमेरी हर एक सांस में, धड़कन में बसे हो।',
    author: 'दीपाली सिंह',
    authorImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop',
    date: '28 मार्च, 2025',
    category: 'विरह',
    likes: 276,
    comments: 38
  }
];

const PoemFeed = ({ category }) => {
  // Filter poems based on selected category
  const filteredPoems = category === 'सभी' 
    ? poems 
    : poems.filter(poem => poem.category === category);
  
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {filteredPoems.length > 0 ? (
        <Grid container spacing={4}>
          {filteredPoems.map((poem) => (
            <Grid item xs={12} md={6} key={poem.id}>
              <PoemCard poem={poem} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Box textAlign="center" py={8}>
          <Typography variant="h5" color="text.secondary">
            इस श्रेणी में अभी कोई कविता नहीं है।
          </Typography>
        </Box>
      )}
    </Container>
  );
};

// Define prop types
PoemFeed.propTypes = {
  category: PropTypes.string.isRequired
};

export default PoemFeed;
