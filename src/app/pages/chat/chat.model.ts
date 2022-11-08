export interface ChatUser {
    image?: string;
    name: string;
    message: string;
    time: string;
    status?: string;
    unread?: string;
}

export interface ChatMessage {
    align?: string;
    name?: string;
    message: string;
    time: string;
    files?: any;
}
