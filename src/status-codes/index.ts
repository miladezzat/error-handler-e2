/**
 * @description The initial part of a request has been received and has not yet been rejected by the server.
 * The server intends to send a final response after the request has been fully received and acted upon.
 * When the request contains an Expect header field that includes a 100-continue expectation,
 * the 100 response indicates that the server wishes to receive the request payload body1.
 * The client ought to continue sending the request and discard the 100 response.
 * If the request did not contain an Expect header field containing the 100-continue expectation,
 * the client can simply discard this interim response.
 *
 * @link https://miladezzat.github.io/100.html
 */
export const CONTINUE = 100;

/**
 * @description The server understands and is willing to comply with the client's request,
 *  via the Upgrade message header field (section 14.42),
 * for a change in the application protocol being used on this connection.
 * The server will switch protocols to those defined by the response's Upgrade header field immediately
 * after the empty line which terminates the 101 response.
 *
 * @link https://miladezzat.github.io/101.html
 */
export const SWITCHING_PROTOCOLS = 101;

/**
 * @description The 102 (Processing) status code is an interim response used to inform the client that the server
 * has accepted the complete request, but has not yet completed it.
 * This status code SHOULD only be sent when the server has a reasonable expectation that the request will
 * take significant time to complete. As guidance, if a method is taking longer than 20 seconds
 * (a reasonable, but arbitrary value) to process the server SHOULD return a 102 (Processing) response.
 * The server MUST send a final response after the request has been completed.
 *
 * @link https://miladezzat.github.io/102.html
 */
export const PROCESSING = 102;

/**
 * @description Standard response for successful HTTP requests.
 * The actual response will depend on the request method used.
 * In a GET request, the response will contain an entity corresponding to the requested resource.
 * In a POST request the response will contain an entity describing or containing the result of the action.
 *
 * @link https://miladezzat.github.io/200.html
 */
export const OK = 200;

/**
 * @description The request has been fulfilled and resulted in a new resource being created.
 * The newly created resource can be referenced by the URI(s) returned in the entity of the response,
 * with the most specific URI for the resource given by a Location header field.
 * The response SHOULD include an entity containing a list of resource characteristics and location(s)
 * from which the user or user agent can choose the one most appropriate. The entity format is specified
 *  by the media type given in the Content-Type header field. The origin server MUST create the resource before
 *  returning the 201 status code.
 * If the action cannot be carried out immediately, the server SHOULD respond with 202 (Accepted) response instead.
 *
 * @link https://miladezzat.github.io/201.html
 */
export const CREATED = 201;

/**
 *@description The request has been accepted for processing, but the processing has not been completed.
 The request might or might not eventually be acted upon, as it might be disallowed
 when processing actually takes place.
 There is no facility for re-sending a status code from an asynchronous operation such as this.
 *
 * @link https://miladezzat.github.io/202.html
 */
export const ACCEPTED = 202;

/**
 * @description The returned metainformation in the entity-header is not the definitive
 * set as available from the origin server,
 * but is gathered from a local or a third-party copy.
 *  The set presented MAY be a subset or superset of the original version.
 *  For example, including local annotation information about
 * the resource might result in a superset of the metainformation known by the origin server.
 * Use of this response code is not required and is only appropriate when the response would otherwise be 200 (OK)
 *
 * @link https://miladezzat.github.io/203.html
 */
export const NON_AUTHORITATIVE_INFORMATION = 203;

/**
 * @description server has successfully fulfilled the request and that there is no additional content to send in
 * the response payload body. Metadata in the response header fields refer to the target resource and its selected
 * representation after the requested action was applied. For example, if a 204 status code is received in response
 * to a PUT request and the response contains an ETag header field, then the PUT was successful and the ETag
 * field-value contains the entity-tag for the new representation of that target resource.
 *
 * @link https://miladezzat.github.io/204.html
 */
export const NO_CONTENT = 204;

