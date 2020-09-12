
interface Theme {
    colors: {
        black: string;
        primary: string;
        secondary: string;
        grey: string;
        white: string;
    },
    fonts : {
        headings: string;
    }
}

export const theme: Theme = {
    colors: {
        black: '#000000',
        primary: '#14213D',
        secondary: '#FCA311',
        grey: '#E5E5E5',
        white: '#FFFFFF'
    },
    fonts: {
        headings: "'Grandstander', cursive"
    }
}