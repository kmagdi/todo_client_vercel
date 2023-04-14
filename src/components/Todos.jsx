import React,{useState} from 'react'
import {addItem,delItem, doneItem,getTodos,delItems} from './getData'
import {useQueryClient, useQuery ,useMutation} from 'react-query';
import ListGroup from 'react-bootstrap/ListGroup';

//using the useQueryClient and useMutation hooks we can update our data on the server and re-fetch if the update was successful

export const Todos=()=> {
    const {data,isLoading}=useQuery('myTodos',getTodos)

    const [newTodo,setNewTodo]=useState('')

    const queryClient=useQueryClient()

    const mutationAdd=useMutation(addItem,{
        onSuccess:()=>{
            setNewTodo('')
            queryClient.invalidateQueries("myTodos")//refetch
        }
    })

    const mutationDel=useMutation(delItem,{
        onSuccess:()=>{
           queryClient.invalidateQueries("myTodos")//refetch
        }
    })
    const mutationDone=useMutation(doneItem,{
        onSuccess:()=>{
           queryClient.invalidateQueries("myTodos")//refetch
        }
    })
    const mutationDelAll=useMutation(delItems,{
        onSuccess:()=>{
           queryClient.invalidateQueries("myTodos")//refetch
        }
    })
     
    
  return (
    <>

    {isLoading ? <p>is loading...</p> : (
        <div className='todo bg-light shadow'>
            <h1 className='text-center'>My todos</h1>

            <form className="d-flex justify-content-evenly m-1">
                <input className="form-control" type="text" value={newTodo} 
                    onChange={(e)=>setNewTodo(e.target.value)}/>
                <i className='fa-regular fa-square-plus fa-3x text-success m-1' 
                    onClick={()=>mutationAdd.mutate({name:newTodo})}></i>
                <i className="fa-solid fa-trash text-danger fa-3x m-1" 
                    onClick={()=>mutationDelAll.mutate()}></i>
            </form>

        <ListGroup>
            {data.data.map(item=>(
                <ListGroup.Item key={item.id} className="d-flex justify-content-between">
                <i className={item.status? "fa-solid fa-square-check text-success fa-2x":"fa-solid fa-square-check text-secondary fa-2x"} 
                    onClick={()=>mutationDone.mutate(item.id)}></i>
                <span className={item.status? "text-decoration-line-through":""}>{item.name}</span>
                <i className="fa-solid fa-trash text-danger fa-2x" id={item.id} 
                    onClick={(e)=>mutationDel.mutate(e.target.id)}></i>
                </ListGroup.Item>))
        }
        </ListGroup> 
    </div>
    )}
    
      </>
  )
}
