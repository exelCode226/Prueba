import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getProducts = async (req, res) => {
  try {
    const data = await prisma.products.findMany();
    if (data === 0) {
      return res.status(400).send("No hay datos");
    }
    return res.status(200).json({ success: true, data: data });
  } catch (error) {
    console.error(error)
    return res.status(500).send("Error en el servidor")  
  }
};

export const postProducts = async (req, res) => {
    console.log(req.body)
  const {name,description,idCategory}=req.body
  try {
    if (!name || !description || !idCategory) {
        return res.status(400).json({success:false,message:"Ingresa todos los datos"})
    }
    const newProduct = await prisma.products.create({
        data:{
            name,
            description,
            idCategory
        }
    })

    return res.status(200).json({success:true,message:newProduct})

  } catch (error) {
    console.error(error)
    return res.status(500).send("Error en el servidor")  
  }
}

export const getOneProduct = async (req, res) => {
  res.send("GetOneProduct");
};

export const putProducts = async (req, res) => {
  
};

export const deleteProducts = async (req, res) => {
  res.send("deleteProducts");
};
