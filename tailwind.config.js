tailwind.config = {
    theme: {
        extend: {
            colors: {
                violet: {
                    920: '#320628',  // not so dark
                    950: '#28222f',  // dark bg
                },
            },
            lineHeight: {
                '12': '3rem',
            }
        },
        screens: {
            'xs': '450px',
            'sm': '640px',
            // => @media (min-width: 640px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
        }
    },
}
