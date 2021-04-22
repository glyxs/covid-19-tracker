import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import {
    Breadcrumb,
    BreadcrumbItem,
    Heading
} from "@chakra-ui/react";

const Breadcrumbs = () => {
    return (
        <Breadcrumb spacing="8px" separator={<FiChevronRight />}>
            <BreadcrumbItem>
                <Heading>Global</Heading>
            </BreadcrumbItem>

            <BreadcrumbItem>
            </BreadcrumbItem>
        </Breadcrumb>
    );
};

export default Breadcrumbs;
