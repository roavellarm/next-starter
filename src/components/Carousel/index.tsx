import { Carousel as ReactCarousel } from 'react-responsive-carousel'

import Image from 'next/image'
import styled from 'styled-components'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader

export const StyledLegend = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
  color: red;
  background: rgba(255, 255, 255, 0.4);
  padding: 10px;
`

interface Item {
  id: string | number
  name: string
  image: string
}

interface CarouselProps {
  list: Array<Item>
}

export function Carousel({ list }: CarouselProps) {
  return (
    <ReactCarousel
      infiniteLoop
      autoPlay
      showThumbs={false}
      showStatus={false}
      showIndicators={false}
      interval={3000}
      width="100%"
    >
      {list
        .filter((item) => !!item.image)
        .map((item) => (
          <div key={item.id}>
            <Image
              alt={item.name}
              src={`${item.image}`}
              height="300"
              width="600"
            />
            <StyledLegend>{item.name}</StyledLegend>
          </div>
        ))}
    </ReactCarousel>
  )
}
