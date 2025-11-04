# Playwright API Automation – CRUD Framework

This project demonstrates a modular **API Test Automation Framework** using **Playwright + TypeScript**.  
It executes complete CRUD flow (Create → Read → Update → Delete) in multiple loops.  
User data is dynamically generated using Faker and the base URL is provided via `config.properties`.

---

## ✅ Tech Stack

| Tool | Purpose |
|------|---------|
| Playwright | API request engine + test runner |
| TypeScript | Strong typing |
| Faker (`@faker-js/faker`) | Random user data |
| properties-reader | Read config.properties |

---

## ✅ Folder Structure



D:.
│ apiClient.ts
│ apiMethods.ts
│ config.properties
│ enums.ts
│
├───tests
│ crudFlow.spec.ts
│
└───utils
library.ts


---

## ✅ Installation

### 1️⃣ Install dependencies
```bash
npm install

2️⃣ Install Playwright browsers
npx playwright install

✅ config.properties

This file contains the API base URL.

baseUrl=https://crudcrud.com/api/<your-key>

✅ How to Run Tests
Normal Run
npx playwright test

Run with Single Worker

(Recommended to avoid race issues in CRUD)

npx playwright test --workers=1

✅ CRUD Loop Flow Summary

Each iteration performs:

1️⃣ Create (POST)

Random user payload

Receive _id

2️⃣ Read (GET)

Fetch using _id

3️⃣ Update (PUT)

Random new data

4️⃣ Read Again (GET)

Validate updated fields

5️⃣ Delete (DELETE)

Remove user

✅ All assertions validate:

HTTP Status

Request → Response JSON

Updated data

✅ Important Files — Responsibility
File	                    Purpose
config.properties	   Store API Base URL
apiClient.ts	       Creates Playwright request context
apiMethods.ts	       Reusable API handler methods
enums.ts	           Endpoints + Status codes
library.ts         	   Generates random user data
crudFlow.spec.ts	   Looped CRUD test


✅ Key Concepts
🔹 Modular Design

Methods separated → easy maintenance & reusability

🔹 Faker Data

Every execution generates new user values:

name

age

job

🔹 properties-reader

Used to read config.properties values

🔹 Enums

Avoid hardcoding endpoints & status codes

🔹 Looping Logic

Repeat CRUD flow multiple times

✅ Example console output
========== LOOP #1 ==========
✅ Created
✅ Fetched
✅ Updated
✅ Verified updated
✅ Deleted

✅ Benefits

✔ Good code organization
✔ Reusable utilities
✔ Independent API layer
✔ Random dataset for better coverage
✔ Easy config change
✔ Minimal maintenance

✅ Future Enhancements

Schema validation

Test reporting attachments

CI integration

Negative test scenarios

✅ Author

Playwright API Automation – CRUD Practice Framework


---