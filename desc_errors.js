const spec_errors = [
    {
        statusCode: 400,
        message: "400 Bad Request",
        description: `
        The request could not be understood by the server due to malformed syntax. 
        The client SHOULD NOT repeat the request without modifications.

        Wikipedia
        The request cannot be fulfilled due to bad syntax.
        General error when fulfilling the request would cause an invalid state. 
        Domain validation errors, missing data, etc. are some examples.
        `,
    },
    {
        statusCode: 401,
        message: "401 Unauthorized",
        description: `
        The request requires user authentication. The response MUST include a 
        WWW-Authenticate header field (section 14.47) containing a challenge 
        applicable to the requested resource. The client MAY repeat the request 
        with a suitable Authorization header field (section 14.8). 
        If the request already included Authorization credentials, then the 401
        response indicates that authorization has been refused for those 
        credentials. If the 401 response contains the same challenge as 
        the prior response, and the user agent has already attempted 
        authentication at least once, then the user SHOULD be presented 
        the entity that was given in the response, since that entity might 
        include relevant diagnostic information. HTTP access authentication is
        explained in "HTTP Authentication: Basic and Digest Access Authentication".
        
        Wikipedia: 
        Similar to 403 Forbidden, but specifically for use when authentication 
        is possible but has failed or not yet been provided. The response must 
        include a WWW-Authenticate header field containing a challenge 
        applicable to the requested resource. See Basic access authentication 
        and Digest access authentication.
        Error code response for missing or invalid authentication token.
        `
    },
    {
        statusCode: 402,
        message: "402 Payment Required",
        description: `
        This code is reserved for future use.

        Wikipedia:
        Reserved for future use. The original intention was that this code 
        might be used as part of some form of digital cash or micropayment 
        scheme, but that has not happened, and this code is not usually used.
        As an example of its use, however, Apple's MobileMe service generates 
        a 402 error ("httpStatusCode:402" in the Mac OS X Console log) if the 
        MobileMe account is delinquent.
        `,
    },
    {
        statusCode: 403,
        message: "403 Forbidden",
        description: `
        The server understood the request, but is refusing to fulfill it. 
        Authorization will not help and the request SHOULD NOT be repeated. 
        If the request method was not HEAD and the server wishes to make public
        why the request has not been fulfilled, it SHOULD describe the reason 
        for the refusal in the entity. If the server does not wish to make this 
        information available to the client, the status code 404 (Not Found) 
        can be used instead.

        Wikipedia
        The request was a legal request, but the server is refusing to respond 
        to it. Unlike a 401 Unauthorized response, authenticating will make no 
        difference.
        Error code for user not authorized to perform the operation or 
        the resource is unavailable for some reason 
        (e.g. time constraints, etc.).
        `
    },
    {
        statusCode: 404,
        message: "404 Not Found",
        description: `
        The server has not found anything matching the Request-URI. 
        No indication is given of whether the condition is temporary or 
        permanent. The 410 (Gone) status code SHOULD be used if the server 
        knows, through some internally configurable mechanism, that an old 
        resource is permanently unavailable and has no forwarding address. 
        This status code is commonly used when the server does not wish to 
        reveal exactly why the request has been refused, or when no other 
        response is applicable.

        Wikipedia
        The requested resource could not be found but may be available again 
        in the future. Subsequent requests by the client are permissible.
        Used when the requested resource is not found, whether it doesn't 
        exist or if there was a 401 or 403 that, for security reasons, 
        the service wants to mask.
        `
    },
    {
        statusCode: 405,
        message: "405 Method Not Allowed",
        description: `
        The method specified in the Request-Line is not allowed for 
        the resource identified by the Request-URI. The response MUST include 
        an Allow header containing a list of valid methods for the requested 
        resource.

        Wikipedia
        A request was made of a resource using a request method not supported 
        by that resource; for example, using GET on a form which requires 
        data to be presented via POST, or using PUT on a read-only resource.
        `,
    },
    {
        statusCode: 406,
        message: '406 Not Acceptable',
        description: `
        The resource identified by the request is only capable of generating 
        response entities which have content characteristics not acceptable 
        according to the accept headers sent in the request.
        Unless it was a HEAD request, the response SHOULD include an entity 
        containing a list of available entity characteristics and location(s) 
        from which the user or user agent can choose the one most appropriate. 
        The entity format is specified by the media type given in 
        the Content-Type header field. Depending upon the format and 
        the capabilities of the user agent, selection of the most appropriate 
        choice MAY be performed automatically. However, this specification 
        does not define any standard for such automatic selection.
        
        Note: HTTP/1.1 servers are allowed to return responses which are 
        not acceptable according to the accept headers sent in the request. 
        In some cases, this may even be preferable to sending a 406 response. 
        User agents are encouraged to inspect the headers of an incoming 
        response to determine if it is acceptable.
        
        If the response could be unacceptable, a user agent SHOULD temporarily 
        stop receipt of more data and query the user for a decision 
        on further actions.
        
        Wikipedia
        The requested resource is only capable of generating content 
        not acceptable according to the Accept headers sent in the request.
        `
    },
    {
        statusCode: 407,
        message: '407 Proxy Authentication Required',
        description: `
        This code is similar to 401 (Unauthorized), but indicates that 
        the client must first authenticate itself with the proxy. 
        The proxy MUST return a Proxy-Authenticate header field (section 14.33) 
        containing a challenge applicable to the proxy for the requested resource. 
        The client MAY repeat the request with a suitable Proxy-Authorization 
        header field (section 14.34). HTTP access authentication is explained 
        in "HTTP Authentication: Basic and Digest Access Authentication".
        
        Wikipedia
        The client must first authenticate itself with the proxy.
        `
    },
    {
        statusCode: 408,
        message: '408 Request Timeout',
        description: `
        The client did not produce a request within the time that the server 
        was prepared to wait. The client MAY repeat the request without 
        modifications at any later time.
        
        Wikipedia
        The server timed out waiting for the request. According to W3 HTTP 
        specifications: "The client did not produce a request within the time 
        that the server was prepared to wait. The client MAY repeat the request 
        without modifications at any later time."
        `
    },
    {
        statusCode: 409,
        message: `409 Conflict`,
        description: `
        The request could not be completed due to a conflict with the current 
        state of the resource. This code is only allowed in situations where 
        it is expected that the user might be able to resolve the conflict and 
        resubmit the request. The response body SHOULD include enough 
        information for the user to recognize the source of the conflict. 
        Ideally, the response entity would include enough information for 
        the user or user agent to fix the problem; however, that might 
        not be possible and is not required.
        Conflicts are most likely to occur in response to a PUT request. 
        For example, if versioning were being used and the entity being 
        PUT included changes to a resource which conflict with those made by 
        an earlier (third-party) request, the server might use the 409 response 
        to indicate that it can't complete the request. In this case, 
        the response entity would likely contain a list of the differences 
        between the two versions in a format defined by the response Content-Type.

        Wikipedia
        Indicates that the request could not be processed because of conflict 
        in the request, such as an edit conflict.
        Whenever a resource conflict would be caused by fulfilling the request. 
        Duplicate entries and deleting root objects when cascade-delete is 
        not supported are a couple of examples.
        `
    },
    {
        statusCode: 410,
        message: `410 Gone`,
        description: `
        The requested resource is no longer available at the server and 
        no forwarding address is known. This condition is expected to be 
        considered permanent. Clients with link editing capabilities SHOULD 
        delete references to the Request-URI after user approval. If the server 
        does not know, or has no facility to determine, whether or not 
        the condition is permanent, the status code 404 (Not Found) SHOULD be 
        used instead. This response is cacheable unless indicated otherwise.
        The 410 response is primarily intended to assist the task of 
        web maintenance by notifying the recipient that the resource is 
        intentionally unavailable and that the server owners desire that 
        remote links to that resource be removed. Such an event is common 
        for limited-time, promotional services and for resources belonging to 
        individuals no longer working at the server's site. It is not necessary 
        to mark all permanently unavailable resources as "gone" or to keep 
        the mark for any length of time -- that is left to the discretion of 
        the server owner.
        
        Wikipedia
        Indicates that the resource requested is no longer available and will 
        not be available again. This should be used when a resource has been 
        intentionally removed and the resource should be purged. Upon receiving 
        a 410 status code, the client should not request the resource again in 
        the future. Clients such as search engines should remove the resource 
        from their indices. Most use cases do not require clients and search 
        engines to purge the resource, and a "404 Not Found" 
        may be used instead.
        `,
    },
    {
        statusCode: 411,
        message: `411 Length Required`,
        description: `
        The server refuses to accept the request without a defined 
        Content-Length. The client MAY repeat the request if it adds a valid 
        Content-Length header field containing the length of the message-body 
        in the request message.
        
        Wikipedia
        The request did not specify the length of its content, which is 
        required by the requested resource.
        `,
    },
    {
        statusCode: 412,
        message: `412 Precondition Failed`,
        description: `
        The precondition given in one or more of the request-header 
        fields evaluated to false when it was tested on the server. 
        This response code allows the client to place preconditions on 
        the current resource metainformation (header field data) and thus 
        prevent the requested method from being applied to a resource other 
        than the one intended.
        
        Wikipedia
        The server does not meet one of the preconditions that the requester 
        put on the request.
        `
    },
    {
        statusCode: 413,
        message:"413 Request Entity Too Large",
        description:`The server is refusing to process a request because the request entity is larger than the server is willing or able to process. The server MAY close the connection to prevent the client from continuing the request.
        
        If the condition is temporary, the server SHOULD include a Retry- After header field to indicate that it is temporary and after what time the client MAY try again.`
    },
]

const getError = (statusCode) => {
    return spec_errors.filter(err => err.statusCode === statusCode)[0];
};
const getErrorType = (statusCode) => {
    let type;
    if (statusCode >= 400 && statusCode < 500) {
        type = "Client Error";
    } else if (statusCode >= 500 && statusCode < 600) {
        type = "Server Error";
    }
    return type;
}
module.exports = {
    getError,
    getErrorType,
}