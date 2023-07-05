import { ObjectSchema } from 'joi';

type RequestSchema = ObjectSchema<{
	params: Record<string, string>;
	query: Record<string, string>;
	body: Record<string, string>;
}>;

type RequestSchemaFn = () => RequestSchema;

export { RequestSchema, RequestSchemaFn };
