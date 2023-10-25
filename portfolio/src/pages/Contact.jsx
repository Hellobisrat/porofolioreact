export default function Portofolio() {
  return (
    <div>
      <h3>Contact</h3>
      <div >
        <form action="action_page.php">

        <label >Name</label>
        <input type="text" id="fname" name="firstname" />

        <label >Email Address</label>
        <input type="text" id="lname" name="lastname" />
      

        <label >Message</label>
        <textarea id="subject" name="subject"  style="height:200px"></textarea>

        <input type="submit" value="Submit"/>

        </form>
    </div>
   </div>
  );
}