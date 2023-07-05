import Joi from 'joi';

import { RequestSchema } from '../../types/validators/validatorTypes';

const getOneSchema = (): RequestSchema => {
	return Joi.object({
		params: {
			id: Joi.number().required(),
		},
		query: {},
		body: {},
	});
};

const getAllSchema = (): RequestSchema => {
	return Joi.object({
		params: {},
		query: {},
		body: {},
	});
};

const createSchema = (): RequestSchema => {
	return Joi.object({
		params: {},
		query: {},
		body: {
			name: Joi.string().required(),
			date: Joi.date().required(),
		},
	});
};

const updateOneSchema = (): RequestSchema => {
	return Joi.object({
		params: {
			id: Joi.number().required(),
		},
		query: {},
		body: {
			name: Joi.string().required(),
			date: Joi.date()
		},
	});
};

const removeSchema = (): RequestSchema => {
	return Joi.object({
		params: {
			id: Joi.number().required(),
		},
		query: {},
		body: {},
	});
};

export {
	getOneSchema,
	getAllSchema,
	createSchema,
	updateOneSchema,
	removeSchema,
};
