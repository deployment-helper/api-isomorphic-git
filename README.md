# API Isomorphic Git

### TODO: pipeline status

API to perfrom git operations on multiple git service providers

- Github
- Gitlab
- Bitbucker
- Azure Repos

## Local Development

<!-- TODO Architecure daigram required -->

### Environment variables

**DEBUG**
This is a boolen flag used to enable and disable `express.js` debugging.

**CORS_WHITE_LIST**

This environment variable is used for white listing the URLs for `CROS` requests.

**JWT_SECRET**

This environment variable is used to configure JWT secret.

**MYJUNIOUR_TASK_SUCCESS_URL**

URL to send success response of the task

**MYJUNIOUR_TASK_ERROR_URL**

URL to send error response of the task

### Documentation

- https://dev.azure.com/vinaymavi/MCRC/_wiki/wikis/MCRC.wiki/25/APIs
- https://documenter.getpostman.com/view/3537864/T1DtfGGQ?version=latest#45f3b74c-e4e8-4285-afdf-04cb68b00b46
