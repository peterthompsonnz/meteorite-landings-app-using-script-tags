const Card = ({ landing }) => {
  const cardStyle = {
    border: '1px solid #ccc',
    margin: '0 10px 10px 0',
    padding: '0 10px 10px 10px',
    borderRadius: '5px',
    maxWidth: '300px',
    color: '#222',
    fontSize: '0.9em'
  };
  const listStyle = { paddingLeft: '1em' };
  const h2Style = {
    margin: '10px auto'    
  };

  return (
    <div style={cardStyle}>
      <h2 style={h2Style}>{landing.name}</h2>
      <ul style={listStyle}>
        <li>
          Id: {landing.id}
        </li>
        <li>
          Mass (Kg): {landing.mass ? (landing.mass / 1000).toFixed(3) : 'Not recorded'}
        </li>
        <li>
          Reclassification: {landing.recclass}
        </li>
        <li>
          Latitude: {landing.reclat}
        </li>
        <li>
          Longitude: {landing.reclong}
        </li>
        <li>
          Year: {landing.year ? (new Date(landing.year).getFullYear()) : 'Not recorded'}
        </li>
      </ul>
    </div>
  )

}
