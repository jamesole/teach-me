import "../App.css";
import PersonIcon from "@mui/icons-material/Person";
import BackpackIcon from "@mui/icons-material/Backpack";

export default function Nav(props) {
  return (
    <div className="nav">
      <div className="brand">
        <BackpackIcon />
        <h4>TeachMe</h4>
      </div>
      <PersonIcon id="icon" />
    </div>
  );
}
