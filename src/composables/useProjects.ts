import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const activeTab = ref('projects');

export function useProjects() {
    const router = useRouter();
    const route = useRoute();

    const setActiveTab = (tab: string) => {
        activeTab.value = tab;

        const currentQuery = { ...route.query };
        currentQuery.tab = tab;

        router.replace({
            path: route.path,
            query: currentQuery,
        });
    };

    const initializeTabFromUrl = () => {
        const urlTab = route.query.tab as string;

        if (urlTab && (urlTab === 'projects' || urlTab === 'models')) {
            activeTab.value = urlTab;
        } else {
            activeTab.value = 'projects';

            if (route.path === '/projects') {
                setActiveTab('projects');
            }
        }
    };

    return {
        activeTab,
        setActiveTab,
        initializeTabFromUrl,
    };
}
