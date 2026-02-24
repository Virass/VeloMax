'use client';

import { useState } from 'react';

import { Box, Group, Stack } from '@mantine/core';
import Image from 'next/image';

import { placeHolderImageURL } from '@/shared/constants/urls';

import styles from './styles/productImageGallery.module.scss';

interface Props {
    images: string[];
    minimized?: boolean;
}

export default function ProductImageGallery({ images, minimized }: Props) {
    const [selectedImage, setSelectedImage] = useState(images[0]);

    return (
        <Stack gap="16px">
            <Box
                className={`${styles.mainImageWrapper} ${minimized ? styles.minimizedMain : ''}`}
            >
                <Image
                    src={selectedImage || placeHolderImageURL}
                    alt="Selected product image"
                    fill
                    className={`${styles.mainImage} ${minimized ? styles.minimizedMainImage : ''}`}
                />
            </Box>

            <Group gap="16px" justify="center" wrap="wrap">
                {images.map((image) => (
                    <Box
                        key={image}
                        className={`${styles.thumbnailWrapper} ${
                            minimized ? styles.minimizedThumbWrapper : ''
                        } ${selectedImage === image ? styles.active : ''}`}
                        onClick={() => setSelectedImage(image)}
                    >
                        <Image
                            src={image}
                            alt="Product thumbnail"
                            fill
                            className={`${styles.thumbnail} ${
                                minimized ? styles.minimizedThumbnail : ''
                            }`}
                        />
                    </Box>
                ))}
            </Group>
        </Stack>
    );
}
