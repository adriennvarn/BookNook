# Reading Nook: Book Review Database

Capstone Project 1

## Summary

Database of user reviews for books. Information on books taken from a free open API. Demonstrates all required features:

- **External API Fetch:** fetch book information from external API when adding to database

- **State Management:** Database is stored with local storage, itself a state tool, including error handling and display logic.

- **At least three Components:** Navbar, search and filter menu, book list, book cards (both mini and full), add book menu (both search and entry windows)

- **Styling:** Of *course* it's gonna look pretty!

- **GitHub Repo:** This very design doc will be included in the repo.

- **Deployment:** Only optional, but since this uses local storage and no server-based database, it's trivial to deploy it using `gh-pages`.

## Pages & Components

A loose outline of the pages and the components in each one.

- Home page

  - Navbar

  - search and filter menu

  - book list

    - book mini cards

      - book information (title, author, image)

      - rating in stars

      - summary of review

    - on click, open full book card:

      - book information (title, author, image)

      - rating in stars

      - date read

      - other book information (publishing date, ISBN, etc)

      - summary and full review

- add book page

  - search by title or author on a book API

  - display top 3 results with:

    - title

    - author

    - summary

    - cover if available

  - on select entry (or manual):

    - autofill available information from book API

    - allow manual edit / entry

    - select rating, enter review summary and full review
