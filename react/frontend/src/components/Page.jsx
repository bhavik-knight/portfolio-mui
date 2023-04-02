import { Fragment, useState } from "react";
import { ButtonAppBar } from "./Navbar.jsx";
import { Certificates } from "./Certificates";
import { Projects } from "./Projects";
import { Education } from "./Education";
import { ContactMe } from "./ContactMe";
import { Box } from "@mui/material";


function Page() {
    // to check only one topic out of projects, education, certifications, etc
    const [navbarTopic, setNavbarTopic] = useState("home")

    function handleChange(event, newNavbarTopic) {
        console.log(`${typeof (newNavbarTopic)}: ${newNavbarTopic}, ${typeof (navbarTopic)}`)
        setNavbarTopic(newNavbarTopic)

        // to set the title bar according to the button clicks
        document.title = newNavbarTopic
    }

    return (
        <Fragment>
            <Box sx={{ bgcolor: "pink", height: "100vh", width: "100vw" }}>
                <ButtonAppBar
                    color="standard"
                    value={navbarTopic}
                    onChange={handleChange}
                    size="large" />

                <h2>this is body of {navbarTopic}</h2>
            </Box>
        </Fragment >
    )
}

export { Page };