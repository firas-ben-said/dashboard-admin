import { addUser } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/users/addUser/addUser.module.css";

const AddUser = () => {
  return (
    <div className={styles.container}>
      <form action={addUser} className={styles.form}>
        <input type="text" placeholder="username" name="username" required />
        <input type="email" placeholder="email" name="email" required />
        <input
          type="password"
          placeholder="password"
          name="password"
          required
        />
        <input type="tel" placeholder="phone" name="phone" required />
        <select name="isAdmin" id="isAdmin">
          <option value="false">Is Admin ?</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        <select name="isActive" id="isActive">
          <option value="false">Is Active ?</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        <textarea
          name="address"
          id="address"
          rows="16"
          placeholder="Address"
        ></textarea>
        <button type="submit" >Submit</button>
      </form>
    </div>
  );
};

export default AddUser;
