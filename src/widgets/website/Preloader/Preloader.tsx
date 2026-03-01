import React from 'react';

import { Flex, Loader } from '@mantine/core';

export default function WebSitePreloader() {
    return (
        <Flex
            mih={"30dvh"}
            gap="md"
            justify="center"
            align="center"
            direction="column"
            wrap="wrap"
        >
            <Loader color="black" size="xl" />
        </Flex>
    );
}
