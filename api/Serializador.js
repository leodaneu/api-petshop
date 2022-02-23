const ValorNaoSuportado =  require('./erros/ValorNaoSuportado')
class Serializador {
    json(dados) {
        return JSON.stringify(dados)
    }

    serializer(dados) {
        if (this.contentType === 'application/json') {
            return this.json(dados)
        }

        throw new ValorNaoSuportado(this.contentType)
    }
}

module.exports = Serializador