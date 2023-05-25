import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { API } from "../helpers/const";
import axios from "axios";

const FoodCreate = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    types: "",
  });
  //    const getUser = async () => {
  //      await axios.get(API).then((res) => setData(res.data));
  //    };

  const handleFormSubmit = async (e) => {
    let response = await axios.post(API, formData);

    if (response) {
      alert("data submited");
    } else {
      alert("something Wrong");
    }

    setFormData({
      name: "",
      description: "",
      price: "",
      image: "",
    });
  };

  return (
    <div>
      <div>
        <h1 style={{ textAlign: "center" }}>Add Product</h1>
        <form
          //   onSubmit={(e) => handleSubmit(e)}
          style={{
            maxWidth: "500px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <TextField
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            name="name"
            label="Name"
            variant="outlined"
          />
          <TextField
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            name="description"
            label="Description"
            variant="outlined"
          />

          <TextField
            value={formData.price}
            onChange={(e) =>
              setFormData({ ...formData, price: e.target.value })
            }
            name="price"
            label="Price"
            variant="outlined"
          />
          <TextField
            value={formData.image}
            onChange={(e) =>
              setFormData({ ...formData, image: e.target.value })
            }
            name="image"
            label="Image"
            variant="outlined"
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Category"
              name="category"
              value={formData.category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
            >
              <MenuItem value={"National"}>Natioanl</MenuItem>
              <MenuItem value={"Europe"}>Eourope</MenuItem>
              <MenuItem value={"Korean"}>Korean</MenuItem>
              <MenuItem value={"Japan"}>Japan</MenuItem>
              <MenuItem value={"FastFood"}>FastFood</MenuItem>
              <MenuItem value={"Healthy"}>Healthy Food</MenuItem>
            </Select>
          </FormControl>

          <Button type="submit" onClick={handleFormSubmit}>
            Send Product
          </Button>
        </form>
      </div>
    </div>
  );
};

export default FoodCreate;
