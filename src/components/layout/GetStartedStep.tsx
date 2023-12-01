import {
  Button, Paper, PaperProps, Stack, Typography,
} from '@mui/material';
import SectionContainer from '@src/components/layout/SectionContainer.tsx';
import { AriaLabels } from '@src/content/content.types.ts';
import MuiMarkdown from 'mui-markdown';
import React from 'react';

interface GetStartedStepProps extends PaperProps {
  title?: string;
  bodyText?: string;
  ctaText?: string;
  ctaLink?: string;
  ariaLabels?: AriaLabels;
}

export default function GetStartedStep({
  title,
  bodyText,
  ctaText,
  ctaLink,
  children,
  ariaLabels,
  ...props
}: GetStartedStepProps) {
  return (
    <Paper sx={{ textAlign: 'left', p: 4 }} {...props}>
      <Typography variant="h2" sx={{ mb: 4 }}>
        {title}
      </Typography>
      {bodyText && <MuiMarkdown>{bodyText}</MuiMarkdown>}
      <SectionContainer sx={{ textAlign: 'left', my: 3, px: 0 }}>
        {children}
      </SectionContainer>

      {ctaText && ctaLink && (
        <Stack direction="row" justifyContent="center">
          <Button href={ctaLink} variant="contained" aria-label={ariaLabels?.ctaButton} sx={{ my: 3 }}>
            {ctaText}
          </Button>
        </Stack>
      )}
    </Paper>
  );
}
