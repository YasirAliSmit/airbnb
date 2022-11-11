import airbinlogo from '../image/Vector.png'
export const Navbar = () => {
    return(
        <>
  <div className="parent-container-fluid container-fluid">
  <nav className="navbar navbar-expand-lg bg-white">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        <img className='logo' src={airbinlogo} alt="logo"/>
       
      </a>
    </div>
  </nav>
</div>
      
        </>
    )
}