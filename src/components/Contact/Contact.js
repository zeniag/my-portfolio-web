import {
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material"
import React, { useState } from "react"
import axios from "axios"

import * as contactStyles from "./Contact.module.scss"

const Contact = () => {
  const [name, setName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [emailSent, setEmailSent] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()

    const dataToSubmit = {
      name: name,
      phoneNumber: phoneNumber,
      email: email,
      message: message,
    }

    axios.post("/api/form", dataToSubmit)
  }

  return (
    <div id="contact" style={{ marginTop: -64, paddingTop: 64 }}>
      <Paper square className={contactStyles.contactSection}>
        <Container maxWidth="lg">
          <Typography variant="h3" className={contactStyles.sectionHeading}>
            Contact Me!
          </Typography>
          <form
            noValidate
            autoComplete="off"
            style={{ marginTop: "40px" }}
            onSubmit={handleSubmit}
          >
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
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Phone Number"
                  id="phoneNumber"
                  size="small"
                  margin="dense"
                  fullWidth
                  name="phoneNumber"
                  value={phoneNumber}
                  onChange={e => setPhoneNumber(e.target.value)}
                  variant="filled"
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
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  variant="filled"
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
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  variant="filled"
                />
              </Grid>
              <div
                className={
                  emailSent ? contactStyles.msgAppear : contactStyles.msg
                }
              >
                Message Has Been Sent!
              </div>
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
