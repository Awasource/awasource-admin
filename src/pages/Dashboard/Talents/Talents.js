import Button from "../../../components/UI/Button/Button";
import classes from "./Talents.module.css";
import Edit from "../../../assets/images/icons/edit.svg";
import Delete from "../../../assets/images/icons/delete.svg";
import Archive from "../../../assets/images/icons/archive.svg";
import Mail from "../../../assets/images/icons/mail.svg";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "../../../redux/store";
import { getTalents } from "../../../redux/actions/talentActions";
import PageLoading from "../../../components/UI/PageLoading/PageLoading";

const Talents = () => {
  const [checkAll, setCheckAll] = useState(true);
  const { talent } = useSelector(store => store);

  const dispatch = useDispatch()

  const handleCheckAll = (e) => {
    setCheckAll(e.target.checked);
  };

  useEffect(() => {
    dispatch(getTalents());
  }, [])

  if (talent.isLoading) {
    return <PageLoading />
  }

  return (
    <div>
      <h2>Talents</h2>
      <div className={`flex  mt-sm ${classes.btn}`}>
        <div className={classes.otherbutton}>
          <Button type="white">Email</Button>
          <Button type="white">Delete</Button>
        </div>
        <div>
          <input placeholder="Search Talents" />
          <Button type="yellow">Add Talents</Button>
        </div>
      </div>
      <div className={`mt-md ${classes.table}`}>
        <div className={classes.header}>
          <input type="checkbox" checked={checkAll} onChange={handleCheckAll} />
          <span>Full Name</span>
          <span>Email</span>
          <span>Last Updated</span>
          <span>Image</span>
          <span>Actions</span>
        </div>
        <hr />
        {talent.talents.map((item, i) => (
          <MAPPED_DATA
            key={`admin-${i}`}
            name={`${item.firstName ?? ''} ${item.lastName ?? ''}`}
            email={item.email ?? ''}
            lastUpdated={item.updatedAt ? new Date(item.updatedAt).toLocaleDateString() : ""}
            image={item.firstName?.split("")?.[0]} />
        ))}
      </div>
    </div>
  );
};

export default Talents;

const MAPPED_DATA = ({ name, position, email, lastUpdated, image }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = (e) => {
    setIsChecked(e.target.checked);
  };
  return (
    <div className={classes.grid}>
      <input type="checkbox" checked={isChecked} onChange={handleCheck} />
      <div>
        <p>{name}</p>
        <small>{position}</small>
      </div>
      <span>{email}</span>
      <span>{lastUpdated}</span>
      <span>{image}</span>
      <div>
        <button className={`relative ${classes.edit}`}>
          <img src={Edit} alt="" />
          <div className={classes.hidden}>
            <span className={`relative ${classes.description}`}>
              Edit Talent
              <span className={classes.arrowdown}></span>
            </span>
          </div>
        </button>
        <button className={`relative ${classes.delete}`}>
          <img src={Delete} alt="" />
          <div className={classes.hidden}>
            <span className={`relative ${classes.description}`}>
              Delete Talent
              <span className={classes.arrowdown}></span>
            </span>
          </div>
        </button>
        <button className={`relative ${classes.archive}`}>
          <img src={Archive} alt="" />
          <div className={classes.hidden}>
            <span className={`relative ${classes.description}`}>
              Archive Talent
              <span className={classes.arrowdown}></span>
            </span>
          </div>
        </button>
        <button className={`relative ${classes.archive}`}>
          <img src={Mail} alt="" />
          <div className={classes.hidden}>
            <span className={`relative ${classes.description}`}>
              Email Talent
              <span className={classes.arrowdown}></span>
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};
