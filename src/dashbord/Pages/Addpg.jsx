import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useForm } from 'react-hook-form'

const Addpg = () => {
    const { register, handleSubmit } = useForm();
    const [types, settypes] = useState();
    const [pgtypes, setpgtypes] = useState();

    const addNewpg = (data) => {
        axios.post("http://localhost:5000/pg/add", data).then((res) => {
            console.log(res.data.data)
            toast.success("pg added successfully")
            // Navigate("/pgbuldings")
        })
    }

    const onSubmit = (data) => {
        console.log(data)
        addNewpg(data)
    }


    useEffect(() => {
        gettypes();
    }, []);

    const gettypes = () => {
        axios.get("http://localhost:5000/propertyType/get").then((res) => {
            console.log(res.data.data)
            settypes(res.data.data);
        });
    };

    useEffect(() => {
        getpgtypes();
    }, []);

    const getpgtypes = () => {
        axios.get("http://localhost:5000/pgType/get").then((res) => {
            console.log(res.data.data)
            setpgtypes(res.data.data);
        });
    };
    return (

        <div>
            <style>
                {`
                .container{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                }
                .row{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                }
                .col-md-6{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                }
                table{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-direction: column;
                }
                tr{
                    display: flex;
                    justify-content: space-between;
                    justify-content: center;
                    align-items: center;
                    flex-direction: row;
                }
                input{
                    width: 100%;
                    padding: 12px 20px;
                    margin: 8px 0;
                    display: inline-block;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                    box-sizing: border-box;
                }
                button{
                    width: 100%;
                    background-color: blue;
                    color: black;
                    padding: 14px 20px;
                    margin: 8px 0;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                }


                `}

            </style>
            <ToastContainer />
            <div className="container">
                <div className="row 
                ">
                    <div className="col-md-6">
                        <form >
                            <table style={{
                                width: "100%",
                                border: "1px solid black",
                                padding: "10px",
                                margin: "10px",
                                textAlign: "center",
                                backgroundColor: "white",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: "column"
                            }} >
                                <tr>
                                    <th>
                                        <label>Id</label>
                                    </th>
                                    <td>
                                        <input type="text" name="id" {...register('id')} />
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <label>Type</label>
                                    </th>
                                    <td>
                                        <select name="type" {...register('type')}>
                                            {types?.map((type) => (
                                                <option value={type._id}>{type.type}</option>
                                            ))}
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <label>PgType</label>
                                    </th>
                                    <td>
                                        <select name="pgtype" {...register('pgtype')}>
                                            {pgtypes?.map((pgtype) => (
                                                <option value={pgtype._id}>{pgtype.pgtype}</option>
                                            ))}
                                        </select>

                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <label>Name</label>
                                    </th>
                                    <td>
                                        <input type="text" name="name" {...register('name')} />
                                    </td>

                                </tr>
                                <tr>
                                    <th>
                                        <label>Address</label>
                                    </th>
                                    <td>
                                        <input type="text" name="address" {...register('address')} />
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <label>Rent</label>
                                    </th>
                                    <td>
                                        <input type="text" name="rent" {...register('rent')} />
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <label>Floor</label>
                                    </th>
                                    <td>
                                        <input type="text" name="floor" {...register('floor')} />
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <label>Image</label>
                                    </th>
                                    <td>
                                        <input type="file" name="image" {...register('image')} />
                                    </td>
                                </tr>

                                <tr>
                                    <div>
                                        <label>Facilities</label>
                                        {/* fullfurnished,
                                        parking,
                                        wifi,
                                        ac,
                                    meal,
                                   meal.breakfast,
                                      meal.lunch,
                                        meal.dinner,
                                         */}

                                        <div>

                                            
                                            <label>Fullfurnished</label>
                                            <input type="checkbox" name="fullfurnished" {...register('fullfurnished')} />

                                            <label>Parking</label>
                                            <input type="checkbox" name="parking" {...register('parking')} />

                                            <label>Wifi</label>
                                            <input type="checkbox" name="wifi" {...register('wifi')} />
                                            
                                            <label>Ac</label>
                                            <input type="checkbox" name="ac" {...register('ac')} />

                                            <h3>Meal</h3>
                                            <input type="checkbox" name="breakfast" {...register('meal.breakfast')} />
                                            <input type="checkbox" name="lunch" {...register('meal.lunch')} />
                                            <input type="checkbox" name="dinner" {...register('meal.dinner')} />

                                    </div>

                                    </div>     
                               </tr>
                                <tr>
                                    <td>
                                        <button type="submit" onClick={handleSubmit(onSubmit)}>Add
                                           
                                        </button>

                                    </td>
                                </tr>
                            </table>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Addpg