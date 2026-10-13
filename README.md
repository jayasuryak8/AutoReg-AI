# AutoReg AI

React + Vite registration workspace, FastAPI/Gemini service, local SQLite profile and history storage, and a fill-only Chrome extension prototype.

## Run locally

From the workspace root in PowerShell:

```powershell
py -m venv .venv
.venv\Scripts\python.exe -m pip install -r backend\requirements.txt
Copy-Item backend\.env.example backend\.env
```

Set `GEMINI_API_KEY` in `backend\.env`. Keep this key server-side; never put it in a `VITE_*` variable. Then start FastAPI:

```powershell
.venv\Scripts\uvicorn.exe backend.main:app --reload --reload-dir backend --port 8000
```

In a second terminal, start the frontend:

```powershell
npm install
npm run dev
```

Open the Vite URL, usually `http://localhost:5173`. The Vite dev server proxies `/api` to FastAPI. Without FastAPI or a Gemini key, the frontend uses local demo behavior. SQLite data is created at `backend/autoreg.db`.

## Chrome extension prototype

Start the backend, save a profile in the app, and follow [the extension setup](extension/README.md) to load the `extension` folder unpacked in Chrome. The extension requires an explicit approval checkbox and a button click for each page. It fills matching visible fields only and never submits a form.

## Local-development limits

SQLite stores one local profile and registration history. The starter has no login, per-user access control, or production data protections; do not use sensitive personal information. Uploaded files are sent to Gemini for extraction and are not stored by the API. Review every generated or filled value before submitting a registration yourself.