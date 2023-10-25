export default function Contact() {
  return (
    <div>
      <h3>Contact</h3>
      <div >
      <form>
      <fieldset>
         <label>
           <p>Name</p>
           <input name="name" />
           <p>Email Address</p>
           <input name="email" />
           <p>Name</p>
           <textarea name="text" style="height:200px" />
         </label>
       </fieldset>
       <button type="submit">Submit</button>
      </form>
       
    </div>
   </div>
  );
}