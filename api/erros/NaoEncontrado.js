class NaoEncontrado extends Error {
    constructor () {
        super('Fornecedor não foi econtrado.')
        this.name = 'NaoEncontrado'
        this.idErro = 0
    }
}

module.exports = NaoEncontrado