import { Helmet } from 'react-helmet-async';

// section
import { BooksView } from 'src/sections/books/view';

export default function OverviewBooksPage() {
  return (
    <>
      <Helmet>
        <title>Books</title>
      </Helmet>
      <BooksView />
    </>
  );
}
