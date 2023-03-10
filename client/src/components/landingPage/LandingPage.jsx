import React from 'react';
// import { useState } from 'react';
// // import { useDispatch} from "react-redux";
// import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom"
import Button from '@material-ui/core/Button';
// import Modal from '@material-ui/core/Modal';
// import Backdrop from '@material-ui/core/Backdrop';
// import Fade from '@material-ui/core/Fade';
// import TextField from '@material-ui/core/TextField';
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// import Box from '@material-ui/core/Box';
// import Login from "../../actions/login.jsx";

// const dispatch = useDispatch;

// const useStyles = makeStyles((theme) => ({
//     root: {
//         '& > *': {
//             margin: theme.spacing(1),
//         },
//         '& .MuiTextField-root': {
//             margin: theme.spacing(1),
//             width: '25ch',
//         },
//     },
//     modal: {
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     paper: {
//         backgroundColor: theme.palette.background.paper,
//         border: '2px solid #000',
//         boxShadow: theme.shadows[5],
//         padding: theme.spacing(2, 4, 3),
//     },
// }));



function LandingPage() {
//     const classes = useStyles();
//     const [open, setOpen] = useState(false);
//     const [user, setUser] = useState(null)
//     const [input, setInput] = useState({
//         name:"",
//         password:""
//     })

//     const handleOpen = () => {
//         setOpen(true);
//     };

//     const handleClose = () => {
//         setOpen(false);
// };


// const handleChange = (e) => {
//     setInput ({
//         ...input,
//         [e.target.name]: e.target.value
//     })

// }

// const handleSubmit = async (e) =>{
//         e.preventDefault()
//     //     try{
//     //     const user = await Login({
//     //         username,
//     //         password
//     //     })
        
//     //     setUser(user)
//     //     setInput({
//     //         name:"",
//     //         password:""
//     //     })
//     // }
//     //     catch(e){

//     //     }
        
//     }

    return (
        // <div className={classes.root}>
        <div>
            <h1>Welcome to Exel Manager</h1>

            <Link to={"/home/perfil"}>
                <Button variant="outlined" color="primary" >
                    Log In
                </Button>
            </Link>
            {/* // <Button variant="outlined" color="primary" onClick={handleOpen}>
            //     Log In
            // </Button>
            // <Modal */}
            {/* //     aria-labelledby="transition-modal-title"
            //     aria-describedby="transition-modal-description"
            //     className={classes.modal}
            //     open={open}
            //     onClose={handleClose}
            //     closeAfterTransition
            //     BackdropComponent={Backdrop}
            //     BackdropProps={{
            //         timeout: 500,
            //     }}
            // >
            //     <Fade in={open}>
            //         <div className={classes.paper}>
            //             <AccountCircleIcon />
            //             <h2 id="transition-modal-title">Log in</h2>

            //             <p id="transition-modal-description">Please enter your username and password</p>
            //             <Box component="form" className={classes.root} noValidate autoComplete="off" onSubmit={(e) => handleSubmit(e)}>
            //                 <TextField 
            //                     id="outlined-search" 
            //                     label="User" 
            //                     type="text" 
            //                     variant="outlined"
            //                     value={input.name}
            //                     name="name"
            //                     onChange={(e) => handleChange(e)}

            //                     />
            //                 <TextField 
            //                     id="outlined-search" 
            //                     label="Password" 
            //                     type="password" 
            //                     variant="outlined"
            //                     value={input.password}
            //                     name="password" 
            //                     onChange={(e) => handleChange(e)}
            //                     />
            //                 <Button variant="contained" color="primary" type="submit">
            //                     Ingresar
            //                 </Button>
            //             </Box>
            //         </div>
            //     </Fade>
            // </Modal> */}
        </div>


    )
}

export default LandingPage