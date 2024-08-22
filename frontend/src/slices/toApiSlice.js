import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const todoApiSlice = createApi({
    reducerPath: "todos",
    baseQuery:fetchBaseQuery({baseUrl:'/api'}),
    endpoints:(builder)=>({
        getTasks: builder.query({
            query:()=>'todos'
        }),
        getTaskById: builder.query({
            query:(todoId)=>({
                url: `/todos/${todoId}`
            })
        }),
        addTask: builder.mutation({
            query:(data)=>({
                url: '/todos',
                metod:'POST',
                body: data
            })
        }),
        deleteTask: builder.mutation({
            query:(taskId)=>({
                url: `/todos/:${taskId}`,
                metod:'DELETE',
            })
        }),
        editTask: builder.mutation({
            query:(taskId, data)=>({
                url: `/todos/:${taskId}`,
                metod:'PATCH',
                body: data
            })
        })
    })
})
export const {useGetTasksQuery, useGetTaskByIdQuery, useAddTaskMutation, useDeleteTaskMutation, useEditTaskMutation} = todoApiSlice