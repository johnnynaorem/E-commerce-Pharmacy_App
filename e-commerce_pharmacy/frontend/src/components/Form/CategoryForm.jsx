import React  from 'react'

const CategoryForm = ({value, handleSubmit, setValue}) => {
  return (
    <form className='d-flex mb-3' onSubmit={handleSubmit}>
      <div className="mb-3 mx-1">
        <input type="text" className="form-control" id="name" name='name' value={value} onChange={(e) => {
          setValue(e.target.value)
        }}/>
      </div>
      <button type="submit" className="btn btn-primary mx-1" style={{height: "40px", padding: "0 25px"}}>Add</button>
    </form>
  )
}

export default CategoryForm
