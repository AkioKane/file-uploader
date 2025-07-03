const { PrismaClient } = require('./generated/prisma/client');
require('dotenv').config();

const prisma = new PrismaClient();

async function findUser(username) {
  const user = await prisma.user.findMany({
    where: {
      name: username
    }
  });
  return user;
}

async function getData() {
  const users = await prisma.user.findMany();
  const files = await prisma.file.findMany();

  console.log(users);
  console.log(files);

  return { users, files };
}

module.exports = {
  getData,
  findUser
}