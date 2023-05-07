import '../navbar/nav.css'

const Navbar = () => {
    return (
        <div>
            <h2 className='title'>WINK</h2>
            <hr style={{height: '1px',
            width: '50%',
            backgroundColor: 'black',
                    }}></hr>
                    <br></br>
            <nav className="tiles">
                <a href="/" style={{
                    border: '2px solid',
                    cursor: 'pointer',
                    color: 'black',
                    backgroundColor: 'aqua',
                    spacing: '10px',
                    padding: '10px 10px'
                }}>Home</a>  
                <a href="/community" style={{
                    border: '2px solid',
                    cursor: 'pointer',
                    color: 'black',
                    backgroundColor: 'aqua',
                    spacing: '10px',
                    padding: '10px 10px'
                }}>Community</a>
                <a href="/resources" style={{
                    border: '2px solid',
                    cursor: 'pointer',
                    color: 'black',
                    backgroundColor: 'aqua',
                    spacing: '10px',
                    padding: '10px 10px'
                }}>Resources</a>
                
            </nav>
        </div>
    );
}
    

export default Navbar;