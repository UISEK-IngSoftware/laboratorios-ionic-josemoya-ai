export interface Repository {
    id: string;
    name: string;
    description: string;
    language: string;
    owner: {
        login: string;
        avatar_url: string;
    }
}