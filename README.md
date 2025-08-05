# IPO Tracker App

A mobile-friendly IPO tracking app built with **Django REST Framework** (backend) and **React Native with Expo** (frontend). It allows users to view details of upcoming and past IPOs in a simple, scrollable list.

---

## Features

- View list of IPOs with details:
  - Company name
  - Price band
  - Open & close dates
  - Listing date and gains
- Mobile-first interface using React Native
- Dynamic data fetched from Django backend via REST API

---

## Tech Stack

### Backend
- Python
- Django
- Django REST Framework

### Frontend
- React Native (Expo)
- Axios for API requests

---

## Setup Instructions

###  Backend (Django)

1. Install dependencies:

    ```bash
    pip install django djangorestframework
    ```

2. Run migrations:

    ```bash
    python manage.py migrate
    ```

3. Start the server (make sure it listens to your local IP):

    ```bash
    python manage.py runserver 0.0.0.0:8000
    ```

4. Access the API at:

    ```
    http://<your-local-ip>:8000/api/ipos/
    ```

---

### Frontend (React Native with Expo)

1. Install dependencies:

    ```bash
    npm install
    ```

2. In `index.js`, update the API endpoint:

    ```js
    axios.get("http://<your-local-ip>:8000/api/ipos/")
    ```

3. Start the Expo server:

    ```bash
    npx expo start
    ```

4. Open the app in **Expo Go** on your mobile device:
    - Make sure your phone and computer are connected to the same WiFi network.
    - Scan the QR code shown in the terminal or browser.

---


