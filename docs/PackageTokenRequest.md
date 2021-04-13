# MediaShuttleApi.PackageTokenRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user** | **Object** | The user who will be issued the token, allowing them to upload or download package files.  | [optional] 
**grants** | **[String]** | The permissions to be granted to the user who will be issued the token. Currently, permission grants are limited to one per token, however, we are reserving the property type as an array for future use in which we envision multiple grants being allowed.  | [optional] 
**expiresOn** | **Date** | The date/time the transfer token expires. If this value is not set, tokens will expire according to the portal settings for maintenance cleanup, regular link expiry, or after 90 days, whichever is sooner.   | [optional] 
**destinationPath** | **String** | The subdirectory on the portal where the files will be uploaded. Valid for upload grants on share portals only.  | [optional] 
**notifications** | **[Object]** | Request notifications for token lifecycle events. Supported events are: - tokenRedeemed: When the token is redeemed. - package.upload.complete: When a package upload is complete. - package.download.complete: When a package download is complete.  User actions will fire more than one event. For example, successfully uploading content to a package will trigger a package.upload.complete event and a tokenRedeemed event.  Signiant recommends that webhook handlers check the event type to ensure future compatibility.  | [optional] 


<a name="[GrantsEnum]"></a>
## Enum: [GrantsEnum]


* `upload` (value: `"upload"`)

* `download` (value: `"download"`)




