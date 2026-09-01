CREATE TABLE blogs (
  id SERIAL PRIMARY KEY,
  author TEXT,
  url TEXT NOT NULL,
  title TEXT NOT NULL,
  likes INTEGER DEFAULT 0
);

INSERT INTO blogs (author, url, title, likes)
VALUES ('Sanna', 'https://example.com/blog1', 'Ensimmäinen blogi', 0);

INSERT INTO blogs (author, url, title, likes)
VALUES ('Sanna', 'https://example.com/blog2', 'Toinen blogi', 5);
