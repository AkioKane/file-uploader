const { PrismaClient } = require('./generated/prisma/client');
require('dotenv').config();

const prisma = new PrismaClient();

async function findUser(username) {
  const user = await prisma.user.findMany({
    where: {
      name: username
    }
  });

  if (user.length === 0) return null;

  return user;
}

async function findUserById(id) {
  const user = await prisma.user.findMany({
    where: {
      id: id
    }
  });
  return user;
}

async function createUser(username, email, password_hash) {
  const newUser = await prisma.user.create({
    data: {
      email: email,
      password: password_hash,
      name: username,
      uploads: {
        create: []
      }
    }
  });

  return newUser;
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
  findUser,
  findUserById,
  createUser
}