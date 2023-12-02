import {
  Button, ButtonGroup, Grid, Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import useScroll from '@src/components/functional/CustomScroll.tsx';
import externalLinks from '@src/components/functional/ExternalLinks.tsx';
import IndividualPageHead from '@src/components/helper/IndividualPageHead.tsx';
import AccordionBuilder from '@src/components/layout/AccordionBuilder.tsx';
import GridItemCard from '@src/components/layout/GridItem.tsx';
import HeroBanner from '@src/components/layout/HeroBanner.tsx';
import PaperSection from '@src/components/layout/PaperSection.tsx';
import SectionContainer from '@src/components/layout/SectionContainer.tsx';
import content from '@src/content/why-vacate.ts';
import React from 'react';

export default function WhyVacatePage() {
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

      <HeroBanner
        header={content.heroBanner.header}
        subheading={content.heroBanner.subheading}
        imgsrc={content.heroBanner.imgsrc}
      />

      <SectionContainer id="why-vacate-main">
        <ButtonGroup
          id="main-button-group"
          variant="text"
          fullWidth
          orientation={matchesXS ? 'vertical' : 'horizontal'}
        >
          {content.buttons.map((button: any) => (
            <Button key={button.name} data-href={button.href} onClick={handleLinkClick}>
              {button.name}
            </Button>
          ))}
        </ButtonGroup>

        {content.cards.map((card: any) => (
          <SectionContainer id={`section-${card.sectionId}`} key={card.sectionId}>
            <PaperSection
              title={card.title}
              subtitle={card.subtitle}
              sx={{ textAlign: 'left', p: 4 }}
            >
              <Grid container spacing={4}>

                {card.cardItems.map((cardItem: any) => (
                  <GridItemCard
                    key={cardItem.title}
                    xs={12}
                    md={card.cardItems.length % 2 ? 4 : 6}
                    title={cardItem.title}
                    body={cardItem.body}
                    imgsrc={cardItem.imgRef}
                    textAlign="center"
                  />
                ))}

              </Grid>
              <Typography id="heading-resources" variant="h3">{content.resourcesText}</Typography>
              <Grid container spacing={2}>

                {card.accordianItems.map((accordianItem: any) => (
                  <Grid key={accordianItem.id} item xs={12} sm={6} md={4}>
                    <AccordionBuilder
                      id={accordianItem.id}
                      summary={accordianItem.summary}
                      details={accordianItem.details}
                      sx={{ my: 1, mx: 4, py: 2 }}
                    />
                  </Grid>
                ))}

              </Grid>
            </PaperSection>
          </SectionContainer>
        ))}

      </SectionContainer>
    </>
  );
}
