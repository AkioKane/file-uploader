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

async function findUserRegistration(username, email) {
  const name = await prisma.user.findMany({
    where: {
      name: username
    }
  });
  
  const emailUser = await prisma.user.findMany({
    where: {
      email: email
    }
  });

  if (name.length === 0 || emailUser.length === 0) return false;
  
  return true;
}

async function findUserFiles(id) {
  const files = await prisma.file.findMany({
    where: {
      author_id: id
    }
  });
  return files;
}

async function uploadFile(id, files) {
  for (let file of files) {
    await prisma.user.update({
      where: {
        id: id
      },
      data: {
        uploads: {
          create: [
            {
              file_path: file.path,
              file_name: decodeURIComponent(file.originalname),
              file_size: file.size,
            }
          ]
        }
      }
    })
  }
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
  findUserFiles,
  findUserRegistration,
  createUser,
  uploadFile
}