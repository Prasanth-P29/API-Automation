import Ajv, { JSONSchemaType } from "ajv"; // Import Ajv and JSONSchemaType

const ajv = new Ajv({ allErrors: true });  // Create an Ajv instance with allErrors option

export function validateSchema<T>(schema: JSONSchemaType<T>, data: any) {
  const validate = ajv.compile(schema); // Compile the schema

  const valid = validate(data); // Validate the data against the schema
  if (!valid) {
    console.error("❌ Schema validation errors:", validate.errors);
    return false;
  }
  console.log("✅ Schema validated successfully");
  return true;
}
