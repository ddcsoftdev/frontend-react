import Ajv, { ValidateFunction } from "ajv";

const ajv = new Ajv({ allErrors: true });

// Function to fetch and parse JSON schema files
const fetchSchemaFile = async (url: string): Promise<any> => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch schema at ${url}`);
  }
  return response.json();
};

const baseURL = "/schemas/";

const schemaPaths = [
  "display/blank.json",
  "display/card.json",
  "display/image.json",
  "display/list.json",
  "display/text.json",
  "display/video.json",
  "interactive/button.json",
  "interactive/calendar.json",
  "interactive/chart.json",
  "interactive/chat.json",
  "interactive/dashboard.json",
  "interactive/form.json",
  "interactive/input.json",
  "interactive/modal.json",
  "interactive/slider.json",
  "interactive/table.json",
  "layout/drawer.json",
  "layout/footer.json",
  "layout/header.json",
  "layout/section.json",
  "layout/sidebar.json",
  "navigation/breadcrumbs.json",
  "navigation/navigation.json",
  "navigation/tabs.json",
  "style/style.json",
  "components.json",
  "screen.json"
];

const validationFunctions: { [key: string]: ValidateFunction } = {};

const loadSchemas = async () => {
  for (const relativePath of schemaPaths) {
    const url = baseURL + relativePath;
    const schema = await fetchSchemaFile(url);
    ajv.addSchema(schema, schema.$id || relativePath);
  }
};

export const compileAndValidate = async (type: string, data: any): Promise<boolean> => {
  if (!validationFunctions[type]) {
    await loadSchemas();
    const validate = ajv.getSchema(type);
    if (validate) {
      validationFunctions[type] = validate;
    }
  }
  const validate = validationFunctions[type];
  if (!validate) {
    throw new Error(`No validation function found for type: ${type}`);
  }
  const valid = validate(data);
  if (!valid) {
    console.error(validate.errors);
  }
  return valid;
};
