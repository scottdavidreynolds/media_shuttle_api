# MediaShuttleApi.StorageApi

All URIs are relative to *https://api.mediashuttle.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createStorage**](StorageApi.md#createStorage) | **POST** /storage | Create a new storage location
[**getStorage**](StorageApi.md#getStorage) | **GET** /storage/{storageId} | Display information about a specific storage location
[**listStorage**](StorageApi.md#listStorage) | **GET** /storage | List storage location


<a name="createStorage"></a>
# **createStorage**
> Storage createStorage(opts)

Create a new storage location

Create a new storage location for an account.  Cloud storage configuration values are validated for file location access.  Creating Local Storage generates a new Storage Server Installation Key. Use the installation key during Storage Server installation to register a server with your account. 

### Example
```javascript
var MediaShuttleApi = require('media_shuttle_api');
var defaultClient = MediaShuttleApi.ApiClient.instance;

// Configure API key authorization: ApiKey
var ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

var apiInstance = new MediaShuttleApi.StorageApi();

var opts = { 
  'storage': new MediaShuttleApi.Storage() // Storage | The attributes of the storage to be created. All create storage requests must include the storage \"type\". Cloud storage requests must include a valid \"configuration\" object. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createStorage(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storage** | [**Storage**](Storage.md)| The attributes of the storage to be created. All create storage requests must include the storage \"type\". Cloud storage requests must include a valid \"configuration\" object.  | [optional] 

### Return type

[**Storage**](Storage.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getStorage"></a>
# **getStorage**
> Storage getStorage(storageId)

Display information about a specific storage location

Returns details about a specific storage location associated with the account by its storageId.

### Example
```javascript
var MediaShuttleApi = require('media_shuttle_api');
var defaultClient = MediaShuttleApi.ApiClient.instance;

// Configure API key authorization: ApiKey
var ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

var apiInstance = new MediaShuttleApi.StorageApi();

var storageId = "storageId_example"; // String | Storage ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getStorage(storageId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storageId** | **String**| Storage ID. | 

### Return type

[**Storage**](Storage.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listStorage"></a>
# **listStorage**
> StorageList listStorage(opts)

List storage location

Gets a list of storage locations associated with the account.

### Example
```javascript
var MediaShuttleApi = require('media_shuttle_api');
var defaultClient = MediaShuttleApi.ApiClient.instance;

// Configure API key authorization: ApiKey
var ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

var apiInstance = new MediaShuttleApi.StorageApi();

var opts = { 
  'installationKey': "installationKey_example" // String | Use an installationKey value to filter the request.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listStorage(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **installationKey** | **String**| Use an installationKey value to filter the request. | [optional] 

### Return type

[**StorageList**](StorageList.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

