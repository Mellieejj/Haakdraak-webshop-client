import React, { useState } from "react";
import { useDispatch } from "react-redux";
import AddProduct from "./AddProduct";
import AddImage from "./AddImage";
import { createProduct } from "../../actions/adminActions";

export default function AddProductContainer() {
  const [imagesArray, setImagesArray] = useState([]);

  const [image, setImage] = useState({url: "",
  thumbnail: ""});

  const initialFields = {
    name: "",
    price: "",
    description: "",
    size: "",
    optioneel: "",
    stock: 0,
    categorie: "",
  };

  const [fields, setFields] = useState(initialFields);
  const dispatch = useDispatch();

  const onChangeProduct = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  const onChangeImage = (event) => {
    setImage({...image, [event.target.name]: event.target.value });

  };

  const onSubmitImage =  (event) => {
    event.preventDefault();
    setImagesArray([...imagesArray, image]);
    setImage({ url: "", thumbnail: "" });
    // setFields({...fields, productImages: imagesArray})
  };

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(createProduct({fields: fields, productImages: imagesArray}))
    console.log("fields", fields, imagesArray);
    setFields(initialFields);
    setImagesArray([])
  };
  console.log("change image", image);

  console.log("imageArray", imagesArray);
  return (
    <div>
    
    <div>  <AddProduct
        values={fields}
        buttonName="verzenden"
        onSubmit={onSubmit}
        onChange={onChangeProduct}
      />
    </div>
    <div>
    <AddImage
    values={image}
    onChange={onChangeImage}
    onSubmit={onSubmitImage}
  />
  </div>
  </div>
  );
}
