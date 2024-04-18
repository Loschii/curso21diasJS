class Livro {
    constructor(titulo, autor, editora, anoPublicacao) {
      this.titulo = titulo;
      this.autor = autor;
      this.editora = editora;
      this.anoPublicacao = anoPublicacao;
      this.disponibilidade = true;
    }
  }
  
  class Biblioteca {
    constructor(nome, endereco, telefone, acervoLivros) {
      this.nome = nome;
      this.endereco = endereco;
      this.telefone = telefone;
      this.acervoLivros = acervoLivros;
    }
  
    buscarLivro(nomeLivro) {
      for (let livro of this.acervoLivros) {
        if (livro.titulo === nomeLivro) {
          console.log("Informações do livro:");
          console.log("Título: " + livro.titulo);
          console.log("Autor: " + livro.autor);
          console.log("Editora: " + livro.editora);
          console.log("Ano de Publicação: " + livro.anoPublicacao);
          return;
        }
      }
      console.log("Livro não encontrado na biblioteca.");
    }
  
    emprestarLivro(nomeLivro) {
      for (let livro of this.acervoLivros) {
        if (livro.titulo === nomeLivro) {
          if (livro.disponibilidade) {
            livro.disponibilidade = false;
            return true;
          } else {
            return false;
          }
        }
      }
      return false;
    }
  
    devolverLivro(nomeLivro) {
      for (let livro of this.acervoLivros) {
        if (livro.titulo === nomeLivro) {
          livro.disponibilidade = true;
          return;
        }
      }
    }
  }

  let livros = [
    new Livro("A Revolução dos Bichos", "George Orwell", "Companhia das Letras", 1945),
    new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", "HarperCollins", 1954),
    new Livro("1984", "George Orwell", "Companhia das Letras", 1949)
  ];
  
  let biblioteca = new Biblioteca("Biblioteca Municipal", "Rua Principal, 123", "123456789", livros);
  
  biblioteca.buscarLivro("1984");
  console.log(biblioteca.emprestarLivro("A Revolução dos Bichos"));
  biblioteca.devolverLivro("O Senhor dos Anéis");