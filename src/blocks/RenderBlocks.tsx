import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'

import { SplitTextHero } from './ReadingText/Component'
import CaseStudySection from './CaseStudy/Component'
import { ContactBlock } from './Contact/Component'

import BlogSection from './MU/BlogSection/Component'
import ClientLogos from './MU/ClientLogos/Component'
import FeaturedWork from './MU/FeaturedWork/Component'
import FullScreenHero from './MU/FullScreenHero/Component'
import FullScreenVideo from './MU/FullScreenVideo/Component'
import ImpactSection from './MU/ImpactSection/Component'
import ReadingText from './MU/ReadingText/Component'
import ServicesSection from './MU/ServicesSection/Component'
import ServicesSection2 from './MU/ServicesSection2/Component'

const blockComponents = {
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  splitTextHero: SplitTextHero,
  caseStudySection: CaseStudySection,
  contactBlock: ContactBlock,
  blogSection: BlogSection,
  clientLogos: ClientLogos,
  featuredWork: FeaturedWork,
  fullScreenHero: FullScreenHero,
  fullScreenVideo: FullScreenVideo,
  impactSection: ImpactSection,
  readingText: ReadingText,
  servicesSection: ServicesSection,
  servicesSection2: ServicesSection2,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <div className="" key={index}>
                  {/* @ts-expect-error there may be some mismatch between the expected types here */}
                  <Block {...block} disableInnerContainer />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
