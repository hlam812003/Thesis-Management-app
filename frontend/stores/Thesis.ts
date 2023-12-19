import { defineStore } from 'pinia';
import ThesisService from '@/services/ThesisService';

export interface ThesisInfo {
    _id?: string;
    title: string;
    description: string;
    prerequisites?: string;
    tags?: string[];
    file?: string;
    professor?: string;
    created_time?: Date;
}

export const useThesisStore = defineStore('thesis', {
    state: () => ({
        theses: [] as ThesisInfo[],
        currentThesis: {} as ThesisInfo,
        completedTheses: [] as ThesisInfo[],
        completedThesisFile: {} as ThesisInfo,
    }),
    getters: {
        // Add getters if needed
    },
    actions: {
        async fetchTheses() {
            try {
                this.theses = await ThesisService.getTheses();
            } catch (error) {
                console.error('Could not fetch theses:', error);
            }
        },

        async fetchThesisById(thesisId: string) {
            try {
                this.currentThesis = await ThesisService.getThesisById(thesisId);
            } catch (error) {
                console.error('Could not fetch thesis:', error);
            }
        },

        async fetchCompletedTheses() {
            try {
                this.completedTheses = await ThesisService.getCompletedTheses();
            } catch (error) {
                console.error('Could not fetch completed theses:', error);
            }
        },

        async fetchCompletedThesisFile(assignedThesisId: string) {
            try {
                this.completedThesisFile = await ThesisService.getCompletedThesisFile(assignedThesisId);
            } catch (error) {
                console.error('Could not fetch completed thesis file:', error);
            }
        },

        async fetchCompletedThesisDataFile(fileId: string) {
            try {
                return await ThesisService.getCompletedThesisDataFile(fileId);
            } catch (error) {
                console.error('Could not fetch completed thesis data file:', error);
            }
        },

        async fetchFilesByThesisId(thesisId: string) {
            try {
                return await ThesisService.getFilesByThesisId(thesisId);
            } catch (error) {
                console.error('Could not fetch files:', error);
            }
        },

        async fetchFileById(fileId: string) {
            try {
                return await ThesisService.getFileById(fileId);
            } catch (error) {
                console.error('Could not fetch file:', error);
            }
        },
    },
});
