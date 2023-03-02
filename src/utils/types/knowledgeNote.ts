export interface KnowledgeNoteListProps {
    /** id */
    id: string;
    /** 标题 */
    title: string;
    /** 标签 */
    tags: any[];
    /** 更新时间 */
    time: string;
}

export interface KnowledgeNoteDetailProps {
    /** id */
    id: string;
    /** 笔记标题 */
    title: string;
    /** 笔记标签 */
    tags: any[];
    /** 笔记内容 */
    content: any;
}
