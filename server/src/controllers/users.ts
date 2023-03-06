import {Request, Response} from 'express'
import {db} from '../db';

export const getUsers = (req: Request, res: Response) =>{
    const q = "SELECT * FROM usuarios";

    db.query(q,(err,data) => {
        if(err) return res.json(err);

        return res.status(200).json(data);
    });
};

export const getUsersName = (req: Request, res: Response) => {
    const q = "SELECT * FROM usuarios WHERE nome_usuario = ?";
    const value = req.params.nome_usuario;
    
    db.query(q,[value],(err,data) => {
        if(err) return res.json(err);

        return res.status(200).json(data);
    });

};

export const addUserRegister = (req: Request, res: Response) => {
    const q ="INSERT INTO usuarios(`nome_usuario`,`email_usuario`,`senha_usuario`,`telefone_usuario`) VALUES(?)"

    const values = [
        req.body.nome_usuario,
        req.body.email_usuario,
        req.body.senha_usuario,
        req.body.telefone_usuario,
    ]

    db.query(q,[values], (err) =>{
        if(err) return res.json(err);

        return res.status(200).json("Usuario Cadastrado com sucesso.")
    });

}




export const updateUserMain = (req: Request, res: Response) => {
    const q = "UPDATE usuarios SET `nome_usuario` = ?, `senha_usuario` = ?, `telefone_usuario` = ? WHERE `id` = ?";

    const values = [
        req.body.nome_usuario,
        req.body.senha_usuario,
        req.body.telefone_usuario,
        req.params.id,
        
    ];
    console.log(values);

    db.query(q,[...values], (err) =>{
        if(err) return res.json(err);

        return res.status(200).json("Usuario Atualizado")
    });

};


export const deleteUser = (req: Request, res: Response) => {
    const q = "DELETE FROM usuarios WHERE `id` = ?";

    db.query(q,[req.params.id], (err) =>{
        if(err) return res.json(err);

        return res.status(200).json("Usuario Deletado")
    });

};


export const login = (req: Request, res: Response) => {
    const q = "SELECT * FROM usuarios WHERE `email_usuario` = ? AND `senha_usuario` = ?";

    const values = [
        req.body.email_usuario,
        req.body.senha_usuario
    ]

    db.query(q, [...values], (err, result) => {
        if(err) return res.json(err);

        if(result.length > 0){
            res.send(result);
        } else {
            return res.status(401).json("Usuario Não Encontrado")
        }
    });
};
