import React from 'react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import { Box } from '@mui/material';

import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => (
     <ScrollMenu>
          <Box className="react-horizontal-scrolling">
               {data.map((item) => (
                    <Box key={item.id || item} itemID={item.id || item} title={item.id || item} m="0 20px">
                         {bodyParts ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : <ExerciseCard exercise={item} />}
                    </Box>
               ))}
          </Box>
     </ScrollMenu>
);

export default HorizontalScrollbar;