/**
 * @description The server has fulfilled the request and the user agent SHOULD reset
 * the document view which caused the request to be sent. This response is primarily intended to allow input for
 * actions to take place via user input, followed by a clearing of the form in which the input is given so that
 * the user can easily initiate another input action.
 * The response MUST NOT include an entity.
 *
 * @link https://miladezzat.github.io/205.html
 */
export const RESET_CONTENT = 205;

/**
 * @description The server has fulfilled the partial GET request for the resource.
 *  The request MUST have included a Range header field (section 14.35) indicating the desired range,
 * and MAY have included an If-Range header field (section 14.27) to make the request conditional.
 *
 * @link https://miladezzat.github.io/206.html
 */
export const PARTIAL_CONTENT = 206;

/**
 * @description The message body that follows is an XML message and can contain a number of separate response codes,
 * depending on how many sub-requests were made.
 *
 * @link https://miladezzat.github.io/207.html
 */
export const MULTI_STATUS = 207;

/**
 * @description The 208 (Already Reported) status code can be used inside a DAV: propstat response element
 * to avoid enumerating the internal members of multiple bindings to the same collection repeatedly.
 *  For each binding to a collection inside the request's scope, only one will be reported with a 200 status,
 *  while subsequent DAV:response elements for all other bindings will use the 208 status,
 *  and no DAV:response elements for their descendants are included.
 *
 *
 * @link https://miladezzat.github.io/208.html
 */
export const ALREADY_REPORTED = 208;

/**
 * @descriptionThe server has fulfilled a GET request for the resource, and the response is a representation of
 * the result of one or more instance-manipulations applied to the current instance. The actual current instance
 *  might not be available except by combining this response with other previous or future responses,
 * as appropriate for the specific instance-manipulation(s). If so, the headers of the resulting instance are
 * the result of combining the headers from the status-226 response and the other instances, following the rules
 * in section 13.5.3 of the HTTP/1.1 specification.
 *
 * @link https://miladezzat.github.io/226.html
 */
export const IM_USED = 226;

/**
 * @description The server cannot or will not process the request due to something that is perceived to be a client
 * error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).
 *
 * @link https://miladezzat.github.io/index.html
 */
export const BAD_REQUEST = 400;

/**
 * @description The request has not been applied because it lacks valid authentication
 * credentials for the target resource.
 * The server generating a 401 response MUST send a WWW-Authenticate header field1 containing
 * at least one challenge applicable to the target resource.
 *
 * @link https://miladezzat.github.io/401.html
 */
export const UNAUTHENTICATED = 401;

/**
 * @description The server understood the request but refuses to authorize it.
 * A server that wishes to make public why the request has been forbidden can describe
 * that reason in the response payload (if any).
 *
 * @link https://miladezzat.github.io/403.html
 */
export const UNAUTHORIZED = 403;

/**
 * @description The origin server did not find a current representation for
 * the target resource or is not willing to disclose that one exists.
 *
 * @link https://miladezzat.github.io/404.html
 */
export const NOT_FOUND = 404;

/**
 * @description The request could not be completed due to a conflict with the current state of the target resource.
 * This code is used in situations where the user might be able to resolve the conflict and resubmit the request.
 *
 * @link https://miladezzat.github.io/409.html
 */
export const CONFLICT = 409;

/**
 * @description The server understands the content type of the request entity
 * (hence a 415 Unsupported Media Type status code is inappropriate),
 * and the syntax of the request entity is correct (thus a 400 Bad Request status
 * code is inappropriate) but was unable to process the contained instructions.
 *
 * @link https://miladezzat.github.io/422.html
 */
export const UNPROCURABLE_ENTITY = 422;

/**
 * @description The server encountered an unexpected condition that prevented it from fulfilling the request.
 *
 * @link https://miladezzat.github.io/500.html
 */
export const INTERNAL_SERVER_ERROR = 500;
