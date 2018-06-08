create table posts(
    id serial primary key,
    title varchar(45),
    image text,
    content text,
    author_id integer references users (id)
);