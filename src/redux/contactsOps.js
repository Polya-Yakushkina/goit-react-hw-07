import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66f203a2415379191552d003.mockapi.io/";

export const fetchContacts = createAsyncThunk(
    "contacts/getAll", async (_, thunkAPI) => {
        try {
            const { data } = await axios.get("/contacts");
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue();
        }
    }
);

export const addContact = createAsyncThunk(
    "contacts/addContact", async (newContact, thunkAPI) => {
        try {
            const { data } = await axios.post("/contacts", newContact);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue();
        }
    }
);

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact", async (contactId, thunkAPI) => {
        try {
            const { data } = await axios.delete(`contacts/${contactId}`);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue();
        }
    }
);
