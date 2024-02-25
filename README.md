# Attendify

## Overview

Welcome to the Attendify project! This initiative aims to streamline the entry process for events organized by all the clubs. Instead of traditional methods like using formal Excel sheets, we are transitioning to a more efficient and secure system using QR codes. This project is built on the popular MERN stack, utilizing Mysql, Express.js, React, and Node.js.

## Project Description

The project revolves around generating and scanning QR codes for event attendees. Instead of relying on manual entry processes or physical tickets, participants will receive a unique QR code that serves as their digital entry pass.

## Tech Stack

- **Mysql:** Database for storing attendee information securely.
- **Express.js:** Framework for building the backend server.
- **React:** Frontend library for creating dynamic user interfaces.
- **Node.js:** JavaScript runtime for server-side development.

## How it Works

1. **QR Code Generation:** On login, each participant will be provided with a personalized QR code containing essential information such as username as well as the events in which they have registered.

2. **Event Day Entry:** At the event venue, the event team will utilize a QR code scanner to validate entries. This eliminates the need for time-consuming manual check-ins and minimizes the chances of errors.

3. **Data Management:** The system ensures seamless data management. All attendee information is securely stored in MySQL and easily accessible, facilitating post-event analysis and reporting.

4. **Transition from Excel Sheets:** We are moving away from the conventional use of formal Excel sheets for managing attendees. The QR system is not only more efficient but also enhances the overall experience for both participants and organizers.

5. **Hassle free registeration:** The student can see the available events in the events page of the system. Registerations is as simple as clicking a link.

6. **No need to maintain multiple tickets:** The system implements a dynamic QRcode that changes when a user registers in a event. Thus there is only one QR per user as visible on their profile page. This QR will have all the registered events of the respective user.
