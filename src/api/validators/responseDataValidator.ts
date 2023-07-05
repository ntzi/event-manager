import _ from "lodash";

const validateResData = <T extends object>(
	data: { [K in keyof T]: T[K] } | null,
	dataSchema: ReadonlyArray<string>
): Partial<T> | Array<Partial<T>> => {
	if (Array.isArray(data)) {
		return data.map((item) => _.pick(item, dataSchema));
	}
	return _.pick(data, dataSchema);
};

export { validateResData };
