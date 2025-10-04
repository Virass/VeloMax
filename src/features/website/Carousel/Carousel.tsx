import {
    type CarouselProps,
    Carousel as MantineCarousel,
    CarouselSlide,
} from '@mantine/carousel';
import { Box } from '@mantine/core';
import Image from 'next/image';

import LeftArrowIcon from '@/shared/ui/icons/LeftArrowIcon';

import './styles/carousel.scss';

interface Props extends CarouselProps {
    images: string[];
}

export default function Carousel({ images, ...rest }: Props) {
    return (
        <MantineCarousel
            height="auto"
            previousControlIcon={<LeftArrowIcon color="gray.5" />}
            nextControlIcon={
                <span className="rightIcon">
                    <LeftArrowIcon color="gray.5" />
                </span>
            }
            className="carousel"
            {...rest}
        >
            {images.map((url) => (
                <CarouselSlide key={url}>
                    <Box className="slideContent">
                        <Image
                            src={url}
                            className="slideImg"
                            alt="Carousel image"
                            width={200}
                            height={160}
                        />
                    </Box>
                </CarouselSlide>
            ))}
        </MantineCarousel>
    );
}
