import React from 'react';
import SinglePet from './SinglePet';

const cody = {
  id: 2,
  name: 'Cody',
  description: 'Adorable pug who loves to hug',
  species: 'dog',
};

// PetList only renders one SinglePet. We'd like it to render a list of pets,
// passed in as props.pets. Don't forget to add a unique key to each one!
function PetList(props) {
  const [isSelected, setSelected] = React.useState('all');
  const [list, setList] = React.useState(props.pets);

  // React.useEffect(() => {
  //   if (isSelected === 'all') {
  //     setList(props.pets);
  //   } else {
  //     const temp = props.pets.filter((ele) => {
  //       return ele.species === isSelected;
  //     });
  //     setList(temp);
  //   }
  // }, [isSelected]);
  const handleChange = (event) => {
    setSelected(event.target.value);
    const renderChange = () => {};
  };

  return (
    <>
      <p>
        Filter By Species
        <select onChange={handleChange}>
          <option value="all">All</option>
          <option value="cat">Cats</option>
          <option value="dog">Dogs</option>
        </select>
      </p>
      <div className="pet-list">
        {list.map((ele) => (
          <SinglePet pet={ele} key={ele.id} />
        ))}
      </div>
    </>
  );
}

export default PetList;
