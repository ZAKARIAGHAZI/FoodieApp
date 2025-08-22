import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMenu = createAsyncThunk(
  "menu/fetchMenu",
  async (id, thunkAPI) => {
    try {
      const res = await axios.get(
        `https://yelp-business-api.p.rapidapi.com/get_menus?business_id=${id}`,
        {
          headers: {
            "x-rapidapi-key": import.meta.env.VITE_YELP_API_KEY,
            "x-rapidapi-host": "yelp-business-api.p.rapidapi.com",
          },
        }
      );
      console.log(res);
      
      // Normalize fields so UI can use them
      const menus = (res.data.menus || []).map((item) => ({
        name: item["Food Name"],
        description: item["Details"],
        price: item["Price"],
        image_url: item["Photo"],
        category: item["Category"],
      }));

      return menus;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  }
);


const menuSlice = createSlice({
  name: "menu",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearMenu: (state) => {
      state.items = [];
      state.error = null;
      state.loading = false;
    },
    setMenu: (state, action) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMenu.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMenu.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchMenu.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { clearMenu, setMenu } = menuSlice.actions;
export default menuSlice.reducer;
