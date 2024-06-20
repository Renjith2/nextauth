
import { errors } from "@vinejs/vine";

interface FieldContext {
  wildCardPath: string;
}

interface ErrorReporterContract {
  hasErrors: boolean;
  errors: { [key: string]: string };
  report(message: string, rule: string, field: FieldContext, meta?: any): void;
  createError(): Error;
}

interface ValidationError {
  [field: string]: string;
}

export default class ErrorReporter implements ErrorReporterContract {
  /**
   * A flag to know if one or more errors have been
   * reported
   */
  hasErrors: boolean = false;

  /**
   * A collection of errors as per the JSONAPI spec
   */
  errors: ValidationError = {};

  /**
   * VineJS calls the report method
   */
  report(message: string, rule: string, field: FieldContext, meta?: any) {
    this.hasErrors = true;

    /**
     * Collecting errors as per the JSONAPI spec
     */
    this.errors[field.wildCardPath] = message;
  }

  /**
   * Creates and returns an instance of the
   * ValidationError class
   */
  createError() {
    return new errors.E_VALIDATION_ERROR(this.errors);
  }
}
