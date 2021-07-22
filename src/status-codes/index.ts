/**
 * @description server has successfully fulfilled the request and that there is no additional content to send in
 * the response payload body. Metadata in the response header fields refer to the target resource and its selected
 * representation after the requested action was applied. For example, if a 204 status code is received in response
 * to a PUT request and the response contains an ETag header field, then the PUT was successful and the ETag
 * field-value contains the entity-tag for the new representation of that target resource.
 *
 * @link https://miladezzat.github.io/http-status-codes/204.html
 */
export const NO_CONTENT = 204;

/**
 * @description The server cannot or will not process the request due to something that is perceived to be a client
 * error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).
 *
 * @link https://miladezzat.github.io/http-status-codes/https-status-codes/index.html
 */
export const BAD_REQUEST = 400;

/**
 * @description The request has not been applied because it lacks valid authentication
 * credentials for the target resource.
 * The server generating a 401 response MUST send a WWW-Authenticate header field1 containing
 * at least one challenge applicable to the target resource.
 *
 * @link https://miladezzat.github.io/http-status-codes/401.html
 */
export const UNAUTHENTICATED = 401;

/**
 * @description The server understood the request but refuses to authorize it.
 * A server that wishes to make public why the request has been forbidden can describe
 * that reason in the response payload (if any).
 *
 * @link https://miladezzat.github.io/http-status-codes/403.html
 */
export const UNAUTHORIZED = 403;

/**
 * @description The origin server did not find a current representation for
 * the target resource or is not willing to disclose that one exists.
 *
 * @link https://miladezzat.github.io/http-status-codes/404.html
 */
export const NOT_FOUND = 404;

/**
 * @description The request could not be completed due to a conflict with the current state of the target resource.
 * This code is used in situations where the user might be able to resolve the conflict and resubmit the request.
 *
 * @link https://miladezzat.github.io/http-status-codes/409.html
 */
export const CONFLICT = 409;

/**
 * @description The server understands the content type of the request entity
 * (hence a 415 Unsupported Media Type status code is inappropriate),
 * and the syntax of the request entity is correct (thus a 400 Bad Request status
 * code is inappropriate) but was unable to process the contained instructions.
 *
 * @link https://miladezzat.github.io/http-status-codes/422.html
 */
export const UNPROCURABLE_ENTITY = 422;

/**
 * @description The server encountered an unexpected condition that prevented it from fulfilling the request.
 *
 * @link https://miladezzat.github.io/http-status-codes/500.html
 */
export const INTERNAL_SERVER_ERROR = 500;
