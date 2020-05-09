import React, {Component} from "react"

class AddProductContainer extends Component {
  state = {
    name: "",
    price: "",
    description: "",
    size: "",
    optioneel: "",
    stock: null,
    categorieId: null

  }
  render(){
    return (
      <div>
        <AddProduct values={this.state} />
      </div>
    )
  }
}