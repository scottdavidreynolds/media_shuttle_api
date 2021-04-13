# MediaShuttleApi.PortalsApi

All URIs are relative to *https://api.mediashuttle.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addUserToPortal**](PortalsApi.md#addUserToPortal) | **POST** /portals/{portalId}/users | Add a user to a portal with a role and permissions
[**assignStorageToPortal**](PortalsApi.md#assignStorageToPortal) | **PUT** /portals/{portalId}/storage/{storageId} | Assign storage to a portal
[**assignUserToPortal**](PortalsApi.md#assignUserToPortal) | **PUT** /portals/{portalId}/users/{email} | Update the user's role and/or permissions
[**createPortal**](PortalsApi.md#createPortal) | **POST** /portals | Create a new portal
[**getMembersFromPortal**](PortalsApi.md#getMembersFromPortal) | **GET** /portals/{portalId}/users | Retrieve all members from a portal
[**getPortalMember**](PortalsApi.md#getPortalMember) | **GET** /portals/{portalId}/users/{email} | Fetch a portal member
[**getPortalStorage**](PortalsApi.md#getPortalStorage) | **GET** /portals/{portalId}/storage | List the storage locations assigned to a portal
[**getPortals**](PortalsApi.md#getPortals) | **GET** /portals | List portals
[**removeUserFromPortal**](PortalsApi.md#removeUserFromPortal) | **DELETE** /portals/{portalId}/users/{email} | Remove a user from a portal


<a name="addUserToPortal"></a>
# **addUserToPortal**
> PortalMember addUserToPortal(portalId, opts)

Add a user to a portal with a role and permissions

Adds a user with a given email, role, and permissions to a portal. The role value can be either `Member` or `Ops`. If permissions aren't specified, default permissions will be populated.

### Example
```javascript
var MediaShuttleApi = require('media_shuttle_api');
var defaultClient = MediaShuttleApi.ApiClient.instance;

// Configure API key authorization: ApiKey
var ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

var apiInstance = new MediaShuttleApi.PortalsApi();

var portalId = "portalId_example"; // String | Unique portal identifier

var opts = { 
  'user': new MediaShuttleApi.PortalMember() // PortalMember | The user email, role, and permissions to add to the portal
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addUserToPortal(portalId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portalId** | [**String**](.md)| Unique portal identifier | 
 **user** | [**PortalMember**](PortalMember.md)| The user email, role, and permissions to add to the portal | [optional] 

### Return type

[**PortalMember**](PortalMember.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="assignStorageToPortal"></a>
# **assignStorageToPortal**
> PortalStorage assignStorageToPortal(portalId, storageId, opts)

Assign storage to a portal

Assigns storage to a portal. If local storage is being assigned, a repository path can be provided in the request body.  Storage is only assigned if there is no prior storage attached to the portal. This field is ignored for other types of storage. If a storageId is sent as part of the request body, it is validated against the storageId in the path, however the value is not required in the body. Storage must be unassigned using the Media Shuttle Configuration Console. 

### Example
```javascript
var MediaShuttleApi = require('media_shuttle_api');
var defaultClient = MediaShuttleApi.ApiClient.instance;

// Configure API key authorization: ApiKey
var ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

var apiInstance = new MediaShuttleApi.PortalsApi();

var portalId = "portalId_example"; // String | Unique portal identifier

var storageId = "storageId_example"; // String | ID of the storage to assign.

var opts = { 
  'repositoryPath': new MediaShuttleApi.PortalStorage() // PortalStorage | The path to the repository on the local storage system. If a value is not provided, the repositoryPath is set to either a default value or to a previously configured repositoryPath.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.assignStorageToPortal(portalId, storageId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portalId** | [**String**](.md)| Unique portal identifier | 
 **storageId** | [**String**](.md)| ID of the storage to assign. | 
 **repositoryPath** | [**PortalStorage**](PortalStorage.md)| The path to the repository on the local storage system. If a value is not provided, the repositoryPath is set to either a default value or to a previously configured repositoryPath. | [optional] 

### Return type

[**PortalStorage**](PortalStorage.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="assignUserToPortal"></a>
# **assignUserToPortal**
> PortalMember assignUserToPortal(portalId, email, opts)

Update the user's role and/or permissions

Updates the user's role and/or permissions. The email value is mandatory. The role value can be either `Member` or `Ops`. If permissions aren't specified, the member permissions will be unchanged. When an email is set as part of the request body, it is validated against the email in the path. This value is not required in the body.

### Example
```javascript
var MediaShuttleApi = require('media_shuttle_api');
var defaultClient = MediaShuttleApi.ApiClient.instance;

// Configure API key authorization: ApiKey
var ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

var apiInstance = new MediaShuttleApi.PortalsApi();

var portalId = "portalId_example"; // String | Unique portal identifier

var email = "email_example"; // String | Email of the user to add to the portal

var opts = { 
  'role': new MediaShuttleApi.PortalMember() // PortalMember | The role, and permissions to assign to the user
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.assignUserToPortal(portalId, email, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portalId** | [**String**](.md)| Unique portal identifier | 
 **email** | **String**| Email of the user to add to the portal | 
 **role** | [**PortalMember**](PortalMember.md)| The role, and permissions to assign to the user | [optional] 

### Return type

[**PortalMember**](PortalMember.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createPortal"></a>
# **createPortal**
> Portal createPortal(opts)

Create a new portal

Creates a new portal. If values are not specified, a Share portal with default values is created.

### Example
```javascript
var MediaShuttleApi = require('media_shuttle_api');
var defaultClient = MediaShuttleApi.ApiClient.instance;

// Configure API key authorization: ApiKey
var ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

var apiInstance = new MediaShuttleApi.PortalsApi();

var opts = { 
  'portal': new MediaShuttleApi.Portal() // Portal | The basic attributes of the portal to be created.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createPortal(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portal** | [**Portal**](Portal.md)| The basic attributes of the portal to be created. | [optional] 

### Return type

[**Portal**](Portal.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getMembersFromPortal"></a>
# **getMembersFromPortal**
> PortalMemberRequest getMembersFromPortal(portalId)

Retrieve all members from a portal

Return a list of all email addresses for all members from a portal. Any error returned during a response will appear in the response body.

### Example
```javascript
var MediaShuttleApi = require('media_shuttle_api');
var defaultClient = MediaShuttleApi.ApiClient.instance;

// Configure API key authorization: ApiKey
var ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

var apiInstance = new MediaShuttleApi.PortalsApi();

var portalId = "portalId_example"; // String | Unique portal identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMembersFromPortal(portalId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portalId** | [**String**](.md)| Unique portal identifier | 

### Return type

[**PortalMemberRequest**](PortalMemberRequest.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPortalMember"></a>
# **getPortalMember**
> PortalMember getPortalMember(portalId, email)

Fetch a portal member

Fetch a portal member identified by their email address. The response body contains the permissions assigned to the portal member for this portal, their role, and the expiry date for the member's account if set.

### Example
```javascript
var MediaShuttleApi = require('media_shuttle_api');
var defaultClient = MediaShuttleApi.ApiClient.instance;

// Configure API key authorization: ApiKey
var ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

var apiInstance = new MediaShuttleApi.PortalsApi();

var portalId = "portalId_example"; // String | Unique portal identifier

var email = "email_example"; // String | Email of the member to fetch for the portal.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPortalMember(portalId, email, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portalId** | [**String**](.md)| Unique portal identifier | 
 **email** | **String**| Email of the member to fetch for the portal. | 

### Return type

[**PortalMember**](PortalMember.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPortalStorage"></a>
# **getPortalStorage**
> PortalStorageList getPortalStorage(portalId)

List the storage locations assigned to a portal

Gets a list of all storage locations (On-premises or Cloud) assigned to a portal

### Example
```javascript
var MediaShuttleApi = require('media_shuttle_api');
var defaultClient = MediaShuttleApi.ApiClient.instance;

// Configure API key authorization: ApiKey
var ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

var apiInstance = new MediaShuttleApi.PortalsApi();

var portalId = "portalId_example"; // String | Portal ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPortalStorage(portalId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portalId** | [**String**](.md)| Portal ID. | 

### Return type

[**PortalStorageList**](PortalStorageList.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPortals"></a>
# **getPortals**
> PortalList getPortals(opts)

List portals

Gets a list of portals associated with the account.

### Example
```javascript
var MediaShuttleApi = require('media_shuttle_api');
var defaultClient = MediaShuttleApi.ApiClient.instance;

// Configure API key authorization: ApiKey
var ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

var apiInstance = new MediaShuttleApi.PortalsApi();

var opts = { 
  'url': "url_example" // String | Filter the response by portal access URL. The URL must include the \".mediashuttle.com\" domain suffix.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPortals(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **url** | **String**| Filter the response by portal access URL. The URL must include the \".mediashuttle.com\" domain suffix. | [optional] 

### Return type

[**PortalList**](PortalList.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeUserFromPortal"></a>
# **removeUserFromPortal**
> PortalMember removeUserFromPortal(portalId, email)

Remove a user from a portal

Removes a user from a portal and returns the removed user record. If the user was not assigned to the portal, an HTTP 204 No Content response is returned with an empty response body. Any user-customized folder settings are deleted. 

### Example
```javascript
var MediaShuttleApi = require('media_shuttle_api');
var defaultClient = MediaShuttleApi.ApiClient.instance;

// Configure API key authorization: ApiKey
var ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

var apiInstance = new MediaShuttleApi.PortalsApi();

var portalId = "portalId_example"; // String | Unique portal identifier

var email = "email_example"; // String | Email of the user to remove from the portal


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.removeUserFromPortal(portalId, email, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portalId** | [**String**](.md)| Unique portal identifier | 
 **email** | **String**| Email of the user to remove from the portal | 

### Return type

[**PortalMember**](PortalMember.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

