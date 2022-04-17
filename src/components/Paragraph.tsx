import { FC, memo } from 'react';

import { StyledParagraph } from './styled/Paragraph';
import { ParagraphProps } from "../types/types";

const Paragraph: FC<ParagraphProps> = ({ children, ...props }) => {
  return <StyledParagraph {...props} >{children}</StyledParagraph>;
};

export default memo(Paragraph);
