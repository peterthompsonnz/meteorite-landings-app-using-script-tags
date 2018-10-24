

const Heading = (props) => {
  const {headingText, headingStyle, imgSrc, imgAlt, figCaption, figcaptionRef, figcaptionStyle} = props.config;
  console.log(headingText);
  return (  
    <React.Fragment>  
      <h1 style={headingStyle}>{headingText}</h1> 
      <figure>
        <img src={imgSrc} alt={imgAlt} />
        <figcaption style={figcaptionStyle}>
          {figCaption} Ref: <a href={figcaptionRef}>Wikipedia</a>
        </figcaption>
      </figure>
    </React.Fragment>
  );
};

const Hr = () => {
  return (<div style={{height:0,borderBottom:'1px dashed #666',margin:'2em 0'}}></div>);
};


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      landings: []      
    };

    this.headingConfig = {
      headingText: 'Meteorite Landings',
      headingStyle: {
        fontFamily: 'sans-serif',
        fontWeight: 400,
        color: '#222',
        fontSize: '2.25em'
      },
      imgSrc: './images/320px-SikhoteAlinMeteorite.jpg',
      imgAlt: 'meteorite from the Sikhote Alin meteorite shower',      
      figCaption: 'A 1.7kg individual meteorite from the Sikhote Alin meteorite shower (coasrsest octahedrite, class IIAB). This specimen is about 12cm wide. Sikhote Alin meteorite shower fell on 1947 February 12 in the dense forest of eastern Siberia, and over 23 tons of meteoritic material has been recovered.',
      figcaptionRef: 'https://en.wikipedia.org/wiki/IIAB_meteorites#/media/File:SikhoteAlinMeteorite.jpg',
      figcaptionStyle: {
        fontFamily: 'serif',
        fontSize: '0.85em',       
        color: '#222',
        lineHeight: 1.6
      }            
    };
  }

  componentDidMount() {    
    fetch(
      "https://data.nasa.gov/resource/y77d-th95.json"
    )
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          landings: json
        });
      })
      .catch(err => console.log(err));    
  }
  
  render() {        
    const cards = this.state.landings ? (
      this.state.landings.map(
        landing => <Card key={landing.id} landing={landing} />
      )) : '';

    return (
      <div className="container">
        <header>
          <Heading config={this.headingConfig} />
          <Hr />         
        </header>
        <main>
        {
          cards
        }
        </main>      
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
