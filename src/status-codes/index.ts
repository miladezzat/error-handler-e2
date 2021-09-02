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
 * @descriptionIndicates multiple options for the resource that the client may follow.
 * It, for instance, could be used to present different format options for video,
 * list files with different extensions, or word sense disambiguation.
 *
 * @link https://miladezzat.github.io/300.html
 */
export const MULTIPLE_CHOICES = 300;

/**
 * @description This and all future requests should be directed to the given URI.
 *
 * @link https://miladezzat.github.io/301.html
 */
export const MOVED_PERMANENTLY = 301;

/**
 * @description This is an example of industry practice contradicting the standard.[2] The HTTP/1.0
 * specification (RFC 1945) required the client to perform a temporary redirect
 * (the original describing phrase was "Moved Temporarily"), but popular browsers implemented 302
 * with the functionality of a 303 See Other. Therefore, HTTP/1.1 added status codes 303 and 307
 * to distinguish between the two behaviours.
 * However, some Web applications and frameworks use the 302 status code as if it were the 303.
 *
 * @link https://miladezzat.github.io/302.html
 */
export const FOUND = 302;

/**
 * @description The response to the request can be found under another URI using a GET method.
 * When received in response to a POST (or PUT/DELETE), it should be assumed that the server has
 * received the data and the redirect should be issued with a separate GET message. Since HTTP/1.1
 *
 * @link https://miladezzat.github.io/303.html
 */
export const SEE_OTHER = 303;

/**
 * @description Indicates the resource has not been modified since last requested.
 * Typically, the HTTP client provides a header like the If-Modified-Since header to provide
 * a time against which to compare. Using this saves bandwidth and reprocessing on both the server and client,
 * as only the header data must be sent and received in comparison to the entirety of the page being
 * re-processed by the server, then sent again using more bandwidth of the server and client.
 * Used for conditional GET calls to reduce band-width usage. If used, must set the Date,
 * Content-Location, ETag headers to what they would have been on a regular GET call.
 * There must be no body on the response.
 *
 * @link https://miladezzat.github.io/304.html
 */
export const NOT_MODIFIED = 304;

/**
 * @description Many HTTP clients (such as Mozilla and Internet Explorer) do not correctly handle responses
 * with this status code, primarily for security reasons.
 *
 * @link https://miladezzat.github.io/305.html
 */
export const USE_PROXY = 305;

/**
 * @description In this case, the request should be repeated with another URI; however,
 * future requests can still use the original URI. In contrast to 302, the request method should
 * not be changed when reissuing the original request. For instance,
 * a POST request must be repeated using another POST request.
 *
 * @link https://miladezzat.github.io/307.html
 */
export const TEMPORARY_REDIRECT = 307;

/**
 * @description The request, and all future requests should be repeated using another URI. 307 and 308
 * (as proposed) parallel the behaviours of 302 and 301, but do not require the HTTP method to change.
 * So, for example, submitting a form to a permanently redirected resource may continue smoothly.
 *
 * @link https://miladezzat.github.io/308.html
 */
export const PERMANENT_REDIRECT = 308;

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
 * @description Reserved for future use. The original intention was that this code might be used
 * as part of some form of digital cash or micropayment scheme, but that has not happened,
 * and this code is not usually used. As an example of its use, however,
 * Apple's MobileMe service generates a 402 error ("httpStatusCode:402" in the Mac OS X Console log)
 * if the MobileMe account is delinquent.
 *
 * @link https://miladezzat.github.io/402.html
 */
export const PAYMENT_REQUIRED = 402;

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
 * @description A request was made of a resource using a request method not supported by that resource;
 *  for example, using GET on a form which requires data to be presented via POST, or using PUT on a read-only resource.
 *
 * @link https://miladezzat.github.io/405.html
 */

export const METHOD_NOT_ALLOWED = 405;

/**
 * @description The requested resource is only capable of generating content not acceptable according to
 * the Accept headers sent in the request.
 *
 *
 * @link https://miladezzat.github.io/406.html
 */
export const NOT_ACCEPTABLE = 406;

/**
 * @description The client must first authenticate itself with the proxy.
 *
 *
 * @link https://miladezzat.github.io/407.html
 */
