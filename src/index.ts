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
                border: 'hsl(225, 100%, 92%)',
                borderSubtle: 'hsl(234, 100%, 92%)',
                primary: 'hsl(236, 90%, 61%)',
                secondary: 'hsl(212, 100%, 37%)',
                info: 'hsl(236, 58%, 42%)',
                success: 'hsl(160, 100%, 31%)',
                notice: 'hsl(18, 67%, 54%)',
                warning: 'hsl(294, 100%, 28%)',
                danger: 'hsl(326, 90%, 61%)'
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
                    surface: 'hsl(210, 100%, 91%)',
                    text: 'hsl(212, 100%, 37%)',
                },
                toast: {
                    surface: 'hsl(231, 100%, 97%)',
                    border: 'hsl(225, 100%, 92%)',
                },
            },
        },
    ],
};
