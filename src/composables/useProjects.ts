import { ref } from 'vue'

const activeTab = ref<string>('projects');

export function useProjects() {
    const setActiveTab = (tab: string) => {
        activeTab.value = tab
    }

    const getActiveTab = () => {
        return activeTab.value
    }

    return {
        activeTab,
        setActiveTab,
        getActiveTab
    }
}