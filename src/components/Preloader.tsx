import { FC } from 'react';

import { StyledPreloader } from './styled/Preloader';

const Preloader: FC = () => {
  return (
    <StyledPreloader>
      <div id='preloader-item'></div>
    </StyledPreloader>
  );
};

export default Preloader;
