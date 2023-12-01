import {
  Button, Paper, PaperProps, Stack, Typography,
} from '@mui/material';
import { AriaLabels } from '@src/content/content.types.ts';
import React from 'react';

interface PaperSectionProps extends PaperProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  ariaLabels?: AriaLabels;
}

export default function PaperSection({
  title,
  subtitle,
  ctaText,
  ctaLink,
  children,
  ariaLabels,
  ...props
}: PaperSectionProps) {
  return (
    <Paper sx={{ textAlign: 'center', p: 4 }} {...props}>
      <Typography variant="h2" sx={{ mb: 4 }}>
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="subtitle1" sx={{ mb: 4 }}>
          {subtitle}
        </Typography>
      )}
      {children}
      {ctaText && ctaLink && (
        <Stack direction="row" justifyContent="center">
          <Button href={ctaLink} variant="contained" sx={{ mt: 4 }} aria-label={ariaLabels?.ctaButton}>
            {ctaText}
          </Button>
        </Stack>
      )}
    </Paper>
  );
}
