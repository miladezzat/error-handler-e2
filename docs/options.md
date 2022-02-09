# Options

This package created for handling errors and it has additional feature like: status codes

## Errors

Errors are the problems or the faults that occur in the program, which makes the behavior of the program abnormal, and experienced developers can also make these faults. Programming errors are also known as the bugs or faults, and the process of removing these bugs is known as debugging.

  * BadRequestError
  * ConflictError
  * CustomError
  * DatabaseError
  * InternalServerError
  * NoContentError
  * NotFoundError
  * UnAuthenticatedError
  * UnAuthorizedError
  * UnProcessableEntityError


## Middlewares

Middleware is software that lies between an operating system and the applications running on it. Essentially functioning as hidden translation layer, middleware enables communication and data management for distributed applications.

  * loggerMiddleware
  * handleErrorMiddleware
  * notFoundMiddleware
  * asyncHandlerMiddleware


## StatusCodes

Status codes are issued by a server in response to a client's request made to the server. ... The first digit of the status code defines the class of response, while the last two digits do not have any classifying or categorization role.

  * CONTINUE
  * SWITCHING_PROTOCOLS
  * PROCESSING
  * OK
  * CREATED
  * ACCEPTED
  * NON_AUTHORITATIVE_INFORMATION
  * NO_CONTENT
  * RESET_CONTENT
  * PARTIAL_CONTENT
  * MULTI_STATUS
  * ALREADY_REPORTED
  * IM_USED
  * MULTIPLE_CHOICES
  * MOVED_PERMANENTLY
  * FOUND
  * SEE_OTHER
  * NOT_MODIFIED
  * USE_PROXY
  * TEMPORARY_REDIRECT
  * PERMANENT_REDIRECT
  * BAD_REQUEST
  * UNAUTHENTICATED
  * PAYMENT_REQUIRED
  * UNAUTHORIZED
  * NOT_FOUND
  * METHOD_NOT_ALLOWED
  * NOT_ACCEPTABLE
  * PROXY_AUTHENTICATION_REQUIRED
  * REQUEST_TIMEOUT
  * CONFLICT
  * GONE
  * LENGTH_REQUIRED
  * PRECONDITION_FAILED
  * PAYLOAD_TOO_LARGE
  * REQUEST_URI_TOO_LONG
  * UNSUPPORTED_MEDIA_TYPE
  * REQUEST_RANGE_NOT_SATISFIABLE
  * EXPECTATION_FAILED
  * I_AM_TEAPOT
  * MISDIRECTED_REQUEST
  * UNPROCURABLE_ENTITY
  * LOCKED
  * FAILED_DEPENDENCY
  * UPGRADE_REQUIRED
  * PRECONDITION_REQUIRED
  * TOO_MANY_REQUESTS
  * REQUEST_HEADER_FIELDS_TOO_LARGE
  * CONNECTION_CLOSED_WITHOUT_RESPONSE
  * UN_AVAILABLE_FOR_LEGAL_REASONS
  * CLIENT_CLOSED_REQUEST
  * INTERNAL_SERVER_ERROR
  * NOT_IMPLEMENTED
  * BAD_GATEWAY
  * SERVICE_UNAVAILABLE
  * GATEWAY_TIMEOUT
  * HTTP_VERSION_NOT_SUPPORTED
  * VARIANT_ALSO_NEGOTIATES
  * INSUFFICIENT_STORAGE
  * LOOP_DETECTED
  * NOT_EXTENDED
  * NETWORK_AUTHENTICATION_REQUIRED
  * NETWORK_CONNECT_TIMEOUT_ERROR
