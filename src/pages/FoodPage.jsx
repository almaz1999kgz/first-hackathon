import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box,
  Modal,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Grid,
  IconButton,
} from "@mui/material";
import Pagination from "@mui/material/Pagination";
import { useSearchParams } from "react-router-dom";
import { API } from "../helpers/const";

import { AddShoppingCart } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function FoodPage(item) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [category, setCategory] = useState("");

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await axios.get(`${API}?q=${searchQuery}`);
        setSearchResults(response.data);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    if (searchQuery.trim() !== "") {
      fetchSearchResults();
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const response = await axios.get(API);
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      alert("Deleted successfully");
      getUser();
    } catch (error) {
      alert("Failed to delete user");
      console.error(error);
    }
  };

  const handleUpdate = async () => {
    // Check for empty form fields
    if (
      !updateData.name ||
      !updateData.description ||
      !updateData.price ||
      !updateData.image ||
      !updateData.category
    ) {
      alert("Please fill in all fields");
      return;
    }

    try {
      await axios.put(`${API}/${updateData.id}`, updateData);
      alert("User updated successfully");
      getUser();
    } catch (error) {
      alert("Failed to update user");
      console.error(error);
    }
  };

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    id: "",
    category: "",
  });

  const [updateData, setUpdateData] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    id: "",
    category: "",
  });

  const [page, setPage] = useState(1);
  const itemsPerPage = 12;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageData = data.slice(startIndex, endIndex);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const [countries, setCountries] = useState([]);
  const [value, setValue] = useState("");

  const getCountries = () => {
    axios.get(API).then((response) => {
      setCountries(response.data);
    });
  };

  useEffect(() => {
    getCountries();
  }, []);

  const filteredCountries = countries.filter((country) => {
    return country.name.toLowerCase().includes(value.toLowerCase());
  });

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          maxWidth: 300,
          margin: "20px  auto",
          display: "flex",
          gap: "30px",
        }}
      >
        <TextField
          label="Search..."
          variant="outlined"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Age"
            value={category || ""}
            onChange={(e) => setCategory(e.target.value)}
          >
            <MenuItem value={"National"}>Natioanl</MenuItem>
            <MenuItem value={"Europe"}>Eourope</MenuItem>
            <MenuItem value={"Korean"}>Korean</MenuItem>
            <MenuItem value={"Japan"}>Japan</MenuItem>
            <MenuItem value={"FastFood"}>FastFood</MenuItem>
            <MenuItem value={"Healthy"}>Healthy Food</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ maxWidth: "max-content", margin: "30px auto" }}></Box>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gridGap: "30px",
          maxWidth: "1200px",
          width: "100%",
          padding: "20px",
          boxSizing: "border-box",
          justifyContent: "center",
        }}
      >
        {data
          .filter((val) => {
            if (searchTerm === "") {
              return val;
            } else if (
              val.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
            return null;
          })
          .map((val) => {
            return (
              <Card
                key={val.id}
                sx={{
                  maxWidth: 345,
                  marginBottom: "30px",
                }}
              >
                <CardMedia
                  sx={{ height: 140 }}
                  image="https://podacha-blud.com/uploads/posts/2022-10/1665577370_73-podacha-blud-com-p-fud-foto-dlya-saita-burgeri-77.jpg"
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {val.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {val.description}
                  </Typography>
                  <Typography variant="h6">{val.price}</Typography>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                  ></Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={() => handleDelete(val.id)}>
                    Delete
                  </Button>
                  <Button
                    size="small"
                    onClick={() => {
                      setUpdateData({
                        name: val.name,
                        description: val.description,
                        price: val.price,
                        image: val.image,
                        id: val.id,
                        category: val.category,
                      });
                      handleOpen();
                    }}
                  >
                    Edit
                  </Button>
                  <Button component={Link} to={"/create"}>
                    Add New Food
                  </Button>
                </CardActions>
                <IconButton>
                  <AddShoppingCart />
                </IconButton>
              </Card>
            );
          })}
      </div>

      <Pagination
        count={Math.ceil(data.length / itemsPerPage)}
        page={page}
        onChange={handlePageChange}
        style={{ marginTop: "20px" }}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            style={{ textAlign: "center" }}
          >
            Edit User
          </Typography>
          <Box component="form" sx={{ mt: 2 }}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              value={updateData.name}
              onChange={(e) =>
                setUpdateData({ ...updateData, name: e.target.value })
              }
            />
            <TextField
              label="Description"
              variant="outlined"
              fullWidth
              value={updateData.description}
              onChange={(e) =>
                setUpdateData({ ...updateData, description: e.target.value })
              }
            />
            <TextField
              label="Price"
              variant="outlined"
              fullWidth
              value={updateData.price}
              onChange={(e) =>
                setUpdateData({ ...updateData, price: e.target.value })
              }
            />
            <TextField
              label="Image"
              variant="outlined"
              fullWidth
              value={updateData.image}
              onChange={(e) =>
                setUpdateData({ ...updateData, image: e.target.value })
              }
            />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Category"
                name="category"
                value={updateData.category}
                onChange={(e) =>
                  setUpdateData({ ...updateData, category: e.target.value })
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

            <Button
              variant="contained"
              color="primary"
              onClick={handleUpdate}
              style={{ marginTop: "20px" }}
            >
              Update
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
