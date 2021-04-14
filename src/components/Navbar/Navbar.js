import './Navbar.css';
import user from '../../assets/user.png';

const Navbar = () => (
  <nav>
    <div className="container_1">
      <div>
        <span className="title">Bookstore CMS</span>
      </div>
      <div>
        <span className="sub_Title">BOOKS</span>
      </div>
      <div>
        <span className="sub_Title opacity">CATEGORIES</span>
      </div>
    </div>
    <div>
      <img alt="icon" src={user} />
    </div>
  </nav>
);

export default Navbar;
