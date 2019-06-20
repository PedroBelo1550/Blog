var dbPedroBeloFake= {
    data: [
        {
            id: 1,
            Titulo: 'Reforma de Previdência será aprovada?',
            Descricao: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio qui, expedita voluptatem molestias possimus fuga maiores. Dolorum nihil fuga earum maiores necessitatibus autem, deleniti dolore commodi, nam aut magnam obcaecati.',
            Foto: 'https://picsum.photos/200/120',
            Data: '23-06-2019',
            Curtidas:1,
            Comentarios: 'dsadsadsa',
            Nome:'pedro'

        },
        {
            id: 2,
            Titulo: 'Fulano comete suicidio',
            Descricao: '   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio qui, expedita voluptatem molestias possimus fuga maiores. Dolorum nihil fuga earum maiores necessitatibus autem, deleniti dolore commodi, nam aut magnam obcaecati.',
            Foto: 'https://picsum.photos/200/120',
            Data: '23-06-2019',
            Curtidas:1,
            Comentarios: 'dsadsadsa',
            Nome:'pedro'
        },

        {   
            id: 3,
            Titulo: 'aluno da Puc Minas surta',
            Descricao: '   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio qui, expedita voluptatem molestias possimus fuga maiores. Dolorum nihil fuga earum maiores necessitatibus autem, deleniti dolore commodi, nam aut magnam obcaecati.',
            Foto: 'https://picsum.photos/200/120',
            Data: '23-06-2019',
            Curtidas:1,
            Comentarios: 'dsadsadsa',
            Nome:'pedro'
        },

        {   
            id: 4,
            Titulo: 'Como não ser infectado por virus',
            Descricao: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio qui, expedita voluptatem molestias possimus fuga maiores. Dolorum nihil fuga earum maiores necessitatibus autem, deleniti dolore commodi, nam aut magnam obcaecati.',
            Foto: 'https://picsum.photos/200/120',
            Data: '23-06-2019',
            Curtidas:1,
            Comentarios: 'dsadsadsa',
            Nome:'pedro'
        },

        {   
            id: 5,
            Titulo: 'Dicas para engordar com saude',
            Descricao: '   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio qui, expedita voluptatem molestias possimus fuga maiores. Dolorum nihil fuga earum maiores necessitatibus autem, deleniti dolore commodi, nam aut magnam obcaecati.',
            Foto: 'https://picsum.photos/200/120',
            Data: '23-06-2019',
            Curtidas:1,
            Comentarios: 'dsadsadsa',
            Nome:'pedro'
        },

        {   
            id: 6,
            Titulo: 'Receita de pudim',
            Descricao: '   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio qui, expedita voluptatem molestias possimus fuga maiores. Dolorum nihil fuga earum maiores necessitatibus autem, deleniti dolore commodi, nam aut magnam obcaecati.',
            Foto: 'https://picsum.photos/200/120',
            Data: '23-06-2019',
            Curtidas:1,
            Comentarios: 'dsadsadsa',
            Nome:'pedro'
        }

    ]
}


// Caso exista no Local Storage, recupera os dados salvos
var dbPedroBelo = JSON.parse(localStorage.getItem('dbPedroBelo'));
if (!dbPedroBelo) {
    dbPedroBelo = dbPedroBeloFake
};


//Função Para inserir postagem
function insertContato(Postagem) {
    // Calcula novo Id a partir do último código existente no array
    let novoId = dbPedroBelo.data[dbPedroBelo.data.length - 1].id + 1;
    let novaPostagem = {
        "id": novoId,
        "Titulo": Postagem.Titulo,
        "Descricao": Postagem.Descricao,
        "Data": Postagem.Data,
        "Curtidas": Postagem.Curtidas.count,
        "Comentarios": Postagem.Comentarios,
        "Nome": Postagem.Nome
    };

    // Insere o novo objeto no array
    dbPedroBelo.data.push(novaPostagem);
    displayMessage("Contato inserido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('dbPedroBelo', JSON.stringify(dbPedroBelo));

}


function deleteContato(id) {    
    // Filtra o array removendo o elemento com o id passado
    dbPedroBelo.data = dbPedroBelo.data.filter(function (element) { return element.id != id });

    displayMessage("Contato removido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('dbPedroBelo', JSON.stringify(dbPedroBelo));
}
