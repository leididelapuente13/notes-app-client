export interface Note {
  id: string;
  title: string;
  tags: string[];
  updatedAt: Date;
  content: string;
  archived: boolean;
}
