import React from 'react'

const EditDog = () => {
  return (
    <div>
    <div>
     <form>
     <div class="form-group">
       <label for="exampleFormControlInput1">Name</label>
       <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Lucky Boy!" ></input>
     </div>
     <div class="form-group">
       <label for="exampleFormControlSelect1">Weight (lbs)</label>
       <input type="text" class ="form-control" id="exampleFormControlInput1" placeholder="" ></input>
     </div>
     <div class="form-group">
       <label for="exampleFormControlTextarea1">About</label>
       <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" ></textarea>
     </div>
     <button type = "submit" >Update</button>
   </form>
  </div>
  </div>
  )
}

export default EditDog
