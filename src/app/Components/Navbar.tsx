import 'bootstrap/dist/css/bootstrap.css';
import '@/app/Components/Navbar.css'
import React from 'react'
import logo from '@/app/Components/LOGO.png'
import Image from 'next/image';
import Link from 'next/link';
import {BiUser, BiSearch} from 'react-icons/bi'
import {RiArrowDropDownFill} from 'react-icons/ri'


// const Navbar = () => {
//     return (
//         <div>
//             <nav className="navbar navbar-dark bg-dark">
//                 <div className='right'>
//                 <Image src={logo} alt="logo" width={50} height={50} /></div>  
//                 <div className="left">
//                     <form className="d-flex">
//                     <a className="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Mumbai</a>
//                     <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//                     <button className="btn btn-outline-success" type="submit">Search</button>
//                     </form>
//                 </div>
//             </nav>
//         </div>

//     )
// }

const Navbar = () => {
    // const [showLocationPopup, setShowLocationPopup] = React.useState<boolean>(false)
    // const [user, setUser] = React.useState<any>(null)
    // const [loggedIn, setLoggedIn] = React.useState<boolean>(false)
    // const getuser = async () => {

    //     fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/auth/getuser`, {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         credentials: 'include'
    //     })
    //         .then((res) => {
    //             return res.json();
    //         })
    //         .then((response) => {
    //             console.log(response)
    //             setUser(response.data)
    //         })
    //         .catch((error) => {
    //             console.log(error)
    //         })

    // }

    // const handleLogout = async () => {
    //     fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/auth/logout`, {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         credentials: 'include'
    //     })
    //         .then((res) => {
    //             return res.json();
    //         })
    //         .then((response) => {
    //             console.log(response)
    //             if (response.ok) {
    //                 window.location.href = "/auth/signin"
    //             }

    //         })
    //         .catch((error) => {
    //             console.log(error)
    //             window.location.href = "/auth/signin"

    //         })
    // }

    // const checkLogin = async () => {
    //     // let authToken = await getCookie('authToken')
    //     // let refreshToken = await getCookie('refreshToken')

    //     // console.log(authToken, refreshToken)
    //     fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/auth/checklogin`, {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         credentials: 'include'
    //     })
    //         .then((res) => {
    //             return res.json();
    //         })
    //         .then((response) => {
    //             console.log(response)
    //             if(response.ok){
    //                 setLoggedIn(true)
    //             }
    //             else{
    //                 setLoggedIn(false)
    //             }
    //         })
    //         .catch((error) => {
    //             console.log(error)
    //             setLoggedIn(false)
    //         })
    // }

    // React.useEffect(() => {
    //     checkLogin()
    //     getuser()
    // }, [])
    return (
        <nav>
            <div className='left'>
                <Image src={logo} alt="logo" width={50} height={50}/>
                <div className='searchbox'>
                    <BiSearch className='searchbtn' />
                    <input type="text" placeholder="Search For a Movie" />
                </div>
            </div>
            <div className='right'>
                <p className='dropdown'>
                     <RiArrowDropDownFill className="dropicon" />Mumbai</p>
               
                     <button className='btn btn-danger theme_icon1 '>Logout</button>
                        {/* <Link href="/auth/signin" className='theme_btn1 linkstylenone'>
                            Login
                        </Link> */}

                <Link href="/profile" className='linkstylenone'>
                    <BiUser className='theme_icon1' />
                </Link>
            </div>
            {/* {
                showLocationPopup &&
                <LocationPopup
                    setShowLocationPopup={setShowLocationPopup}
                />
            } */}
        </nav>
    )
}

export default Navbar