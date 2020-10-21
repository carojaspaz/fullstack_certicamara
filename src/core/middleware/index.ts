const auth = async(req, res, next) => {
    try{
        //TODO: lógica del middleware
        const name = req.params.name
            if(name !== 'demo')
                throw new Error('Usuario no autorizado');
        next();
    } catch(err){
        res.status(403).send({ message: `${err}`})
    }
}

export { auth }