import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactApi = createApi({
  reducerPath: 'contacs',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6399d05929930e2bb3e041c5.mockapi.io/',
  }),
  tagTypes: ['Contacts', 'Contact'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => ({
        url: '/contacts',
      }),
      providesTags: ['Contacts'],
    }),
    getContactByid: builder.query({
      query: id => ({
        url: `/contacts/${id}`,
      }),
      providesTags: ['Contact'],
    }),
    deleteContact: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
    createContact: builder.mutation({
      query: newContact => ({
        url: '/contacts',
        method: 'POST',
        body: newContact,
      }),
      invalidatesTags: ['Contacts'],
    }),
    changeContact: builder.mutation({
      query: ({ contactId, ...newContact }) => ({
        url: `/contacts/${contactId}`,
        method: 'PUT',
        body: newContact,
      }),
      invalidatesTags: ['Contact', 'Contacts'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useGetContactByidQuery,
  useDeleteContactMutation,
  useCreateContactMutation,
  useChangeContactMutation,
} = contactApi;
