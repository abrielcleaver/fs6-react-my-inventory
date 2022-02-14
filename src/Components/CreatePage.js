import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createPlant } from '../services/fetch-utils';

export default function CreatePage() {
  // you'll need the history hook from react-router-dom to do your redirecting in the handleSubmit

  // here's the state you'll need:
    // name;
    // description;
    // sun;
    // water;
    // type;
    // image;
    
  const history = useHistory();     
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [sun, setSun] = useState('');
  const [water, setWater] = useState('');
  const [type, setType] = useState('');
  const [image, setImage] = useState('');


  async function handleSubmit(e) {
    e.preventDefault();

    // create a plant
    await createPlant ({
      name: name,
      description: description,
      sun: sun,
      water: water,
      type: type,
      image: image
  
    });

    // use history.push to send the user to the list page
    history.push('/greenhouse');
  }
  // console.log(createPlant);
  return (
    <div className='create'>
      {/* on submit, call your handleSubmit function */}
      <form onSubmit={handleSubmit}>
        <h2>Add your plant</h2>
        <label>
            Name
          {/* on change, set the name in state */}
          <input 
            required name='name' 
            value={name} 
            onChange={e => setName(e.target.value)}
          />
        </label>
        <label>
            Description
          {/* on change, set the description in state */}
          <textarea 
            required name='description'
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </label>
        <label>
            sun
          {/* on change, set the sun in state */}
          <select 
            value={sun} 
            required 
            onChange={e => setSun(e.target.value)}>
            <option>Indirect</option>
            <option>Direct</option>
            <option>Moderate</option>
          </select>
        </label>
        <label>
            watering schedule
          {/* on change, set the water in state */}
          <input 
            required name='water' 
            value={water} 
            onChange={e => setWater(e.target.value)}
          />
        </label>
        <label>
            Type
          {/* on change, set the type in state */}
          <input 
            required name='type' 
            value={type} 
            onChange={e => setType(e.target.value)}
          />
        </label>
        <label>
            Image URL
          {/* on change, set the image in state */}
          <input 
            required name='image'
            value={image}
            onChange={e => setImage(e.target.value)}
          />
        </label>
        <button>ADD TO GREENHOUSE</button>
      </form>
    </div>
  );
}
