import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = import.meta.env.VITE_YELP_API_KEY;

// Async thunk
export const fetchRestaurants = createAsyncThunk(
  "restaurants/fetchRestaurants",
  async (_, { rejectWithValue }) => {
    try {
      // 1. Check localStorage first
      const stored = localStorage.getItem("restaurants");
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          if (Array.isArray(parsed) && parsed.length > 0) return parsed;
        } catch {
          localStorage.removeItem("restaurants"); // remove invalid data
        }
      }

      // 2. Fetch from Yelp API if localStorage is empty
      const response = await axios.get(
        "https://yelp-business-api.p.rapidapi.com/search",
        {
          headers: {
            "x-rapidapi-key": API_KEY,
            "x-rapidapi-host": "yelp-business-api.p.rapidapi.com",
          },
          params: {
            location: "Paris",
            search_term: "restaurants",
          },
        }
      );
      console.log(response);
      

      const businesses = response.data.business_search_result || [];

      // 3. Save fetched data to localStorage
      if (businesses.length > 0) {
        localStorage.setItem("restaurants", JSON.stringify(businesses));
      }

      return businesses;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRestaurants.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRestaurants.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchRestaurants.rejected, (state, action) => {
        state.loading = false;
        state.list = [];
        state.error = action.payload || "Failed to fetch restaurants";
      });
  },
});

export default restaurantsSlice.reducer;
