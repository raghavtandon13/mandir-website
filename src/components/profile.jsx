
import BookmarkIcon from "@mui/icons-material/Bookmark";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import PanToolAltIcon from "@mui/icons-material/PanToolAlt";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import "./profile.css";

function Profile() {
  return (
    <div className="profile-full">
      <div className="profile-page">
        <div className="card">
          <div className="card-icon">
            <BookmarkIcon />
          </div>
          <div className="card-title">
            <h1>Upcoming Bhog Booking online</h1>
          </div>
        </div>
        <div className="card">
          <div className="card-icon">
            <CorporateFareIcon />
          </div>
          <div className="card-title">
            <h1>Click Here for shringar</h1>
          </div>
        </div>
        <div className="card">
          <div className="card-icon">
            <PanToolAltIcon />
          </div>
          <div className="card-title">
            <h1>You have booked but not confirm shriangar seva</h1>
          </div>
        </div>
        <div className="card">
          <div className="card-icon">
            <QrCode2Icon />
          </div>
          <div className="card-title">
            <h1>Generate Q.R. Code</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
