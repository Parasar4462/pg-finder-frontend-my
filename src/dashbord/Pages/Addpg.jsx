import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useForm } from 'react-hook-form'
import { Navigate } from 'react-router-dom'
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
            <ToastContainer />
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <form >
                            <table>
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
                                    <th>
                                        <label>Facilities</label>
                                    </th>
                                    <td>
                                        <input type="text" name="facilities" {...register('facilities')} />

                                    </td>
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