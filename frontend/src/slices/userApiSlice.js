import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const userApiSlice = createApi({
    reducerPath: "users",
    baseQuery:fetchBaseQuery({baseUrl:'/api'}),
    endpoints:(builder)=>({
        getUsers: builder.query({
            query:()=>'users'
        }),
        getUserById: builder.query({
            query:(userId)=>({
                url: `/users/${userId}`
            })
        }),
        addUser: builder.mutation({
            query:(data)=>({
                url: '/users',
                metod:'POST',
                body: data
            })
        }),
        deleteUser: builder.mutation({
            query:(userId)=>({
                url: `/users/${userId}`,
                metod:'DELETE',
            })
        }),
        editUser: builder.mutation({
            query:(userId, data)=>({
                url: `/users/${userId}`,
                metod:'PATCH',
                body: data
            })
        })
    })
})
export const {useGetUsersQuery, useGetUserByIdQuery, useAddUserMutation, useDeleteUserMutation, useEditUserMutation} = userApiSlice