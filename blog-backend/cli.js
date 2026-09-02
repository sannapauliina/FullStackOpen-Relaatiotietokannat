const { Client } = require("pg");

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

async function main() {
  await client.connect();

  console.log("Executing: SELECT * FROM blogs");
  const res = await client.query("SELECT * FROM blogs");

  res.rows.forEach((blog) => {
    console.log(`${blog.author}: '${blog.title}', ${blog.likes} likes`);
  });

  await client.end();
}

main();
