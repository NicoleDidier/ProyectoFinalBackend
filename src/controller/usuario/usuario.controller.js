const UsuarioModel = require("../../models/usuario.models");

const addUserController = async (req, res) => {
    try {
        //PREGUNTARLE A FRAN: como hago para que en la base de datos no me guarde lo que yo pongo en la 
        //cotizacion post sino que me guarde el resultado de la cotizacion
        const{ username, password, rol, isActive, createAt } = req.body;
        const newUser = new UsuarioModel ({ username, password, rol, isActive, createAt })
        await newUser.save();
        res.json({message: 'Usuario creado exitosamente'})
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message + 'No se ha podido crear el usuario'})
    }
}

const getUserController = async (req, res) => {
    try {
        const allUsers = await UsuarioModel.find();
        res.json(allUsers)
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message + 'No se ha podido acceder a los usuarios'})
    }

}

const getUserByUsernameController = async (req, res) => {
    try {
        const { username } = req.params;
        const user = await UsuarioModel.findOne({username});
        if(!user) return res.status(404).json({message: `Usuario con el Username '${username}' no encontrado`})
        res.json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message + 'No se ha podido acceder al usuario'});
    }
}

const updateUserController = async (req, res) => {
    try {
        const { username: usernameToFind } = req.params;
        const { username, password, rol, isActive, createAt } = req.body;
        const user = await UsuarioModel.findOne({ username: usernameToFind });

        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        user.username = username;
        user.password = password;
        user.rol = rol;
        user.isActive = isActive;
        user.createAt = createAt;

        await user.save();

        res.json({ message: 'Usuario actualizado exitosamente' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'No se ha podido actualizar el usuario' });
    }
};



const deleteUserController = async (req, res) => {
    try {
        const { username } = req.params; 
        const user = await UsuarioModel.deleteOne({username});
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.json({ message: 'Usuario eliminado exitosamente' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'No se ha podido eliminar el usuario' });
    }
};

module.exports = { addUserController, getUserController, getUserByUsernameController, deleteUserController, updateUserController }