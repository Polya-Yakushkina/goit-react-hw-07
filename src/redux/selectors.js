import { createSelector } from "@reduxjs/toolkit";

export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;
export const selectNameFilter = state => state.filters.query;
export const selectContacts = state => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    if (!filter) {
      return contacts;
      }
      return contacts.filter((contact) =>
      contact.name?.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

