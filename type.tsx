export interface Post {
    _id: number;
    title: string;
    date: string;
    contents: string;
    previewContents: string;
    category: string;
    likes: Array<string>;
    comments: Array<string>;
}

export interface Category {
    _id: string;
    categoryName: string;
}

export interface PostDetail {
    _id: string;
    title: string;
    contents: string;
    date: string;
    category: Category;
    views: number;
    likes: Array<string>;
    comments: Array<string>;
}

export interface Comment {
    _id: string;
    contents: string;
    date: string;
    post: string;
    creator: string;
    creatorName: string;
    __v: number;
}

// reducer type
export interface Modal {
    open: boolean;
    data: {
        type: string;
        title: string;
        content: string;
        description: string;
        txtCancel: string;
        txtConfirm: string;
        fncConfirm: any;
    };
}
export interface User {
    id: string;
    name: string;
    nickname: string;
    role: string;
    userId: string;
}
export interface ModalState {
    modal: Modal;
    confirmModal: Modal;
}

export interface AuthState {
    token: string | null;
    isAuthenticated: boolean | null;
    role: string;
    user: User;
}

export interface RootState {
    modals: ModalState;
    auth: AuthState;
}
