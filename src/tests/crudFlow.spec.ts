import { test, expect } from "@playwright/test";
import { initializeApiClient } from "../apiClient";
import { postMethod, getMethod, putMethod, deleteMethod } from "../apiMethods";
import { Endpoints, StatusCodes } from "../enums";
import { createRandomUser } from "../utils/library";

test.describe("🔁 DummyJSON API CRUD Flow", () => {
  let api: any;

  test.beforeAll(async () => {
    api = await initializeApiClient();
  });

  test("Run CRUD Flow in Loop", async () => {
    const loopCount = 2; // Number of iterations
    for (let i = 1; i <= loopCount; i++) {
      console.log(`\n================= 🔄 LOOP ${i} START =================`);

      // 1️⃣ Create User
      const newUser = createRandomUser();
      const createRes = await postMethod(api, Endpoints.USERS, newUser);
      expect(createRes.status()).toBe(StatusCodes.CREATED);

      const createdUser = await createRes.json();
      const userId = createdUser.id;
      console.log("✅ Created User:", createdUser);

      // 2️⃣ Read User
      const readRes = await getMethod(api, `${Endpoints.USERS}/${userId}`);
      expect(readRes.status()).toBe(StatusCodes.OK);
      console.log("📖 Read Successful for User ID:", userId);

      // 3️⃣ Update User
      const updatedData = {
        firstName: "Updated_" + newUser.firstName,
        age: newUser.age + 1,
      };
      const updateRes = await putMethod(api, `${Endpoints.USERS}/${userId}`, updatedData);
      expect(updateRes.status()).toBe(StatusCodes.UPDATED);
      console.log("📝 User updated:", updatedData);

      // 4️⃣ Delete User
      const deleteRes = await deleteMethod(api, `${Endpoints.USERS}/${userId}`);
      expect(deleteRes.status()).toBe(StatusCodes.DELETED);
      console.log("🗑️ User deleted successfully");

      console.log(`================= ✅ LOOP ${i} COMPLETED =================\n`);
    }
  });
});
