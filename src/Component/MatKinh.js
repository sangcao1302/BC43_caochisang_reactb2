import React, { Component } from "react";
let glass = [
  {
    id: 1,
    price: 30,
    name: "GUCCI G8850U",
    url: "./assets/glassesImage/g1.jpg",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 2,
    price: 50,
    name: "GUCCI G8759H",
    url: "./assets/glassesImage/g2.jpg",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 3,
    price: 30,
    name: "DIOR D6700HQ",
    url: "./assets/glassesImage/g3.jpg",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 4,
    price: 70,
    name: "DIOR D6005U",
    url: "./assets/glassesImage/g4.jpg",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 5,
    price: 40,
    name: "PRADA P8750",
    url: "./assets/glassesImage/g5.jpg",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 6,
    price: 60,
    name: "PRADA P9700",
    url: "./assets/glassesImage/g6.jpg",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 7,
    price: 80,
    name: "FENDI F8750",
    url: "./assets/glassesImage/g7.jpg",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 8,
    price: 100,
    name: "FENDI F8500",
    url: "./assets/glassesImage/g8.jpg",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 9,
    price: 60,
    name: "FENDI F4300",
    url: "./assets/glassesImage/g9.jpg",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
];

export default class MatKinh extends Component {
  renderGlass = () => {
    let arrJSX = glass.map((item, index) => {
      return (
        <div
          className="mt-2"
          key={item.id}
          onClick={() => {
            this.changeGlass(item,index + 1); 
          }}
        >
          <img src={item.url} className="img-fluid" alt="" />
     
        </div>
      );
    });
    return arrJSX;
  };

  state = {
    img: "./assets/glassesImage/v1.png",
    h3: "GUCCI G8850U",
    h4:30,
    p:"Light pink square lenses define these sunglasses, ending with amother of pearl effect tip."
  };
  changeGlass = (item,index) => {
    this.setState({
      img: `./assets/glassesImage/v${index}.png`,
      h3:item.name,
      h4:item.price,
      p:item.desc
    });
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 com-md-12 text-center">
              <div className="model">
                <img src="./assets/glassesImage/model.png" className="img-fluid" alt="" />
                 <div className="info text-start">
                  <h3 className="fs-4"><span>Name:</span>{this.state.h3}</h3>
                  <h4><span>Price:</span>{this.state.h4}</h4>
                  <p className="fs-4"><span>Description:</span>{this.state.p}</p>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-12 text-center w-100">
                    <div className="glass-wear">
                      <img src={this.state.img}  className="img-fluid" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 mt-5 col-sm-12 com-md-12 text-center">
              <div className="list-item d-flex">{this.renderGlass()}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
