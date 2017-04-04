import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import * as images from './cats/catImages';
import * as texts from './cats/catTexts';
import './App.scss';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      catsDetails: []
    }
  }
  componentDidMount() {
    this.getCatDetails();
  }
  getCatDetails() {
    const catImages = images.catImages;
    const catTexts = texts.catTexts;
    const catsDetails = catTexts.map((text, index) => {
      return {
        "id": index,
        "imageUrl": catImages[index],
        "text": text
      }
    });
    this.setState({ catsDetails: catsDetails });
  }

  handleDelete(index) {
    const remainCats = this.state.catsDetails.filter(cat => cat.id !== index);
    this.setState({ catsDetails: remainCats });
  }

  render() {

    return (
      <div className="card-deck">
        {this.state.catsDetails.map((eachCat, index) => {
          return (
            <div className="card col-md-3" key={index} style={{ marginTop: 20}}>
              <img className="card-img-top" src={eachCat.imageUrl} alt={eachCat.text} style={{ width: 235, height: 200 }} />
              <div className="card-block">
                <p className="card-text" style={{ fontSize: 14, height:220}}>{eachCat.text}</p>
                <button className="btn btn-danger" onClick={() => this.handleDelete(eachCat.id)}>delete</button>
              </div>
            </div>
          )
        })}
      </div>
    );
  }
}

export default App;


