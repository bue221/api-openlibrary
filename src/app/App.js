import React,{ useEffect, useState } from 'react';
import timeago from 'timeago.js'
import dato from './data.json'


const App = ()=>{

        const [data, setData] = useState('');

        useEffect(()=>{
                setInterval(()=>{
                        getData();
                }, 1000);
        },[])


        const getData = async () =>{
                const res = await fetch('https://openlibrary.org/recentchanges.json?limit=10');
                const data = await res.json();
                setData(data);
        }

        //console.log(data);

        return(
                <div className='container p-4' >
                        <h1 className='ml-5' >OpenLibrary API</h1>
                        <table className="table table-bordered">
                                <thead>
                                        <tr>
                                                <td>When</td>
                                                <td>Who</td>
                                                <td>Description</td>
                                        </tr>
                                </thead>
                                <tbody>
                                        {data && 
                                        data.map((i, index)=>(
                                        <tr key={index}>
                                                <td>{i.timestamp}</td>
                                                <td>{i.author.key}</td>
                                                <td>{i.comment}</td>
                                        </tr>
                                        ))
                                        }
                                </tbody>
                        </table>
                </div>
                );
                }
                export default App;
