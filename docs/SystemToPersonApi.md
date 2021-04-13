# MediaShuttleApi.SystemToPersonApi

All URIs are relative to *https://api.mediashuttle.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPortalSubscription**](SystemToPersonApi.md#createPortalSubscription) | **POST** /portals/{portalId}/subscriptions | Subscribe to portal events 
[**createToken**](SystemToPersonApi.md#createToken) | **POST** /portals/{portalId}/packages/{packageId}/tokens | Create transfer link 
[**deletePortalSubscription**](SystemToPersonApi.md#deletePortalSubscription) | **DELETE** /portals/{portalId}/subscriptions/{subscriptionId} | Delete a portal subscription 
[**getPackages**](SystemToPersonApi.md#getPackages) | **GET** /portals/{portalId}/packages/{packageId} | Get package information 
[**getPortalSubscriptions**](SystemToPersonApi.md#getPortalSubscriptions) | **GET** /portals/{portalId}/subscriptions | Get portal subscriptions 
[**portalsPortalIdPackagesPackageIdEventsGet**](SystemToPersonApi.md#portalsPortalIdPackagesPackageIdEventsGet) | **GET** /portals/{portalId}/packages/{packageId}/events | Show package events 
[**portalsPortalIdPackagesPackageIdFilesGet**](SystemToPersonApi.md#portalsPortalIdPackagesPackageIdFilesGet) | **GET** /portals/{portalId}/packages/{packageId}/files | Show package contents 
[**portalsPortalIdPackagesPost**](SystemToPersonApi.md#portalsPortalIdPackagesPost) | **POST** /portals/{portalId}/packages | Create a new package 
[**putPackages**](SystemToPersonApi.md#putPackages) | **PUT** /portals/{portalId}/packages/{packageId}/files | Add files to a package 


<a name="createPortalSubscription"></a>
# **createPortalSubscription**
> PortalSubscriptionResponse createPortalSubscription(portalId, portalSubscriptionRequest)

Subscribe to portal events 

Create a subscription to receive Media Shuttle event notifications. You can receive notifications for:   - package.upload.complete: When a package upload completes.   - package.upload.canceled: When a package upload is canceled.   - package.upload.failed: When a package upload fails.   - package.download.complete: When a package download completes.   - package.download.canceled: When a package download is canceled.   - package.download.failed: When a package download fails.   - The webhook URL will recieve a http POST call whenever there is an event. The event details structure is defined in the PortalSubscriptionEvent Model  Signiant recommends that webhook handlers check the event type to ensure future compatibility. 

### Example
```javascript
var MediaShuttleApi = require('media_shuttle_api');
var defaultClient = MediaShuttleApi.ApiClient.instance;

// Configure API key authorization: ApiKey
var ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

var apiInstance = new MediaShuttleApi.SystemToPersonApi();

var portalId = "portalId_example"; // String | Unique portal identifier

var portalSubscriptionRequest = new MediaShuttleApi.PortalSubscriptionRequest(); // PortalSubscriptionRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createPortalSubscription(portalId, portalSubscriptionRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portalId** | [**String**](.md)| Unique portal identifier | 
 **portalSubscriptionRequest** | [**PortalSubscriptionRequest**](PortalSubscriptionRequest.md)|  | 

### Return type

[**PortalSubscriptionResponse**](PortalSubscriptionResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createToken"></a>
# **createToken**
> PackageTokenResponse createToken(portalId, packageId, packageTokenRequest)

Create transfer link 

Create a package upload or download token. This generates a URL to distribute to a user for their file transfer. 

### Example
```javascript
var MediaShuttleApi = require('media_shuttle_api');
var defaultClient = MediaShuttleApi.ApiClient.instance;

// Configure API key authorization: ApiKey
var ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

var apiInstance = new MediaShuttleApi.SystemToPersonApi();

var portalId = "portalId_example"; // String | Unique portal identifier

var packageId = "packageId_example"; // String | 

var packageTokenRequest = new MediaShuttleApi.PackageTokenRequest(); // PackageTokenRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createToken(portalId, packageId, packageTokenRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portalId** | [**String**](.md)| Unique portal identifier | 
 **packageId** | **String**|  | 
 **packageTokenRequest** | [**PackageTokenRequest**](PackageTokenRequest.md)|  | 

### Return type

[**PackageTokenResponse**](PackageTokenResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deletePortalSubscription"></a>
# **deletePortalSubscription**
> deletePortalSubscription(portalId, subscriptionId)

Delete a portal subscription 

Delete a subscription from a portal. 

### Example
```javascript
var MediaShuttleApi = require('media_shuttle_api');
var defaultClient = MediaShuttleApi.ApiClient.instance;

// Configure API key authorization: ApiKey
var ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

var apiInstance = new MediaShuttleApi.SystemToPersonApi();

var portalId = "portalId_example"; // String | Unique portal identifier

var subscriptionId = "subscriptionId_example"; // String | Unique portal subscription identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deletePortalSubscription(portalId, subscriptionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portalId** | [**String**](.md)| Unique portal identifier | 
 **subscriptionId** | [**String**](.md)| Unique portal subscription identifier | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPackages"></a>
# **getPackages**
> ModelPackage getPackages(portalId, packageId)

Get package information 

Returns information about a package, including all package metadata. 

### Example
```javascript
var MediaShuttleApi = require('media_shuttle_api');
var defaultClient = MediaShuttleApi.ApiClient.instance;

// Configure API key authorization: ApiKey
var ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

var apiInstance = new MediaShuttleApi.SystemToPersonApi();

var portalId = "portalId_example"; // String | Unique portal identifier

var packageId = "packageId_example"; // String | Unique package identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPackages(portalId, packageId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portalId** | [**String**](.md)| Unique portal identifier | 
 **packageId** | **String**| Unique package identifier | 

### Return type

[**ModelPackage**](ModelPackage.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPortalSubscriptions"></a>
# **getPortalSubscriptions**
> PortalSubscriptionsResponse getPortalSubscriptions(portalId)

Get portal subscriptions 

Get all subscriptions for a portal. 

### Example
```javascript
var MediaShuttleApi = require('media_shuttle_api');
var defaultClient = MediaShuttleApi.ApiClient.instance;

// Configure API key authorization: ApiKey
var ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

var apiInstance = new MediaShuttleApi.SystemToPersonApi();

var portalId = "portalId_example"; // String | Unique portal identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPortalSubscriptions(portalId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portalId** | [**String**](.md)| Unique portal identifier | 

### Return type

[**PortalSubscriptionsResponse**](PortalSubscriptionsResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="portalsPortalIdPackagesPackageIdEventsGet"></a>
# **portalsPortalIdPackagesPackageIdEventsGet**
> PackageEventSetResponse portalsPortalIdPackagesPackageIdEventsGet(portalId, packageId)

Show package events 

Show a list of transfer events associated with a package. 

### Example
```javascript
var MediaShuttleApi = require('media_shuttle_api');
var defaultClient = MediaShuttleApi.ApiClient.instance;

// Configure API key authorization: ApiKey
var ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

var apiInstance = new MediaShuttleApi.SystemToPersonApi();

var portalId = "portalId_example"; // String | Unique portal identifier

var packageId = "packageId_example"; // String | Unique package identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.portalsPortalIdPackagesPackageIdEventsGet(portalId, packageId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portalId** | [**String**](.md)| Unique portal identifier | 
 **packageId** | **String**| Unique package identifier | 

### Return type

[**PackageEventSetResponse**](PackageEventSetResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="portalsPortalIdPackagesPackageIdFilesGet"></a>
# **portalsPortalIdPackagesPackageIdFilesGet**
> FileSetResponse portalsPortalIdPackagesPackageIdFilesGet(portalId, packageId)

Show package contents 

Returns an array of all files contained within a package. 

### Example
```javascript
var MediaShuttleApi = require('media_shuttle_api');
var defaultClient = MediaShuttleApi.ApiClient.instance;

// Configure API key authorization: ApiKey
var ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

var apiInstance = new MediaShuttleApi.SystemToPersonApi();

var portalId = "portalId_example"; // String | Unique portal identifier

var packageId = "packageId_example"; // String | The requested package ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.portalsPortalIdPackagesPackageIdFilesGet(portalId, packageId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portalId** | [**String**](.md)| Unique portal identifier | 
 **packageId** | **String**| The requested package ID | 

### Return type

[**FileSetResponse**](FileSetResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="portalsPortalIdPackagesPost"></a>
# **portalsPortalIdPackagesPost**
> ModelPackage portalsPortalIdPackagesPost(portalId)

Create a new package 

Create an empty file package. 

### Example
```javascript
var MediaShuttleApi = require('media_shuttle_api');
var defaultClient = MediaShuttleApi.ApiClient.instance;

// Configure API key authorization: ApiKey
var ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

var apiInstance = new MediaShuttleApi.SystemToPersonApi();

var portalId = "portalId_example"; // String | Unique portal identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.portalsPortalIdPackagesPost(portalId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portalId** | [**String**](.md)| Unique portal identifier | 

### Return type

[**ModelPackage**](ModelPackage.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putPackages"></a>
# **putPackages**
> FileSetResponse putPackages(portalId, packageId, fileset)

Add files to a package 

Add files to a package. This endpoint accepts an array of files. 

### Example
```javascript
var MediaShuttleApi = require('media_shuttle_api');
var defaultClient = MediaShuttleApi.ApiClient.instance;

// Configure API key authorization: ApiKey
var ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

var apiInstance = new MediaShuttleApi.SystemToPersonApi();

var portalId = "portalId_example"; // String | Unique portal identifier

var packageId = "packageId_example"; // String | The package that the files are being added to

var fileset = new MediaShuttleApi.FileSetRequest(); // FileSetRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.putPackages(portalId, packageId, fileset, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portalId** | [**String**](.md)| Unique portal identifier | 
 **packageId** | **String**| The package that the files are being added to | 
 **fileset** | [**FileSetRequest**](FileSetRequest.md)|  | 

### Return type

[**FileSetResponse**](FileSetResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

