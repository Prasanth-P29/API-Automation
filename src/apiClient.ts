import propertiesReader from "properties-reader";
import path from "path";

const properties = propertiesReader(path.resolve(__dirname, "./config.properties"));

export const baseUrl: string = properties.get("baseUrl") as string;
