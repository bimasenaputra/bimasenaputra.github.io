import { extendTheme } from '@chakra-ui/react';

interface Dictionary<T> {
    [Key: string]: T;
};


const theme: Dictionary<any> = extendTheme({
	fonts: {
		heading: `'Merriweather Sans', sans-serif`,
		body: `'Merriweather Sans', sans-serif`,
	},
});

export default theme;