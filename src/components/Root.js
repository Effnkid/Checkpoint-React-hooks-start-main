import React from 'react';
import PetList from './PetList';
import axios from 'axios';

// We'll render these sample pets for now. Later, we'll instead fetch the list
// of pets from the server! We won't need samplePets after that.
import samplePets from '../petdata';

const Root = () => {
  const [pets, setPets] = React.useState({});

  // not sure if data is coming in or not but his is my ajax request to replace samplePets
  React.useEffect(() => {
    const data = async () => {
      const pets = await axios('/api/pets');
      setPets(pets.data);
    };
  });

  return (
    <>
      {/* {console.log(data)} */}
      <h1>Adoption Center</h1>
      <PetList pets={samplePets} />
    </>
  );
};

export default Root;
