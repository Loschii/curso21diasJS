class Hotel {
    constructor(nome, categoria, endereco, telefone) {
      this.id = hotels.length + 1;
      this.nome = nome;
      this.categoria = categoria;
      this.endereco = endereco;
      this.telefone = telefone;
    }
  }
  
  class Reserva {
    constructor(idHotel, nomeResponsavel, diaEntrada, diaSaida) {
      this.id = reservations.length + 1;
      this.idHotel = idHotel;
      this.nomeResponsavel = nomeResponsavel;
      this.diaEntrada = diaEntrada;
      this.diaSaida = diaSaida;
    }
  }
  
  let hotels = [];
  let reservations = [];
  let idHotel = [];
  let idReserva = [];
  
  function cadastrarHotel() {
    let nome = prompt("Digite o nome do hotel:");
    let categoria = prompt("Digite a categoria do hotel:");
    let endereco = prompt("Digite o endereço do hotel:");
    let telefone = prompt("Digite o telefone do hotel:");
  
    let hotel = new Hotel(nome, categoria, endereco, telefone);
    hotels.push(hotel);
    idHotel.push(hotel.id);
  
    console.log("Hotel cadastrado com sucesso! ID do hotel: " + hotel.id);
  }
  
  function cadastrarReserva() {
    let idHotelReserva = prompt("Digite o ID do hotel:");
    let nomeResponsavel = prompt("Digite o nome do responsável pela reserva:");
    let diaEntrada = prompt("Digite o dia de entrada (formato: dd/mm/aaaa):");
    let diaSaida = prompt("Digite o dia de saída (formato: dd/mm/aaaa):");
  
    let hotelExiste = idHotel.includes(parseInt(idHotelReserva));
  
    if (!hotelExiste) {
      console.log("Hotel não encontrado. Cadastre o hotel antes de fazer uma reserva.");
      return;
    }
  
    let reserva = new Reserva(parseInt(idHotelReserva), nomeResponsavel, diaEntrada, diaSaida);
    reservations.push(reserva);
    idReserva.push(reserva.id);
  
    console.log("Reserva cadastrada com sucesso! ID da reserva: " + reserva.id);
  }
  
  function listarReservasPorHotel(idHotel) {
    let reservasHotel = reservations.filter((reserva) => reserva.idHotel === idHotel);
  
    reservasHotel.forEach((reserva) => {
      let hotel = hotels.find((hotel) => hotel.id === reserva.idHotel);
      console.log(`Nome do hotel: ${hotel.nome} - Nome do responsável: ${reserva.nomeResponsavel} - Dia de entrada: ${reserva.diaEntrada} - Dia de saída: ${reserva.diaSaida}`);
    });
  }
  
  function listarReservaPorId(idReserva) {
    let reserva = reservations.find((reserva) => reserva.id === idReserva);
  
    if (reserva) {
      let hotel = hotels.find((hotel) => hotel.id === reserva.idHotel);
      console.log(`Nome do hotel: ${hotel.nome} - Endereço: ${hotel.endereco} - Dia de entrada: ${reserva.diaEntrada} - Dia de saída: ${reserva.diaSaida}`);
    } else {
      console.log("Reserva não encontrada.");
    }
  }
  
  function listarReservasPorNome(nomeResponsavel) {
    let reservasPessoa = reservations.filter((reserva) => reserva.nomeResponsavel === nomeResponsavel);
  
    reservasPessoa.forEach((reserva) => {
      let hotel = hotels.find((hotel) => hotel.id === reserva.idHotel);
      console.log(`Nome do hotel: ${hotel.nome} - Nome do responsável: ${reserva.nomeResponsavel} - Dia de entrada: ${reserva.diaEntrada} - Dia de saída: ${reserva.diaSaida}`);
    });
  }
  
  function listarHoteisPorCategoria(categoria) {
    let hoteisCategoria = hotels.filter((hotel) => hotel.categoria === categoria);
  
    hoteisCategoria.forEach((hotel) => {
      console.log(`ID: ${hotel.id} - Nome: ${hotel.nome} - Categoria: ${hotel.categoria} - Endereço: ${hotel.endereco} - Telefone: ${hotel.telefone}`);
    });
  }
  
  function atualizarTelefoneHotel(idHotel, telefone) {
    let hotel = hotels.find((hotel) => hotel.id === idHotel);
  
    if (hotel) {
      hotel.telefone = telefone;
      console.log("Telefone atualizado com sucesso!");
    } else {
      console.log("Hotel não encontrado.");
    }
  }
  
  function menu() {
    while (true) {
      console.log("Selecione uma opção:");
      console.log("1 - Cadastrar hotel");
      console.log("2 - Cadastrar reserva");
      console.log("3 - Listar reservas por hotel");
      console.log("4 - ListarReserva por ID");
      console.log("5 - Listar reservas por nome do responsável");
      console.log("6 - Listar hotéis por categoria");
      console.log("7 - Atualizar telefone do hotel");
      console.log("0 - Sair");
  
      let opcao = parseInt(prompt("Digite o número da opção desejada:"));
  
      switch (opcao) {
        case 1:
          cadastrarHotel();
          break;
        case 2:
          cadastrarReserva();
          break;
        case 3:
          let idHotel1 = prompt("Digite o ID do hotel:");
          listarReservasPorHotel(idHotel1);
          break;
        case 4:
          let idReserva = prompt("Digite o ID da reserva:");
          listarReservaPorId(idReserva);
          break;
        case 5:
          let nomeResponsavel = prompt("Digite o nome do responsável:");
          listarReservasPorNome(nomeResponsavel);
          break;
        case 6:
          let categoria = prompt("Digite a categoria dos hotéis:");
          listarHoteisPorCategoria(categoria);
          break;
        case 7:
          let idHotel2 = prompt("Digite o ID do hotel:");
          let telefone = prompt("Digite o novo telefone:");
          atualizarTelefoneHotel(idHotel2, telefone);
          break;
        case 0:
          return;
        default:
          console.log("Opção inválida. Tente novamente.");
      }
    }
  }
  
  menu();