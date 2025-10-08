'use client';

import { useState } from 'react';

import { Box, Group, Stack } from '@mantine/core';
import Image from 'next/image';

import styles from './styles/productImageGallery.module.scss';
import { placeHolderImageURL } from '@/shared/constants/urls';

interface Props {
    images: string[];
}

export default function ProductImageGallery({ images }: Props) {
    const [selectedImage, setSelectedImage] = useState(images[0]);

    return (
        <Stack gap="16px">
            <Box className={styles.mainImageWrapper}>
                <Image
                    src={selectedImage || placeHolderImageURL}
                    alt="Selected product image"
                    fill
                    className={styles.mainImage}
                />
            </Box>

            <Group gap="16px" justify="center" wrap="wrap">
                {images.map((image) => (
                    <Box
                        key={image}
                        className={`${styles.thumbnailWrapper} ${
                            selectedImage === image ? styles.active : ''
                        }`}
                        onClick={() => setSelectedImage(image)}
                    >
                        <Image
                            src={image}
                            alt="Product thumbnail"
                            fill
                            className={styles.thumbnail}
                        />
                    </Box>
                ))}
            </Group>
        </Stack>
    );
}
