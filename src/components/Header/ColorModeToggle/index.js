import { FormControl, FormLabel, Switch, useColorMode } from '@chakra-ui/react';
import React from 'react';

const ColorModeToggle = () => {

    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <FormControl
            display="flex"
            alignItems="center">
            <FormLabel
                htmlFor="ColorModeToggle"
                mb="1"
                whiteSpace='nowrap'>
                Dark Mode
            </FormLabel>
            <Switch
                onChange={toggleColorMode}
                id="ColorModeToggle"
                isChecked={colorMode === "dark" ? true : false}
                size="md"
            />
        </FormControl>
    );
};

export default ColorModeToggle;
