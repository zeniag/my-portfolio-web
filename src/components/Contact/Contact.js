import {
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material"
import React from "react"

import * as contactStyles from "./Contact.module.scss"

const Contact = () => {
  return (
    <div id="contact" style={{ marginTop: -64, paddingTop: 64 }}>
      <Paper square className={contactStyles.contactSection}>
        <Container maxWidth="lg">
          <Typography variant="h3" className={contactStyles.sectionHeading}>
            Hire Me!
          </Typography>
          <Typography variant="body1">Text</Typography>
          <form noValidate autoComplete="off" style={{ marginTop: "40px" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  label="Full Name"
                  id="fullName"
                  size="small"
                  margin="dense"
                  fullWidth
                  name="name"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Phone Number"
                  id="phoneNumber"
                  size="small"
                  margin="dense"
                  fullWidth
                  name="phone"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  label="Email"
                  id="email"
                  size="small"
                  margin="dense"
                  fullWidth
                  name="email"
                  type="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  label="Message"
                  id="message"
                  size="small"
                  margin="dense"
                  fullWidth
                  name="message"
                  multiline
                  rows={8}
                />
              </Grid>
              <Grid item xs={12} className={contactStyles.btn}>
                <Button variant="contained" color="primary" type="submit">
                  Send
                </Button>
              </Grid>
            </Grid>
          </form>
        </Container>
      </Paper>
    </div>
  )
}

export default Contact
