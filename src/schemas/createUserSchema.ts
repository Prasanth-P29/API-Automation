import { JSONSchemaType } from "ajv";

export interface CreateUserResponse { // Define the interface for the create user response
  name: string;
  age: number;
  job: string;
  _id: string;
}

export const createUserSchema: JSONSchemaType<CreateUserResponse> = {  // Define the JSON schema for create user response
  type: "object",
  properties: {
    name: { type: "string" },
    age: { type: "integer", minimum: 18, maximum: 60 },
    job: { type: "string" },
    _id: { type: "string" },
  },
  required: ["name", "age", "job", "_id"],
  additionalProperties: false,
};
