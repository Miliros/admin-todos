import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";

export const signEmailPassword = async (email: string, password: string) => {
  if (!email || !password) return null;

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    const dbUser = await createUser(email, password); // si no hay usuario lo creo
    return dbUser;
  }
  if (!bcrypt.compareSync(password, user.password ?? "")) {
    // si las contrasenas no matchean
    return null;
  }
  return user;
};

// Opción de función createUser separada si necesitas usarla en otro contexto
export const createUser = async (email: string, password: string) => {
  const userExists = await prisma.user.findUnique({ where: { email } });

  if (userExists) {
    throw new Error("Este correo ya está registrado.");
  }

  const newUser = await prisma.user.create({
    data: {
      email: email,
      password: bcrypt.hashSync(password),
      name: email.split("@")[0],
    },
  });

  return newUser;
};
