import { JSONSchemaType } from "ajv";

export interface UpdateUserResponse { // Define the interface for the update user response
  name: string;
  age: number;
  job: string;
  _id: string;
}

export const updateUserSchema: JSONSchemaType<UpdateUserResponse> = {  // Define the JSON schema for update user response
  type: "object",
  properties: {
    name: { type: "string" },
    age: { type: "integer", minimum: 18, maximum: 60 },
    job: { type: "string" },
    _id: { type: "string" },
    createdAt: { type: "string" },
    avatar: { type: "string" },
  },
  required: ["name", "age", "job", "_id"],
  additionalProperties: false,
};
