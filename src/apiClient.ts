import propertiesReader from "properties-reader"; // Import properties-reader to read configuration files
import path from "path";
import { APIRequestContext } from "@playwright/test"; 
import { Endpoints } from "./enums";

const properties = propertiesReader(path.resolve(__dirname, "./config.properties")); // Load configuration properties

export const baseUrl: string = properties.get("baseUrl") as string;  // Base URL for the API

export const createUser = async (request: APIRequestContext, data: any) => {  // Function to create a user
  return await request.post(`${baseUrl}${Endpoints.USERS}`, { data });
};

export const getUser = async (request: APIRequestContext, id: string) => {
  return await request.get(`${baseUrl}${Endpoints.USERS}/${id}`);
};

export const updateUser = async (request: APIRequestContext, id: string, data: any) => { 
  return await request.put(`${baseUrl}${Endpoints.USERS}/${id}`, { data });
};

export const deleteUser = async (request: APIRequestContext, id: string) => {
  return await request.delete(`${baseUrl}${Endpoints.USERS}/${id}`);
};