export const PROXY_AUTHENTICATION_REQUIRED = 407;

/**
 * @description The server timed out waiting for the request. According to W3 HTTP specifications:
 * "The client did not produce a request within the time that the server was prepared to wait.
 *  The client MAY repeat the request without modifications at any later time."
 *
 *
 * @link https://miladezzat.github.io/408.html
 */
export const REQUEST_TIMEOUT = 408;

/**
 * @description The request could not be completed due to a conflict with the current state of the target resource.
 * This code is used in situations where the user might be able to resolve the conflict and resubmit the request.
 *
 * @link https://miladezzat.github.io/409.html
 */
export const CONFLICT = 409;

/**
 * @description Indicates that the resource requested is no longer available and will not be available again.
 * This should be used when a resource has been intentionally removed and the resource should be purged.
 * Upon receiving a 410 status code, the client should not request the resource again in the future.
 * Clients such as search engines should remove the resource from their indices.
 * Most use cases do not require clients and search engines to purge the resource, and a "404 Not Found"
 * may be used instead.
 *
 * @link https://miladezzat.github.io/410.html
 */
export const GONE = 410;

/**
 * @description The request did not specify the length of its content, which is required by the requested resource.
 *
 * @link https://miladezzat.github.io/411.html
 */
export const LENGTH_REQUIRED = 411;

/**
 * @description The server does not meet one of the preconditions that the requester put on the request.
 *
 * @link https://miladezzat.github.io/412.html
 */
export const PRECONDITION_FAILED = 412;

/**
 * @description The request is larger than the server is willing or able to process.
 *
 * @link https://miladezzat.github.io/413.html
 */
export const PAYLOAD_TOO_LARGE = 413;

/**
 * @description The URI provided was too long for the server to process.
 *
 * @link https://miladezzat.github.io/414.html
 */
export const REQUEST_URI_TOO_LONG = 414;

/**
 * @description The request entity has a media type which the server or resource does not support.
 * For example, the client uploads an image as image/svg+xml, but the server requires
 * that images use a different format.
 *
 * @link https://miladezzat.github.io/415.html
 */
export const UNSUPPORTED_MEDIA_TYPE = 415;

/**
 * @description The client has asked for a portion of the file, but the server cannot supply that portion.
 * For example, if the client asked for a part of the file that lies beyond the end of the file.
 *
 * @link https://miladezzat.github.io/416.html
 */
export const REQUEST_RANGE_NOT_SATISFIABLE = 416;

/**
 * @description The server cannot meet the requirements of the Expect request-header field.
 *
 * @link https://miladezzat.github.io/417.html
 */
export const EXPECTATION_FAILED = 417;

/**
 * @description This code was defined in 1998 as one of the traditional IETF April Fools' jokes,
 * in RFC 2324, Hyper Text Coffee Pot Control Protocol, and is not expected to be implemented
 * by actual HTTP servers. However, known implementations do exist. An Nginx HTTP server uses
 * this code to simulate goto-like behaviour in its configuration.
 *
 * @link https://miladezzat.github.io/418.html
 */
export const I_AM_TEAPOT = 418;

/**
 * @description
 *
 * @link https://miladezzat.github.io/421.html
 */
export const MISDIRECTED_REQUEST = 421;
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
 * @description The resource that is being accessed is locked.
 *
 * @link https://miladezzat.github.io/423.html
 */
export const LOCKED = 423;

/**
 * @description The request failed due to failure of a previous request (e.g. a PROPPATCH).
 *
 * @link https://miladezzat.github.io/424.html
 */
export const FAILED_DEPENDENCY = 424;

/**
 * @description The client should switch to a different protocol such as TLS/1.0.
 *
 * @link https://miladezzat.github.io/426.html
 */
export const UPGRADE_REQUIRED = 426;

/**
 * @description The origin server requires the request to be conditional. Intended to prevent "the "lost update"
 * problem, where a client GETs a resource's state, modifies it, and PUTs it back to the server, when meanwhile
 * a third party has modified the state on the server, leading to a conflict.
 *
 * @link https://miladezzat.github.io/428.html
 */
export const PRECONDITION_REQUIRED = 428;

