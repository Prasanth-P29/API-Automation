# Playwright API Automation – CRUD Flow

This project demonstrates API testing using **Playwright + TypeScript** by executing a full **CRUD Cycle** (Create → Read → Update → Delete) on a User endpoint.  
The test repeatedly runs the same flow in a loop, generating new random data each time.

---

## ✅ Folder Structure

D:.
│ apiClient.ts → Loads config + Contains CRUD API methods
│ apiMethods.ts → ✅ Not used now (methods moved to apiClient.ts)
│ config.properties → Base URL config
│ enums.ts → Endpoints + Status Codes
│
├── tests
│ crudFlow.spec.ts → Test script executing CRUD loop flow
│
└── utils
library.ts → Generates random data via Faker

yaml
Copy code

✅ **Note:**  
Originally, CRUD methods were placed inside `apiMethods.ts`.  
As per requirement, those methods are now **added to `apiClient.ts` without modifying existing logic inside it.**  
`apiMethods.ts` is now unused.

---

## ✅ Tech Used

| Tool | Purpose |
|------|---------|
| Playwright | API testing framework |
| TypeScript | Language |
| Faker | Dynamic random test data |
| properties-reader | Reads config.properties |
| Node.js | Runtime |

---

## ✅ Configuration — `config.properties`

Stores environment base URL:

baseUrl=https://<YOUR_CRUDCRUD_URL>/api/<KEY>

yaml
Copy code

This value is loaded at runtime using **properties-reader**.

---

## ✅ apiClient.ts

✅ Reads config  
✅ Exposes baseUrl  
✅ Contains CRUD handlers (moved here from apiMethods.ts without changing original code)  

📌 Functions:
- `createUser(request, data)`
- `getUser(request, id)`
- `updateUser(request, id, data)`
- `deleteUser(request, id)`

These functions generate API requests used in the test file.

---

## ✅ utils/library.ts

Uses **Faker** to generate user payloads dynamically:

Example:
```json
{
  name,
  age,
  job
}
Each run produces randomized data so the loop always works with new values.

✅ enums.ts
Stores constants:

Endpoints
ini
Copy code
USERS = "/users"
Status Codes
Copy code
200 OK
201 CREATED
204 NO_CONTENT
400 BAD_REQUEST
This prevents “magic numbers” and makes our test readable.

✅ Test Flow — crudFlow.spec.ts
Loop Count: 5 iterations

Inside each loop, workflow is:

Step	Action
1	Generate new user payload
2	POST → Create user
3	GET → Fetch created user
4	PUT → Update user
5	GET → Verify updated user
6	DELETE → Remove user

Each step asserts status code and prints output.

✅ Flow Diagram
sql
Copy code
CREATE → FETCH → UPDATE → VERIFY UPDATED → DELETE
(repeat)


✅ How to Run
Install dependencies:

nginx
Copy code
npm install
Run test:

bash
Copy code
npx playwright test
Run test with single worker (no concurrency):

bash
Copy code
npx playwright test --workers=1
View Report:

sql
Copy code
npx playwright show-report
✅ Example Console Output
yaml
Copy code
========== LOOP #1 ==========
✅ Created: {...}
✅ Fetched: {...}
✅ Updated: {...}
✅ Verified updated: {...}
✅ Deleted: <id>
This repeats for all iterations.

✅ Why merge apiMethods → apiClient?
Reason	Benefit
Centralized base URL + operations	Cleaner design
No code rewrite in existing file	Requirement satisfied
Better readability	Easy maintenance
Fewer imports	Simpler usage

📌 Requirement fulfilled:

Add CRUD methods to apiClient.ts without modifying the existing code inside it.

So only appended — nothing removed.

✅ Advantages
✔ Config centralized
✔ Reusable API utilities
✔ Randomized test data
✔ Clean readable test layer
✔ Works in loop
✔ Easy future scalability

✅ Possible Future Improvements
🔹 Schema validation (Zod / Ajv)
🔹 Environment-based config
🔹 Token-based authentication support
🔹 Logging abstraction

✅ Summary
File	                  Role
apiClient.ts	      BaseUrl + CRUD methods
library.ts	          Faker payload generator
enums.ts	          Endpoints + StatusCode constants
crudFlow.spec.ts	  Test runner
config.properties	  Holds base URL