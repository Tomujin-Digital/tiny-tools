import { ApiResponseOptions } from "@nestjs/swagger";

export function enumToArray(enumType: any) {
  return Object.keys(enumType).filter(key => isNaN(Number(key)));
}

export function objectToResponseSchema(schema: {[x:string]: any}): ApiResponseOptions {
  const formatedObjects = Object.keys(schema).reduce((acc, itt) => {
    return {
      ...acc,
      [itt]: {
        type: typeof schema[itt],
        example: schema[itt]
      }
    }
  }, {})
  return {
    schema: {
      allOf: [
        {
          properties: formatedObjects
        },
      ],
    }
  }
}