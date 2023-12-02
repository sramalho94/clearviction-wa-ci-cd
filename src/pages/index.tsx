import {
  Button, ButtonGroup, Grid, Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import useScroll from '@src/components/functional/CustomScroll.tsx';
import externalLinks from '@src/components/functional/ExternalLinks.tsx';
import MailchimpForm from '@src/components/functional/MailchimpForm.tsx';
import IndividualPageHead from '@src/components/helper/IndividualPageHead.tsx';
import AccordionBuilder from '@src/components/layout/AccordionBuilder.tsx';
import GridItemCard from '@src/components/layout/GridItem.tsx';
import HeroBanner from '@src/components/layout/HeroBanner.tsx';
import ImageContainer from '@src/components/layout/ImageContainer.tsx';
import PaperSection from '@src/components/layout/PaperSection.tsx';
import ResearchBanner from '@src/components/layout/ResearchBanner.tsx';
import SectionContainer from '@src/components/layout/SectionContainer.tsx';
import content from '@src/content/home.ts';
import MuiMarkdown from 'mui-markdown';
import React from 'react';

export default function Home() {
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down('sm'));
  const { handleLinkClick } = useScroll();

  externalLinks();

  return (
    <>
      <IndividualPageHead
        title={content.meta.title}
        metaContent={content.meta.content}
      />

      <main>

        <HeroBanner {...content.heroBanner} aria-label={content.heroBanner.ariaLabels?.ctaButton} />

        <SectionContainer>
          <ButtonGroup
            variant="text"
            fullWidth
            orientation={matchesXS ? 'vertical' : 'horizontal'}
          >
            {content.sectionNavs.map((nav) => (
              <Button key={nav.href} data-href={nav.href} onClick={handleLinkClick}>
                {nav.label}
              </Button>
            ))}
          </ButtonGroup>
        </SectionContainer>

        <SectionContainer id={content.ourMission.id}>
          <PaperSection>
            <Grid container>
              <Grid item xs={12}>
                <Typography variant="h2" sx={{ textAlign: 'center' }}>
                  {content.ourMission.header}
                </Typography>
              </Grid>
              <Grid item sm={12} md={6}>
                <ImageContainer
                  src={content.ourMission.imgsrc as string}
                  alt=""
                  width={406}
                  height={306}
                  style={{ width: '100%' }}
                  useImageDimensions
                />
              </Grid>
              <Grid item sm={12} md={6}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    mt: '4.375rem',
                    textAlign: {
                      sm: 'center',
                      md: 'left',
                    },
                  }}
                >
                  <MuiMarkdown>{content.ourMission.body}</MuiMarkdown>
                </Typography>
              </Grid>
            </Grid>

          </PaperSection>
        </SectionContainer>

        {content.gridSections.map((section) => (
          <SectionContainer key={section.id} id={section.id}>
            <PaperSection
              title={section.title}
              subtitle={section.subtitle}
              ctaLink={section.ctaLink}
              ctaText={section.ctaText}
              ariaLabels={{ ctaButton: section.ariaLabels?.ctaButton }}
            >
              <Grid container spacing={4}>
                {section.items.map((item) => (
                  <GridItemCard
                    key={item.id}
                    xs={12}
                    md={section.items.length % 2 ? 4 : 3}
                    title={item.title}
                    body={item.body}
                    imgsrc={item.imgsrc}
                  />
                ))}
              </Grid>
            </PaperSection>
          </SectionContainer>
        ))}

        <SectionContainer id="faq">
          <PaperSection title="FAQ">
            {content.faqs.map((faq) => (
              <AccordionBuilder key={faq.id} {...faq} />
            ))}
          </PaperSection>
        </SectionContainer>

        <ResearchBanner />
        <MailchimpForm mobileMarginZero />

      </main>
    </>
  );
}
