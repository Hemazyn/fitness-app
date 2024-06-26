import React, { useState } from 'react';
import { Box } from '@mui/material';

import { Exercises, SearchExercise, HeroBanner } from '../components/index';

const Home = () => {
     const [exercises, setExercises] = useState([]);
     const [bodyPart, setBodyPart] = useState('all');

     return (
          <Box>
               <HeroBanner />
               <SearchExercise setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
               <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
          </Box>
     );
};

export default Home;