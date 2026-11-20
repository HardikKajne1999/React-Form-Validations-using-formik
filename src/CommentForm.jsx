import { useFormik } from 'formik';

const validate = values => {
   const errors = {};
   if (!values.username) {
     errors.username = 'Username Required';
   } else if (values.username.length > 15) {
     errors.username = 'Must be 15 characters or less';
   }
 
   if (!values.remarks) {
     errors.remarks = 'Remarks Required';
   } else if (values.remarks.length > 20) {
     errors.remarks = 'Must be 20 characters or less';
   }

   if (!values.rating) {
     errors.rating = 'Rating Required';
   } else if (values.rating < 1 || values.rating >5) {
     errors.rating = 'Must be between 1 and 5';
   }
 
   if (!values.email) {
     errors.email = 'Email Required';
   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
     errors.email = 'Invalid email address';
   }
 
   return errors;
 };

export default function CommentForm({addNewComment}){
     const formik = useFormik({
     initialValues: {
       username: '',
       remarks: '',
       email: '',
       rating: 5,
     },
     validate,
     onSubmit: values => {
       addNewComment(values);
       formik.resetForm();
     },
   });

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <input  onChange={formik.handleChange} value={formik.values.username} className="border-2 border-black px-2 " type="text" name="username" placeholder="Enter username"/>
                <br />    {formik.errors.username ? <div className='text-red-600'>{formik.errors.username}</div> : null}      <br />
                <textarea onChange={formik.handleChange} value={formik.values.remarks} className="border-2 border-black px-2 text-black" name="remarks" id="remarks" placeholder="Remarks"></textarea>
                <br />    {formik.errors.remarks ? <div className='text-red-600'>{formik.errors.remarks}</div> : null}      <br />
                <input onChange={formik.handleChange} value={formik.values.email} className="border-2 border-black px-2 text-black" name="email" placeholder="Enter Email" />
                <br />    {formik.errors.email ? <div className='text-red-600'>{formik.errors.email}</div> : null}      <br />
                <input onChange={formik.handleChange} value={formik.values.rating}  className="border-2 border-black px-2 " type="number" placeholder="rating(1-5)" name="rating"/>
                <br />    {formik.errors.rating ? <div className='text-red-600'>{formik.errors.rating}</div> : null}      <br />
                <button  type="submit" className="border-2 border-black px-2 rounded-lg bg-amber-300">Add comment</button>
            </form>
        </>
    )
}