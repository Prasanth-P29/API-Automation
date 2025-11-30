import { test, expect } from "@playwright/test";
import { generateUser } from "../utils/library";
import { createUser, getUser, updateUser, deleteUser } from "../apiClient";
import { StatusCodes } from "../enums";

test("CRUD API Flow Loop", async ({ request }) => {  // CRUD operations in a loop
  const LOOP_COUNT = 1;

  for (let i = 1; i <= LOOP_COUNT; i++) {
    console.log(`\n========== LOOP #${i} ==========`);

    //
    // ✅ CREATE
    //
    const userData = generateUser();  // Generate user data
    const createRes = await createUser(request, userData);
    expect(createRes.status()).toBe(StatusCodes.CREATED);

    const created = await createRes.json(); // Created user response
    console.log("✅ Created:", created);
    const userId = created._id;  // Store the created user ID


    //
    // ✅ GET (after create)
    //
    const getRes = await getUser(request, userId);
    expect(getRes.status()).toBe(StatusCodes.OK); // Verify GET status

    const fetched = await getRes.json();
    console.log("✅ Fetched:", fetched);


    //
    // ✅ UPDATE (fetched user)
    //
    const newUpdatedData = generateUser();
    const updateRes = await updateUser(request, userId, newUpdatedData);
    expect(updateRes.status()).toBe(StatusCodes.UPDATED);

    console.log("✅ Updated:", newUpdatedData);


    //
    // ✅ GET (after update -> verify change)
    //
    const verifyRes = await getUser(request, userId);
    expect(verifyRes.status()).toBe(StatusCodes.OK);

    const verifyUser = await verifyRes.json();
    console.log("✅ Verified updated:", verifyUser);


    //
    // ✅ DELETE
    //
    const deleteRes = await deleteUser(request, userId);
    expect([StatusCodes.OK, StatusCodes.DELETED]).toContain(deleteRes.status()); // Accepting 200 or 204 for delete
    console.log("✅ Deleted:", userId);
  }
});
