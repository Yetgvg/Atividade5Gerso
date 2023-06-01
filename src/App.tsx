import React from 'react';
import ButtonOptions from './ButtonOptions';

const App: React.FC = () => {
  const handleOption1Click = () => {
    console.log('Opção 1 selecionada');
  };

  const handleOption2Click = () => {
    console.log('Opção 2 selecionada');
  };

  const handleOption3Click = () => {
    console.log('Opção 3 selecionada');
  };

  const options = [
    { label: 'Clientes', onClick: handleOption1Click },
    { label: 'Produtos', onClick: handleOption2Click },
    { label: 'Serviços', onClick: handleOption3Click },
  ];

  return (
    <div>
      <h1>Escolha uma opção:</h1>
      <ButtonOptions options={options} />
    </div>
  );
};

export default App;
