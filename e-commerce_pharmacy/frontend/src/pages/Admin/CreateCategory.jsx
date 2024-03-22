import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import AdminMenu from '../../components/Layout/AdminMenu'
import toast from 'react-hot-toast';
import axios from 'axios';
import CategoryForm from '../../components/Form/CategoryForm';
import { Modal } from 'antd';
const CreateCategory = () => {
  const [category, setCategory] = useState([]);
  const [name, setName] = useState("");
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(null);
  const [updatedName, setUpdatedName] = useState("")

  //Submit controller(Add Category)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {data} = await axios.post('http://localhost:8700/api/v1/category/create-category', {name})
      if(data?.success){
        toast.success(data.message);
        setName("")
        getAllCategory();
      }else{
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in input form")
    }
  }

  //Update controller(Update Category)
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const {data} = await axios.put(`http://localhost:8700/api/v1/category/update-category/${selected}`, {name: updatedName})
      if(data?.success){
        toast.success(data.message)
        setSelected(null);
        setUpdatedName("");
        setVisible(false);
        getAllCategory();
      }else{
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in update input form")
    }
  }

  //delete controller(Delete Category)
  const handleDelete = async (e, id) => {
    e.preventDefault();
    try {
      const {data} = await axios.delete(`http://localhost:8700/api/v1/category/delete-category/${id}`)
      if(data?.success){
        toast.success(data.message)
        getAllCategory();
      }else{
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in deleting category")
    }
  }

  const getAllCategory = async () => {
    try {
      const {data} = await axios.get('http://localhost:8700/api/v1/category/get-category');
      if(data.success) {
        setCategory(data.category)
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in getting category");
    }
  };

  useEffect(() => {
    getAllCategory();
  }, [])
  
  return (
    <Layout title={"Dashboard - Create Category"}>
      <div className="row w-100">
        <div className="col-md-3 mt-4">
          <AdminMenu />
        </div>
        <div className="col-md-8 mt-4">
          <h1>Manage Category</h1>
          <div>
            <CategoryForm value={name} handleSubmit={handleSubmit} setValue={setName}/>
          </div>
          <table className="table w-75">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              <>
                {category && category.map((c, i) => (
                  <tr>
                    <td key={i}>{c.name}</td>
                    <td>
                      <button className='btn btn-primary ms-1' onClick={()=> {
                        setUpdatedName(c.name)
                        setSelected(c._id)
                        setVisible(true)
                        }}>Edit</button>
                      <button className='btn btn-danger ms-1' onClick={(e)=>{
                        handleDelete(e, c._id)
                      }}>Delete</button>
                      </td>
                  </tr>
                ))}
              </>
            </tbody>
          </table>
        </div>
        <Modal open={visible} onCancel={()=> setVisible(false)} footer={null}>
          <CategoryForm value={updatedName} setValue={setUpdatedName} handleSubmit={handleUpdate}/>
        </Modal>
      </div>
    </Layout>
  )
}

export default CreateCategory
