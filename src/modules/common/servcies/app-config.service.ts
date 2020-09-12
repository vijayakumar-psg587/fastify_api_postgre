import { CommonModel } from "../models/common.model";

export class AppConfigService {
  constructor() {}

  static getAppCommonConfig() {
    const commonModel = new CommonModel();
    commonModel.body_limit = parseInt(process.env.APP_BODY_LIMIT);
    commonModel.port = parseInt(process.env.APP_PORT);
    commonModel.host = process.env.APP_HOST;
    commonModel.version = process.env.APP_VERSION;
    commonModel.context_path = process.env.APP_CONTEXT_PATH;
    commonModel.node_env = process.env.NODE_ENV;
    commonModel.isEnableProxy = process.env.ENABLE_HTTPS_PROXY !== "false";
    console.log("getting commonModel::", commonModel);
    return commonModel;
  }

  // static getSwaggerModel(): SwaggerModel {
  //   const swaggerModelBuilder = new SwaggerModelBuilder();
  //   return swaggerModelBuilder
  //     .setContext(process.env.APP_CONTEXT_PATH)
  //     .setEmail(process.env.APP_SWAGGER_EMAIL)
  //     .setServer(process.env.APP_SWAGGER_SERVER_URL)
  //     .setUrl(process.env.APP_SWAGGER_ENDPOINT)
  //     .setTitle(process.env.APP_SWAGGER_TITLE)
  //     .setDescription(process.env.APP_SWAGGER_DESC)
  //     .build();
  // }

  // static getCustomError(code: string, message: string) {
  //   const customError = new CustomErrorModel();
  //   customError.code = code;
  //   if (
  //     !AppUtilService.isNullOrUndefined(code) &&
  //     (code.includes("DB") ||
  //       code.includes("REQ") ||
  //       code.includes("CUSTOM") ||
  //       code.includes("FILE"))
  //   ) {
  //     customError.status = 500;
  //   } else if (
  //     (!AppUtilService.isNullOrUndefined(code) && code.includes("HEADER")) ||
  //     code.includes("VALIDATION")
  //   ) {
  //     customError.status = 400;
  //   }
  //   customError.message = message;
  //   customError.timestamp = AppUtilService.defaultISOTime();
  //   return customError;
  // }

  // static configureAxios(
  //   url,
  //   method: HttpMethodsEnum,
  //   proxy: string,
  //   headers?: object,
  //   param?: object,
  //   body?: object
  // ): Promise<unknown> {
  //   let enableProxy = process.env.ENABLE_HTTPS_PROXY;

  //   let httpsProxyAgent;
  //   if (
  //     !AppUtilService.isNullOrUndefined(enableProxy) &&
  //     enableProxy === "true"
  //   ) {
  //     // get via substrings the host - port, auth for proxy
  //     httpsProxyAgent = new HttpsProxyAgent({
  //       host: process.env.APP_HOST,
  //       port: process.env.APP_PORT,
  //       secureProxy: true
  //     });
  //   }
  //   return Promise.resolve({
  //     headers: [{ APP_NAME: APP_CONSTANTS.COMMON.APP_NAME }],
  //     proxy: httpsProxyAgent,
  //     url: url,
  //     method: method,
  //     maxContentLength: 5242880,
  //     params: param,
  //     timeoutErrorMessage: `Axios cannot contact the specified URL - ${url}`,
  //     timeout: 20000,
  //     xsrfHeaderName: "AXIOS-FASTIFY_AUTH_XSRF",
  //     maxRedirects: 3
  //   });
  // }

  // static validationExceptionFactory(errors: ValidationError[]) {
  //   const customError = new CustomErrorModel();
  //   customError.code = "400";
  //   customError.timestamp = AppUtilService.defaultISOTime();

  //   customError.status = HttpStatus.BAD_REQUEST;
  //   let errMessage: string = "";
  //   errors.forEach(err => {
  //     console.log(
  //       "witnessing err tartgetm and err val",
  //       err.target?.constructor?.name,
  //       err.value
  //     );
  //     errMessage = errMessage === ""
  //       ? AppConfigService.getValidationErrorMessage(err)
  //       : errMessage
  //           .concat(APP_CONSTANTS.CHAR.HYPHEN)
  //           .concat(AppConfigService.getValidationErrorMessage(err));
  //   });

  //   console.log("final Error message:", errMessage);
  //   customError.message = errMessage;
  //   throw customError;
  // }
}
