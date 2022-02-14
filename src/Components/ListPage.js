import { useState, useEffect } from 'react';
import { getPlants } from '../services/fetch-utils';
import Plant from './Plant';

export default function ListPage() {
  // you'll need some state to hold onto the array of plants
  const [plants, setPlants] = useState([]);
  // fetch the plants on load and inject them into state
  useEffect(() => {
    async function fetchPlants() {
      const data = await getPlants();

      setPlants(data);
    }
    fetchPlants();
  }, []);
  
  return (
    <div className='list plants'>
      <div>
        <h2>
        YOUR PLANTS SAY HELLO
        </h2>
      </div>
      {/* map through the plants in state and render plant components */}
      {
        plants.map((plant) => <Plant key={plant.id} plant={plant} />)
      }
    </div>
  );
}
