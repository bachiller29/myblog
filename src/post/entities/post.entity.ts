export class Post {
    id: number;
    slug!: string;
    title!: string;
    excerpt?: string;
    content!: string;
    category: string;
    tags: string[];
    status: boolean;
    createdAt: Date;
}