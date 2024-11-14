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
}
