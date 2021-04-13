# MediaShuttleApi.PackageEventResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **String** | The action that occurred for the event | [optional] 
**details** | **String** | Additional event details, such as the email address of the user who performed a successful package transfer or a description of the user and files when a package transfer failed | [optional] 
**eventType** | **String** | The event type | [optional] 
**_date** | **Date** | The date when the event ocurred | [optional] 


<a name="ActionEnum"></a>
## Enum: ActionEnum


* `successfulUpload` (value: `"Successful Upload"`)

* `successfulDownload` (value: `"Successful Download"`)

* `successfulSendLink` (value: `"Successful Send Link"`)

* `successfulForward` (value: `"Successful Forward"`)

* `uploadCanceled` (value: `"Upload Canceled"`)

* `downloadCanceled` (value: `"Download Canceled"`)

* `uploadFailed` (value: `"Upload Failed"`)

* `downloadFailed` (value: `"Download Failed"`)

* `failedForward` (value: `"Failed Forward"`)




<a name="EventTypeEnum"></a>
## Enum: EventTypeEnum


* `info` (value: `"Info"`)

* `warning` (value: `"Warning"`)

* `error` (value: `"Error"`)




