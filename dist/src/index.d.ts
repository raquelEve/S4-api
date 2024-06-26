interface Ivote {
    id: string;
    score: number;
    date: string;
    source: string;
}
declare const reportJoke: Array<Ivote>;
declare const currentJoke: Ivote;
declare const handleFillRate: (vote: number) => void;
declare const handleNext: () => Promise<void>;
declare const displayDadJoke: () => Promise<void>;
declare const addRateInArr: () => void;
declare const dateIso: () => string;
declare const resetCurrentJoke: () => void;
/************* CHUCK NORRIS JOKES */
declare const displayChuckJoke: () => Promise<void>;
declare const randomCall: () => Promise<void>;
/************* BUBBLES BACKGROUND */
declare const randonBubble: () => void;
/************* WEATHER API */
declare const displayWeather: () => Promise<void>;
declare const printWeather: (data: any) => void;
