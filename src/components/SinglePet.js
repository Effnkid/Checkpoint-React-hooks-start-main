import React from 'react';

function SinglePet(props) {
  const [adopted, setAdopted] = React.useState(false);

  const singleAdopted = () => {
    return adopted ? ' adopted' : '';
  };

  return (
    <div className={'single-pet' + singleAdopted()}>
      <h1> {props.pet.name}</h1>
      <p> {props.pet.species}</p>
      <p> {props.pet.description}</p>
      <hr></hr>
      <p> {adopted ? ' Adopted' : 'Available'}</p>
      <button id="single-pet" onClick={() => setAdopted(!adopted)}>
        Click
      </button>
    </div>
  );
}

export default SinglePet;
