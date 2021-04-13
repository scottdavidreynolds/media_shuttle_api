# MediaShuttleApi.TransfersApi

All URIs are relative to *https://api.mediashuttle.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTransfers**](TransfersApi.md#getTransfers) | **GET** /transfers | List current active transfers


<a name="getTransfers"></a>
# **getTransfers**
> TransferList getTransfers(state, opts)

List current active transfers

Return a list of transfers across all portals associated with the account.

### Example
```javascript
var MediaShuttleApi = require('media_shuttle_api');
var defaultClient = MediaShuttleApi.ApiClient.instance;

// Configure API key authorization: ApiKey
var ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

var apiInstance = new MediaShuttleApi.TransfersApi();

var state = "state_example"; // String | Return a list of active transfers. All requests must include `state=active`.

var opts = { 
  'portalId': "portalId_example" // String | Filter the response by specific portal IDs. You can repeat this query to list transfers from more than one portal per request.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTransfers(state, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **state** | **String**| Return a list of active transfers. All requests must include `state=active`. | 
 **portalId** | [**String**](.md)| Filter the response by specific portal IDs. You can repeat this query to list transfers from more than one portal per request. | [optional] 

### Return type

[**TransferList**](TransferList.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

