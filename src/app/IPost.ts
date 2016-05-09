export interface IPost {
    /**
     * 文章連結
     */
    href: string;
    /**
     * 文章標題
     */
    title: string;
    /**
     * 文章發表時間
     */
    date: string;
    /**
     * 作者
     */
    author: string;
    /**
     * 文章分類
     */
    category: string;
    /**
     * 文章分類連結
     */
    categoryLink: string;
    /**
     * 文章摘要
     */
    summary: string;
}