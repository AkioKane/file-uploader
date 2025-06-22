const { PrismaClient } = require('./generated/prisma/client');
require('dotenv').config({ path: '../.env' });

const prisma = new PrismaClient();

async function main() {
  // const newUser = await prisma.user.create({
  //   data: {
  //     email: "aak@test.ru",
  //     password: "hash_here",
  //     name: "Akio",
  //     uploads: {
  //       create : [
  //         {
  //           id_file: 1
  //         },
  //         {
  //           id_file: 3
  //         }
  //       ]
  //     }
  //   }
  // });
  // console.log(newUser);

  const users = await prisma.user.findMany();
  const files = await prisma.file.findMany();

  console.log(users);
  console.log(files);
}

main();