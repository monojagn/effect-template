# Effect Template

This template is built as a NodeJS starter. To begin, run `npm install`. 

After installing dependencies, you can run the code in `src/main.ts` by running `npm start`

 
URL: http://localhost:3000/cat
METHOD: POST
HEADERS: {
  'Content-Type': 'application/json',
  'x-api-key': '99f4a200-a4dd-493b-a8bf-aca8a02b5c06'
}
BODY: {
  "name": "Michi",
  "breed": "Sphynx"
}
 
========== HTTP RESPONSE ==========
STATUS: 200
BODY: {
  "id": "801e081e-31a6-4750-bf12-7d5ed80a59ad",
  "name": "Michi",
  "breed": "Sphynx"
}
===================================
timestamp=2026-02-14T01:33:29.765Z level=INFO fiber=#0 message="API KEY: 99f4a200-a4dd-493b-a8bf-aca8a02b5c06"