/**
 * @description The user has sent too many requests in a given amount of time.
 * Intended for use with rate limiting schemes.
 *
 * @link https://miladezzat.github.io/429.html
 */
export const TOO_MANY_REQUESTS = 429;

/**
 * @description The server is unwilling to process the request because either an individual header field,
 * or all the header fields collectively, are too large.
 *
 * @link https://miladezzat.github.io/431.html
 */
export const REQUEST_HEADER_FIELDS_TOO_LARGE = 431;

/**
 * @description An Nginx HTTP server extension. The server returns no information to the client and closes
 * the connection (useful as a deterrent for malware).
 *
 * @link https://miladezzat.github.io/444.html
 */
export const CONNECTION_CLOSED_WITHOUT_RESPONSE = 444;

/**
 * @description Intended to be used when resource access is denied for legal reasons, e.g. censorship or
 * government-mandated blocked access. A reference to the 1953 dystopian novel Fahrenheit 451,
 * where books are outlawed, and the autoionization temperature of paper, 451°F.
 *
 * @link https://miladezzat.github.io/451.html
 */
export const UN_AVAILABLE_FOR_LEGAL_REASONS = 451;

/**
 * @description An Nginx HTTP server extension. This code is introduced to log the case when
 * the connection is closed by client while HTTP server is processing its request, making server
 * unable to send the HTTP header back.
 *
 * @link https://miladezzat.github.io/499.html
 */
export const CLIENT_CLOSED_REQUEST = 499;

/**
 * @description The server encountered an unexpected condition that prevented it from fulfilling the request.
 *
 * @link https://miladezzat.github.io/500.html
 */
export const INTERNAL_SERVER_ERROR = 500;

/**
 * @description The server either does not recognize the request method, or it lacks the ability to fulfill the request.
 *
 * @link https://miladezzat.github.io/501.html
 */
export const NOT_IMPLEMENTED = 501;

/**
 * @description The server is currently unavailable (because it is overloaded or down for maintenance).
 * Generally, this is a temporary state.
 *
 * @link https://miladezzat.github.io/502.html
 */
export const BAD_GATEWAY = 502;

/**
 * @description
 *
 * @link https://miladezzat.github.io/503.html
 */
export const SERVICE_UNAVAILABLE = 503;

/**
 * @description The server was acting as a gateway or proxy and did not receive a timely response
 * from the upstream server.
 *
 * @link https://miladezzat.github.io/504.html
 */
export const GATEWAY_TIMEOUT = 504;

/**
 * @description The server does not support the HTTP protocol version used in the request.
 *
 * @link https://miladezzat.github.io/505.html
 */
export const HTTP_VERSION_NOT_SUPPORTED = 505;

/**
 * @description Transparent content negotiation for the request results in a circular reference.
 *
 * @link https://miladezzat.github.io/506.html
 */
export const VARIANT_ALSO_NEGOTIATES = 506;

/**
 * @description The server is unable to store the representation needed to complete the request.
 *
 * @link https://miladezzat.github.io/507.html
 */
export const INSUFFICIENT_STORAGE = 507;

/**
 * @description The server detected an infinite loop while processing the request (sent in lieu of 208).
 *
 * @link https://miladezzat.github.io/508.html
 */
export const LOOP_DETECTED = 508;

/**
 * @description Further extensions to the request are required for the server to fulfill it.
 *
 * @link https://miladezzat.github.io/510.html
 */
export const NOT_EXTENDED = 510;

/**
 * @description The client needs to authenticate to gain network access. Intended for use by intercepting
 * proxies used to control access to the network (e.g., "captive portals" used to require agreement
 * to Terms of Service before granting full Internet access via a Wi-Fi hotSpot).
 *
 * @link https://miladezzat.github.io/511.html
 */
export const NETWORK_AUTHENTICATION_REQUIRED = 511;

/**
 * @description This status code is not specified in any RFCs, but is used by some HTTP
 * proxies to signal a network connect timeout behind the proxy to a client in front of the proxy.
 *
 * @link https://miladezzat.github.io/599.html
 */
export const NETWORK_CONNECT_TIMEOUT_ERROR = 599;
