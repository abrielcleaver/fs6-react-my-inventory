import { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { getPlantById } from '../services/fetch-utils';

export default function DetailPage() {
  const [plant, setPlant] = useState({});

  const match = useRouteMatch();
  // on mount, fetch and set in state the correct board plant for this id
  //  (the id can be found in match.params using the correct react-router hook)
  useEffect(() => {
    async function fetchPlant() {
      const getPlant = await getPlantById(match.params.id);

      setPlant(getPlant);
    }
    fetchPlant();
  }, [match.params.id]);

  return (
    <div className='detail'>
      <h1>{plant.name}</h1>
      <h2>An {plant.type} that likes {plant.sun} sun and should be watered {plant.water}</h2>
      <span>{plant.image}</span>
      <p>
        {plant.description}
      </p>
    </div>
  );
}
