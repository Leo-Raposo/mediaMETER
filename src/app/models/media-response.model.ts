import { MediaModel } from './media.model';

export interface MediaResponse {
    content: MediaModel[];
    page: {
        size: number;
        totalElements: number;
        totalPages: number;
        number: number;
    };
}