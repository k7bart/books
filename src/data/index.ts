export const apiBaseUrl = "http://localhost:3000";

export const navLinks = [
  { path: "/", text: "Dashboard" },
  { path: "/book", text: "+ Add Book" },
];

export const dateFormat = "D MMMM YYYY, h:mmA";

export const tableHeaders = [
  "Book title",
  "Author name",
  "Category",
  "ISBN",
  "Created At",
  "Modified/Edited At",
  "Actions",
];

export enum Filter {
  All = "All",
  Active = "Active",
  Deactivated = "Deactivated",
}

export enum Category {
  Tragedy = "Tragedy",
  Horror = "Horror",
  Fiction = "Fiction",
  NonFiction = "Non-fiction",
  Mystery = "Mystery",
  Thriller = "Thriller",
  Romance = "Romance",
  Biography = "Biography",
  ScienceFiction = "Science fiction",
  Fantasy = "Fantasy",
  SelfHelp = "Self-help",
  Health = "Health",
  History = "History",
}
