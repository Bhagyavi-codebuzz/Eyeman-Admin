import { createAsyncThunk } from "@reduxjs/toolkit";
import { authHeaders, Axios } from "../../helper/Axios";
import { apiendpoints } from "../../../../components/constants/apiendpoint";
import { toast } from "react-toastify";

// reqtoSuperAdminDashboard
export const reqtoSuperAdminDashboard = createAsyncThunk(
  "reqtoSuperAdminDashboard",
  async (_, { rejectWithValue }) => {
    try {
      const res = await Axios.get(apiendpoints.dashboard, authHeaders());

      if (res.data?.status || res.data?.success) {
        return res.data;
      } else {
        return rejectWithValue(res.data);
      }

    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);


// reqtoSuperAdminGetContinents
export const reqtoSuperAdminGetContinents = createAsyncThunk("reqtoSuperAdminGetContinents", async (data, { rejectWithValue }) => {
    try {
        const res = await Axios.get(apiendpoints.Getcontinents, authHeaders());

        if (res.data?.status || res.data?.success) {
            return res.data;
        } else {
            toast.error(res.data.message);
        }

    } catch (err) {
        throw err
    }
});


// reqtoSuperAdminGetCountries
export const reqtoSuperAdminGetCountries = createAsyncThunk("reqtoSuperAdminGetCountries", async (data, { rejectWithValue }) => {
    try {
        const res = await Axios.get(apiendpoints.Getcountries, authHeaders());

        if (res.data?.status || res.data?.success) {
            return res.data;
        } else {
            toast.error(res.data.message);
        }

    } catch (err) {
        throw err
    }
});

// reqtoSuperAdminGetCountries
export const reqtoSuperAdminGetPlace = createAsyncThunk("reqtoSuperAdminGetPlace", async (data, { rejectWithValue }) => {
    try {
        const res = await Axios.get(apiendpoints.GetPlace, authHeaders());

        if (res.data?.status || res.data?.success) {
            return res.data;
        } else {
            toast.error(res.data.message);
        }

    } catch (err) {
        throw err
    }
});