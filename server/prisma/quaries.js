const { PrismaClient } = require('./generated/prisma/client');
require('dotenv').config({ path: '../.env' });

const prisma = new PrismaClient();

async function getData() {
  const users = await prisma.user.findMany();
  const files = await prisma.file.findMany();

  console.log(users);
  console.log(files);

  return { users, files };
}

module.exports = {
  getData
}