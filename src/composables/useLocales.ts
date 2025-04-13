import { inject, computed, ref, type Ref } from 'vue';
import en from '../locales/en.json';
import de from '../locales/de.json';
import hu from '../locales/hu.json';

export type Language = 'hu' | 'en' | 'de';

const translations = { en, de, hu };

export function useLocales() {
    const langCode = inject<Ref<Language>>('language', ref('en'));

    const t = computed(() => {
        return translations[langCode.value as keyof typeof translations];
    });

    return {
        t,
        currentLanguage: langCode,
        setLanguage: (lang: Language) => {
            langCode.value = lang;
            localStorage.setItem('language', lang);
            document.title = t.value.title;
            document.documentElement.lang = lang;
        },
    };
}
