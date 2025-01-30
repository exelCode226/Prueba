import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getCategory = async (req, res) => {
  try {
    const data = await prisma.category.findMany();
    if (data === 0) {
      return res.status(400).send("No hay datos");
    }
    return res.status(200).json({ success: true, data: data });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error en el servidor");
  }
};

export const postCategory = async (req, res) => {
  console.log(req.body);
  const { name } = req.body;
  try {
    if (!name) {
      return res
        .status(400)
        .json({ success: false, message: "Ingresa todos los datos" });
    }
    const newCategory = await prisma.category.create({
      data: {
        name
       
      },
    });

    return res.status(200).json({ success: true, message: newCategory });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error en el servidor");
  }
};

export const getOneCategory = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    if (!id) {
      return res.status(400).send("Ingresa un id Valido");
    }
    const existing = await prisma.category.findFirst({
      where: {
        id: id,
      },
    });
    if (!existing) {
      return res
        .status(400)
        .send("Este recurso no se encuentra en la base de datos");
    }

    res.status(200).json({ data: existing });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error en el servidor");
  }
};

export const putCategory = async (req, res) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;
  try {
    if (!id) {
      return res.status(400).send("Ingresa un id Valido");
    }
    if (!name) {
      return res.status(400).send("Ingresa todos los campos");
    }
    const existing = await prisma.category.findFirst({
      where: {
        id: id,
      },
    });
    if (!existing) {
      return res
        .status(400)
        .send("Este recurso no se encuentra en la base de datos");
    }

    const category = await prisma.category.update({
      where: {
        id: id,
      },
      data: {
        name
       
      },
    });
    return res.status(200).json({ success: true, data: category });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error en el servidor");
  }
};

export const deleteCategory = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    if (!id) {
      return res.status(400).send("Ingresa un id Valido");
    }
    const existing = await prisma.category.findFirst({
      where: {
        id: id,
      },
    });
    if (!existing) {
      return res
        .status(400)
        .send("Este recurso no se encuentra en la base de datos");
    }
    await prisma.category.delete({
      where: {
        id: id,
      },
    });
    res.status(200).send("Eliminado con exito...");
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error en el servidor");
  }
};
