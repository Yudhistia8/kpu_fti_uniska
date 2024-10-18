export class Validation {
  static Validate(schema, data) {
    return schema.parse(data);
  }
}
