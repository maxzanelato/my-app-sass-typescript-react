module.exports = () => {
  const data = {
    users: [],
  };

  for (let i = 1; i < 10; i++) {
    data.users.push({
      id: i,
      name: 'Max Zanelato',
      email: 'max.zanelato@exampl.com',
      birthdate: new Date(),
      phone: '99 99999-9999',
      image: 'https://avatars.githubusercontent.com/u/61247833?v=4',
      address: {
        country: 'Brasil',
        state: 'Santa Catarina',
        street: 'Rua dos Dados Falsos',
        number: Math.floor(Math.random() * 100),
      },
    });
  }

  return data;
};
