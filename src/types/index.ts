export type Book = {
  title: string;
  author: string;
  category: string;
  isbn: string;
};

export type ApiBook = Book & {
  id: string;
  isActive: boolean;
  createdAt: string;
  modifiedAt?: string;
};
