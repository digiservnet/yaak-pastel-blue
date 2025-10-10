import {PluginDefinition} from '@yaakapp/api';

export const plugin: PluginDefinition = {
    themes: [
        {
            id: "yaak-pastel-blue",
            label: "Pastel Blue",
            dark: false,
            base: {
                surface: 'hsl(240, 100%, 99%)',
                surfaceHightlight: 'hsl(222, 100%, 84%)',
                text: 'hsl(240, 7%, 11%)',
                textSubtle: 'hsl(0, 0%, 15%)',
                textSubtlest: 'hsl(0, 0%, 30%)',
                border: 'hsl(212, 100%, 38%)',
                borderSubtle: 'hsl(222, 100%, 84%)',
                primary: 'hsl(212, 100%, 38%)',
                secondary: 'hsl(244, 100%, 63%)',
                info: 'hsl(236, 90%, 61%)',
                success: 'hsl(160, 100%, 31%)',
                notice: 'hsl(263, 92%, 46%)',
                warning: 'hsl(41, 95%, 74%)',
                danger: 'hsl(18, 67%, 54%)'
            },
            components: {
                sidebar: {
                    surface: 'hsl(231, 100%, 97%)',
                    border: 'hsl(225, 100%, 92%)',
                    borderSubtle: 'hsl(234, 100%, 92%)',
                },
                appHeaader: {
                    surface: 'hsl(215, 100%, 14%)',
                    border: 'hsl(215, 100%, 14%)',
                },
                templateTag: {
                    surface: 'hsl(212, 100%, 38%)',
                    text: 'hsl(0, 0%, 100%)',
                },
                toast: {
                    surface: 'hsl(231, 100%, 97%)',
                    border: 'hsl(225, 100%, 92%)',
                },
            },
        },
    ],
};
