interface Ivote {
    id?: string;
    score?: number;
    date?: string;
}
declare const reportJoke: Array<Ivote>;
declare const currentJoke: Ivote;
declare const handleAddRate: (vote: number) => void;
declare const handleNext: () => void;
declare const displayRandomJoke: () => Promise<void>;
declare const addRate: () => void;
declare const dateIso: () => string;
declare const resertCurrentJoke: () => void;
