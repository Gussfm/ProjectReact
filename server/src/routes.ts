import express  from "express";
import {getUsers, addUserRegister, updateUserMain, deleteUser, getUsersName, login} from './controllers/users';

const router = express.Router();

router.get("/", getUsers);
router.get("/:nome_usuario", getUsersName);

router.post("/", addUserRegister);
router.post("/login", login);

router.put("/:id", updateUserMain);

router.delete("/:id", deleteUser);

export default router;