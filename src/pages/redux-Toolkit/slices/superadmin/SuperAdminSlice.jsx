import { createSlice } from "@reduxjs/toolkit";
import { reqtoSuperAdminDashboard, reqtoSuperAdminGetContinents, reqtoSuperAdminGetCountries, reqtoSuperAdminGetPlace } from "../../services/superadmin/SuperAdminServices";

const initialState = {
    loader: false,

    // dashboard
    dashboardLoader: false,
    dashboard: {},

    // continents
    continentsList: [],

    countriesList: [],
    placeList:[],

    error: null,
};

const SuperAdminSlice = createSlice({
    name: "SuperAdminSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // reqtoSuperAdminDashboard
        builder.addCase(reqtoSuperAdminDashboard.pending, (state) => {
            state.dashboardLoader = true;
            state.error = null;
        });
        builder.addCase(reqtoSuperAdminDashboard.fulfilled, (state, action) => {
            state.dashboardLoader = false;
            state.dashboard = action.payload?.data || {};
        });
        builder.addCase(reqtoSuperAdminDashboard.rejected, (state, action) => {
            state.dashboardLoader = false;
            state.error = action.payload;
        });

        // reqtoSuperAdminGetCompany
        builder.addCase(reqtoSuperAdminGetContinents.pending, (state) => {
            state.loader = true;
            state.error = null;
        });
        builder.addCase(reqtoSuperAdminGetContinents.fulfilled, (state, action) => {
            state.loader = false;
            state.continentsList = action.payload?.data;
        });
        builder.addCase(reqtoSuperAdminGetContinents.rejected, (state, action) => {
            state.loader = false;
            state.error = action.payload;
        });

        // reqtoSuperAdminGetCompany
        builder.addCase(reqtoSuperAdminGetCountries.pending, (state) => {
            state.loader = true;
            state.error = null;
        });
        builder.addCase(reqtoSuperAdminGetCountries.fulfilled, (state, action) => {
            state.loader = false;
            state.countriesList = action.payload?.data;
        });
        builder.addCase(reqtoSuperAdminGetCountries.rejected, (state, action) => {
            state.loader = false;
            state.error = action.payload;
        });

        // reqtoSuperAdminGetPlace
        builder.addCase(reqtoSuperAdminGetPlace.pending, (state) => {
            state.loader = true;
            state.error = null;
        });
        builder.addCase(reqtoSuperAdminGetPlace.fulfilled, (state, action) => {
            state.loader = false;
            state.placeList = action.payload?.data;
        });
        builder.addCase(reqtoSuperAdminGetPlace.rejected, (state, action) => {
            state.loader = false;
            state.error = action.payload;
        });


    }
});

export default SuperAdminSlice.reducer;